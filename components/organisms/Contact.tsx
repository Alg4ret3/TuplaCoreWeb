'use client';

import { useState, useRef } from 'react';
import { Send, Phone, Mail, MapPin, Clock, ArrowUpRight, CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/atoms/button';
import { Input } from '@/components/atoms/input';
import { Textarea } from '@/components/atoms/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/atoms/card';
import { useToast } from '@/hooks/use-toast';
import emailjs from '@emailjs/browser';
import { motion, AnimatePresence } from 'framer-motion';
import type { MotionProps } from 'framer-motion';

/* ─── Animation helpers ─────────────────────────────────── */
const fadeUp = (delay = 0): MotionProps => ({
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: 40 },
  transition: { duration: 0.75, delay, ease: [0.16, 1, 0.3, 1] },
  viewport: { once: false, amount: 0.15 },
});

/* ─── Types ──────────────────────────────────────────────── */
type FormField = 'name' | 'email' | 'phone' | 'service' | 'message';
type FormData  = Record<FormField, string>;
type FormError = Partial<Record<FormField, string>>;

const INITIAL_FORM: FormData = { name: '', email: '', phone: '', service: '', message: '' };

const SERVICES = [
  'Desarrollo Web',
  'Aplicación Móvil',
  'Software a Medida',
  'Consultoría Técnica',
  'Mantenimiento',
  'Otro',
];

const CONTACT_INFO = [
  { icon: Phone,  title: 'Teléfono',   details: '+57 (319) 314-2840',     subtitle: 'Lun – Vie · 9 AM – 6 PM' },
  { icon: Mail,   title: 'Email',      details: 'TUPLACORE@gmail.com',    subtitle: 'Respuesta en < 24 h' },
  { icon: MapPin, title: 'Ubicación',  details: 'Pasto, Colombia',        subtitle: 'Cobertura nacional' },
  { icon: Clock,  title: 'Horario',    details: '9:00 AM – 6:00 PM',      subtitle: 'Zona horaria GMT-5' },
];

/* ─── Validation ─────────────────────────────────────────── */
function validate(data: FormData): FormError {
  const errors: FormError = {};
  if (!data.name.trim())                                   errors.name    = 'Campo requerido';
  if (!data.email.trim())                                  errors.email   = 'Campo requerido';
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) errors.email  = 'Email inválido';
  if (!data.service)                                       errors.service = 'Selecciona un servicio';
  if (!data.message.trim())                                errors.message = 'Cuéntanos tu proyecto';
  return errors;
}

/* ─── Floating label input ───────────────────────────────── */
function FloatingInput({
  id, name, type = 'text', label, placeholder, value, onChange, error, required,
}: {
  id: string; name: FormField; type?: string; label: string;
  placeholder: string; value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error?: string; required?: boolean;
}) {
  const [focused, setFocused] = useState(false);
  const lifted = focused || !!value;

  return (
    <div className="relative">
      <label
        htmlFor={id}
        className={`absolute left-5 transition-all duration-200 pointer-events-none z-10 font-bold tracking-widest uppercase
          ${lifted
            ? 'top-2 text-[9px] text-tupla-primary dark:text-tupla-accent'
            : 'top-1/2 -translate-y-1/2 text-xs text-gray-400'
          }`}
      >
        {label}{required && ' *'}
      </label>
      <Input
        id={id}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        placeholder={focused ? placeholder : ''}
        className={`h-16 pt-5 rounded-2xl border text-base transition-all duration-300
          ${error
            ? 'border-red-400 focus:ring-red-400'
            : 'border-gray-200 dark:border-white/10 focus:ring-tupla-primary'
          }
          bg-white dark:bg-black/20 shadow-inner`}
      />
      <AnimatePresence>
        {error && (
          <motion.p
            initial={{ opacity: 0, y: -4 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}
            className="text-[10px] text-red-400 font-bold mt-1 ml-5 uppercase tracking-wider"
          >
            {error}
          </motion.p>
        )}
      </AnimatePresence>
    </div>
  );
}

/* ─── Character counter textarea ─────────────────────────── */
function SmartTextarea({
  value, onChange, error,
}: {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  error?: string;
}) {
  const MAX = 500;
  const pct = Math.min((value.length / MAX) * 100, 100);

  return (
    <div className="relative">
      <label className="text-[9px] font-black uppercase tracking-[0.2em] text-gray-400 ml-5 mb-1 block">
        Descripción del Proyecto *
      </label>
      <div className="relative">
        <Textarea
          id="message"
          name="message"
          value={value}
          onChange={onChange}
          placeholder="Cuéntanos tus objetivos, alcance y tiempos estimados…"
          required
          maxLength={MAX}
          rows={5}
          className={`rounded-[24px] border text-base p-5 resize-none shadow-inner transition-all duration-300 w-full
            ${error
              ? 'border-red-400 focus:ring-red-400'
              : 'border-gray-200 dark:border-white/10 focus:ring-tupla-primary'
            }
            bg-white dark:bg-black/20 pb-10`}
        />
        {/* Progress bar */}
        <div className="absolute bottom-4 left-5 right-5 flex items-center gap-3">
          <div className="flex-1 h-[2px] bg-gray-100 dark:bg-white/10 rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-gradient-to-r from-tupla-primary to-tupla-accent rounded-full"
              style={{ width: `${pct}%` }}
              transition={{ duration: 0.2 }}
            />
          </div>
          <span className={`text-[9px] font-black tracking-widest ${pct >= 90 ? 'text-red-400' : 'text-gray-300'}`}>
            {value.length}/{MAX}
          </span>
        </div>
      </div>
      <AnimatePresence>
        {error && (
          <motion.p
            initial={{ opacity: 0, y: -4 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}
            className="text-[10px] text-red-400 font-bold mt-1 ml-5 uppercase tracking-wider"
          >
            {error}
          </motion.p>
        )}
      </AnimatePresence>
    </div>
  );
}

/* ─── Step indicator ─────────────────────────────────────── */
const STEPS = ['Datos', 'Proyecto', 'Enviar'];

function StepBar({ current }: { current: number }) {
  return (
    <div className="flex items-center gap-2 mb-10">
      {STEPS.map((label, i) => (
        <div key={i} className="flex items-center gap-2">
          <div className={`flex items-center gap-2 transition-all duration-500 ${i <= current ? 'opacity-100' : 'opacity-30'}`}>
            <div className={`w-6 h-6 rounded-full flex items-center justify-center text-[10px] font-black transition-all duration-500
              ${i < current
                ? 'bg-tupla-primary text-white'
                : i === current
                ? 'bg-gradient-to-br from-tupla-primary to-tupla-accent text-white shadow-lg shadow-tupla-primary/30'
                : 'bg-gray-100 dark:bg-white/10 text-gray-400'
              }`}
            >
              {i < current ? <CheckCircle2 className="w-3 h-3" /> : i + 1}
            </div>
            <span className="text-[10px] font-black uppercase tracking-widest text-gray-500 dark:text-gray-400 hidden sm:block">
              {label}
            </span>
          </div>
          {i < STEPS.length - 1 && (
            <div className="flex-1 h-[1px] w-8 mx-1 bg-gray-200 dark:bg-white/10 overflow-hidden">
              <motion.div
                className="h-full bg-tupla-primary"
                initial={{ width: '0%' }}
                animate={{ width: i < current ? '100%' : '0%' }}
                transition={{ duration: 0.4, ease: 'easeOut' }}
              />
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

/* ─── Main Component ─────────────────────────────────────── */
const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData]   = useState<FormData>(INITIAL_FORM);
  const [errors, setErrors]       = useState<FormError>({});
  const [activeStep, setActiveStep] = useState(0);

  /* Derive progress step from filled fields */
  const computeStep = (data: FormData) => {
    if (data.service && data.message) return 2;
    if (data.name && data.email)      return 1;
    return 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    const next = { ...formData, [name]: value } as FormData;
    setFormData(next);
    setActiveStep(computeStep(next));
    if (errors[name as FormField]) setErrors(prev => ({ ...prev, [name]: undefined }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validate(formData);
    if (Object.keys(errs).length) { setErrors(errs); return; }

    setIsSubmitting(true);
    try {
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        { ...formData },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!,
      );
      setSubmitted(true);
      setFormData(INITIAL_FORM);
      setActiveStep(0);
    } catch {
      toast({
        variant: 'destructive',
        title: 'Error al enviar',
        description: 'Por favor inténtalo de nuevo más tarde.',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contacto"
      className="relative py-32 overflow-hidden bg-white dark:bg-tupla-dark transition-colors duration-500"
    >
      {/* ── Background blobs ── */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-0 -left-20 w-[600px] h-[600px] bg-tupla-primary/10 dark:bg-tupla-primary/20 rounded-full blur-[140px] animate-pulse" />
        <div className="absolute bottom-0 -right-20 w-[700px] h-[700px] bg-tupla-accent/10 dark:bg-tupla-accent/20 rounded-full blur-[160px] animate-pulse delay-1000" />
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.025] dark:opacity-[0.045]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* ── Header ── */}
        <motion.div className="text-center mb-24" {...fadeUp(0)}>
          <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-tupla-primary/5 dark:bg-white/5 border border-tupla-primary/20 shadow-sm mb-8">
            <span className="w-2 h-2 rounded-full bg-tupla-primary animate-ping" />
            <span className="text-tupla-primary dark:text-tupla-accent text-[10px] font-black tracking-[0.25em] uppercase">
              Hablemos de tu próximo proyecto
            </span>
          </div>

          <h2 className="text-2xl md:text-4xl lg:text-6xl font-black text-tupla-dark dark:text-white leading-[0.88] mb-8 uppercase tracking-tighter italic">
            Transforma tu <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-tupla-primary to-tupla-accent pr-2">
              visión en realidad
            </span>
          </h2>

          <p className="text-lg md:text-xl text-gray-500 dark:text-gray-400 max-w-xl mx-auto leading-relaxed font-light">
            Cuéntanos tu idea y descubre cómo nuestras soluciones de alto rendimiento 
            pueden escalar tu negocio al siguiente nivel.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-10 items-start">

          {/* ── Sidebar ── */}
          <motion.div className="lg:col-span-1 space-y-6" {...fadeUp(0.1)}>

            {/* Contact cards */}
            <div className="bg-white/60 dark:bg-white/5 backdrop-blur-xl rounded-[32px] p-8 border border-white dark:border-white/10 shadow-xl space-y-7">
              <h3 className="text-lg font-black uppercase tracking-tighter italic text-tupla-dark dark:text-white">
                Contáctanos directo
              </h3>
              {CONTACT_INFO.map((info, i) => {
                const Icon = info.icon;
                return (
                  <motion.div key={i} className="flex items-start gap-4 group" {...fadeUp(0.08 * i)}>
                    <div className="p-3 bg-gradient-to-br from-tupla-primary to-tupla-accent rounded-xl text-white
                      group-hover:scale-110 group-hover:rotate-6 transition-all duration-400 shadow-md shadow-tupla-primary/20 flex-shrink-0">
                      <Icon className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-[9px] font-black text-gray-400 uppercase tracking-[0.2em] mb-0.5">{info.title}</p>
                      <p className="text-sm font-bold text-tupla-dark dark:text-white group-hover:text-tupla-primary dark:group-hover:text-tupla-accent transition-colors">
                        {info.details}
                      </p>
                      <p className="text-[10px] text-gray-400 font-medium mt-0.5">{info.subtitle}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* WhatsApp CTA */}
            <motion.div {...fadeUp(0.35)} className="relative group">
              <div className="absolute -inset-[2px] bg-gradient-to-r from-tupla-primary to-tupla-accent rounded-[32px] blur-sm opacity-20 group-hover:opacity-60 transition-all duration-700" />
              <Card className="relative bg-white dark:bg-tupla-dark/80 backdrop-blur-xl border-none rounded-[30px] overflow-hidden shadow-xl">
                <CardHeader className="pb-1">
                  <CardTitle className="text-lg font-black uppercase italic tracking-tighter text-tupla-dark dark:text-white">
                    ¿Respuesta inmediata?
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-5">
                  <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed">
                    Nuestro equipo técnico está listo en WhatsApp para resolver tus dudas al instante.
                  </p>
                  <Button
                    className="w-full bg-gradient-to-r from-[#25D366] to-[#128C7E] hover:brightness-110 text-white font-black h-12 rounded-2xl transition-all duration-300 hover:scale-[1.02] shadow-lg shadow-green-500/20 flex items-center justify-center gap-2"
                    onClick={() => window.open('https://wa.me/3193142840', '_blank')}
                  >
                    WhatsApp Corporativo
                    <ArrowUpRight className="w-4 h-4" />
                  </Button>
                </CardContent>
              </Card>
            </motion.div>

            {/* Trust badge */}
            <motion.div {...fadeUp(0.45)} className="px-6 py-4 rounded-2xl bg-tupla-primary/5 dark:bg-white/5 border border-tupla-primary/10">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse flex-shrink-0" />
                <p className="text-[10px] font-black uppercase tracking-widest text-gray-400">
                  Tiempo de respuesta promedio: <span className="text-tupla-primary dark:text-tupla-accent">4 horas</span>
                </p>
              </div>
            </motion.div>
          </motion.div>

          {/* ── Form ── */}
          <motion.div className="lg:col-span-2" {...fadeUp(0.2)}>
            <div className="bg-white/60 dark:bg-white/5 backdrop-blur-2xl rounded-[40px] p-8 md:p-12 border border-white dark:border-white/10 shadow-2xl relative overflow-hidden">

              {/* Interior glow */}
              <div className="absolute top-0 right-0 w-72 h-72 bg-tupla-accent/10 rounded-full blur-[100px] pointer-events-none" />
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-tupla-primary/5 rounded-full blur-[80px] pointer-events-none" />

              <AnimatePresence mode="wait">
                {submitted ? (
                  /* ── Success state ── */
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.92 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                    className="flex flex-col items-center justify-center py-16 text-center gap-6 relative z-10"
                  >
                    <div className="w-20 h-20 rounded-full bg-gradient-to-br from-tupla-primary to-tupla-accent flex items-center justify-center shadow-2xl shadow-tupla-primary/30">
                      <CheckCircle2 className="w-10 h-10 text-white" />
                    </div>
                    <div>
                      <h3 className="text-3xl font-black uppercase italic tracking-tighter text-tupla-dark dark:text-white mb-3">
                        ¡Mensaje Enviado!
                      </h3>
                      <p className="text-gray-500 dark:text-gray-400 max-w-sm text-sm leading-relaxed">
                        Un consultor senior te contactará en menos de 24 horas. Mientras tanto, 
                        puedes escribirnos por WhatsApp.
                      </p>
                    </div>
                    <Button
                      onClick={() => setSubmitted(false)}
                      variant="outline"
                      className="mt-2 rounded-2xl border-tupla-primary/30 text-tupla-primary dark:text-tupla-accent hover:bg-tupla-primary/5 font-bold uppercase tracking-widest text-xs h-11 px-8"
                    >
                      Enviar otro mensaje
                    </Button>
                  </motion.div>
                ) : (
                  /* ── Form state ── */
                  <motion.div key="form" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="relative z-10">
                    <div className="mb-8">
                      <h3 className="text-2xl md:text-3xl font-black text-tupla-dark dark:text-white uppercase tracking-tighter italic mb-1">
                        Inicia tu Proyecto
                      </h3>
                      <p className="text-gray-400 text-sm font-light">
                        Completa los detalles y un consultor senior te contactará pronto.
                      </p>
                    </div>

                    {/* Step indicator */}
                    <StepBar current={activeStep} />

                    <form onSubmit={handleSubmit} className="space-y-7" noValidate>
                      {/* Row 1 */}
                      <div className="grid md:grid-cols-2 gap-6">
                        <FloatingInput
                          id="name" name="name" label="Nombre completo"
                          placeholder="Juan Pérez" value={formData.name}
                          onChange={handleChange} error={errors.name} required
                        />
                        <FloatingInput
                          id="email" name="email" type="email" label="Correo corporativo"
                          placeholder="juan@empresa.com" value={formData.email}
                          onChange={handleChange} error={errors.email} required
                        />
                      </div>

                      {/* Row 2 */}
                      <div className="grid md:grid-cols-2 gap-6">
                        <FloatingInput
                          id="phone" name="phone" type="tel" label="Teléfono móvil"
                          placeholder="+57 300 000 0000" value={formData.phone}
                          onChange={handleChange} error={errors.phone}
                        />

                        {/* Service select */}
                        <div>
                          <label className="text-[9px] font-black uppercase tracking-[0.2em] text-gray-400 ml-5 mb-1 block">
                            Tipo de solución *
                          </label>
                          <div className="relative">
                            <select
                              id="service"
                              name="service"
                              value={formData.service}
                              onChange={handleChange}
                              className={`w-full h-14 px-5 rounded-2xl border appearance-none cursor-pointer text-base transition-all duration-300
                                ${errors.service
                                  ? 'border-red-400 focus:ring-red-400'
                                  : 'border-gray-200 dark:border-white/10 focus:ring-tupla-primary'
                                }
                                bg-white dark:bg-black/20 text-foreground focus:outline-none focus:ring-2 shadow-inner`}
                            >
                              <option value="" disabled className="dark:bg-tupla-dark">Selecciona un servicio</option>
                              {SERVICES.map(s => (
                                <option key={s} value={s} className="dark:bg-tupla-dark">{s}</option>
                              ))}
                            </select>
                            {/* Custom arrow */}
                            <div className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 rounded-full bg-tupla-primary/10 flex items-center justify-center">
                              <svg className="w-2.5 h-2.5 text-tupla-primary" fill="none" viewBox="0 0 10 6">
                                <path d="M1 1l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                              </svg>
                            </div>
                          </div>
                          <AnimatePresence>
                            {errors.service && (
                              <motion.p
                                initial={{ opacity: 0, y: -4 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}
                                className="text-[10px] text-red-400 font-bold mt-1 ml-5 uppercase tracking-wider"
                              >
                                {errors.service}
                              </motion.p>
                            )}
                          </AnimatePresence>
                        </div>
                      </div>

                      {/* Message */}
                      <SmartTextarea
                        value={formData.message}
                        onChange={handleChange}
                        error={errors.message}
                      />

                      {/* Submit */}
                      <div className="pt-2">
                        <Button
                          type="submit"
                          disabled={isSubmitting}
                          className="w-full bg-gradient-to-r from-tupla-primary to-blue-600 hover:from-tupla-accent hover:to-emerald-500
                            text-white font-black h-16 text-base uppercase tracking-[0.2em] rounded-3xl
                            transition-all duration-500 hover:scale-[1.01] shadow-2xl shadow-tupla-primary/25 group
                            disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:scale-100"
                        >
                          <AnimatePresence mode="wait">
                            {isSubmitting ? (
                              <motion.div key="loading" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                                className="flex items-center gap-3">
                                <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white" />
                                <span>Procesando…</span>
                              </motion.div>
                            ) : (
                              <motion.div key="idle" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                                className="flex items-center gap-3">
                                <Send className="h-5 w-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                                <span>Enviar Consulta</span>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </Button>

                        <p className="text-[9px] text-gray-300 dark:text-gray-600 text-center font-bold tracking-[0.2em] uppercase mt-5">
                          Tu información está protegida bajo nuestra política de privacidad corporativa
                        </p>
                      </div>
                    </form>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;