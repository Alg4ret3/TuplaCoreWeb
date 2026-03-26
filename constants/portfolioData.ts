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
    id: "nail-store",
    title: "NailStore",
    description:
      "Plataforma de comercio electrónico integral con panel de administración, pasarela de pagos segura y gestión eficiente de inventarios",
    fullDescription:
      "Esta tienda online cuenta con un banner principal que destaca promociones y productos estrella, acompañado de un catálogo organizado por categorías y subcategorías (por ejemplo: esmaltes, herramientas, decoración, cuidado de uñas). Los usuarios pueden crear una cuenta e iniciar sesión, con opciones de restablecimiento de contraseña para mayor seguridad. El sistema incluye un carrito de compras donde se pueden añadir, modificar o eliminar productos antes de finalizar la compra. Además, la plataforma ofrece una navegación intuitiva, filtros de búsqueda, y un diseño pensado para que tanto profesionales como clientes encuentren fácilmente lo que necesitan. Todo está orientado a brindar una experiencia de compra rápida, segura y eficiente, con un enfoque en la distribución especializada de productos para uñas.",
    image:
      "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800",
    category: "web",
    technologies: [
      "Medusa.js",
      "Next.js",
      "PostgreSQL",
      "Wompi",
      "Tailwind CSS",
    ],
    duration: "3 meses",
    year: "2026",
    cost: "8,000,000 - 10,000,000 COP",
    demoUrl: "https://ladynails.vercel.app/",
    githubUrl: "",
    videoUrl: "",
    modules: [
      {
        title: "Gestión de Productos",
        description:
          "CRUD de productos con categorización jerárquica (categorías y subcategorías), control de inventario y atributos dinámicos.",
      },
      {
        title: "Sistema de Autenticación",
        description:
          "Registro, inicio de sesión y recuperación de contraseña mediante tokens seguros (JWT), con manejo de sesiones y roles de usuario.",
      },
      {
        title: "Carrito de Compras",
        description:
          "Lógica de persistencia de carrito (usuario o sesión), actualización de cantidades, eliminación de productos y cálculo automático de totales.",
      },
      {
        title: "Motor de Búsqueda y Filtros",
        description:
          "Búsqueda optimizada por texto y filtros dinámicos por categoría, precio y atributos, con consultas eficientes a base de datos.",
      },
      {
        title: "Gestión de Pedidos",
        description:
          "Creación y seguimiento de órdenes, estados de pedido (pendiente, pagado, enviado), y asociación con usuarios y productos.",
      },
      {
        title: "Procesamiento de Pagos",
        description:
          "Integración con pasarelas de pago, validación de transacciones y manejo de estados de pago de forma segura.",
      },
      {
        title: "Panel Administrativo",
        description:
          "Gestión centralizada de productos, usuarios y pedidos, con métricas básicas y control operativo del sistema.",
      },
    ],
    engineers: [
      {
        name: "Sergio Muñoz",
        role: "Frontend & Computer Engineer",
        github: "https://github.com/Alg4ret3",
        linkedin: "https://www.linkedin.com/in/sergio-muñoz-b75bba208",
      },
      {
        name: "Michael Coral",
        role: "Backend & Computer Engineer",
        github: "https://github.com/Mai1203",
        linkedin: "https://linkedin.com/in/michaelcoral",
      },
    ],
    gallery: [
      "https://images.pexels.com/photos/34577/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800",
    ],
  },
  {
    id: "reserva-plus",
    title: "ReservaPlus",
    description:
      "Sistema de reservas para gimnasio, comidas y más, con inicio de sesión, panel de administración y gestión completa mediante CRUD.",
    fullDescription:
      "Un sistema de reservas integral que permite a los usuarios registrarse e iniciar sesión para gestionar sus reservas de manera segura y personalizada. La plataforma está diseñada para cubrir múltiples servicios como gimnasio, comidas y actividades adicionales, ofreciendo un catálogo organizado por categorías y subcategorías. El panel de administración brinda herramientas completas para crear, editar, eliminar y actualizar (CRUD) tanto usuarios como reservas, garantizando un control eficiente de la información. Además, incluye funciones de restablecimiento de contraseña, gestión de disponibilidad en tiempo real y una interfaz intuitiva que facilita la experiencia tanto para clientes como para administradores.",
    image:
      "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800",
    category: "web",
    technologies: ["Spring Boot", "Angular", "PostgreSQL"],
    duration: "1 mes",
    year: "2026",
    cost: "3,000,000 - 5,000,000 COP",
    demoUrl: "https://ladynails.vercel.app/",
    githubUrl: "",
    videoUrl: "",
    modules: [
      {
        title: "Sistema de Autenticación",
        description:
          "Registro de usuarios, inicio de sesión seguro y recuperación de contraseña, con manejo de roles y permisos.",
      },
      {
        title: "Panel Administrativo",
        description:
          "Gestión centralizada con CRUD completo (crear, editar, eliminar) de reservas, servicios y usuarios.",
      },
      {
        title: "Notificaciones",
        description:
          "Alertas automáticas al crear, editar o eliminar registros, con envío por correo o dentro del sistema.",
      },
    ],
    engineers: [
      {
        name: "Sergio Muñoz",
        role: "Frontend & Computer Engineer",
        github: "https://github.com/Alg4ret3",
        linkedin: "https://www.linkedin.com/in/sergio-muñoz-b75bba208",
      },
      {
        name: "Michael Coral",
        role: "Backend & Computer Engineer",
        github: "https://github.com/Mai1203",
        linkedin: "https://linkedin.com/in/michaelcoral",
      },
    ],
    gallery: [
      "https://images.pexels.com/photos/34577/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800",
    ],
  },
  {
    id: "gym-tracker",
    title: "GymTracker",
    description:
      "Gym Tracker sin base de datos, conectado a Google Sheets, con login personal, creación y seguimiento de ejercicios por series y repeticiones, filtros de progreso y registro de pesos.",
    fullDescription:
      "Un sistema de seguimiento de entrenamiento enfocado en ejercicios de gimnasio, que funciona directamente sobre Google Sheets en lugar de una base de datos tradicional. Cada usuario puede loguearse y llevar su propio historial, marcando los ejercicios realizados, las series, repeticiones y el peso utilizado. La plataforma permite crear y visualizar rutinas personalizadas, aplicar filtros dinámicos para revisar el progreso a lo largo del tiempo y evitar olvidar cargas anteriores. El enfoque está en la simplicidad y accesibilidad: todo se gestiona desde un panel conectado a Google Sheets, lo que facilita la administración sin necesidad de infraestructura compleja.",
    image:
      "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800",
    category: "web",
    technologies: ["Javascript", "Typescript", "Google Sheets"],
    duration: "1 mes",
    year: "2026",
    cost: "3,000,000 - 5,000,000 COP",
    demoUrl: "https://gymtracker-kappa.vercel.app/",
    githubUrl: "",
    videoUrl: "",
    modules: [
      {
        title: "Sistema de Autenticación",
        description:
          "Login de usuario para acceder a su propio registro de ejercicios y progreso.",
      },
      {
        title: "Gestión de Ejercicios",
        description:
          "Creación y edición de rutinas con series, repeticiones y pesos, adaptadas a cada usuario.",
      },
      {
        title: "Seguimiento de Progreso",
        description:
          "Filtros para visualizar avances en tiempo, repeticiones y cargas, con historial conectado a Google Sheets.",
      },
      {
        title: "Panel Administrativo",
        description:
          "Gestión básica de usuarios y ejercicios, con CRUD sobre rutinas y registros.",
      },
      {
        title: "Notificaciones",
        description:
          "Alertas al crear, editar o eliminar ejercicios, ayudando a mantener actualizado el progreso.",
      },
    ],
    engineers: [
      {
        name: "Sergio Muñoz",
        role: "FullStack & Computer Engineer",
        github: "https://github.com/Alg4ret3",
        linkedin: "https://www.linkedin.com/in/sergio-muñoz-b75bba208",
      },
    ],
    gallery: [
      "https://images.pexels.com/photos/34577/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800",
    ],
  },
  {
    id: "fundacion-campaes",
    title: "Fundacion Caminos de Paz",
    description:
      "Plataforma informativa para fundación, con banner principal, botón de WhatsApp, formulario de contacto conectado a correo, y mapa interactivo.",
    fullDescription:
      "Plataforma informativa para la Fundación Caminos de Paz, diseñada para dar visibilidad a sus proyectos y facilitar el contacto con  voluntarios. El sitio incluye un banner principal con información clave, un botón directo de WhatsApp para comunicación inmediata, un formulario de contacto que envía mensajes directamente al correo de la fundación y un mapa interactivo que muestra su ubicación. El diseño se centra en la claridad y accesibilidad, permitiendo a los visitantes conocer la labor de la organización y establecer contacto de manera sencilla.",
    image:
      "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800",
    category: "web",
    technologies: ["Vite", "Typescript", "EmailJS"],
    duration: "2 meses",
    year: "2025",
    cost: "3,000,000 - 5,000,000 COP",
    demoUrl: "https://www.funpazyesperanza.org/",
    githubUrl: "",
    videoUrl: "",
    modules: [
      {
        title: "Banner Principal",
        description:
          "Sección destacada con imagen y mensaje institucional para comunicar la misión de la fundación.",
      },
      {
        title: "Botón de WhatsApp",
        description:
          "Acceso rápido a contacto directo vía WhatsApp para consultas y comunicación inmediata.",
      },
      {
        title: "Formulario de Contacto",
        description:
          "Formulario conectado al correo electrónico de la fundación para recibir mensajes y solicitudes.",
      },
      {
        title: "Mapa Interactivo",
        description:
          "Integración de mapa dinámico que muestra la ubicación de la fundación y facilita la llegada de visitantes.",
      },
    ],
    engineers: [
      {
        name: "Sergio Muñoz",
        role: "FullStack & Computer Engineer",
        github: "https://github.com/Alg4ret3",
        linkedin: "https://www.linkedin.com/in/sergio-muñoz-b75bba208",
      },
    ],
    gallery: [
      "https://images.pexels.com/photos/34577/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800",
    ],
  },
  {
    id: "vision-tree-pasto",
    title: "Vision Tree Pasto",
    description:
      "Plataforma web con inteligencia artificial que, mediante fotos, reconoce especies de árboles y muestra información detallada.",
    fullDescription:
      "Un sistema web innovador que utiliza un modelo de Machine Learning entrenado en imágenes de árboles para identificar especies a partir de fotografías cargadas por el usuario. La plataforma permite loguearse para llevar un historial personal de consultas y resultados El usuario puede subir una foto del árbol y el sistema procesa la imagen para devolver la especie identificada, junto con datos relevantes como nombre científico, características principales y distribución geográfica. Además, cuenta con un panel administrativo para gestionar usuarios, entrenar o actualizar el modelo y mantener la base de conocimiento. La experiencia se complementa con filtros y reportes, que permiten ver estadísticas de identificación, historial de imágenes analizadas y métricas de precisión del modelo",
    image:
      "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800",
    category: "ia",
    technologies: [
      "Python",
      "TensorFlow",
      "CUDA",
      "Flask",
      "Next.js",
      "Typescript",
      "Docker",
      "Detectron2",
    ],
    duration: "4 meses",
    year: "2025",
    cost: "15,000,000 - 20,000,000 COP",
    demoUrl: "https://www.visiontreepasto.com/",
    githubUrl: "",
    videoUrl: "",
    modules: [
      {
        title: "Sistema de Autenticación",
        description:
          "Registro e inicio de sesión para que cada usuario tenga su propio historial de imágenes analizadas y resultados.",
      },
      {
        title: "Carga de Imágenes",
        description:
          "Interfaz para subir fotos de árboles; las imágenes se envían al modelo de Machine Learning para su procesamiento.",
      },
      {
        title: "Procesamiento con Machine Learning",
        description:
          "Módulo central que clasifica la especie del árbol a partir de la foto, utilizando un modelo entrenado en reconocimiento de imágenes.",
      },
      {
        title: "Resultados y Conocimiento",
        description:
          "Presentación de la especie identificada junto con nombre científico, características principales y distribución geográfica.",
      },
      {
        title: "Historial de Usuario",
        description:
          "Registro de todas las imágenes analizadas por cada usuario, con filtros para revisar consultas anteriores y progreso.",
      },
      {
        title: "Panel Administrativo",
        description:
          "Gestión de usuarios, control de imágenes analizadas y actualización del modelo de Machine Learning con nuevos datos.",
      },
      {
        title: "Reportes y Métricas",
        description:
          "Estadísticas de precisión del modelo, cantidad de imágenes procesadas y métricas de uso por usuario.",
      },
      {
        title: "Notificaciones",
        description:
          "Alertas automáticas al subir imágenes, recibir resultados o cuando se actualiza el modelo.",
      },
    ],
    engineers: [
      {
        name: "Sergio Muñoz",
        role: "Computer Engineer | AI & Data Integration",
        github: "https://github.com/Alg4ret3",
        linkedin: "https://www.linkedin.com/in/sergio-muñoz-b75bba208",
      },
    ],
    gallery: [
      "https://images.pexels.com/photos/34577/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800",
    ],
  },
];
