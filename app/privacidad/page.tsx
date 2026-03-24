'use client';

import Navbar from '@/components/organisms/Navbar';
import Footer from '@/components/organisms/Footer';
import { ShieldCheck, Eye, Lock, FileText, Info } from 'lucide-react';

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-white dark:bg-tupla-dark text-tupla-dark dark:text-white transition-colors duration-500 font-sans">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-tupla-primary/10 to-transparent opacity-50"></div>
        <div className="max-w-4xl mx-auto px-4 relative z-10">
          <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-4 sm:space-y-0 sm:space-x-4 mb-6">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black leading-tight uppercase tracking-tighter italic font-audiowide">
              Política de <span className="text-tupla-accent">Privacidad</span>
            </h1>
          </div>
          <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed max-w-2xl">
            En TUPLΛ CΩRE, nos tomamos muy en serio la protección de tus datos personales. 
            Esta política explica cómo recopilamos, usamos y protegemos tu información.
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="pb-32">
        <div className="max-w-4xl mx-auto px-4">
          <div className="grid gap-12">
            
            {/* 1. Recopilación de Información */}
            <div className="bg-white/5 border border-white/10 rounded-3xl p-6 md:p-12 hover:border-tupla-primary/30 transition-colors">
              <div className="flex flex-col md:flex-row items-start space-y-4 md:space-y-0 md:space-x-6">
                <div className="p-4 bg-tupla-primary/10 rounded-2xl">
                  <Eye className="w-6 h-6 text-tupla-primary" />
                </div>
                <div>
                  <h2 className="text-2xl font-semibold mb-4 text-tupla-dark dark:text-white">1. Recopilación de Información</h2>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                    Recopilamos información que nos proporcionas directamente cuando:
                  </p>
                  <ul className="list-disc list-inside text-gray-600 dark:text-gray-400 space-y-2 ml-4">
                    <li>Te pones en contacto a través de nuestros formularios.</li>
                    <li>Solicitas una cotización para un proyecto.</li>
                    <li>Te suscribes a nuestro boletín informativo.</li>
                    <li>Interactúas con nuestras redes sociales.</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* 2. Uso de los Datos */}
            <div className="bg-white/5 border border-white/10 rounded-3xl p-6 md:p-12 hover:border-tupla-accent/30 transition-colors">
              <div className="flex flex-col md:flex-row items-start space-y-4 md:space-y-0 md:space-x-6">
                <div className="p-4 bg-tupla-accent/10 rounded-2xl">
                  <FileText className="w-6 h-6 text-tupla-accent" />
                </div>
                <div>
                  <h2 className="text-2xl font-semibold mb-4 text-tupla-dark dark:text-white">2. Uso de los Datos</h2>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                    Utilizamos la información recopilada para:
                  </p>
                  <ul className="list-disc list-inside text-gray-600 dark:text-gray-400 space-y-2 ml-4">
                    <li>Proporcionar y mantener nuestros servicios.</li>
                    <li>Notificarte sobre cambios en nuestro servicio.</li>
                    <li>Permitirte participar en funciones interactivas.</li>
                    <li>Brindar soporte al cliente y responder a tus consultas.</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* 3. Protección de Información */}
            <div className="bg-white/5 border border-white/10 rounded-3xl p-6 md:p-12 hover:border-tupla-primary/30 transition-colors">
              <div className="flex flex-col md:flex-row items-start space-y-4 md:space-y-0 md:space-x-6">
                <div className="p-4 bg-tupla-primary/10 rounded-2xl">
                  <Lock className="w-6 h-6 text-tupla-primary" />
                </div>
                <div>
                  <h2 className="text-2xl font-semibold mb-4 text-tupla-dark dark:text-white">3. Seguridad de los Datos</h2>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                    Implementamos medidas de seguridad técnicas y organizativas para proteger tu información personal 
                    contra acceso no autorizado, alteración, divulgación o destrucción. Sin embargo, recuerda que 
                    ningún método de transmisión por Internet o almacenamiento electrónico es 100% seguro.
                  </p>
                </div>
              </div>
            </div>

            {/* 4. Derechos del Usuario */}
            <div className="bg-white/5 border border-white/10 rounded-3xl p-6 md:p-12 hover:border-tupla-accent/30 transition-colors">
              <div className="flex flex-col md:flex-row items-start space-y-4 md:space-y-0 md:space-x-6">
                <div className="p-4 bg-tupla-accent/10 rounded-2xl">
                  <ShieldCheck className="w-6 h-6 text-tupla-accent" />
                </div>
                <div>
                  <h2 className="text-2xl font-semibold mb-4 text-tupla-dark dark:text-white">4. Tus Derechos</h2>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                    Tienes derecho a:
                  </p>
                  <ul className="list-disc list-inside text-gray-600 dark:text-gray-400 space-y-2 ml-4">
                    <li>Acceder a los datos personales que tenemos sobre ti.</li>
                    <li>Solicitar la corrección de datos inexactos.</li>
                    <li>Solicitar la eliminación de tus datos cuando ya no sean necesarios.</li>
                    <li>Oponerte al tratamiento de tus datos para fines de marketing.</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* 5. Transferencia a Terceros */}
            <div className="bg-white/5 border border-white/10 rounded-3xl p-6 md:p-12 hover:border-tupla-primary/30 transition-colors">
              <div className="flex flex-col md:flex-row items-start space-y-4 md:space-y-0 md:space-x-6">
                <div className="p-4 bg-tupla-primary/10 rounded-2xl">
                  <FileText className="w-6 h-6 text-tupla-primary" />
                </div>
                <div>
                  <h2 className="text-2xl font-semibold mb-4 text-tupla-dark dark:text-white">5. Compartir Información</h2>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                    No vendemos ni alquilamos tu información personal a terceros. Solo compartimos datos con proveedores 
                    de servicios que nos ayudan a operar nuestro negocio (como servicios de hosting o plataformas de email), 
                    quienes están obligados a mantener la confidencialidad de la información.
                  </p>
                </div>
              </div>
            </div>

            {/* 6. Enlaces de Terceros */}
            <div className="bg-white/5 border border-white/10 rounded-3xl p-6 md:p-12 hover:border-tupla-accent/30 transition-colors">
              <div className="flex flex-col md:flex-row items-start space-y-4 md:space-y-0 md:space-x-6">
                <div className="p-4 bg-tupla-accent/10 rounded-2xl">
                  <Info className="w-6 h-6 text-tupla-accent" />
                </div>
                <div>
                  <h2 className="text-2xl font-semibold mb-4 text-tupla-dark dark:text-white">6. Enlaces de Terceros</h2>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                    Nuestro sitio puede contener enlaces a otros sitios web. No somos responsables de las prácticas de 
                    privacidad o el contenido de dichos sitios. Te recomendamos leer las políticas de privacidad 
                    de cada sitio que visites.
                  </p>
                </div>
              </div>
            </div>

            {/* 7. Retención de Datos */}
            <div className="bg-white/5 border border-white/10 rounded-3xl p-6 md:p-12 hover:border-tupla-primary/30 transition-colors">
              <div className="flex flex-col md:flex-row items-start space-y-4 md:space-y-0 md:space-x-6">
                <div className="p-4 bg-tupla-primary/10 rounded-2xl">
                  <ShieldCheck className="w-6 h-6 text-tupla-primary" />
                </div>
                <div>
                  <h2 className="text-2xl font-semibold mb-4 text-tupla-dark dark:text-white">7. Retención de Datos</h2>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                    Conservamos tu información personal solo durante el tiempo que sea necesario para cumplir con los 
                    fines detallados en esta política, a menos que la ley exija o permita un período de retención 
                    más prolongado (por ejemplo, para fines fiscales o legales).
                  </p>
                </div>
              </div>
            </div>

            {/* 8. Transferencias Internacionales */}
            <div className="bg-white/5 border border-white/10 rounded-3xl p-6 md:p-12 hover:border-tupla-accent/30 transition-colors">
              <div className="flex flex-col md:flex-row items-start space-y-4 md:space-y-0 md:space-x-6">
                <div className="p-4 bg-tupla-accent/10 rounded-2xl">
                  <Lock className="w-6 h-6 text-tupla-accent" />
                </div>
                <div>
                  <h2 className="text-2xl font-semibold mb-4 text-tupla-dark dark:text-white">8. Transferencias Internacionales</h2>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                    Tu información puede ser transferida y mantenida en computadoras ubicadas fuera de tu estado o país, 
                    donde las leyes de protección de datos pueden diferir. Al utilizar nuestros servicios, consientes 
                    esta transferencia. Nos aseguramos de que existan salvaguardas adecuadas para proteger tus datos.
                  </p>
                </div>
              </div>
            </div>

            {/* 9. Privacidad de Menores */}
            <div className="bg-white/5 border border-white/10 rounded-3xl p-6 md:p-12 hover:border-tupla-primary/30 transition-colors">
              <div className="flex flex-col md:flex-row items-start space-y-4 md:space-y-0 md:space-x-6">
                <div className="p-4 bg-tupla-primary/10 rounded-2xl">
                  <Eye className="w-6 h-6 text-tupla-primary" />
                </div>
                <div>
                  <h2 className="text-2xl font-semibold mb-4 text-tupla-dark dark:text-white">9. Privacidad de Menores</h2>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                    Nuestros servicios no están dirigidos a personas menores de 18 años. No recopilamos 
                    intencionalmente información personal de menores. Si eres padre o tutor y sabes que tu hijo 
                    nos ha proporcionado datos, contáctanos para que podamos eliminarlos.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8 text-center">
              <p className="text-gray-500 text-sm">
                Última actualización: {new Date().toLocaleDateString('es-ES', { month: 'long', year: 'numeric' })}
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
