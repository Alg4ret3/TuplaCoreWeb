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
      "https://res.cloudinary.com/dqky6oqrd/image/upload/f_auto,q_auto,w_800,c_limit/v1774647012/w7dyk63arpdnmrrb4lvu.webp",
    category: "software",
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
      "https://res.cloudinary.com/dqky6oqrd/image/upload/f_auto,q_auto,w_800,c_limit/v1774647015/vvvpdmjzqoqyqpdl3snl.webp",
      "https://res.cloudinary.com/dqky6oqrd/image/upload/f_auto,q_auto,w_800,c_limit/v1774647014/sbpajym010vystinj6xq.webp",
      "https://res.cloudinary.com/dqky6oqrd/image/upload/f_auto,q_auto,w_800,c_limit/v1774647013/rwi4d4pxtfuradqevaux.webp",
    ],
  },
    {
    id: "gamification-app",
    title: "Gamification App",
    description:
      "Plataforma educativa gamificada con desafíos de programación interactivos, sistema de puntos y autenticación segura para potenciar el aprendizaje en código",
    fullDescription:
      "Esta aplicación de gamificación está orientada al aprendizaje de programación mediante mecánicas de juego. Los usuarios pueden autenticarse de forma segura, acceder a desafíos de código resolvibles desde un editor integrado directamente en el navegador, y obtener retroalimentación visual inmediata con animaciones y notificaciones. La plataforma utiliza Firebase como backend para la persistencia de datos en tiempo real, Clerk para la gestión de identidad y sesiones, y Phaser para elementos de juego 2D. Las animaciones fluidas con Framer Motion y GSAP ofrecen una experiencia visual envolvente. El proyecto está pensado para estudiantes y desarrolladores que quieren practicar habilidades de programación de forma entretenida y motivadora.",
    image:
      "https://cdn.jsdelivr.net/gh/Mai1203/cdn-images@main/proyectos/gamification-app/gamification-app1.webp",
    category: "web",
    technologies: [
      "Next.js",
      "TypeScript",
      "Firebase",
      "Clerk",
      "Phaser",
      "Framer Motion",
      "GSAP",
      "Tailwind CSS",
      "Monaco Editor",
    ],
    duration: "6 meses",
    year: "2025",
    cost: "3,000,000 - 5,000,000 COP",
    demoUrl: "https://edocode.vercel.app/",
    githubUrl: "",
    videoUrl: "",
    modules: [
      {
        title: "Sistema de Autenticación",
        description:
          "Gestión de identidad y sesiones mediante Clerk, con registro, inicio de sesión, protección de rutas por middleware y manejo de roles de usuario.",
      },
      {
        title: "Editor de Código Integrado",
        description:
          "Editor Monaco embebido directamente en el navegador con resaltado de sintaxis, soporte multilenguaje y ejecución de desafíos de programación en tiempo real.",
      },
      {
        title: "Motor de Juego 2D",
        description:
          "Integración con Phaser 3 para escenas interactivas, mecánicas de juego, control de sprites y lógica de niveles gamificados.",
      },
      {
        title: "Sistema de Puntos y Progreso",
        description:
          "Seguimiento del progreso del usuario, acumulación de puntos por desafíos completados y persistencia de datos en Firebase en tiempo real.",
      },
      {
        title: "Animaciones e Interfaz Visual",
        description:
          "Animaciones complejas con Framer Motion y GSAP, incluyendo transiciones entre pantallas, retroalimentación visual con Lottie y notificaciones con React Hot Toast.",
      },
      {
        title: "Protección de Rutas",
        description:
          "Middleware de Next.js integrado con Clerk para restringir el acceso a rutas protegidas según el estado de autenticación del usuario.",
      },
    ],
    engineers: [
      {
        name: "Michael Coral",
        role: "Fullstack & Computer Engineer",
        github: "https://github.com/Mai1203",
        linkedin: "https://linkedin.com/in/michaelcoral",
      },
    ],
    gallery: [
      "https://cdn.jsdelivr.net/gh/Mai1203/cdn-images@main/proyectos/gamification-app/gamification-app2.webp",
      "https://cdn.jsdelivr.net/gh/Mai1203/cdn-images@main/proyectos/gamification-app/gamification-app3.webp",
      "https://cdn.jsdelivr.net/gh/Mai1203/cdn-images@main/proyectos/gamification-app/gamification-app4.webp",
      "https://cdn.jsdelivr.net/gh/Mai1203/cdn-images@main/proyectos/gamification-app/gamification-app5.webp",
      "https://cdn.jsdelivr.net/gh/Mai1203/cdn-images@main/proyectos/gamification-app/gamification-app6.webp",
      "https://cdn.jsdelivr.net/gh/Mai1203/cdn-images@main/proyectos/gamification-app/gamification-app7.webp",
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
      "https://res.cloudinary.com/dqky6oqrd/image/upload/f_webp,q_auto,dpr_auto,w_1200,c_limit/v1774647580/s7dyruw9rjijxdfrfku8.png",
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
    gallery: [],
  },

  {
    id: "fundacion-campaes",
    title: "Fundacion Caminos de Paz",
    description:
      "Plataforma informativa para fundación, con banner principal, botón de WhatsApp, formulario de contacto conectado a correo, y mapa interactivo.",
    fullDescription:
      "Plataforma informativa para la Fundación Caminos de Paz, diseñada para dar visibilidad a sus proyectos y facilitar el contacto con  voluntarios. El sitio incluye un banner principal con información clave, un botón directo de WhatsApp para comunicación inmediata, un formulario de contacto que envía mensajes directamente al correo de la fundación y un mapa interactivo que muestra su ubicación. El diseño se centra en la claridad y accesibilidad, permitiendo a los visitantes conocer la labor de la organización y establecer contacto de manera sencilla.",
    image:
      "https://res.cloudinary.com/dqky6oqrd/image/upload/f_webp,q_auto:good,dpr_auto,w_1200,c_limit/v1774647564/n3q8szxnz2atayssz8a3.png",
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
      "https://res.cloudinary.com/dqky6oqrd/image/upload/f_webp,q_auto:good,dpr_auto,w_1200,c_limit/v1774647562/xg0vfz1d8rwezwehtbj3.png",
      "https://res.cloudinary.com/dqky6oqrd/image/upload/f_webp,q_auto:good,dpr_auto,w_1200,c_limit/v1774647561/flzqpnphxs4hhiozrfgm.png",
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
      "https://cdn.jsdelivr.net/gh/Mai1203/cdn-images@main/proyectos/vision-tree-pasto/vision-tree-pasto1.webp",
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
      "https://cdn.jsdelivr.net/gh/Mai1203/cdn-images@main/proyectos/vision-tree-pasto/vision-tree-pasto2.webp",
      "https://cdn.jsdelivr.net/gh/Mai1203/cdn-images@main/proyectos/vision-tree-pasto/vision-tree-pasto3.webp",
      "https://cdn.jsdelivr.net/gh/Mai1203/cdn-images@main/proyectos/vision-tree-pasto/vision-tree-pasto4.webp",
    ],
  },

  {
    id: "systock",
    title: "Systock",
    description:
      "Sistema de escritorio para gestión integral de inventarios y ventas con facturación electrónica, ventas a crédito, reportes avanzados y control de acceso seguro",
    fullDescription:
      "Systock es una aplicación de escritorio desarrollada en Python orientada a pequeños y medianos negocios que necesitan automatizar su operación comercial. Cuenta con un módulo de inventarios que permite escanear y generar códigos de barras, recibir alertas de stock en tiempo real y exportar datos a Excel o PDF. La facturación es ágil y precisa, permitiendo generar tickets y facturas electrónicas con cálculo automático de descuentos e impresión directa a impresoras locales. El sistema incluye un módulo de ventas a crédito con seguimiento de deudas, historial de pagos y notificaciones automáticas de recordatorios. Los reportes financieros se presentan con gráficos interactivos y pueden exportarse en múltiples formatos. Todo el sistema está protegido mediante autenticación JWT, cifrado de contraseñas con bcrypt, roles de usuario personalizados y registro de auditorías para garantizar la trazabilidad de cada operación.",
    image:
      "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800",
    category: "software",
    technologies: [
      "Python",
      "CustomTkinter",
      "SQLite",
      "JWT",
      "bcrypt",
      "ReportLab",
      "OpenPyXL",
      "Matplotlib",
      "PyInstaller",
    ],
    duration: "3 meses",
    year: "2025",
    cost: "4,000,000 - 6,000,000 COP",
    demoUrl: "",
    githubUrl: "",
    videoUrl: "",
    modules: [
      {
        title: "Gestión de Inventarios",
        description:
          "Registro, edición y eliminación de productos con soporte para escaneo y generación de códigos de barras, alertas de stock mínimo y exportación de datos a Excel y PDF.",
      },
      {
        title: "Facturación y Tickets",
        description:
          "Generación de facturas electrónicas y tickets de venta con cálculo automático de descuentos, subtotales e impuestos, e impresión directa a impresoras locales.",
      },
      {
        title: "Ventas a Crédito",
        description:
          "Registro y seguimiento de ventas a crédito, control de pagos parciales, historial de deudas por cliente y notificaciones automáticas de recordatorios de pago.",
      },
      {
        title: "Reportes y Análisis",
        description:
          "Generación de reportes financieros con gráficos interactivos, análisis detallado de inventarios y ventas, y exportación en formatos Excel y PDF.",
      },
      {
        title: "Seguridad y Control de Acceso",
        description:
          "Autenticación de usuarios mediante JWT, cifrado seguro de contraseñas con bcrypt, gestión de roles y permisos, y registro de auditorías para trazabilidad completa.",
      },
      {
        title: "Panel de Control",
        description:
          "Interfaz de escritorio centralizada con navegación por módulos, visualización de métricas clave en tiempo real y acceso rápido a las funciones más usadas del sistema.",
      },
    ],
    engineers: [
      {
        name: "Michael Coral",
        role: "Fullstack & Computer Engineer",
        github: "https://github.com/Mai1203",
        linkedin: "https://linkedin.com/in/michaelcoral",
      },
      {
        name: "Sergio Muñoz",
        role: "Computer Engineer | AI & Data Integration",
        github: "https://github.com/Alg4ret3",
        linkedin: "https://www.linkedin.com/in/sergio-muñoz-b75bba208",
      },
    ],
    gallery: [
      "https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/590016/pexels-photo-590016.jpeg?auto=compress&cs=tinysrgb&w=800",
    ],
  },
  {
    id: "aqueducto-manager",
    title: "Acueducto Manager",
    description:
      "Sistema web de administración integral para acueductos rurales con facturación mensual automatizada, control de morosidad, gestión de usuarios y panel financiero en tiempo real",
    fullDescription:
      "Acueducto Manager es una plataforma web diseñada específicamente para simplificar la administración de acueductos rurales. Cuenta con un dashboard financiero que muestra el estado general del sistema, ingresos, pagos recientes y métricas clave de un vistazo. Los administradores pueden gestionar el padrón completo de usuarios del acueducto, incluyendo sus datos personales y direcciones, así como configurar categorías tarifarias diferenciadas para servicios residenciales y comerciales. El módulo de facturación genera automáticamente los recibos mensuales para cada usuario, mientras que el módulo de pagos permite registrar abonos de forma ágil y llevar un control preciso de los usuarios en mora. El acceso al sistema está protegido mediante autenticación segura con Supabase y un esquema de roles que distingue entre administradores y cajeros, garantizando que cada perfil acceda únicamente a las funciones que le corresponden.",
    image:
      "https://cdn.jsdelivr.net/gh/Mai1203/cdn-images@main/proyectos/aqueducto-manager/aqueducto-manager1.webp",
    category: "web",
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Supabase",
      "Tailwind CSS",
      "Lucide React",
    ],
    duration: "2 meses",
    year: "2025",
    cost: "3,500,000 - 5,500,000 COP",
    demoUrl: "https://sfacueducto.vercel.app",
    githubUrl: "",
    videoUrl: "",
    modules: [
      {
        title: "Dashboard Financiero",
        description:
          "Panel principal con métricas clave en tiempo real: ingresos del período, total de pagos recibidos, usuarios en mora y resumen del estado financiero general del acueducto.",
      },
      {
        title: "Gestión de Usuarios",
        description:
          "CRUD completo de usuarios del acueducto con gestión de datos personales, direcciones y asignación de categoría tarifaria (residencial o comercial).",
      },
      {
        title: "Categorías Tarifarias",
        description:
          "Configuración y administración de tarifas diferenciadas por tipo de servicio, permitiendo asignar valores específicos a cada categoría de usuario del sistema.",
      },
      {
        title: "Facturación Mensual",
        description:
          "Generación automatizada de recibos mensuales por usuario, con seguimiento del estado de cada factura (pagada, pendiente, vencida) y acceso al historial de facturación.",
      },
      {
        title: "Registro de Pagos",
        description:
          "Módulo de caja para el registro rápido de pagos, consulta de facturas pendientes por usuario y control de morosidad con visualización de deudas acumuladas.",
      },
      {
        title: "Roles y Control de Acceso",
        description:
          "Sistema de autenticación segura con Supabase y gestión de roles (Administrador y Cajero), con middleware de Next.js que protege las rutas según el perfil del usuario autenticado.",
      },
    ],
    engineers: [
      {
        name: "Michael Coral",
        role: "Fullstack & Computer Engineer",
        github: "https://github.com/Mai1203",
        linkedin: "https://linkedin.com/in/michaelcoral",
      },
    ],
    gallery: [
      "https://cdn.jsdelivr.net/gh/Mai1203/cdn-images@main/proyectos/aqueducto-manager/aqueducto-manager2.webp",
      "https://cdn.jsdelivr.net/gh/Mai1203/cdn-images@main/proyectos/aqueducto-manager/aqueducto-manager3.webp",
      "https://cdn.jsdelivr.net/gh/Mai1203/cdn-images@main/proyectos/aqueducto-manager/aqueducto-manager4.webp",
      "https://cdn.jsdelivr.net/gh/Mai1203/cdn-images@main/proyectos/aqueducto-manager/aqueducto-manager5.webp",
    ],
  },
  {
    id: "sistema-ventas",
    title: "Sistema de Ventas",
    description:
      "Aplicación de escritorio para gestión integral de ventas e inventario con punto de venta, administración de clientes y proveedores, reportes en PDF y control de pagos",
    fullDescription:
      "Sistema de Ventas es una aplicación de escritorio desarrollada en Java que centraliza y automatiza los procesos comerciales de pequeños y medianos negocios. Ofrece un punto de venta (POS) ágil para procesar transacciones rápidamente, acompañado de un módulo de inventario con control total sobre productos, stock, precios y categorías. La gestión de clientes y proveedores permite mantener un directorio de contactos comerciales siempre actualizado. Cada venta queda registrada en un historial detallado de movimientos que facilita el seguimiento de abonos y cuentas pendientes. Los reportes y facturas se generan en PDF mediante iText, listos para imprimir o compartir. El sistema cuenta con paneles diferenciados para administradores y usuarios estándar, garantizando que cada rol acceda únicamente a las funciones que le corresponden mediante un login seguro.",
    image:
      "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800",
    category: "software",
    technologies: [
      "Java",
      "Java Swing",
      "SwingX",
      "MySQL",
      "JDBC",
      "iText 5",
      "Apache Ant",
    ],
    duration: "2 meses",
    year: "2023",
    cost: "2,000,000 - 3,500,000 COP",
    demoUrl: "",
    githubUrl: "",
    videoUrl: "",
    modules: [
      {
        title: "Punto de Venta (POS)",
        description:
          "Interfaz intuitiva para registrar ventas de forma rápida, seleccionar productos del inventario, aplicar descuentos y calcular totales automáticamente.",
      },
      {
        title: "Gestión de Inventario",
        description:
          "CRUD completo de productos con control de stock, precios y categorías, con alertas visuales para productos con bajo inventario.",
      },
      {
        title: "Clientes y Proveedores",
        description:
          "Administración del directorio de clientes y proveedores con historial de transacciones, saldos pendientes y datos de contacto.",
      },
      {
        title: "Pagos y Abonos",
        description:
          "Sistema de registro de pagos parciales y abonos, con seguimiento de cuentas pendientes y visualización del saldo de cada cliente.",
      },
      {
        title: "Reportes y Facturación PDF",
        description:
          "Generación dinámica de facturas y reportes de ventas exportables en formato PDF mediante la librería iText, listos para impresión.",
      },
      {
        title: "Autenticación y Roles",
        description:
          "Login seguro con roles diferenciados (Administrador y Usuario), con paneles y permisos de acceso distintos según el perfil autenticado.",
      },
    ],
    engineers: [
      {
        name: "Michael Coral",
        role: "Fullstack & Computer Engineer",
        github: "https://github.com/Mai1203",
        linkedin: "https://linkedin.com/in/michaelcoral",
      },
    ],
    gallery: [
      "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=800",
    ],
  },
  {
    id: "powergym",
    title: "PowerGym",
    description:
      "Sistema web de gestión integral para gimnasios con dashboard administrativo, planes de membresía, caja financiera, control de acceso por roles y animaciones modernas",
    fullDescription:
      "PowerGym es una plataforma web completa diseñada para centralizar la administración de gimnasios. Su dashboard muestra KPIs en tiempo real como ingresos, check-ins activos, suscripciones vigentes y próximos vencimientos, acompañados de gráficos de tendencias. El módulo de usuarios permite gestionar el padrón completo de miembros con búsquedas avanzadas, historial de pagos, check-ins y estados de membresía actualizados. Los planes de membresía son totalmente configurables, con características personalizadas, estadísticas de suscripciones e ingresos por plan. La caja administrativa centraliza las transacciones diarias, el cierre de caja automático y la exportación de reportes financieros. El sistema de autenticación con NextAuth.js y validación con Zod garantiza la seguridad de los datos, con roles diferenciados para Administradores, Staff y Usuarios. La interfaz cuenta con un tema oscuro elegante, animaciones fluidas con Framer Motion y diseño completamente responsive, construida sobre una arquitectura robusta con PostgreSQL y Prisma ORM.",
    image:
      "https://cdn.jsdelivr.net/gh/Mai1203/cdn-images@main/proyectos/powergym/power-gym1.webp",
    category: "web",
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "PostgreSQL",
      "Prisma",
      "NextAuth.js",
      "Tailwind CSS",
      "Framer Motion",
      "Shadcn/ui",
      "Zod",
      "Jest",
    ],
    duration: "3 meses",
    year: "2025",
    cost: "4,500,000 - 7,000,000 COP",
    demoUrl: "https://powergym-gamma.vercel.app",
    githubUrl: "",
    videoUrl: "https://www.youtube.com/watch?v=qN0j-x3KipY",
    modules: [
      {
        title: "Dashboard Administrativo",
        description:
          "Panel principal con KPIs en tiempo real: ingresos del período, check-ins activos, suscripciones vigentes y próximos vencimientos, con gráficos de tendencias y actividad reciente.",
      },
      {
        title: "Gestión de Usuarios",
        description:
          "CRUD completo de miembros del gimnasio con búsqueda y filtros avanzados, visualización de historial de pagos, registro de check-ins y control del estado de membresía.",
      },
      {
        title: "Planes de Membresía",
        description:
          "Creación y administración de planes personalizables con características configurables, precios, estadísticas de suscripciones activas e ingresos generados por plan.",
      },
      {
        title: "Caja Administrativa",
        description:
          "Registro de transacciones diarias, cierre de caja automático, reportes financieros por período y exportación de datos para análisis contable.",
      },
      {
        title: "Autenticación y Roles",
        description:
          "Sistema de autenticación basado en JWT con NextAuth.js, control de acceso por roles (Admin, Staff, Usuario), validación de datos con Zod y protección CSRF en formularios.",
      },
      {
        title: "Testing y Calidad de Código",
        description:
          "Suite de pruebas unitarias e integración con Jest y React Testing Library sobre componentes, servicios y endpoints de la API, complementada con ESLint y Prettier.",
      },
    ],
    engineers: [
      {
        name: "Michael Coral",
        role: "Fullstack & Computer Engineer",
        github: "https://github.com/Mai1203",
        linkedin: "https://linkedin.com/in/michaelcoral",
      },
      {
        name: "Sergio Muñoz",
        role: "Computer Engineer | AI & Data Integration",
        github: "https://github.com/Alg4ret3",
        linkedin: "https://www.linkedin.com/in/sergio-muñoz-b75bba208",
      },
    ],
    gallery: [
      "https://cdn.jsdelivr.net/gh/Mai1203/cdn-images@main/proyectos/powergym/power-gym2.webp",
      "https://cdn.jsdelivr.net/gh/Mai1203/cdn-images@main/proyectos/powergym/power-gym3.webp",
      "https://cdn.jsdelivr.net/gh/Mai1203/cdn-images@main/proyectos/powergym/power-gym4.webp",
      "https://cdn.jsdelivr.net/gh/Mai1203/cdn-images@main/proyectos/powergym/power-gym5.webp",
      "https://cdn.jsdelivr.net/gh/Mai1203/cdn-images@main/proyectos/powergym/power-gym6.webp",
      "https://cdn.jsdelivr.net/gh/Mai1203/cdn-images@main/proyectos/powergym/power-gym7.webp",
    ],
  },
    {
    id: "reserva-plus",
    title: "ReservaPlus",
    description:
      "Sistema de reservas para gimnasio, comidas y más, con inicio de sesión, panel de administración y gestión completa mediante CRUD.",
    fullDescription:
      "Un sistema de reservas integral que permite a los usuarios registrarse e iniciar sesión para gestionar sus reservas de manera segura y personalizada. La plataforma está diseñada para cubrir múltiples servicios como gimnasio, comidas y actividades adicionales, ofreciendo un catálogo organizado por categorías y subcategorías. El panel de administración brinda herramientas completas para crear, editar, eliminar y actualizar (CRUD) tanto usuarios como reservas, garantizando un control eficiente de la información. Además, incluye funciones de restablecimiento de contraseña, gestión de disponibilidad en tiempo real y una interfaz intuitiva que facilita la experiencia tanto para clientes como para administradores.",
    image: "",
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
    gallery: [],
  },
];
