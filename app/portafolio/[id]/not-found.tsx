import Link from 'next/link';
import Navbar from '@/components/organisms/Navbar';
import Footer from '@/components/organisms/Footer';
import { Button } from '@/components/atoms/button';
import { ArrowLeft } from 'lucide-react';

export const metadata = {
  title: 'Proyecto no encontrado | Tupla Core',
  description: 'El proyecto que buscas no existe. Vuelve a la lista de proyectos.',
};

export default function NotFound() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <div className="min-h-screen bg-white dark:bg-tupla-dark transition-colors duration-500 flex flex-col items-center justify-center px-4">
        <div className="text-center space-y-8">
          <div className="space-y-4">
            <h1 className="text-8xl font-black text-tupla-primary">404</h1>
            <h2 className="text-4xl md:text-5xl font-black text-black dark:text-white uppercase italic">
              Proyecto No Encontrado
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-md mx-auto">
              El proyecto que buscas no existe o ha sido eliminado.
            </p>
          </div>
          
          <Link href="/portafolio">
            <Button className="bg-tupla-primary hover:bg-tupla-accent text-white font-black uppercase tracking-widest px-8 py-6 rounded-lg transition-all transform hover:scale-105">
              <ArrowLeft className="w-5 h-5 mr-3" />
              Volver al Portafolio
            </Button>
          </Link>
        </div>
      </div>
      <Footer />
    </main>
  );
}
