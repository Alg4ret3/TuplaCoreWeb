import Navbar from '@/components/organisms/Navbar';
import Footer from '@/components/organisms/Footer';

export default function QuotePage() {
  return (
    <main className="min-h-screen bg-black">
      <Navbar />
      <div className="flex flex-col items-center justify-center py-48 text-white font-outfit uppercase tracking-extrawide">
        <h1>Hola Mundo</h1>
      </div>
      <Footer />
    </main>
  );
}
