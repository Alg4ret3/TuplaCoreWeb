import Navbar from '@/components/organisms/Navbar';
import Footer from '@/components/organisms/Footer';
import About from '@/components/organisms/About';

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <div className="p-0">
        <About />
      </div>
      <Footer />
    </main>
  );
}
