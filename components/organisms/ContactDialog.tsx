'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Phone, MessageCircle } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';




export default function ContactDialog() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDialog = () => setIsOpen((prev) => !prev);

  return (
    <>
      {/* Trigger Button */}
      <button
        onClick={toggleDialog}
        className="fixed bottom-8 right-8 z-40 flex items-center justify-center w-14 h-14 bg-white text-black rounded-full shadow-2xl hover:scale-110 transition-transform duration-300"
        aria-label="Abrir opciones de contacto"
      >
        <MessageCircle className="w-6 h-6" />
      </button>

      {/* Floating Bubble */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            className="fixed bottom-20 right-8 z-40 w-80 max-w-[90vw] bg-[#0a0a0a]/90 text-white rounded-2xl shadow-2xl border border-white/20 p-6 backdrop-blur-xl bg-gradient-to-br from-[#111111] to-[#0a0a0a]"
          >
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-audiowide">Hablemos</h2>
              <button onClick={toggleDialog} className="text-white/50 hover:text-white transition-colors" aria-label="Cerrar">
                ✕
              </button>
            </div>
            <p className="text-sm text-white/60 font-inter mb-4">
              Elige tu método preferido para comunicarte con nosotros.
            </p>
            <div className="flex flex-col gap-3">
              <a
                href="https://wa.me/573193142840"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-3 rounded-lg bg-[#25D366]/10 hover:bg-[#25D366]/20 border border-[#25D366]/20 transition-all group transform hover:scale-105"
              >
                <FaWhatsapp className="w-5 h-5 text-[#25D366] group-hover:scale-110 transition-transform" />
                <span className="font-inter font-medium text-sm">WhatsApp</span>
              </a>
              <a
                href="mailto:hola@tuplacore.com"
                className="flex items-center gap-3 p-3 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 transition-all group transform hover:scale-105"
              >
                <Mail className="w-5 h-5 group-hover:scale-110 transition-transform" />
                <span className="font-inter font-medium text-sm">Email</span>
              </a>
              <a
                href="tel:+573000000000"
                className="flex items-center gap-3 p-3 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 transition-all group transform hover:scale-105"
              >
                <Phone className="w-5 h-5 group-hover:scale-110 transition-transform" />
                <span className="font-inter font-medium text-sm">Llamada</span>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
