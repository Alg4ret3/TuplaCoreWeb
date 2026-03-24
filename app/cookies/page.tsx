'use client';

import Navbar from '@/components/organisms/Navbar';
import Footer from '@/components/organisms/Footer';
import { Cookie, Settings, Shield, Info } from 'lucide-react';

export default function CookiesPage() {
  return (
    <main className="min-h-screen bg-white dark:bg-tupla-dark text-tupla-dark dark:text-white transition-colors duration-500 font-sans">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-tupla-primary/10 to-transparent opacity-50"></div>
        <div className="max-w-4xl mx-auto px-4 relative z-10">
          <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-4 sm:space-y-0 sm:space-x-4 mb-6">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black leading-tight uppercase tracking-tighter italic font-audiowide">
              Política de <span className="text-tupla-accent">Cookies</span>
            </h1>
          </div>
          <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed max-w-2xl">
            Utilizamos cookies para mejorar tu experiencia en nuestro sitio web. 
            Esta política detalla qué son las cookies, cómo las usamos y tus opciones.
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="pb-32">
        <div className="max-w-4xl mx-auto px-4">
          <div className="grid gap-12">
            
            {/* 1. Qué son las cookies */}
            <div className="bg-white/5 border border-white/10 rounded-3xl p-6 md:p-12 hover:border-tupla-primary/30 transition-colors">
              <div className="flex flex-col md:flex-row items-start space-y-4 md:space-y-0 md:space-x-6">
                <div className="p-4 bg-tupla-primary/10 rounded-2xl">
                  <Info className="w-6 h-6 text-tupla-primary" />
                </div>
                <div>
                  <h2 className="text-2xl font-semibold mb-4 text-tupla-dark dark:text-white">1. ¿Qué son las Cookies?</h2>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                    Las cookies son pequeños archivos de texto que se almacenan en tu dispositivo (ordenador, tablet o móvil) 
                    cuando visitas un sitio web. Ayudan a que el sitio web reconozca tu dispositivo y recuerde información 
                    sobre tu visita.
                  </p>
                </div>
              </div>
            </div>

            {/* 2. Cómo las usamos */}
            <div className="bg-white/5 border border-white/10 rounded-3xl p-6 md:p-12 hover:border-tupla-accent/30 transition-colors">
              <div className="flex flex-col md:flex-row items-start space-y-4 md:space-y-0 md:space-x-6">
                <div className="p-4 bg-tupla-accent/10 rounded-2xl">
                  <Shield className="w-6 h-6 text-tupla-accent" />
                </div>
                <div>
                  <h2 className="text-2xl font-semibold mb-4 text-tupla-dark dark:text-white">2. ¿Por qué las usamos?</h2>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                    En TUPLΛ CΩRE utilizamos cookies para:
                  </p>
                  <ul className="list-disc list-inside text-gray-600 dark:text-gray-400 space-y-2 ml-4">
                    <li>Funcionalidad: Asegurar que el sitio web funcione correctamente.</li>
                    <li>Rendimiento: Analizar cómo los usuarios interactúan con nuestro sitio.</li>
                    <li>Experiencia de usuario: Recordar tus preferencias (como el idioma).</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* 3. Control de cookies */}
            <div className="bg-white/5 border border-white/10 rounded-3xl p-6 md:p-12 hover:border-tupla-primary/30 transition-colors">
              <div className="flex flex-col md:flex-row items-start space-y-4 md:space-y-0 md:space-x-6">
                <div className="p-4 bg-tupla-primary/10 rounded-2xl">
                  <Settings className="w-6 h-6 text-tupla-primary" />
                </div>
                <div>
                  <h2 className="text-2xl font-semibold mb-4 text-tupla-dark dark:text-white">3. ¿Cómo controlar las Cookies?</h2>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                    Puedes controlar y administrar las cookies en la configuración de tu navegador. 
                    Ten en cuenta que eliminar o bloquear las cookies puede afectar tu experiencia 
                    de usuario y algunas partes del sitio pueden no funcionar correctamente.
                  </p>
                </div>
              </div>
            </div>

            {/* 4. Tipos de Cookies */}
            <div className="bg-white/5 border border-white/10 rounded-3xl p-6 md:p-12 hover:border-tupla-accent/30 transition-colors">
              <div className="flex flex-col md:flex-row items-start space-y-4 md:space-y-0 md:space-x-6">
                <div className="p-4 bg-tupla-accent/10 rounded-2xl">
                  <Info className="w-6 h-6 text-tupla-accent" />
                </div>
                <div>
                  <h2 className="text-2xl font-semibold mb-4 text-tupla-dark dark:text-white">4. Tipos de Cookies que utilizamos</h2>
                  <ul className="list-disc list-inside text-gray-600 dark:text-gray-400 space-y-4 ml-4">
                    <li><strong>Esenciales:</strong> Necesarias para el funcionamiento básico del sitio.</li>
                    <li><strong>De Análisis:</strong> Nos permiten entender cómo los visitantes interactúan con el sitio.</li>
                    <li><strong>De Personalización:</strong> Permiten recordar tus preferencias y ofrecer una experiencia mejorada.</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* 5. Cookies de Terceros */}
            <div className="bg-white/5 border border-white/10 rounded-3xl p-6 md:p-12 hover:border-tupla-primary/30 transition-colors">
              <div className="flex flex-col md:flex-row items-start space-y-4 md:space-y-0 md:space-x-6">
                <div className="p-4 bg-tupla-primary/10 rounded-2xl">
                  <Shield className="w-6 h-6 text-tupla-primary" />
                </div>
                <div>
                  <h2 className="text-2xl font-semibold mb-4 text-tupla-dark dark:text-white">5. Cookies de Terceros</h2>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                    Utilizamos servicios de terceros (como Google Analytics) que pueden depositar cookies en tu dispositivo. 
                    No tenemos control sobre estas cookies de terceros. Te sugerimos revisar las políticas de cookies 
                    de estos proveedores.
                  </p>
                </div>
              </div>
            </div>

            {/* 6. Cambios en la Política */}
            <div className="bg-white/5 border border-white/10 rounded-3xl p-6 md:p-12 hover:border-tupla-accent/30 transition-colors">
              <div className="flex flex-col md:flex-row items-start space-y-4 md:space-y-0 md:space-x-6">
                <div className="p-4 bg-tupla-accent/10 rounded-2xl">
                  <Cookie className="w-6 h-6 text-tupla-accent" />
                </div>
                <div>
                  <h2 className="text-2xl font-semibold mb-4 text-tupla-dark dark:text-white">6. Actualizaciones</h2>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                    Podemos actualizar nuestra Política de Cookies ocasionalmente para reflejar cambios en nuestras 
                    prácticas o por otras razones operativas, legales o reglamentarias.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8 text-center text-gray-500 text-sm">
              <p>Última actualización: {new Date().toLocaleDateString('es-ES', { month: 'long', year: 'numeric' })}</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
