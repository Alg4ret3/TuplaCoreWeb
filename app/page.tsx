import Navbar from '@/components/organisms/Navbar';
import Hero from '@/components/organisms/Hero';
import EcommerceBanner from '@/components/organisms/EcommerceBanner';
import VideoShowcase from '@/components/organisms/VideoShowcase';
import N8nBanner from '@/components/organisms/N8nBanner';
import Footer from '@/components/organisms/Footer';
import { Toaster } from '@/components/atoms/toaster';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <EcommerceBanner />
      <VideoShowcase />
      <N8nBanner />
      <Footer />
      <Toaster />
    </main>
  );
}