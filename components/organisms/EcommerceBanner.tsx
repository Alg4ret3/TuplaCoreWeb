"use client";

import { ShoppingCart, CreditCard, BarChart3, ShieldCheck, ArrowRight, TrendingUp, Globe, Zap } from "lucide-react";
import { Button } from "@/components/atoms/button";
import { motion } from "framer-motion";

const EcommerceBanner = ({ onClick }: { onClick?: () => void }) => {
  const features = [
    { 
      icon: CreditCard, 
      title: "Pasarelas Globales", 
      desc: "Integración con Stripe, PayPal y más.",
      color: "from-blue-500 to-indigo-600"
    },
    { 
      icon: BarChart3, 
      title: "Optimizado para Ventas", 
      desc: "Diseño orientado a la conversión (CRO).",
      color: "from-emerald-500 to-teal-600"
    },
    { 
      icon: ShieldCheck, 
      title: "Máxima Seguridad", 
      desc: "Certificaciones SSL y protección de datos.",
      color: "from-amber-500 to-orange-600"
    },
    { 
      icon: ShoppingCart, 
      title: "Sincronización Total", 
      desc: "Gestión de inventario en tiempo real.",
      color: "from-rose-500 to-pink-600"
    },
  ];

  const [isMobile, setIsMobile] = (require("react")).useState(false);
  (require("react")).useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 1024);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <section className="relative py-32 overflow-hidden bg-[#fafafa] dark:bg-tupla-dark transition-colors duration-500">
      {/* Premium Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-[-10%] right-[-10%] w-[600px] h-[600px] bg-tupla-primary/10 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-tupla-accent/10 rounded-full blur-[100px] animate-pulse transition-delay-2000" />
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.03] dark:opacity-[0.05]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          
          {/* Left Column - Content */}
          <motion.div
            initial={isMobile ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="relative lg:pr-8"
          >
            <motion.div 
              initial={isMobile ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center space-x-3 px-4 py-2 rounded-full bg-white dark:bg-white/5 border border-tupla-primary/20 shadow-sm mb-8"
            >
              <div className="w-2 h-2 rounded-full bg-tupla-primary animate-ping" />
              <span className="text-tupla-primary dark:text-tupla-accent text-sm font-bold tracking-tight uppercase">
                Líderes en Desarrollo E-commerce
              </span>
            </motion.div>

            <h2 className="text-3xl md:text-5xl font-black text-tupla-dark dark:text-white leading-[1.1] mb-8 uppercase tracking-tighter italic">
              Transforma <br />
              <span className="text-tupla-accent">
                tu visión en ventas
              </span>
            </h2>

            <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed max-w-xl font-light mb-12">
              No creamos simples webs; diseñamos ecosistemas de venta de alto rendimiento 
              que dominan el mercado digital. Tu éxito comercial es nuestro código.
            </p>

            <div className="grid sm:grid-cols-2 gap-6 mb-12">
              {features.map((item, idx) => (
                <motion.div 
                  key={idx}
                  whileHover={isMobile ? {} : { y: -5, scale: 1.02 }}
                  className="p-5 rounded-2xl bg-white/50 dark:bg-white/5 backdrop-blur-xl border border-white dark:border-white/10 shadow-xl shadow-black/5 group transition-all"
                >
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center text-white mb-4 shadow-lg`}>
                    <item.icon className="w-6 h-6" />
                  </div>
                  <h4 className="font-bold text-tupla-dark dark:text-white mb-2">{item.title}</h4>
                  <p className="text-sm text-gray-500 dark:text-gray-400 font-medium">{item.desc}</p>
                </motion.div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-6">
              <Button
                size="lg"
                onClick={onClick}
                className="bg-tupla-primary hover:bg-tupla-primary/80 text-white font-semibold px-8 py-4 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl group"
              >
                Lanzar mi Tienda Online
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1" />
              </Button>
            </div>
          </motion.div>

          {/* Right Column - Premium 3D Mockup */}
          <motion.div
            initial={isMobile ? { opacity: 1, scale: 1, rotateY: 0 } : { opacity: 0, scale: 0.8, rotateY: 20 }}
            whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: true }}
            className="relative perspective-[1500px]"
          >
            {/* Main Window Frame */}
            <div className="relative z-10 bg-white dark:bg-tupla-dark rounded-[40px] p-2 shadow-[0_50px_100px_-20px_rgba(0,0,0,0.3)] border border-black/5 dark:border-white/10 overflow-hidden transform-gpu">
              
              {/* Browser Top Bar */}
              <div className="h-14 bg-gray-50 dark:bg-white/5 flex items-center px-6 gap-3 border-b dark:border-white/5">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-400" />
                  <div className="w-3 h-3 rounded-full bg-amber-400" />
                  <div className="w-3 h-3 rounded-full bg-emerald-400" />
                </div>
                <div className="flex-1 max-w-sm h-7 bg-white dark:bg-white/5 rounded-full mx-auto border dark:border-white/10 flex items-center px-4 text-[10px] text-gray-400 font-mono">
                  https://tupla-core-ecommerce.store
                </div>
              </div>

              {/* Dynamic Interior Content */}
              <div className="bg-gray-50 dark:bg-[#0a0a0a] aspect-[4/3] p-8 overflow-hidden relative">
                <div className="grid grid-cols-12 gap-6 h-full font-sans">
                  {/* Sidebar Mock */}
                  <div className="col-span-3 space-y-4">
                    <div className="h-4 w-full bg-tupla-primary/20 rounded" />
                    <div className="space-y-2">
                        {[1,2,3,4].map(i => <div key={i} className="h-2 w-full bg-gray-200 dark:bg-white/5 rounded" />)}
                    </div>
                  </div>
                  
                  {/* Main Grid Mock */}
                  <div className="col-span-9 space-y-6">
                    <div className="grid grid-cols-2 gap-6">
                      <div className="aspect-square rounded-3xl bg-white dark:bg-white/5 border dark:border-white/10 p-4 flex flex-col justify-end shadow-inner">
                        <div className="h-4 w-1/2 bg-tupla-primary rounded mb-2" />
                        <div className="h-3 w-1/3 bg-gray-200 dark:bg-white/5 rounded" />
                      </div>
                      <div className="aspect-square rounded-3xl bg-white dark:bg-white/5 border dark:border-white/10 p-4 flex flex-col justify-end shadow-inner">
                        <div className="h-4 w-1/2 bg-tupla-accent rounded mb-2" />
                        <div className="h-3 w-1/3 bg-gray-200 dark:bg-white/5 rounded" />
                      </div>
                    </div>
                    {/* Activity Chart Mockup */}
                    <div className="h-28 bg-tupla-dark rounded-3xl p-4 flex items-end justify-around gap-2 shadow-2xl">
                      {[30, 70, 45, 90, 60, 80, 50, 95].map((h, i) => (
                        <motion.div 
                          key={i}
                          initial={isMobile ? { height: `${h}%` } : { height: 0 }}
                          whileInView={{ height: `${h}%` }}
                          transition={{ delay: i * 0.1, duration: 0.5 }}
                          className="w-full bg-gradient-to-t from-tupla-primary to-tupla-accent rounded-t-lg opacity-80"
                        />
                      ))}
                    </div>
                  </div>
                </div>

                {/* Glass Overlay for depth */}
                <div className="absolute inset-0 bg-gradient-to-tr from-white/10 to-transparent pointer-events-none" />
              </div>
            </div>

            {/* Floating Elements - Extreme Depth */}
            <motion.div 
              animate={isMobile ? { y: 0 } : { y: [0, -20, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-10 -left-12 z-20 bg-white/90 dark:bg-tupla-dark/95 backdrop-blur-2xl p-6 rounded-[30px] shadow-[0_25px_50px_-12px_rgba(0,0,0,0.25)] border dark:border-white/10"
            >
              <div className="flex items-center space-x-4">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-emerald-400 to-teal-500 flex items-center justify-center text-white shadow-lg shadow-teal-500/30">
                  <TrendingUp className="w-8 h-8" />
                </div>
                <div>
                  <p className="text-[10px] text-gray-400 dark:text-gray-500 uppercase font-black tracking-widest mb-1">Crecimiento Mensual</p>
                  <div className="flex items-baseline space-x-2">
                    <span className="text-3xl font-black text-tupla-dark dark:text-white">+245%</span>
                    <span className="text-emerald-500 text-xs font-bold">↑ ROI</span>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div 
              animate={isMobile ? { y: 0 } : { y: [0, 20, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute top-10 -right-8 z-20 bg-white/90 dark:bg-tupla-dark/95 backdrop-blur-2xl px-6 py-4 rounded-2xl shadow-xl border dark:border-white/10"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-tupla-accent/20 flex items-center justify-center text-tupla-accent">
                    <Globe className="w-5 h-5" />
                </div>
                <div>
                    <p className="text-[10px] font-bold text-gray-400">PEDIDO RECIBIDO</p>
                    <p className="text-sm font-black dark:text-white">Nueva York, US</p>
                </div>
              </div>
            </motion.div>

            {/* Decorative background glows */}
            <div className="absolute top-20 right-0 w-80 h-80 bg-tupla-primary/20 rounded-full blur-[100px] -z-10" />
            <div className="absolute bottom-10 left-0 w-80 h-80 bg-tupla-accent/20 rounded-full blur-[100px] -z-10" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default EcommerceBanner;
