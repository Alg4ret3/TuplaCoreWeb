import Navbar from '@/components/organisms/Navbar';
import Footer from '@/components/organisms/Footer';
import Portfolio from '@/components/organisms/Portfolio';

export default function PortfolioPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <div className="p-0">
        <Portfolio />
      </div>
      <Footer />
    </main>
  );
}
