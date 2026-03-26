"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Navbar from "@/components/organisms/Navbar";
import Footer from "@/components/organisms/Footer";
import { motion, AnimatePresence } from "framer-motion";
import {
  Globe,
  Smartphone,
  Code2,
  Lightbulb,
  ArrowRight,
  ArrowLeft,
  CheckCircle2,
  Calendar,
  DollarSign,
  User,
  Mail,
  Building,
} from "lucide-react";
import { Button } from "@/components/atoms/button";
import { Input } from "@/components/atoms/input";
import { Textarea } from "@/components/atoms/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/atoms/select";
import { Progress } from "@/components/atoms/progress";

import { toast } from 'sonner';
import emailjs from '@emailjs/browser';

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 },
  transition: { duration: 0.5 },
};

const services = [
  { id: "web", title: "Web Profesional", icon: Globe, color: "emerald" },
  { id: "mobile", title: "Apps Moviles", icon: Smartphone, color: "blue" },
  {
    id: "software",
    title: "Software a Medida",
    icon: Code2,
    color: "purple",
  },
  {
    id: "consulting",
    title: "Consultoria IT",
    icon: Lightbulb,
    color: "amber",
  },
];

export default function QuotePage() {
  const router = useRouter();
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    service: "",
    description: "",
    budget: "",
    timeline: "",
    name: "",
    email: "",
    company: "",
  });

  const nextStep = () => setStep((s) => Math.min(s + 1, 5));
  const prevStep = () => setStep((s) => Math.max(s - 1, 1));

  const progress = (step / 4) * 100;

  const handleSendQuote = async () => {
    setLoading(true);
    const toastId = toast.loading('Enviando tu solicitud...');

    const templateParams = {
      name: formData.name,
      email: formData.email,
      service: formData.service,
      description: formData.description,
      budget: formData.budget,
      timeline: formData.timeline,
      company: formData.company || 'N/A',
      message: `Solicitud de cotización de ${formData.name} (${formData.email}) por el servicio ${formData.service}.`
    };

    try {
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        templateParams,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      );

      toast.success('¡Solicitud enviada correctamente!', { id: toastId });
      
      // WhatsApp as secondary notification (optional, but requested implicitly in previous session as a feature)
      // I'll keep the logic but move it to a success stage or just let EmailJS handle it.
      // Actually, since the user already had WA, I'll keep it as a button option in success or just send both.
      
      nextStep();
    } catch (error) {
      console.error('EmailJS Error:', error);
      toast.error('Hubo un error al enviar la solicitud. Intenta por WhatsApp.', { id: toastId });
    } finally {
      setLoading(false);
    }
  };

  const openWhatsApp = () => {
    const waNumber = "573193142840";
    const waMessage = `*Nueva Solicitud de Cotización - Tupla Core*%0A%0A` +
      `*Servicio:* ${formData.service || 'N/A'}%0A` +
      `*Descripción:* ${formData.description || 'N/A'}%0A` +
      `*Presupuesto:* ${formData.budget || 'N/A'}%0A` +
      `*Tiempo:* ${formData.timeline || 'N/A'}%0A` +
      `*Nombre:* ${formData.name}%0A` +
      `*Email:* ${formData.email}%0A` +
      `*Empresa:* ${formData.company || 'N/A'}`;

    window.open(`https://wa.me/${waNumber}?text=${waMessage}`, '_blank');
  };

  return (
    <main className="min-h-screen bg-white dark:bg-tupla-dark text-tupla-dark dark:text-white transition-colors duration-500 selection:bg-tupla-primary selection:text-white overflow-hidden">
      <Navbar />

      {/* Background Blobs */}
      <div className="fixed inset-0 pointer-events-none opacity-20">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-emerald-500/20 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-blue-500/20 rounded-full blur-[120px] animate-pulse delay-700" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto pt-40 pb-32 px-6">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tighter italic mb-6">
            Cotiza tu <span className="text-tupla-accent">Proyecto</span>
          </h1>
          <p className="text-gray-500 dark:text-gray-400 text-lg md:text-xl font-light max-w-2xl mx-auto">
            Ayudanos a entender tu vision y te daremos las herramientas para
            hacerla realidad.
          </p>
        </motion.div>

        {/* Progress Bar */}
        <div className="mb-12 space-y-4">
          <Progress
            value={Math.min(100, Math.max(0, progress))}
            className="h-1.5 bg-gray-100 dark:bg-white/5"
          />
          <div className="flex justify-between text-[0.65rem] font-bold uppercase tracking-widest text-gray-400">
            <span>Servicio</span>
            <span>Detalles</span>
            <span>Alcance</span>
            <span>Contacto</span>
          </div>
        </div>

        {/* Form Container */}
        <div className="relative min-h-[500px] bg-white/40 dark:bg-tupla-dark/40 backdrop-blur-3xl border border-white/20 dark:border-white/5 p-8 md:p-12 rounded-[2.5rem] shadow-2xl">
          <AnimatePresence mode="wait">
            {/* Step 1: Service Selection */}
            {step === 1 && (
              <motion.div key="step1" {...fadeInUp} className="space-y-8">
                <div className="text-center space-y-2">
                  <h2 className="text-2xl font-bold uppercase tracking-tight italic">
                    Que necesitas construir?
                  </h2>
                  <p className="text-sm text-gray-400">
                    Selecciona el tipo de solucion que buscas.
                  </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {services.map((s) => {
                    const colorMap: Record<string, string> = {
                      emerald:
                        "border-emerald-500 bg-emerald-500/5 text-emerald-500",
                      blue: "border-blue-500 bg-blue-500/5 text-blue-500",
                      purple:
                        "border-purple-500 bg-purple-500/5 text-purple-500",
                      amber: "border-amber-500 bg-amber-500/5 text-amber-500",
                    };
                    const isActive = formData.service === s.id;
                    const bgMap: Record<string, string> = {
                      emerald: isActive
                        ? "bg-emerald-500/20"
                        : "bg-emerald-500/10",
                      blue: isActive
                        ? "bg-blue-500/20"
                        : "bg-blue-50/10",
                      purple: isActive
                        ? "bg-purple-500/20"
                        : "bg-purple-500/10",
                      amber: isActive
                        ? "bg-amber-500/20"
                        : "bg-amber-500/10",
                    };
                    const iconMap: Record<string, string> = {
                      emerald: isActive
                        ? "text-emerald-500"
                        : "text-emerald-500/70",
                      blue: isActive
                        ? "text-blue-500"
                        : "text-blue-500/70",
                      purple: isActive
                        ? "text-purple-500"
                        : "text-purple-500/70",
                      amber: isActive
                        ? "text-amber-500"
                        : "text-amber-500/70",
                    };
                    return (
                      <button
                        key={s.id}
                        onClick={() => {
                          setFormData({ ...formData, service: s.id });
                          nextStep();
                        }}
                        className={`group relative p-6 rounded-2xl border transition-all duration-300 text-left overflow-hidden ${
                          isActive
                            ? colorMap[s.color]
                            : "border-white/10 hover:border-white/30 bg-white/5"
                        }`}
                      >
                        <div
                          className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-transform group-hover:scale-110 ${bgMap[s.color]}`}
                        >
                          <s.icon className={`w-6 h-6 ${iconMap[s.color]}`} />
                        </div>
                        <h3 className="font-bold text-lg">{s.title}</h3>
                        <div
                          className={`absolute top-4 right-4 transition-opacity ${
                            isActive
                              ? "opacity-100"
                              : "opacity-0 group-hover:opacity-100"
                          }`}
                        >
                          <CheckCircle2 className="w-5 h-5" />
                        </div>
                      </button>
                    );
                  })}
                </div>
              </motion.div>
            )}

            {/* Step 2: Project Details */}
            {step === 2 && (
              <motion.div key="step2" {...fadeInUp} className="space-y-8">
                <div className="space-y-2">
                  <h2 className="text-2xl font-bold uppercase tracking-tight italic">
                    Cuentanos mas
                  </h2>
                  <p className="text-sm text-gray-400">
                    Describe brevemente tu idea o los objetivos principales.
                  </p>
                </div>
                <Textarea
                  placeholder="Ej: Necesito un e-commerce para venta de calzado con integracion de pagos..."
                  className="min-h-[200px] bg-black/5 dark:bg-white/5 border-black/10 dark:border-white/10 focus:ring-tupla-accent rounded-xl text-lg"
                  value={formData.description}
                  onChange={(e) =>
                    setFormData({ ...formData, description: e.target.value })
                  }
                />
                <div className="flex justify-between pt-8">
                  <Button
                    variant="ghost"
                    onClick={prevStep}
                    className="text-gray-400 hover:text-white"
                  >
                    <ArrowLeft className="mr-2 w-4 h-4" /> Volver
                  </Button>
                  <Button
                    disabled={!formData.description}
                    onClick={nextStep}
                    className="bg-tupla-accent hover:opacity-90 px-8 py-6 rounded-xl font-bold transition-all"
                  >
                    Continuar <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </div>
              </motion.div>
            )}

            {/* Step 3: Budget & Timeline */}
            {step === 3 && (
              <motion.div key="step3" {...fadeInUp} className="space-y-8">
                <div className="space-y-2">
                  <h2 className="text-2xl font-bold uppercase tracking-tight italic">
                    Alcance Estimado
                  </h2>
                  <p className="text-sm text-gray-400">
                    Esto nos ayuda a priorizar y proponer tecnologias
                    adecuadas.
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-4">
                    <label className="text-[0.65rem] font-bold uppercase tracking-widest text-gray-500 flex items-center">
                      <DollarSign
                        size={12}
                        className="mr-2"
                      /> Presupuesto Estimado
                    </label>
                    <Select
                      onValueChange={(val) =>
                        setFormData({ ...formData, budget: val })
                      }
                    >
                      <SelectTrigger className="bg-black/5 dark:bg-white/5 border-black/10 dark:border-white/10 rounded-xl h-14">
                        <SelectValue placeholder="Selecciona un rango" />
                      </SelectTrigger>
                      <SelectContent className="bg-white dark:bg-tupla-dark border-white/10">
                        <SelectItem value="menos de $5.000.000">Menos de $5.000.000 COP</SelectItem>
                        <SelectItem value="$5.000.000 - $15.000.000">$5.000.000 - $15.000.000</SelectItem>
                        <SelectItem value="$15.000.000 - $40.000.000">$15.000.000 - $40.000.000</SelectItem>
                        <SelectItem value="$40.000.000+">$40.000.000+</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-4">
                    <label className="text-[0.65rem] font-bold uppercase tracking-widest text-gray-500 flex items-center">
                      <Calendar size={12} className="mr-2" /> Tiempo de
                      Entrega
                    </label>
                    <Select
                      onValueChange={(val) =>
                        setFormData({ ...formData, timeline: val })
                      }
                    >
                      <SelectTrigger className="bg-black/5 dark:bg-white/5 border-black/10 dark:border-white/10 rounded-xl h-14">
                        <SelectValue placeholder="Periodo deseado" />
                      </SelectTrigger>
                      <SelectContent className="bg-white dark:bg-tupla-dark border-white/10">
                        <SelectItem value="menos de 1 mes">Urgente (menos de 1 mes)</SelectItem>
                        <SelectItem value="2-4 meses">Estándar (2-4 meses)</SelectItem>
                        <SelectItem value="6+ meses">A largo plazo (6+ meses)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="flex justify-between pt-8">
                  <Button
                    variant="ghost"
                    onClick={prevStep}
                    className="text-gray-400 hover:text-white"
                  >
                    <ArrowLeft className="mr-2 w-4 h-4" /> Volver
                  </Button>
                  <Button
                    disabled={!formData.budget || !formData.timeline}
                    onClick={nextStep}
                    className="bg-tupla-accent hover:opacity-90 px-8 py-6 rounded-xl font-bold transition-all"
                  >
                    Continuar <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </div>
              </motion.div>
            )}

            {/* Step 4: Contact Details */}
            {step === 4 && (
              <motion.div key="step4" {...fadeInUp} className="space-y-8">
                <div className="space-y-2 text-center mb-8">
                  <h2 className="text-2xl font-bold uppercase tracking-tight italic">
                    Informacion de Contacto
                  </h2>
                  <p className="text-sm text-gray-400">
                    A quien dirigimos nuestra propuesta?
                  </p>
                </div>

                <div className="space-y-6">
                  <div className="relative group">
                    <User className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500 transition-colors group-focus-within:text-tupla-accent" />
                    <Input
                      placeholder="Tu Nombre completo"
                      className="pl-12 bg-black/5 dark:bg-white/5 border-black/10 dark:border-white/10 rounded-xl h-14"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                    />
                  </div>

                  <div className="relative group">
                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500 transition-colors group-focus-within:text-tupla-accent" />
                    <Input
                      type="email"
                      placeholder="Correo electronico profesional"
                      className="pl-12 bg-black/5 dark:bg-white/5 border-black/10 dark:border-white/10 rounded-xl h-14"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                    />
                  </div>

                  <div className="relative group">
                    <Building className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500 transition-colors group-focus-within:text-tupla-accent" />
                    <Input
                      placeholder="Empresa (Opcional)"
                      className="pl-12 bg-black/5 dark:bg-white/5 border-black/10 dark:border-white/10 rounded-xl h-14"
                      value={formData.company}
                      onChange={(e) =>
                        setFormData({ ...formData, company: e.target.value })
                      }
                    />
                  </div>
                </div>

                <div className="flex justify-between pt-8">
                  <Button
                    variant="ghost"
                    onClick={prevStep}
                    className="text-gray-400 hover:text-white"
                  >
                    <ArrowLeft className="mr-2 w-4 h-4" /> Volver
                  </Button>
                  <Button 
                    disabled={!formData.name || !formData.email || loading}
                    onClick={handleSendQuote}
                    className="bg-emerald-600 hover:bg-emerald-700 px-12 py-6 rounded-xl font-bold shadow-xl shadow-emerald-500/20 transition-all border-none disabled:opacity-50"
                  >
                    {loading ? "Enviando..." : "Enviar Cotización"} {!loading && <CheckCircle2 className="ml-2 w-4 h-4" />}

                  </Button>
                </div>
              </motion.div>
            )}

            {/* Step 5: Success State */}
            {step === 5 && (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-12 space-y-8"
              >
                <div className="w-24 h-24 bg-emerald-500/20 rounded-full flex items-center justify-center mx-auto mb-8">
                  <CheckCircle2 className="w-12 h-12 text-emerald-500" />
                </div>
                <h2 className="text-3xl font-black uppercase tracking-tighter italic">
                  Propuesta Enviada!
                </h2>
                <p className="text-gray-400 max-w-md mx-auto">
                  Hemos recibido tus detalles. Nuestro equipo tecnico analizara
                  tu requerimiento y nos pondremos en contacto contigo en menos
                  de 24 horas.
                </p>

                <div className="pt-8 flex flex-col md:flex-row items-center justify-center gap-4">
                  <Button 
                    variant="outline" 
                    onClick={() => router.push('/')}
                    className="border-white/10 text-gray-300 hover:bg-white/5 rounded-xl px-8 h-12"
                  >
                    Volver al Inicio
                  </Button>
                  <Button 
                    onClick={openWhatsApp}
                    className="bg-emerald-600 hover:bg-emerald-700 px-8 h-12 rounded-xl font-bold transition-all border-none"
                  >
                    Hablar por WhatsApp <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      <Footer />
    </main>
  );
}
