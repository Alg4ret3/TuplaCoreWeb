import Navbar from '@/components/organisms/Navbar';
import Footer from '@/components/organisms/Footer';

export default function QuotePage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <div className="container mx-auto pt-32 pb-16 px-4">
        <h1 className="text-4xl font-bold text-center mb-8">Cotiza tu Proyecto</h1>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Cuéntanos sobre tu idea y te ayudaremos a hacerla realidad con las mejores herramientas tecnológicas.
        </p>
        <div className="bg-card p-8 rounded-xl border max-w-3xl mx-auto">
           <p className="text-center italic">Formulario de cotización en desarrollo...</p>
        </div>
      </div>
      <Footer />
    </main>
  );
}
