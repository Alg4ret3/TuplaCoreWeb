import Navbar from "@/components/organisms/Navbar";
import Footer from "@/components/organisms/Footer";

export default function SoftwareAMedidaPage() {
  return (
    <div className="bg-background overflow-x-hidden w-full relative min-h-screen flex flex-col">
      <Navbar />
      <main className="relative z-10 bg-black/80 flex-grow flex items-center justify-center pt-24 backdrop-blur-md">
        <h1 className="text-4xl md:text-6xl font-audiowide uppercase text-white tracking-widest opacity-50">
          Software a medida
        </h1>
      </main>
      <Footer />
    </div>
  );
}