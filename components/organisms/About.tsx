"use client";

import { Users, Target, Eye, Award, Code, Heart } from "lucide-react";
import { Card, CardContent } from "@/components/atoms/card";
import Image from "next/image";
import { motion } from "framer-motion";
import type { MotionProps } from "framer-motion";

const fadeUp = (delay = 0): MotionProps => ({
  initial: { opacity: 0, y: 50 },
  whileInView: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: 50 },
  transition: {
    duration: 0.8,
    delay,
    ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
  },
  viewport: { once: false, amount: 0.2 },
});

const About = () => {
  const values = [
    {
      icon: Code,
      title: "Excelencia Técnica",
      description:
        "Aplicamos tecnologías de vanguardia y buenas prácticas de desarrollo para crear soluciones robustas, escalables y eficientes.",
    },
    {
      icon: Users,
      title: "Colaboración Humana",
      description:
        "Construimos relaciones cercanas con nuestros clientes, entendiendo sus retos y trabajando juntos como un solo equipo.",
    },
    {
      icon: Award,
      title: "Compromiso y Responsabilidad",
      description:
        "Asumimos cada proyecto con seriedad, cumpliendo los plazos acordados y garantizando resultados de alto impacto.",
    },
    {
      icon: Heart,
      title: "Pasión por la Innovación",
      description:
        "Nos mueve el entusiasmo por la tecnología, la creatividad y el deseo constante de superar expectativas.",
    },
  ];

  const team = [
    {
      name: "Sergio Muñoz",
      role: "Full Stack Developer & AI Enthusiast",
      image: "/img/team/perfilsergio.webp",
      description:
        "Experiencia en desarrollo de soluciones web y móviles con React, React Native y Node.js, dominando Python, JavaScript y SQL. Manejo bases de datos relacionales y no relacionales, con un enfoque en crear aplicaciones eficientes, escalables y con una experiencia de usuario optimizada.",
    },
    {
      name: "Michael Coral",
      role: "Full stack Developer & Web and Mobile Frontend Developer",
      image: "/img/team/perfilmichael.webp",
      description:
        "Experiencia sólida en tecnologías frontend modernas dominas React, Next.js, React Native, HTML, CSS y JavaScript, que son tecnologías clave para la creación de interfaces web y móviles modernas.",
    },
  ];

  const stats = [
    { number: "10+", label: "Proyectos Completados" },
    { number: "10+", label: "Clientes Satisfechos" },
    { number: "2+", label: "Años de Experiencia" },
    { number: "94%", label: "Tasa de Satisfacción" },
  ];

  return (
    <section id="nosotros" className="py-20 bg-tupla-light dark:bg-tupla-dark/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div className="text-center mb-16" {...fadeUp(0)}>
          <div className="flex flex-col items-center mb-6">
            <span className="text-gray-500 uppercase tracking-widest text-sm mb-4">Conoce a</span>
            <Image 
              src="/logo.svg" 
              alt="TUPLΛ CΩRE" 
              width={320} 
              height={96} 
              className="h-20 w-auto object-contain dark:hidden"
            />
            <Image 
              src="/LogoBlanco.svg" 
              alt="TUPLΛ CΩRE" 
              width={320} 
              height={96} 
              className="h-20 w-auto object-contain hidden dark:block"
            />
          </div>
          <p className="text-xl text-gray-600 dark:text-white/70 max-w-3xl mx-auto leading-relaxed font-normal dark:font-medium">
            Somos un equipo apasionado por la tecnología y la innovación,
            comprometido con transformar tus ideas en soluciones digitales
            sólidas, funcionales y escalables, acompañamos a tu negocio en su
            evolución digital, impulsando su crecimiento y competitividad a
            través de la colaboración, el diseño centrado en el usuario y el uso
            estratégico de la tecnología.
          </p>
        </motion.div>

        {/* Mission & Vision */}
        <div className="grid lg:grid-cols-2 gap-12 mb-20">
          <motion.div {...fadeUp(0.1)}>
            <Card className="bg-white dark:bg-tupla-dark/60 shadow-lg hover:shadow-xl transition-all duration-300 group dark:border-white/10">
              <CardContent className="p-8">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="p-3 bg-gradient-to-br from-tupla-primary to-tupla-accent rounded-lg text-white">
                    <Target className="h-6 w-6" />
                  </div>
                  <h3 className="text-2xl font-bold text-tupla-dark dark:text-white">
                    Nuestra Misión
                  </h3>
                </div>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-lg">
                  Nuestra misión es empoderar a pequeñas y medianas empresas a
                  través del acceso democrático a la tecnología, ofreciendo
                  soluciones digitales de vanguardia, accesibles y de alta
                  calidad, nos comprometemos a impulsar su transformación
                  digital con herramientas innovadoras y profesionales, que les
                  permitan competir con confianza, adaptarse al cambio y
                  destacar en un mercado global cada vez más exigente.
                </p>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div {...fadeUp(0.2)}>
            <Card className="bg-white dark:bg-tupla-dark/60 shadow-lg hover:shadow-xl transition-all duration-300 group dark:border-white/10">
              <CardContent className="p-8">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="p-3 bg-gradient-to-br from-tupla-accent to-tupla-primary rounded-lg text-white">
                    <Eye className="h-6 w-6" />
                  </div>
                  <h3 className="text-2xl font-bold text-tupla-dark dark:text-white">
                    Nuestra Visión
                  </h3>
                </div>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-lg">
                  Nuestra visión es convertirnos en el aliado tecnológico de
                  confianza para las empresas que buscan innovar, crecer y
                  liderar en el entorno digital y Aspiramos a ser reconocidos
                  por nuestra excelencia técnica, nuestro compromiso genuino con
                  el cliente y nuestra capacidad para transformar ideas en
                  soluciones digitales exitosas, sostenibles y con impacto real.
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Values */}
        <div className="mb-20">
          <motion.h3
            className="text-3xl font-bold text-tupla-dark dark:text-white text-center mb-12"
            {...fadeUp(0)}
          >
            Nuestros Valores
          </motion.h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <motion.div key={index} {...fadeUp(0.1 * index)}>
                  <Card className="bg-white dark:bg-tupla-dark/60 shadow-lg hover:shadow-xl transition-all duration-300 group hover:-translate-y-2 dark:border-white/10">
                    <CardContent className="p-6 text-center">
                      <div className="mb-4">
                        <div className="inline-flex p-3 bg-gradient-to-br from-tupla-primary to-tupla-accent rounded-lg text-white group-hover:scale-110 transition-transform duration-300">
                          <IconComponent className="h-6 w-6" />
                        </div>
                      </div>
                      <h4 className="text-xl font-semibold text-tupla-dark dark:text-white mb-3">
                        {value.title}
                      </h4>
                      <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                        {value.description}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Team */}
        {/* Team */}
        <div className="mb-20">
          <motion.h3
            className="text-3xl font-bold text-tupla-dark dark:text-white text-center mb-12"
            {...fadeUp(0)}
          >
            Nuestro Equipo
          </motion.h3>
          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 justify-items-center">
            {team.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, rotateY: 90 }}
                whileInView={{ opacity: 1, rotateY: 0 }}
                transition={{
                  duration: 0.8,
                  delay: 0.15 * index,
                  ease: [0.16, 1, 0.3, 1],
                }}
                viewport={{ once: false, amount: 0.2 }}
              >
                <Card className="bg-white dark:bg-tupla-dark/60 w-full max-w-sm shadow-lg hover:shadow-xl transition-all duration-300 group overflow-hidden dark:border-white/10">
                  <div className="relative">
                    <Image
                      src={member.image}
                      width={400}
                      height={200}
                      alt={member.name}
                      className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-tupla-dark/50 to-transparent opacity-0 group-hover:opacity-100 group-hover:scale-110 transition-opacity duration-300" />
                    <div className="absolute bottom-2 left-5">
                      <h4 className="text-lg font-extrabold text-white mb-1">
                        {member.name}
                      </h4>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <p className="text-tupla-primary font-medium mb-3">
                      {member.role}
                    </p>
                    <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                      {member.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Stats */}
        <motion.div
          className="bg-white dark:bg-tupla-dark/60 rounded-2xl p-8 md:p-12 shadow-lg dark:border dark:border-white/10"
          {...fadeUp(0.3)}
        >
          <h3 className="text-3xl font-bold text-tupla-dark dark:text-white text-center mb-12">
            Nuestros Logros
          </h3>
          <div className="grid md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className="text-center group"
                {...fadeUp(0.1 * index)}
              >
                <div className="text-4xl md:text-5xl font-bold text-tupla-primary mb-2 group-hover:text-tupla-accent transition-colors duration-300">
                  {stat.number}
                </div>
                <div className="text-gray-600 dark:text-gray-400 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
