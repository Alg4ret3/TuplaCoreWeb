"use client";

import { ShoppingCart, CreditCard, BarChart3, ShieldCheck, ArrowRight } from "lucide-react";
import { Button } from "@/components/atoms/button";
import { motion } from "framer-motion";

const EcommerceBanner = () => {
  return (
    <section className="relative py-24 overflow-hidden bg-white dark:bg-tupla-dark">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-[500px] h-[500px] bg-tupla-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/4 w-[500px] h-[500px] bg-tupla-accent/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-tupla-primary/10 border border-tupla-primary/20 text-tupla-primary text-sm font-medium">
              <ShoppingCart className="w-4 h-4" />
              <span>Soluciones E-commerce de Próxima Generación</span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold text-tupla-dark dark:text-white leading-tight">
              Transforma tu Negocio con un <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-tupla-primary to-tupla-accent">
                E-commerce de Alto Nivel
              </span>
            </h2>

            <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
              No construimos simples tiendas online; creamos experiencias de compra potentes, 
              escalables y optimizadas para convertir visitantes en clientes leales. 
              Desde el catálogo hasta la pasarela de pago, cuidamos cada detalle.
            </p>

            <div className="grid sm:grid-cols-2 gap-6">
              {[
                { icon: CreditCard, title: "Pasarelas Globales", desc: "Integración con Stripe, PayPal y más." },
                { icon: BarChart3, title: "Optimizado para Ventas", desc: "Diseño orientado a la conversión (CRO)." },
                { icon: ShieldCheck, title: "Máxima Seguridad", desc: "Certificaciones SSL y protección de datos." },
                { icon: ShoppingCart, title: "Sincronización Total", desc: "Gestión de inventario en tiempo real." },
              ].map((item, idx) => (
                <div key={idx} className="flex space-x-3 group">
                  <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-gray-50 dark:bg-white/5 flex items-center justify-center text-tupla-primary transition-colors group-hover:bg-tupla-primary group-hover:text-white">
                    <item.icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-tupla-dark dark:text-white">{item.title}</h4>
                    <p className="text-sm text-gray-500 dark:text-gray-400">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-4">
              <Button
                size="lg"
                className="bg-tupla-primary hover:bg-tupla-accent text-white px-8 py-6 rounded-xl text-lg font-semibold shadow-xl shadow-tupla-primary/20 transition-all hover:scale-105"
              >
                Lanzar mi Tienda Online
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </div>
          </motion.div>

          {/* Right Column - Visual Mockup */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative z-10 bg-gradient-to-br from-tupla-dark to-gray-900 rounded-3xl p-4 shadow-2xl border border-white/10">
              <div className="bg-white dark:bg-tupla-dark rounded-2xl overflow-hidden aspect-[4/3] relative">
                <div className="absolute inset-0 bg-gray-50 dark:bg-tupla-dark flex flex-col">
                  {/* Mock Nav */}
                  <div className="h-12 border-b dark:border-white/5 flex items-center justify-between px-4">
                    <div className="w-20 h-3 bg-gray-200 dark:bg-white/10 rounded" />
                    <div className="flex space-x-3">
                      <div className="w-4 h-4 bg-gray-200 dark:bg-white/10 rounded-full" />
                      <div className="w-4 h-4 bg-gray-200 dark:bg-white/10 rounded-full" />
                    </div>
                  </div>
                  {/* Mock Content */}
                  <div className="p-6 space-y-4 flex-1">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="aspect-square bg-gray-100 dark:bg-white/5 rounded-xl animate-pulse" />
                      <div className="space-y-2">
                        <div className="h-4 bg-gray-200 dark:bg-white/10 rounded w-3/4" />
                        <div className="h-3 bg-gray-100 dark:bg-white/5 rounded w-1/2" />
                        <div className="h-8 bg-tupla-primary/20 rounded-lg w-full mt-4" />
                      </div>
                    </div>
                    <div className="h-24 bg-gray-50 dark:bg-white/5 rounded-xl flex items-center justify-center">
                      <BarChart3 className="w-8 h-8 text-tupla-accent opacity-20" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Floating stats card */}
            <div className="absolute -bottom-6 -left-6 bg-white dark:bg-tupla-dark p-6 rounded-2xl shadow-2xl border border-gray-100 dark:border-white/10 z-20">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 rounded-full bg-tupla-accent/10 flex items-center justify-center text-tupla-accent">
                  <BarChart3 className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-xs text-gray-500 uppercase font-bold tracking-wider">Crecimiento Ventas</p>
                  <p className="text-2xl font-bold text-tupla-dark dark:text-white">+245%</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default EcommerceBanner;
