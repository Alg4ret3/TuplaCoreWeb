'use client';

import React from 'react';
import SectionTitle from '@/components/atoms/SectionTitle';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const ContactSection = () => {
  return (
    <section id="contacto" className="relative z-20 bg-black py-24 md:py-32 px-6 md:px-12 lg:px-24 overflow-hidden font-inter">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          
          {/* Left Column: Info */}
          <div>
            <SectionTitle 
              dark
              subtitle="Hablemos de tu idea"
              title="Contacto"
              className="mb-12"
            />
            
            <p className="text-white/60 text-lg leading-relaxed mb-16 max-w-md">
              ¿Tienes un proyecto en mente? Estamos listos para ayudarte a llevarlo al siguiente nivel tecnológico.
            </p>

            <div className="flex flex-col gap-8">
              <div className="flex items-center gap-6 group">
                <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all">
                  <Mail size={20} />
                </div>
                <div>
                  <span className="block text-[10px] uppercase tracking-widest text-white/30">Email</span>
                  <a href="mailto:hola@tuplacore.com" className="text-white font-audiowide uppercase text-sm">hola@tuplacore.com</a>
                </div>
              </div>

              <div className="flex items-center gap-6 group">
                <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all">
                  <Phone size={20} />
                </div>
                <div>
                  <span className="block text-[10px] uppercase tracking-widest text-white/30">Teléfono</span>
                  <a href="tel:+573000000000" className="text-white font-audiowide uppercase text-sm">+57 319 314 2840</a>
                </div>
              </div>

              <div className="flex items-center gap-6 group">
                <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all">
                  <MapPin size={20} />
                </div>
                <div>
                  <span className="block text-[10px] uppercase tracking-widest text-white/30">Ubicación</span>
                  <span className="text-white font-audiowide uppercase text-sm">Pasto, Colombia</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Simple Form Placeholder / Final CTA */}
          <div className="bg-white/[0.03] p-8 md:p-12 border border-white/5 relative">
            <h3 className="text-xl font-audiowide font-bold uppercase text-white mb-8">Enviar un mensaje</h3>
            
            <form className="flex flex-col gap-6" onSubmit={(e) => e.preventDefault()}>
              <div className="flex flex-col gap-2">
                <label className="text-[10px] uppercase tracking-[0.3em] text-white/40">Nombre Completo</label>
                <input type="text" className="bg-transparent border-b border-white/10 py-3 text-white focus:border-white outline-none transition-all" />
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-[10px] uppercase tracking-[0.3em] text-white/40">Email Corporativo</label>
                <input type="email" className="bg-transparent border-b border-white/10 py-3 text-white focus:border-white outline-none transition-all" />
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-[10px] uppercase tracking-[0.3em] text-white/40">Tu Mensaje</label>
                <textarea rows={4} className="bg-transparent border-b border-white/10 py-3 text-white focus:border-white outline-none transition-all resize-none" />
              </div>

              <button className="mt-8 px-10 py-4 bg-white text-black font-audiowide font-bold uppercase text-xs flex items-center justify-center gap-3 hover:scale-105 transition-all active:scale-95">
                Enviar Mensaje <Send size={16} />
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Decorative Glow */}
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-white/[0.02] blur-[120px] rounded-full pointer-events-none" />
    </section>
  );
};

export default ContactSection;
