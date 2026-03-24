'use client';

import Navbar from '@/components/organisms/Navbar';
import Footer from '@/components/organisms/Footer';
import { Gavel, Scale, AlertCircle, Handshake, Info } from 'lucide-react';

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-white dark:bg-tupla-dark text-tupla-dark dark:text-white transition-colors duration-500 font-sans">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-tupla-accent/10 to-transparent opacity-50"></div>
        <div className="max-w-4xl mx-auto px-4 relative z-10">
          <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-4 sm:space-y-0 sm:space-x-4 mb-6">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black leading-tight uppercase tracking-tighter italic font-audiowide">
              Términos y <span className="text-tupla-accent">Condiciones</span>
            </h1>
          </div>
          <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed max-w-2xl">
            Al acceder y utilizar los servicios de TUPLΛ CΩRE, aceptas cumplir con los siguientes 
            términos y condiciones que rigen nuestra relación comercial. Nos reservamos el derecho 
            de actualizar estos términos en cualquier momento.
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="pb-32">
        <div className="max-w-4xl mx-auto px-4">
          <div className="grid gap-12">
            
            {/* 1. Uso de Servicios */}
            <div className="bg-white/5 border border-white/10 rounded-3xl p-6 md:p-12 hover:border-tupla-accent/30 transition-colors">
              <div className="flex flex-col md:flex-row items-start space-y-4 md:space-y-0 md:space-x-6">
                <div className="p-4 bg-tupla-accent/10 rounded-2xl">
                  <Handshake className="w-6 h-6 text-tupla-accent" />
                </div>
                <div>
                  <h2 className="text-2xl font-semibold mb-4 text-tupla-dark dark:text-white">1. Aceptación de los Términos</h2>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                    Al utilizar este sitio web o contratar nuestros servicios, declaras que has leído, entendido 
                    y aceptado estar sujeto a estos Términos y Condiciones, así como a todas las leyes 
                    y regulaciones aplicables.
                  </p>
                </div>
              </div>
            </div>

            {/* 2. Responsabilidades */}
            <div className="bg-white/5 border border-white/10 rounded-3xl p-6 md:p-12 hover:border-tupla-primary/30 transition-colors">
              <div className="flex flex-col md:flex-row items-start space-y-4 md:space-y-0 md:space-x-6">
                <div className="p-4 bg-tupla-primary/10 rounded-2xl">
                  <Scale className="w-6 h-6 text-tupla-primary" />
                </div>
                <div>
                  <h2 className="text-2xl font-semibold mb-4 text-tupla-dark dark:text-white">2. Propiedad Intelectual</h2>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                    Todo el contenido de este sitio, incluyendo pero no limitado a textos, gráficos, logos, e imágenes, 
                    es propiedad de TUPLΛ CΩRE o de sus respectivos dueños y está protegido por las leyes de derechos de autor.
                  </p>
                </div>
              </div>
            </div>

            {/* 3. Limitaciones */}
            <div className="bg-white/5 border border-white/10 rounded-3xl p-6 md:p-12 hover:border-tupla-accent/30 transition-colors">
              <div className="flex flex-col md:flex-row items-start space-y-4 md:space-y-0 md:space-x-6">
                <div className="p-4 bg-tupla-accent/10 rounded-2xl">
                  <AlertCircle className="w-6 h-6 text-tupla-accent" />
                </div>
                <div>
                  <h2 className="text-2xl font-semibold mb-4 text-tupla-dark dark:text-white">3. Limitación de Responsabilidad</h2>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                    TUPLΛ CΩRE no será responsable de ningún daño directo, indirecto, incidental, especial 
                    o consecuente que resulte del uso o la imposibilidad de usar nuestros servicios. 
                    Nuestros servicios se proporcionan &quot;tal cual&quot; y &quot;según disponibilidad&quot;.
                  </p>
                </div>
              </div>
            </div>

            {/* 4. Usos Prohibidos */}
            <div className="bg-white/5 border border-white/10 rounded-3xl p-6 md:p-12 hover:border-tupla-primary/30 transition-colors">
              <div className="flex flex-col md:flex-row items-start space-y-4 md:space-y-0 md:space-x-6">
                <div className="p-4 bg-tupla-primary/10 rounded-2xl">
                  <AlertCircle className="w-6 h-6 text-tupla-primary" />
                </div>
                <div>
                  <h2 className="text-2xl font-semibold mb-4 text-tupla-dark dark:text-white">4. Usos Prohibidos</h2>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                    Está estrictamente prohibido utilizar nuestro sitio o servicios para:
                  </p>
                  <ul className="list-disc list-inside text-gray-600 dark:text-gray-400 space-y-2 ml-4">
                    <li>Realizar actividades ilegales o fraudulentas.</li>
                    <li>Infringir los derechos de propiedad intelectual.</li>
                    <li>Transmitir virus o cualquier código de naturaleza destructiva.</li>
                    <li>Interferir con la seguridad o el funcionamiento del sitio.</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* 5. Modificaciones del Servicio */}
            <div className="bg-white/5 border border-white/10 rounded-3xl p-6 md:p-12 hover:border-tupla-accent/30 transition-colors">
              <div className="flex flex-col md:flex-row items-start space-y-4 md:space-y-0 md:space-x-6">
                <div className="p-4 bg-tupla-accent/10 rounded-2xl">
                  <Info className="w-6 h-6 text-tupla-accent" />
                </div>
                <div>
                  <h2 className="text-2xl font-semibold mb-4 text-tupla-dark dark:text-white">5. Modificaciones del Servicio</h2>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                    Nos reservamos el derecho de modificar o interrumpir el servicio (o cualquier parte de él) 
                    en cualquier momento sin previo aviso. No seremos responsables ante ti o terceros por 
                    cualquier modificación, cambio de precio o suspensión del servicio.
                  </p>
                </div>
              </div>
            </div>

            {/* 6. Ley Aplicable */}
            <div className="bg-white/5 border border-white/10 rounded-3xl p-6 md:p-12 hover:border-tupla-primary/30 transition-colors">
              <div className="flex flex-col md:flex-row items-start space-y-4 md:space-y-0 md:space-x-6">
                <div className="p-4 bg-tupla-primary/10 rounded-2xl">
                  <Scale className="w-6 h-6 text-tupla-primary" />
                </div>
                <div>
                  <h2 className="text-2xl font-semibold mb-4 text-tupla-dark dark:text-white">6. Ley Aplicable</h2>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                    Estos términos se regirán e interpretarán de acuerdo con las leyes de la República de Colombia, 
                    sin tener en cuenta sus disposiciones sobre conflictos de leyes. Cualquier disputa legal estará 
                    bajo la jurisdicción exclusiva de los tribunales de la ciudad de Pasto.
                  </p>
                </div>
              </div>
            </div>

            {/* 7. Indemnización */}
            <div className="bg-white/5 border border-white/10 rounded-3xl p-6 md:p-12 hover:border-tupla-accent/30 transition-colors">
              <div className="flex flex-col md:flex-row items-start space-y-4 md:space-y-0 md:space-x-6">
                <div className="p-4 bg-tupla-accent/10 rounded-2xl">
                  <Handshake className="w-6 h-6 text-tupla-accent" />
                </div>
                <div>
                  <h2 className="text-2xl font-semibold mb-4 text-tupla-dark dark:text-white">7. Indemnización</h2>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                    Aceptas indemnizar y mantener indemne a TUPLΛ CΩRE y sus empleados de cualquier reclamo, pérdida o 
                    gasto resultantes de tu violación de estos términos o del uso indebido de nuestros servicios.
                  </p>
                </div>
              </div>
            </div>

            {/* 8. Terminación */}
            <div className="bg-white/5 border border-white/10 rounded-3xl p-6 md:p-12 hover:border-tupla-primary/30 transition-colors">
              <div className="flex flex-col md:flex-row items-start space-y-4 md:space-y-0 md:space-x-6">
                <div className="p-4 bg-tupla-primary/10 rounded-2xl">
                  <Gavel className="w-6 h-6 text-tupla-primary" />
                </div>
                <div>
                  <h2 className="text-2xl font-semibold mb-4 text-tupla-dark dark:text-white">8. Terminación</h2>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                    Podemos terminar o suspender tu acceso a nuestros servicios inmediatamente, sin previo aviso ni 
                    responsabilidad, por cualquier motivo, incluyendo si incumples estos Términos. Al finalizar, tu 
                    derecho a usar el servicio cesará de inmediato.
                  </p>
                </div>
              </div>
            </div>

            {/* 9. Integridad del Acuerdo */}
            <div className="bg-white/5 border border-white/10 rounded-3xl p-6 md:p-12 hover:border-tupla-accent/30 transition-colors">
              <div className="flex flex-col md:flex-row items-start space-y-4 md:space-y-0 md:space-x-6">
                <div className="p-4 bg-tupla-accent/10 rounded-2xl">
                  <Info className="w-6 h-6 text-tupla-accent" />
                </div>
                <div>
                  <h2 className="text-2xl font-semibold mb-4 text-tupla-dark dark:text-white">9. Integridad del Acuerdo</h2>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                    Estos Términos y Condiciones constituyen el acuerdo completo entre tú y TUPLΛ CΩRE con respecto a 
                    nuestros servicios, y reemplazan cualquier acuerdo anterior.
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
