'use client';

import { useState } from 'react';
import { Send, Phone, Mail, MapPin, Clock } from 'lucide-react';
import { Button } from '@/components/atoms/button';
import { Input } from '@/components/atoms/input';
import { Textarea } from '@/components/atoms/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/atoms/card';
import { useToast } from '@/hooks/use-toast';
import emailjs from '@emailjs/browser';
import { motion } from "framer-motion";
import type { MotionProps } from "framer-motion";

const fadeUp = (delay = 0): MotionProps => ({
  initial: { opacity: 0, y: 50 },
  whileInView: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: 50 },
  transition: {
    duration: 0.8,
    delay,
    ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
  },
  viewport: { once: false, amount: 0.2 },
});
const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });

  const contactInfo = [
    {
      icon: Phone,
      title: 'Teléfono',
      details: '+51 (319) 314-2840',
      subtitle: 'Lun - Vie: 9:00 AM - 6:00 PM'
    },
    {
      icon: Mail,
      title: 'Email',
      details: 'TUPLACORE@gmail.com',
      subtitle: 'Respuesta en 24 horas'
    },
    {
      icon: MapPin,
      title: 'Ubicación',
      details: 'Ciudad de Pasto, Colombia',
      subtitle: 'Atendemos todo Colombia'
    },
    {
      icon: Clock,
      title: 'Horarios',
      details: '9:00 AM - 6:00 PM',
      subtitle: 'Zona horaria: GMT-6'
    }
  ];

  const services = [
    'Desarrollo Web',
    'Aplicación Móvil',
    'Software a Medida',
    'Consultoría Técnica',
    'Mantenimiento',
    'Otro'
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        {
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          service: formData.service,
          message: formData.message
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      );

      toast({
        title: '¡Mensaje enviado exitosamente!',
        description: 'Nos pondremos en contacto contigo dentro de las próximas 24 horas.',
      });

      setFormData({
        name: '',
        email: '',
        phone: '',
        service: '',
        message: ''
      });
    } catch (error) {
      toast({
        variant: 'destructive',
        title: 'Error al enviar el mensaje',
        description: 'Por favor, inténtalo de nuevo más tarde.',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contacto" className="py-20 bg-white dark:bg-tupla-dark/20 text-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <motion.div className="text-center mb-16" {...fadeUp(0)}>
          <h2 className="text-4xl md:text-5xl font-bold text-tupla-dark dark:text-white mb-6">
            Contáctanos
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
            ¿Listo para transformar tu idea en realidad? Conversemos sobre tu proyecto 
            y descubre cómo podemos ayudarte a alcanzar tus objetivos digitales.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Information */}
          <motion.div className="lg:col-span-1 space-y-8" {...fadeUp(0.1)}>
            <div>
              <h3 className="text-2xl font-bold text-tupla-dark dark:text-white mb-6">
                Información de Contacto
              </h3>
              <div className="space-y-6">
                {contactInfo.map((info, index) => {
                  const IconComponent = info.icon;
                  return (
                    <motion.div 
                      key={index} 
                      className="flex items-start space-x-4 group"
                      {...fadeUp(0.15 * index)}
                    >
                      <div className="p-3 bg-gradient-to-br from-tupla-primary to-tupla-accent rounded-lg text-white group-hover:scale-110 transition-transform duration-300">
                        <IconComponent className="h-5 w-5" />
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-tupla-dark dark:text-white mb-1">
                          {info.title}
                        </h4>
                        <p className="text-tupla-primary font-medium">
                          {info.details}
                        </p>
                        <p className="text-gray-500 dark:text-gray-400 text-sm">
                          {info.subtitle}
                        </p>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>

            {/* CTA Card */}
            <motion.div {...fadeUp(0.4)}>
              <Card className="bg-gradient-to-br from-tupla-primary to-tupla-accent text-white">
                <CardHeader>
                  <CardTitle className="text-white">
                    ¿Necesitas una cotización rápida?
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-white/90 mb-4">
                    Envíanos un WhatsApp y te responderemos inmediatamente.
                  </p>
                  <Button
                    className="w-full bg-white text-tupla-primary hover:bg-gray-100"
                    onClick={() => window.open('https://wa.me/3193142840', '_blank')}
                  >
                    Chatear por WhatsApp
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div className="lg:col-span-2" {...fadeUp(0.2)}>
            <Card className="shadow-xl bg-white dark:bg-tupla-dark/60 dark:border-white/10">
              <CardHeader>
                <CardTitle className="text-2xl text-tupla-dark dark:text-white">
                  Solicita tu Cotización
                </CardTitle>
                <p className="text-gray-600 dark:text-gray-400">
                  Completa el formulario y te contactaremos dentro de las próximas 24 horas.
                </p>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Campos */}
                  <motion.div className="grid md:grid-cols-2 gap-6" {...fadeUp(0.25)}>
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium text-tupla-dark dark:text-gray-300">
                        Nombre completo *
                      </label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Tu nombre completo"
                        required
                        className="border-gray-300 dark:border-white/10 bg-white dark:bg-tupla-dark/40 text-foreground focus:border-tupla-primary focus:ring-tupla-primary"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium text-tupla-dark dark:text-gray-300">
                        Correo electrónico *
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="tu@email.com"
                        required
                        className="border-gray-300 dark:border-white/10 bg-white dark:bg-tupla-dark/40 text-foreground focus:border-tupla-primary focus:ring-tupla-primary"
                      />
                    </div>
                  </motion.div>

                  <motion.div className="grid md:grid-cols-2 gap-6" {...fadeUp(0.3)}>
                    <div className="space-y-2">
                      <label htmlFor="phone" className="text-sm font-medium text-tupla-dark dark:text-gray-300">
                        Teléfono
                      </label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="(555) 123-4567"
                        className="border-gray-300 dark:border-white/10 bg-white dark:bg-tupla-dark/40 text-foreground focus:border-tupla-primary focus:ring-tupla-primary"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="service" className="text-sm font-medium text-tupla-dark dark:text-gray-300">
                        Servicio de interés *
                      </label>
                      <select
                        id="service"
                        name="service"
                        value={formData.service}
                        onChange={handleInputChange}
                        required
                        className="w-full px-3 py-2 border border-gray-300 dark:border-white/10 bg-white dark:bg-tupla-dark/40 text-foreground rounded-md focus:outline-none focus:ring-2 focus:ring-tupla-primary focus:border-tupla-primary"
                      >
                        <option value="">Selecciona un servicio</option>
                        {services.map((service, index) => (
                          <option key={index} value={service}>
                            {service}
                          </option>
                        ))}
                      </select>
                    </div>
                  </motion.div>

                  <motion.div className="space-y-2" {...fadeUp(0.35)}>
                    <label htmlFor="message" className="text-sm font-medium text-tupla-dark dark:text-gray-300">
                      Mensaje *
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Cuéntanos sobre tu proyecto..."
                      required
                      rows={6}
                      className="border-gray-300 dark:border-white/10 bg-white dark:bg-tupla-dark/40 text-foreground focus:border-tupla-primary focus:ring-tupla-primary resize-none"
                    />
                  </motion.div>

                  <motion.div {...fadeUp(0.4)}>
                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-tupla-primary hover:bg-tupla-accent text-white font-semibold py-3 text-lg transition-all duration-300 transform hover:scale-[1.02]"
                    >
                      {isSubmitting ? (
                        <div className="flex items-center space-x-2">
                          <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                          <span>Enviando...</span>
                        </div>
                      ) : (
                        <div className="flex items-center space-x-2">
                          <Send className="h-5 w-5" />
                          <span>Enviar Mensaje</span>
                        </div>
                      )}
                    </Button>
                  </motion.div>

                  <p className="text-sm text-gray-500 text-center">
                    Al enviar este formulario, aceptas que nos pongamos en contacto contigo 
                    para discutir tu proyecto.
                  </p>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
