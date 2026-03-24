'use client';

import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin, Github } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Inicio', href: '/' },
    { name: 'Servicios', href: '/servicios' },
    { name: 'Portafolio', href: '/portafolio' },
    { name: 'Nosotros', href: '/nosotros' },
    { name: 'Contacto', href: '/contacto' }
  ];

  const services = [
    { name: 'Desarrollo Web', href: '/servicios' },
    { name: 'Aplicaciones Móviles', href: '/servicios' },
    { name: 'Software Personalizado', href: '/servicios' },
    { name: 'Consultoría IT', href: '/servicios' },
    { name: 'Soporte Técnico', href: '/servicios' },
    { name: 'Hosting y Dominio', href: '/servicios' }
  ];

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { 
      icon: Linkedin, 
      label: 'LinkedIn',
      subLinks: [
        { name: 'Ing Michael Coral', href: 'http://www.linkedin.com/in/maicol-coral-3626a4251' },  
        { name: 'Ing Sergio Muñoz', href: 'https://www.linkedin.com/in/sergio-mu%C3%B1oz-b75bba208/' }
      ]
    },
    { 
      icon: Github, 
      label: 'GitHub',
      subLinks: [
        { name: 'Ing Michael Coral', href: 'https://github.com/Mai1203' },
        { name: 'Ing Sergio Muñoz', href: 'https://github.com/Alg4ret3' }
      ]
    }
  ];

  return (
    <footer className="bg-tupla-dark text-white border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="space-y-6">
            <Link href="/" className="flex items-center group">
              <Image 
                src="/LogoBlanco.svg" 
                alt="TUPLΛ CΩRE" 
                width={220} 
                height={66} 
                className="h-14 w-auto object-contain group-hover:scale-105 transition-transform"
              />
            </Link>
            <p className="text-gray-400 dark:text-gray-500 leading-relaxed">
              Transformamos ideas innovadoras en soluciones digitales que impulsan 
              el crecimiento de tu negocio con tecnología de vanguardia.
            </p>
            <div className="space-y-3">
              <div className="flex items-center space-x-3 group">
                <div className="p-2 bg-white/5 rounded-lg group-hover:bg-tupla-primary/20 transition-colors">
                  <Mail className="h-4 w-4 text-tupla-accent" />
                </div>
                <span className="text-gray-400 group-hover:text-white transition-colors">tuplacore@gmail.com</span>
              </div>
              <div className="flex items-center space-x-3 group">
                <div className="p-2 bg-white/5 rounded-lg group-hover:bg-tupla-primary/20 transition-colors">
                  <Phone className="h-4 w-4 text-tupla-accent" />
                </div>
                <span className="text-gray-400 group-hover:text-white transition-colors">+57 (319) 314-2840</span>
              </div>
              <div className="flex items-center space-x-3 group">
                <div className="p-2 bg-white/5 rounded-lg group-hover:bg-tupla-primary/20 transition-colors">
                  <MapPin className="h-4 w-4 text-tupla-accent" />
                </div>
                <span className="text-gray-400 group-hover:text-white transition-colors">Ciudad de Pasto, Colombia</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-white">Enlaces Rápidos</h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-tupla-primary transition-all duration-300 flex items-center group"
                  >
                    <span className="w-0 group-hover:w-2 h-[1px] bg-tupla-primary mr-0 group-hover:mr-2 transition-all"></span>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-white">Servicios</h3>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <Link 
                    href={service.href}
                    className="text-gray-400 hover:text-tupla-accent transition-all duration-300 flex items-center group"
                  >
                    <span className="w-0 group-hover:w-2 h-[1px] bg-tupla-accent mr-0 group-hover:mr-2 transition-all"></span>
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-white">Síguenos</h3>
            <p className="text-gray-400">
              Mantente al día con las últimas tendencias tecnológicas y nuestros proyectos.
            </p>
            
            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => {
                const IconComponent = social.icon;
                
                if (social.subLinks) {
                  return (
                    <div key={index} className="relative group/parent">
                      <button
                        aria-label={social.label}
                        className="p-3 bg-white/5 rounded-xl hover:bg-tupla-primary transition-all duration-300 transform group-hover/parent:scale-110 group-hover/parent:bg-tupla-primary"
                      >
                        <IconComponent className="h-5 w-5 text-gray-400 group-hover/parent:text-white transition-colors" />
                      </button>
                      
                      {/* Hover Menu */}
                      <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-3 w-48 opacity-0 invisible group-hover/parent:opacity-100 group-hover/parent:visible transition-all duration-300 transform translate-y-2 group-hover/parent:translate-y-0 z-50">
                        <div className="bg-tupla-dark border border-white/10 rounded-xl shadow-2xl overflow-hidden p-1 backdrop-blur-xl">
                          {social.subLinks.map((sub, subIdx) => (
                            <Link
                              key={subIdx}
                              href={sub.href}
                              className="block px-4 py-2 text-sm text-gray-400 hover:text-white hover:bg-white/10 rounded-lg transition-colors"
                            >
                              {sub.name}
                            </Link>
                          ))}
                        </div>
                        {/* Arrow */}
                        <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-tupla-dark border-r border-b border-white/10 rotate-45"></div>
                      </div>
                    </div>
                  );
                }

                return (
                  <a
                    key={index}
                    href={social.href || '#'}
                    aria-label={social.label}
                    className="p-3 bg-white/5 rounded-xl hover:bg-tupla-primary transition-all duration-300 transform hover:scale-110 group"
                  >
                    <IconComponent className="h-5 w-5 text-gray-400 group-hover:text-white transition-colors" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-white/5">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 text-center md:text-left">
            <div className="text-gray-500 text-sm">
              © {currentYear} <span className="text-white font-medium font-audiowide">TUPLΛ CΩRE</span>. Todos los derechos reservados.
            </div>
            <div className="flex space-x-8 text-sm">
              <Link href="/privacidad" className="text-gray-500 hover:text-white transition-colors">
                Privacidad
              </Link>
              <Link href="/terminos" className="text-gray-500 hover:text-white transition-colors">
                Términos
              </Link>
              <Link href="/cookies" className="text-gray-500 hover:text-white transition-colors">
                Cookies
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;