"use client";

import Navbar from '@/components/organisms/Navbar';
import Footer from '@/components/organisms/Footer';
import { Globe, Smartphone, Code2, Lightbulb, Sparkles, ArrowRight } from 'lucide-react';
import { m } from 'framer-motion';
import { Button } from '@/components/atoms/button';

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 }
};

const staggerContainer = {
  initial: {},
  whileInView: { transition: { staggerChildren: 0.1 } }
};

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-white dark:bg-tupla-dark text-tupla-dark dark:text-white transition-colors duration-500 font-sans selection:bg-tupla-primary selection:text-white overflow-x-hidden">
      <Navbar />
      
      {/* Dynamic Background Elements */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        <m.div 
          animate={{ 
            x: [0, 100, 0], 
            y: [0, 50, 0],
            rotate: [0, 90, 0]
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute -top-[10%] -left-[10%] w-[40%] h-[40%] bg-tupla-primary/10 rounded-full blur-[120px]" 
        />
        <m.div 
          animate={{ 
            x: [0, -80, 0], 
            y: [0, 100, 0],
            rotate: [0, -90, 0]
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute top-[40%] -right-[10%] w-[35%] h-[35%] bg-tupla-accent/10 rounded-full blur-[100px]" 
        />
        <div className="absolute inset-0 bg-[url('/noise.png')] opacity-[0.02] mix-blend-overlay"></div>
      </div>

      <div className="relative z-10">
        {/* Hero Section */}
        <section className="relative pt-48 pb-24 overflow-hidden">
          <div className="max-w-7xl mx-auto px-6">
            <m.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 lg:gap-20"
            >
              <div className="flex-1">
                <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-tupla-accent/10 border border-tupla-accent/20 text-[0.65rem] font-black tracking-[0.3em] text-tupla-accent uppercase mb-6 drop-shadow-sm">
                  <Sparkles size={12} className="animate-pulse" />
                  <span>Excelencia Digital</span>
                </div>
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black leading-tight uppercase tracking-tighter italic">
                  Nuestros <br />
                  <span className="text-tupla-accent relative inline-block">
                    Servicios
                  </span>
                </h1>
              </div>
              <div className="flex-1 lg:max-w-xl">
                <p className="text-gray-600 dark:text-gray-400 text-lg md:text-xl font-light leading-relaxed border-l-2 border-tupla-accent/30 pl-8">
                  Ecosistemas digitales diseñados para el alto rendimiento, la escalabilidad global y una experiencia de usuario que <span className="text-tupla-dark dark:text-white font-medium italic underline decoration-tupla-accent/50 decoration-2 underline-offset-4">cautiva</span> y convierte.
                </p>
              </div>
            </m.div>
          </div>
        </section>

        {/* Services Sections */}
        <div className="space-y-0 pb-32">
          
          {/* 1. Desarrollo Web */}
          <section id="desarrollo-web" className="py-24 bg-emerald-500/[0.05] dark:bg-emerald-500/[0.03] transition-colors duration-700 overflow-hidden">
            <div className="max-w-7xl mx-auto px-6">
              <div className="grid lg:grid-cols-2 gap-16 items-start mb-24">
                <m.div {...fadeInUp} className="lg:sticky lg:top-32">
                  <div className="space-y-6">
                    <h2 className="text-3xl md:text-5xl font-black leading-none uppercase tracking-tighter italic font-audiowide">
                      Desarrollo <span className="text-emerald-500 drop-shadow-[0_0_15px_rgba(16,185,129,0.2)]">Web Profesional</span>
                    </h2>
                    <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed max-w-lg">
                      Transformamos ideas en ecosistemas digitales. No solo hacemos páginas, creamos herramientas 
                      de venta optimizadas para SEO, con arquitectura técnica de vanguardia.
                    </p>
                  </div>
                  
                  <div className="mt-12 space-y-6">
                    <h4 className="text-[0.65rem] font-bold uppercase tracking-[0.3em] text-emerald-500/60 dark:text-emerald-400/40 px-1">Casos de Uso</h4>
                    <m.div 
                      variants={staggerContainer}
                      initial="initial"
                      whileInView="whileInView"
                      viewport={{ once: true }}
                      className="flex flex-wrap gap-2"
                    >
                      {['E-commerce', 'Portales Corporativos', 'SaaS Escalables', 'LP de Conversión'].map((use) => (
                        <m.span 
                          key={use} 
                          variants={{
                            initial: { opacity: 0, scale: 0.9 },
                            whileInView: { opacity: 1, scale: 1 }
                          }}
                          whileHover={{ scale: 1.05, y: -2 }}
                          className="px-3 py-1.5 bg-emerald-500/5 dark:bg-white/5 border border-emerald-500/10 dark:border-white/10 rounded-lg text-[0.65rem] font-bold uppercase tracking-wider backdrop-blur-sm transition-all"
                        >
                          {use}
                        </m.span>
                      ))}
                    </m.div>
                    <h4 className="text-[0.65rem] font-bold uppercase tracking-[0.3em] text-emerald-500/60 dark:text-emerald-400/40 px-1 mt-6">Tecnologías</h4>
                    <div className="flex flex-wrap gap-x-4 gap-y-2 px-1 text-[0.65rem] font-medium text-gray-500 dark:text-gray-400">
                      {['Next.js 14', 'React', 'TypeScript', 'Tailwind', 'Node.js', 'Vercel'].map((tech) => (
                        <span key={tech}>{tech}</span>
                      ))}
                    </div>
                  </div>

                  <div className="mt-10 pt-10 border-t border-emerald-500/10">
                    <a 
                      href="https://wa.me/573193142840?text=Hola!%20Me%20gustaría%20cotizar%20un%20proyecto%20de%20Desarrollo%20Web%20Profesional%20con%20Tupla%20Core."
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-xl text-lg font-bold group shadow-xl hover:shadow-emerald-500/20 transition-all no-underline"
                    >
                      Cotizar Proyecto Web
                      <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                    </a>
                  </div>
                </m.div>

                <m.div 
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                  className="relative group lg:mt-4"
                >
                  <div className="absolute -inset-4 bg-gradient-to-r from-emerald-600/10 to-teal-500/10 rounded-[2.5rem] blur-2xl opacity-0 group-hover:opacity-100 transition duration-1000"></div>
                  <div className="relative bg-white/40 dark:bg-tupla-dark/30 backdrop-blur-3xl border border-white/20 dark:border-white/5 p-8 lg:p-12 rounded-[2.5rem] shadow-2xl">
                    <div className="w-16 h-16 bg-emerald-500/10 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500">
                      <Globe className="w-8 h-8 text-emerald-500" />
                    </div>
                    <h3 className="text-xl font-black italic font-audiowide mb-8 uppercase tracking-wide">Beneficios Clave</h3>
                    <ul className="space-y-5">
                      {[
                        "Diseño UI/UX de alta conversión",
                        "Velocidad extrema (Core Web Vitals 100)",
                        "Arquitectura SEO-First nativa"
                      ].map((item, idx) => (
                        <li key={idx} className="flex items-center space-x-4 text-gray-500 dark:text-gray-400 group/item">
                          <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 transition-transform group-hover/item:scale-150" />
                          <span className="text-sm font-medium tracking-tight group-hover/item:text-tupla-dark dark:group-hover/item:text-white transition-colors">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </m.div>
              </div>
            </div>
          </section>

          {/* 2. Aplicaciones Móviles */}
          <section id="apps-moviles" className="py-24 bg-blue-500/[0.05] dark:bg-blue-500/[0.03] transition-colors duration-700 overflow-hidden">
            <div className="max-w-7xl mx-auto px-6">
              <div className="grid lg:grid-cols-2 gap-16 items-start mb-24">
                <m.div 
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                  className="order-2 lg:order-1 relative group lg:mt-4"
                >
                  <div className="absolute -inset-4 bg-gradient-to-r from-blue-600/10 to-cyan-500/10 rounded-[2.5rem] blur-2xl opacity-0 group-hover:opacity-100 transition duration-1000"></div>
                  <div className="relative bg-white/40 dark:bg-tupla-dark/30 backdrop-blur-3xl border border-white/20 dark:border-white/5 p-8 lg:p-12 rounded-[2.5rem] shadow-2xl">
                    <div className="w-16 h-16 bg-blue-500/10 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500">
                      <Smartphone className="w-8 h-8 text-blue-500" />
                    </div>
                    <h3 className="text-xl font-black italic font-audiowide mb-8 uppercase tracking-wide">Beneficios Clave</h3>
                    <ul className="space-y-5">
                      {[
                        "Rendimiento Nativo Certificado",
                        "Notificaciones Push Inteligentes",
                        "Arquitectura Offline-First"
                      ].map((item, idx) => (
                        <li key={idx} className="flex items-center space-x-4 text-gray-500 dark:text-gray-400 group/item">
                          <div className="w-1.5 h-1.5 rounded-full bg-blue-500 transition-transform group-hover/item:scale-150" />
                          <span className="text-sm font-medium tracking-tight group-hover/item:text-tupla-dark dark:group-hover/item:text-white transition-colors">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </m.div>
                
                <m.div {...fadeInUp} className="order-1 lg:order-2 lg:sticky lg:top-32 lg:text-right">
                  <div className="space-y-6">
                    <h2 className="text-3xl md:text-5xl font-black leading-none uppercase tracking-tighter italic font-audiowide">
                      Apps <span className="text-blue-500 drop-shadow-[0_0_15px_rgba(59,130,246,0.2)]">Móviles de Impacto</span>
                    </h2>
                    <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed lg:ml-auto max-w-lg">
                      Desarrollamos experiencias nativas que la gente ama usar. Interfaces fluidas, 
                      transiciones orgánicas y rendimiento sin compromisos.
                    </p>
                  </div>
                  
                  <div className="mt-12 space-y-6">
                    <h4 className="text-[0.65rem] font-bold uppercase tracking-[0.3em] text-blue-500/60 dark:text-blue-400/40 px-1">Casos de Uso</h4>
                    <m.div 
                      variants={staggerContainer}
                      initial="initial"
                      whileInView="whileInView"
                      viewport={{ once: true }}
                      className="flex flex-wrap gap-2 lg:justify-end"
                    >
                      {['Delivery Apps', 'Redes Sociales', 'Gestión de Inventario', 'Fintech'].map((use) => (
                        <m.span 
                          key={use} 
                          variants={{
                            initial: { opacity: 0, scale: 0.9 },
                            whileInView: { opacity: 1, scale: 1 }
                          }}
                          whileHover={{ scale: 1.05, y: -2 }}
                          className="px-3 py-1.5 bg-blue-500/5 dark:bg-white/5 border border-blue-500/10 dark:border-white/10 rounded-lg text-[0.65rem] font-bold uppercase tracking-wider backdrop-blur-sm transition-all"
                        >
                          {use}
                        </m.span>
                      ))}
                    </m.div>
                    
                    <h4 className="text-[0.65rem] font-bold uppercase tracking-[0.3em] text-blue-500/60 dark:text-blue-400/40 px-1 mt-6">Tecnologías</h4>
                    <div className="flex flex-wrap gap-x-4 gap-y-2 px-1 lg:justify-end text-[0.65rem] font-medium text-gray-500 dark:text-gray-400">
                      {['React Native', 'Expo', 'Flutter', 'Firebase', 'Swift', 'Kotlin'].map((tech) => (
                        <span key={tech}>{tech}</span>
                      ))}
                    </div>
                  </div>

                  <div className="mt-10 pt-10 border-t border-blue-500/10">
                    <a 
                      href="https://wa.me/573193142840?text=Hola!%20Me%20gustaría%20cotizar%20una%20Aplicación%20Móvil%20de%20Impacto%20con%20Tupla%20Core."
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl text-lg font-bold group shadow-xl hover:shadow-blue-500/20 transition-all no-underline"
                    >
                      Cotizar App Móvil
                      <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                    </a>
                  </div>
                </m.div>
              </div>
            </div>
          </section>

          {/* 3. Software Personalizado */}
          <section id="software-personalizado" className="py-24 bg-purple-500/[0.05] dark:bg-purple-500/[0.03] transition-colors duration-700 overflow-hidden">
            <div className="max-w-7xl mx-auto px-6">
              <div className="grid lg:grid-cols-2 gap-16 items-start mb-24">
                <m.div {...fadeInUp} className="lg:sticky lg:top-32">
                  <div className="space-y-6">
                    <h2 className="text-3xl md:text-5xl font-black leading-none uppercase tracking-tighter italic font-audiowide">
                      Software <span className="text-purple-500 drop-shadow-[0_0_15px_rgba(168,85,247,0.2)]">a Medida Elite</span>
                    </h2>
                    <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed max-w-lg">
                      Si el software comercial te limita, nosotros construimos tu propia ventaja competitiva 
                      con sistemas diseñados para automatizar y escalar.
                    </p>
                  </div>
                  
                  <div className="mt-12 space-y-6">
                    <h4 className="text-[0.65rem] font-bold uppercase tracking-[0.3em] text-purple-500/60 dark:text-purple-400/40 px-1">Casos de Uso</h4>
                    <m.div 
                      variants={staggerContainer}
                      initial="initial"
                      whileInView="whileInView"
                      viewport={{ once: true }}
                      className="flex flex-wrap gap-2"
                    >
                      {['CRMs Personalizados', 'Automatización Industrial', 'Dashboards de BI', 'Sistemas ERP'].map((use) => (
                        <m.span 
                          key={use} 
                          variants={{
                            initial: { opacity: 0, scale: 0.9 },
                            whileInView: { opacity: 1, scale: 1 }
                          }}
                          whileHover={{ scale: 1.05, y: -2 }}
                          className="px-3 py-1.5 bg-purple-500/5 dark:bg-white/5 border border-purple-500/10 dark:border-white/10 rounded-lg text-[0.65rem] font-bold uppercase tracking-wider backdrop-blur-sm transition-all"
                        >
                          {use}
                        </m.span>
                      ))}
                    </m.div>
                    
                    <h4 className="text-[0.65rem] font-bold uppercase tracking-[0.3em] text-purple-500/60 dark:text-purple-400/40 px-1 mt-6">Tecnologías</h4>
                    <div className="flex flex-wrap gap-x-4 gap-y-2 px-1 text-[0.65rem] font-medium text-gray-500 dark:text-gray-400">
                      {['Python', 'Go', 'PostgreSQL', 'Docker', 'AWS', 'K8s'].map((tech) => (
                        <span key={tech}>{tech}</span>
                      ))}
                    </div>
                  </div>

                  <div className="mt-10 pt-10 border-t border-purple-500/10">
                    <a 
                      href="https://wa.me/573193142840?text=Hola!%20Me%20gustaría%20cotizar%20un%20Software%20a%20Medida%20Elite%20con%20Tupla%20Core."
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 rounded-xl text-lg font-bold group shadow-xl hover:shadow-purple-500/20 transition-all no-underline"
                    >
                      Cotizar Software
                      <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                    </a>
                  </div>
                </m.div>

                <m.div 
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                  className="relative group lg:mt-4"
                >
                  <div className="absolute -inset-4 bg-gradient-to-r from-purple-600/10 to-indigo-500/10 rounded-[2.5rem] blur-2xl opacity-0 group-hover:opacity-100 transition duration-1000"></div>
                  <div className="relative bg-white/40 dark:bg-tupla-dark/30 backdrop-blur-3xl border border-white/20 dark:border-white/5 p-8 lg:p-12 rounded-[2.5rem] shadow-2xl">
                    <div className="w-16 h-16 bg-purple-500/10 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500">
                      <Code2 className="w-8 h-8 text-purple-500" />
                    </div>
                    <h3 className="text-xl font-black italic font-audiowide mb-8 uppercase tracking-wide">Beneficios Clave</h3>
                    <ul className="space-y-5">
                      {[
                        "Automatización de procesos complejos",
                        "Seguridad de grado empresarial",
                        "Escalabilidad nativa en la Nube"
                      ].map((item, idx) => (
                        <li key={idx} className="flex items-center space-x-4 text-gray-500 dark:text-gray-400 group/item">
                          <div className="w-1.5 h-1.5 rounded-full bg-purple-500 transition-transform group-hover/item:scale-150" />
                          <span className="text-sm font-medium tracking-tight group-hover/item:text-tupla-dark dark:group-hover/item:text-white transition-colors">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </m.div>
              </div>
            </div>
          </section>

          {/* 4. Consultoría IT */}
          <section id="consultoria-it" className="py-24 bg-amber-500/[0.05] dark:bg-amber-500/[0.03] transition-colors duration-700 overflow-hidden">
            <div className="max-w-7xl mx-auto px-6">
              <div className="grid lg:grid-cols-2 gap-16 items-start mb-24">
                <m.div 
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                  className="order-2 lg:order-1 relative group lg:mt-4"
                >
                  <div className="absolute -inset-4 bg-gradient-to-r from-amber-400/10 to-orange-500/10 rounded-[2.5rem] blur-2xl opacity-0 group-hover:opacity-100 transition duration-1000"></div>
                  <div className="relative bg-white/40 dark:bg-tupla-dark/30 backdrop-blur-3xl border border-white/20 dark:border-white/5 p-8 lg:p-12 rounded-[2.5rem] shadow-2xl">
                    <div className="w-16 h-16 bg-amber-500/10 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500">
                      <Lightbulb className="w-8 h-8 text-amber-500" />
                    </div>
                    <h3 className="text-xl font-black italic font-audiowide mb-8 uppercase tracking-wide">Beneficios Clave</h3>
                    <ul className="space-y-5">
                      {[
                        "Auditorías de seguridad profunda",
                        "Estrategia de IA personalizada",
                        "Optimización de costos Cloud"
                      ].map((item, idx) => (
                        <li key={idx} className="flex items-center space-x-4 text-gray-500 dark:text-gray-400 group/item">
                          <div className="w-1.5 h-1.5 rounded-full bg-amber-500 transition-transform group-hover/item:scale-150" />
                          <span className="text-sm font-medium tracking-tight group-hover/item:text-tupla-dark dark:group-hover/item:text-white transition-colors">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </m.div>
                
                <m.div {...fadeInUp} className="order-1 lg:order-2 lg:sticky lg:top-32 lg:text-right">
                  <div className="space-y-6">
                    <h2 className="text-3xl md:text-5xl font-black leading-none uppercase tracking-tighter italic font-audiowide">
                      Consultoría <span className="text-amber-500 drop-shadow-[0_0_15px_rgba(245,158,11,0.2)]">IT Estratégica</span>
                    </h2>
                    <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed lg:ml-auto max-w-lg">
                      Navega la complejidad tecnológica con expertos. Desde auditorías de seguridad 
                      hasta estrategias de IA personalizadas para tu industria.
                    </p>
                  </div>
                  
                  <div className="mt-12 space-y-6">
                    <h4 className="text-[0.65rem] font-bold uppercase tracking-[0.3em] text-amber-500/60 dark:text-amber-400/40 px-1">Casos de Uso</h4>
                    <m.div 
                      variants={staggerContainer}
                      initial="initial"
                      whileInView="whileInView"
                      viewport={{ once: true }}
                      className="flex flex-wrap gap-2 lg:justify-end"
                    >
                      {['Transformación Digital', 'Ciberseguridad', 'Roadmaps de IA', 'Auditoría Cloud'].map((use) => (
                        <m.span 
                          key={use} 
                          variants={{
                            initial: { opacity: 0, scale: 0.9 },
                            whileInView: { opacity: 1, scale: 1 }
                          }}
                          whileHover={{ scale: 1.05, y: -2 }}
                          className="px-3 py-1.5 bg-amber-500/5 dark:bg-white/5 border border-amber-500/10 dark:border-white/10 rounded-lg text-[0.65rem] font-bold uppercase tracking-wider backdrop-blur-sm transition-all"
                        >
                          {use}
                        </m.span>
                      ))}
                    </m.div>
                    
                    <h4 className="text-[0.65rem] font-bold uppercase tracking-[0.3em] text-amber-500/60 dark:text-amber-400/40 px-1 mt-6">Tecnologías</h4>
                    <div className="flex flex-wrap gap-x-4 gap-y-2 px-1 lg:justify-end text-[0.65rem] font-medium text-gray-500 dark:text-gray-400">
                      {['Cloud', 'Cybersecurity', 'AI Strategy', 'FinOps', 'DevOps'].map((tech) => (
                        <span key={tech}>{tech}</span>
                      ))}
                    </div>
                  </div>

                  <div className="mt-10 pt-10 border-t border-amber-500/10 lg:text-right">
                    <a 
                      href="https://wa.me/573193142840?text=Hola!%20Me%20gustaría%20cotizar%20un%20servicio%20de%20Consultoría%20IT%20Estratégica%20con%20Tupla%20Core."
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center bg-amber-500 hover:bg-amber-600 text-white px-8 py-4 rounded-xl text-lg font-bold group shadow-xl hover:shadow-amber-500/20 transition-all no-underline"
                    >
                      Cotizar Consultoría
                      <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                    </a>
                  </div>
                </m.div>
              </div>
            </div>
          </section>

        </div>
      </div>
      
      <Footer />
    </main>
  );
}
