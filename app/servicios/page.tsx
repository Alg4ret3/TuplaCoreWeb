import Navbar from '@/components/organisms/Navbar';
import Footer from '@/components/organisms/Footer';
import Services from '@/components/organisms/Services';

export default function ServicesPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <div className="p-0">
        <Services />
      </div>
      <Footer />
    </main>
  );
}
