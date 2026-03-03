import Navbar from '@/components/organisms/Navbar';
import Footer from '@/components/organisms/Footer';
import Contact from '@/components/organisms/Contact';

export default function ContactPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <div className="p-0">
        <Contact />
      </div>
      <Footer />
    </main>
  );
}
