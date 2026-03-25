export interface ProjectModule {
  title: string;
  description: string;
}

export interface Engineer {
  name: string;
  role: string;
  github?: string;
  linkedin?: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  fullDescription: string;
  image: string;
  category: "web" | "mobile" | "software" | "ia";
  technologies: string[];
  duration: string;
  year: string;
  cost: string;
  demoUrl?: string;
  githubUrl?: string;
  videoUrl?: string;
  modules: ProjectModule[];
  engineers: Engineer[];
  gallery?: string[];
}

export const projectsData: Project[] = [
  {
    id: "ecommerce-modastyle",
    title: "E-Commerce ModaStyle",
    description: "Plataforma de comercio electrónico completa con panel de administración, pasarela de pagos y gestión de inventarios.",
    fullDescription: "ModaStyle es una solución integral de e-commerce diseñada para marcas de moda de alta gama. El proyecto se enfocó en crear una experiencia de usuario fluida, desde el descubrimiento del producto hasta el checkout seguro, integrando herramientas avanzadas de gestión de inventario y análisis de ventas en tiempo real.",
    image: "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800",
    category: "web",
    technologies: ["React", "Node.js", "MongoDB", "Stripe", "Tailwind CSS"],
    duration: "3 meses",
    year: "2024",
    cost: "$5,000 - $8,000 USD",
    demoUrl: "https://demo.modastyle.com",
    githubUrl: "https://github.com/tuplacore/modastyle",
    videoUrl: "https://youtube.com/watch?v=example1",
    modules: [
      { title: "Catálogo Inteligente", description: "Búsqueda avanzada con filtros dinámicos y recomendaciones basadas en IA. Sistema de categorización automática y gestión de inventario en tiempo real." },
      { title: "Pasarela de Pagos", description: "Integración segura con Stripe, PayPal y Apple Pay. Procesamiento PCI-DSS compliant con múltiples monedas." },
      { title: "Panel Administrativo", description: "Gestión completa de pedidos, usuarios y analíticas de ventas. Dashboard en tiempo real con reportes exportables." }
    ],
    engineers: [
      { name: "Sergio Marín", role: "Lead Fullstack Architect", github: "https://github.com/semarinv", linkedin: "https://linkedin.com/in/sergiomarinv" },
      { name: "Juan Pérez", role: "Backend Senior", github: "https://github.com/juanp", linkedin: "https://linkedin.com/in/juanperez" }
    ],
    gallery: [
      "https://images.pexels.com/photos/34577/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800"
    ]
  },
  {
    id: "fitness-tracker",
    title: "App Fitness Tracker",
    description: "Aplicación móvil para seguimiento de rutinas de ejercicio, nutrición y progreso personal con sincronización en la nube.",
    fullDescription: "Una herramienta potente para entusiastas del fitness que permite monitorear cada aspecto de su entrenamiento. Con integración de biometría y planes personalizados, se posiciona como una de las apps más completas del mercado local.",
    image: "https://images.pexels.com/photos/4164418/pexels-photo-4164418.jpeg?auto=compress&cs=tinysrgb&w=800",
    category: "mobile",
    technologies: ["React Native", "Firebase", "Redux", "Node.js"],
    duration: "4 meses",
    year: "2023",
    cost: "$4,000 - $6,000 USD",
    demoUrl: "https://play.google.com/store/apps/details?id=com.fitnesstracker",
    githubUrl: "https://github.com/tuplacore/fitness-app",
    videoUrl: "https://youtube.com/watch?v=example2",
    modules: [
      { title: "Seguimiento en Tiempo Real", description: "Uso de GPS y sensores para medir actividad física exacta. Integración con wearables y monitoreo de frecuencia cardíaca." },
      { title: "Planes Nutricionales", description: "Algoritmos que generan dietas basadas en objetivos calóricos. Base de datos de alimentos y recetas personalizadas." },
      { title: "Comunidad y Desafíos", description: "Competencias con amigos y seguimiento de hitos de progreso." }
    ],
    engineers: [
      { name: "Carlos López", role: "Mobile Specialist", github: "https://github.com/carlosl", linkedin: "https://linkedin.com/in/carloslopez" },
      { name: "María García", role: "Frontend Developer", github: "https://github.com/mariagarcia", linkedin: "https://linkedin.com/in/mariagarcia" }
    ],
    gallery: [
      "https://images.pexels.com/photos/4164418/pexels-photo-4164418.jpeg?auto=compress&cs=tinysrgb&w=800"
    ]
  },
  {
    id: "gestion-hospitalaria",
    title: "Gestión Hospitalaria",
    description: "Software integral para gestión de pacientes, citas médicas, historial clínico y facturación hospitalaria.",
    fullDescription: "Ecosistema robusto para la digitalización de procesos clínicos. Cumple con normativas internacionales de seguridad de datos de salud y optimiza la atención al paciente mediante turnos inteligentes.",
    image: "https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=800",
    category: "software",
    technologies: ["Python", "Django", "PostgreSQL", "Docker"],
    duration: "6 meses",
    year: "2023",
    cost: "$10,000 - $15,000 USD",
    githubUrl: "https://github.com/tuplacore/hospital-system",
    modules: [
      { title: "Historial Clínico Electrónico", description: "Centralización de datos médicos con encriptación de grado militar. Cumple con HIPAA y normativas locales de confidencialidad." },
      { title: "Módulo de Facturación", description: "Automatización de convenios con aseguradoras y reportes financieros. Integración con sistemas de seguros." },
      { title: "Gestión de Turnos", description: "Sistema inteligente de citas con notificaciones automáticas y optimización de horarios." }
    ],
    engineers: [
      { name: "Sergio Marín", role: "Architecture Lead", github: "https://github.com/semarinv", linkedin: "https://linkedin.com/in/sergiomarinv" },
      { name: "Dr. Ingeniero Sistemas", role: "DevOps Specialist", linkedin: "https://linkedin.com/in/dringsistemas" }
    ]
  },
  {
    id: "portal-inmobiliario",
    title: "Portal Inmobiliario",
    description: "Plataforma web para búsqueda y publicación de propiedades con mapas interactivos y tours virtuales.",
    fullDescription: "Sistema completo de gestión inmobiliaria con geolocalización avanzada y visualización 3D de propiedades. Conecta compradores, vendedores y agentes en un ecosistema digital eficiente.",
    image: "https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=800",
    category: "web",
    technologies: ["Next.js", "TypeScript", "Prisma", "MapBox", "Vercel"],
    duration: "2 meses",
    year: "2024",
    cost: "$3,500 - $5,500 USD",
    demoUrl: "https://portal-inmobiliario.demo.com",
    githubUrl: "https://github.com/tuplacore/real-estate-portal",
    modules: [
      { title: "Búsqueda Avanzada", description: "Filtros dinámicos por ubicación, precio, tipo de propiedad y características específicas." },
      { title: "Mapas Interactivos", description: "Visualización de propiedades en mapa con información completa al pasar el cursor." },
      { title: "Tours Virtuales 3D", description: "Experiencia inmersiva de recorrido virtual en 360° de las propiedades." }
    ],
    engineers: [
      { name: "Paula Ortiz", role: "Full Stack Developer", github: "https://github.com/paulaortiz", linkedin: "https://linkedin.com/in/paulaortiz" },
      { name: "Andrés Ramírez", role: "Frontend Lead", github: "https://github.com/andresramirez", linkedin: "https://linkedin.com/in/andresramirez" }
    ]
  },
  {
    id: "app-delivery",
    title: "App de Delivery",
    description: "Aplicación móvil para pedidos de comida con tracking en tiempo real, múltiples métodos de pago y calificaciones.",
    fullDescription: "Plataforma de delivery que conecta restaurantes, repartidores y clientes. Sistema de geolocalización en tiempo real, gestión de pedidos inteligente y análisis predictivo de demanda.",
    image: "https://images.pexels.com/photos/4393426/pexels-photo-4393426.jpeg?auto=compress&cs=tinysrgb&w=800",
    category: "mobile",
    technologies: ["Flutter", "Node.js", "Socket.io", "Google Maps API"],
    duration: "3 meses",
    year: "2024",
    cost: "$6,000 - $9,000 USD",
    demoUrl: "https://play.google.com/store/apps/details?id=com.delivery.app",
    githubUrl: "https://github.com/tuplacore/delivery-app",
    videoUrl: "https://youtube.com/watch?v=example3",
    modules: [
      { title: "Búsqueda de Restaurantes", description: "Catálogo dinámico con filtros por cuisine, horario y calificación." },
      { title: "Tracking en Tiempo Real", description: "Seguimiento GPS del repartidor con actualizaciones en vivo mediante WebSocket." },
      { title: "Múltiples Métodos de Pago", description: "Integración con tarjetas, billeteras digitales y pago contra entrega." }
    ],
    engineers: [
      { name: "Diego Franco", role: "Mobile Lead", github: "https://github.com/diegofranco", linkedin: "https://linkedin.com/in/diegofranco" },
      { name: "Laura Mendoza", role: "Backend Engineer", github: "https://github.com/lauramendoza", linkedin: "https://linkedin.com/in/lauramendoza" }
    ]
  },
  {
    id: "erp-empresarial",
    title: "ERP Empresarial",
    description: "Sistema de planificación de recursos empresariales con módulos de contabilidad, inventarios y recursos humanos.",
    fullDescription: "Solución ERP escalable y modular diseñada para empresas medianas y grandes. Integra procesos de negocio complejos con reportes analíticos avanzados y automatización de workflows.",
    image: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800",
    category: "software",
    technologies: ["Java", "Spring Boot", "Angular", "Oracle Database"],
    duration: "8 meses",
    year: "2023",
    cost: "$15,000 - $25,000 USD",
    githubUrl: "https://github.com/tuplacore/erp-system",
    modules: [
      { title: "Módulo de Contabilidad", description: "Gestión de comprobantes, diarios contables y estados financieros automáticos." },
      { title: "Gestión de Inventarios", description: "Control de stock en tiempo real, reorden automático y valuación de existencias." },
      { title: "Recursos Humanos", description: "Nómina, cálculo de prestaciones y evaluación de desempeño del personal." },
      { title: "Reportes y Analíticas", description: "Dashboards personalizables con KPIs de negocio en tiempo real." }
    ],
    engineers: [
      { name: "Sergio Marín", role: "Lead Architect", github: "https://github.com/semarinv", linkedin: "https://linkedin.com/in/sergiomarinv" },
      { name: "Ing. Miguel Santos", role: "Senior Backend Developer", github: "https://github.com/msantos", linkedin: "https://linkedin.com/in/miguelsantos" },
      { name: "Elena Vargas", role: "Database Specialist", github: "https://github.com/evargas", linkedin: "https://linkedin.com/in/elenavargas" }
    ]
  },
  {
    id: "sistema-ia-predicitvo",
    title: "Sistema IA Predictivo",
    description: "Plataforma de inteligencia artificial para predicción de patrones de comportamiento, análisis predictivo y automatización de decisiones empresariales.",
    fullDescription: "Sistema avanzado de machine learning que utiliza algoritmos de deep learning para predecir tendencias de mercado, comportamiento de clientes y optimización de procesos. Integra redes neuronales convolucionales y procesamiento de lenguaje natural para análisis complejos.",
    image: "https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=800",
    category: "ia",
    technologies: ["Python", "TensorFlow", "PyTorch", "FastAPI", "PostgreSQL", "Docker"],
    duration: "5 meses",
    year: "2024",
    cost: "$8,000 - $12,000 USD",
    githubUrl: "https://github.com/tuplacore/ai-predictive-system",
    videoUrl: "https://youtube.com/watch?v=example-ai",
    modules: [
      { title: "Model Training Pipeline", description: "Pipeline automatizado para entrenar, validar y desplegar modelos de ML. Incluye versionado de modelos y A/B testing." },
      { title: "Análisis Predictivo", description: "Algoritmos de predicción basados en redes neuronales profundas. Soporte para series temporales, clasificación y regresión." },
      { title: "API REST", description: "API escalable para inferencia en tiempo real. Soporta batches y streaming de datos." },
      { title: "Dashboard Analytics", description: "Visualización interactiva de resultados, métricas de modelo y monitoreo en tiempo real." }
    ],
    engineers: [
      { name: "Dr. Carlos Académico", role: "AI/ML Lead", github: "https://github.com/carlosai", linkedin: "https://linkedin.com/in/carlosacademico" },
      { name: "Sofia Data", role: "Data Scientist", github: "https://github.com/sofiadata", linkedin: "https://linkedin.com/in/sofiadata" },
      { name: "Roberto MLOps", role: "MLOps Engineer", github: "https://github.com/robertomlops", linkedin: "https://linkedin.com/in/robertomlops" }
    ],
    gallery: [
      "https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/8386434/pexels-photo-8386434.jpeg?auto=compress&cs=tinysrgb&w=800"
    ]
  }
];

/**
 * PLANTILLA PARA AGREGAR UN NUEVO PROYECTO
 * 
 * Copia el siguiente código al final del array projectsData[] y completa todos los campos
 */

/*
{
  // ID único del proyecto (sin espacios, guiones, lowercase)
  id: "nombre-proyecto",
  
  // Título corto del proyecto (será visible en las tarjetas)
  title: "Título del Proyecto",
  
  // Descripción corta (resumen para las tarjetas)
  description: "Descripción breve del proyecto en 1-2 líneas",
  
  // Descripción completa (aparece en la página de detalles)
  fullDescription: "Descripción detallada del proyecto. Aquí explicas qué es, su importancia y características principales...",
  
  // URL de la imagen principal (usar URLs de stock: pexels.com)
  image: "https://images.pexels.com/photos/...",
  
  // Categoría del proyecto (DEBE SER UNA DE ESTAS)
  category: "web", // o "mobile" o "software"
  
  // Array de tecnologías utilizadas (importante para filtros)
  technologies: ["React", "Node.js", "MongoDB", "Docker"],
  
  // Duración del proyecto (format: "X meses")
  duration: "3 meses",
  
  // Año de realización
  year: "2024",
  
  // Rango de costo estimado
  cost: "$5,000 - $8,000 USD",
  
  // URL de demo en vivo (OPCIONAL)
  demoUrl: "https://demo.ejemplo.com",
  
  // URL del repositorio GitHub (OPCIONAL)
  githubUrl: "https://github.com/tuplacore/proyecto",
  
  // URL del video de presentación (OPCIONAL)
  videoUrl: "https://youtube.com/watch?v=...",
  
  // Array de módulos principales del proyecto
  modules: [
    {
      title: "Nombre del Módulo",
      description: "Explicación detallada de qué hace este módulo y sus características..."
    },
    {
      title: "Otro Módulo",
      description: "Descripción de este módulo..."
    }
  ],
  
  // Array de ingenieros que trabajaron en el proyecto
  engineers: [
    {
      name: "Nombre Ingeniero",
      role: "Rol/Especialidad",
      github: "https://github.com/usuario",
      linkedin: "https://linkedin.com/in/usuario"
    },
    {
      name: "Otro Ingeniero",
      role: "Otro Rol",
      github: "https://github.com/usuario2",
      linkedin: "https://linkedin.com/in/usuario2"
    }
  ],
  
  // Array de imágenes galerías (OPCIONAL)
  gallery: [
    "https://images.pexels.com/photos/...",
    "https://images.pexels.com/photos/..."
  ]
}
*/
