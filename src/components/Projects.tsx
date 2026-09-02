import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface ProjectItem {
  title: string;
  description: string;
  url: string;
  Repo?: string;
  image: string;
  tags: string[];
  category: "Web" | "Mobile" | "Videojuegos" | "Sistemas";
}

const projects: ProjectItem[] = [
  {
    title: "Sistema de Control de Asistencia - UES",
    description:
      "Desarrollo integral (Hardware + Software) para el control de accesos mediante PIN. Incluye monitoreo en tiempo real, trazabilidad de usuarios y una API robusta.",
    url: "https://www.youtube.com/watch?v=5gGpnNZuT4E",
    Repo: "https://github.com/BamFavela17/GymUes-AccesControl.git",
    image: "/img/GymUes.png",
    tags: ["React", "Node.js", "PostgreSQL", "TailwindCSS", "API Rest"],
    category: "Sistemas",
  },
  {
    title: "Sistema de venta e inventario - Negocio de mariscos",
    description:
      "Sistema de gestión de ventas e inventario para un negocio de mariscos. Incluye autenticación de usuarios, panel administrativo y registro de ventas con reportes detallados.",
    url: "",
    Repo: "https://github.com/Yisus550/proy_caguamanta/tree/dev",
    image: "/img/ProyCahuamanta.png",
    tags: ["ASP.NET Core", "SQL Server", "Bootstrap", "MVC", "Entity Framework","DataAnnotations"],
    category: "Sistemas",
  },
  {
    title: "Plataformas Web - Secretaría de Economía",
    description:
      "Modernización de servicios digitales institucionales. Implementación de servidores SMTP, integración de WhatsApp API y optimización de flujos de usuario.",
    url: "https://coyotaschuyita.com/",
    Repo: "",
    image: "/img/ChuyitaPage.png",
    tags: ["WordPress", "SMTP", "APIs", "Server Management"],
    category: "Web",
  },
  {
    title: "Control de Inventario y Agenda de Rentas",
    description:
      "Arquitectura MVC para el control inventario de coches y agenda de rentas. Incluye autenticación de usuarios y panel administrativo para la gestión de clientes y vehículos.",
    url: "",
    Repo: "https://github.com/BamFavela17/rent_car_DA.git",
    image: "/img/RentCar.png",
    tags: ["Node.js", "PostgreSQL", "React/vite", "JWT", "Cookies","TailwindCSS", "API Rest","Express"],
    category: "Sistemas",
  },
  {
    title: "Planificate (Finanzas Personales)",
    description:
      "Aplicación móvil para la gestión de presupuestos. Utiliza persistencia de datos local para un rendimiento óptimo offline.",
    url: "",
    Repo: "https://github.com/BamFavela17/Planificador_Gastos.git",
    image: "/img/Planificador.png",
    tags: ["React Native", "AsyncStorage", "Expo"],
    category: "Mobile",
  },
  {
    title: "Invasión Covicho",
    description:
      "Videojuego 2D con enfoque educativo. Implementación de mecánicas de disparo, IA de enemigos y físicas personalizadas en Unity.",
    url: "",
    Repo: "https://github.com/BamFavela17/Invacion_Covicho_juego.git",
    image: "/img/invacionCovicho.png",
    tags: ["Unity", "C#", "GameDev", "2D Physics"],
    category: "Videojuegos",
  },
  {
    title: "Bienes Raíces - Administración",
    description:
      "Plataforma de gestión inmobiliaria con un backend robusto en PHP para la administración de propiedades y vendedores.",
    url: "",
    Repo: "https://github.com/BamFavela17/GestionPropiedades.git",
    image: "/img/BienesRaices.png",
    tags: ["PHP", "MySQL", "SASS", "GULP"],
    category: "Sistemas",
  },
  {
    title: "Vamos Turisteando",
    description:
      "Landing page diseñada para la promoción de servicios de una tourOperadora.",
    url: "https://vamosturistiando.netlify.app/",
    Repo: "",
    image: "/img/vamosTuristiando.png",
    tags: ["HTML", "CSS", "JS", "Responsive"],
    category: "Web",
  },
  {
    title: "Cafeteria Virtual (blog de cafe)",
    description:
      "Aplicacion web, que promociona un proyecto de cafetería, con un diseño moderno y atractivo",
    url: "https://blog-de-cafe-gray.vercel.app/index.html",
    Repo: "https://github.com/BamFavela17/blog_de_cafe.git",
    image: "/img/Cafe.png",
    tags: ["JavaScript", "Responsive", "CSS", "HTML"],
    category: "Web",
  },
  {
    title: "Tienda-GuitarLA",
    description:
      "Aplicacion web que simula el funcionamiento de una tienda virtual",
    url: "https://tienda-en-linea-wheat.vercel.app/",
    Repo: "https://github.com/BamFavela17/TiendaEnLinea.git",
    image: "/img/guitarLA.png",
    tags: ["React", "Responsive", "CSS", "JSON", "AsyncStorage"],
    category: "Web",
  },
  {
    title: "App de Ventas Alimentos",
    description:
      "Herramienta móvil para fuerza de ventas: registro de productos, gestión de cartera de clientes y analítica de ventas diaria.",
    url: "",
    Repo: "",
    image: "",
    tags: ["React Native", "Expo", "TailwindCSS", "AsyncStorage"],
    category: "Mobile",
  },
  {
    title: "App Chat-online",
    description:
      "Aplicacion de chat que crea una comunicacion ",
    url: "",
    Repo: "",
    image: "",
    tags: ["Kotlin", "AndroidStudio", "Google auth", "Firebase"],
    category: "Mobile",
  }
];

const Project: React.FC = () => {
  const [filter, setFilter] = useState<string>("Todos");
  const categories = ["Todos", "Web", "Mobile", "Sistemas", "Videojuegos"];

  const filteredProjects =
    filter === "Todos"
      ? projects
      : projects.filter((p) => p.category === filter);

  return (
    <section id="portfolio" className="py-20 bg-[#252a2e]">
      <div className="max-w-275 mx-auto px-5">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center text-white mb-8 uppercase tracking-widest"
        >
          Mi <span className="text-[#1CB698]">Portafolio</span>
        </motion.h2>

        <p className="text-gray-400 text-center mb-16 max-w-2xl mx-auto">
          A continuación, encontrarás una selección de proyectos que reflejan mi
          experiencia y habilidades en desarrollo web, móvil y de sistemas. Cada
          proyecto ha sido cuidadosamente diseñado y desarrollado para cumplir
          con los más altos estándares de calidad y funcionalidad.
        </p>

        {/* Botones de Filtro */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-6 py-2 rounded-full border-2 transition-all font-bold uppercase text-xs tracking-widest ${
                filter === cat
                  ? "bg-[#1CB698] border-[#1CB698] text-white"
                  : "border-gray-600 text-gray-400 hover:border-[#1CB698] hover:text-[#1CB698]"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid Animado */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.title}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="bg-[#252a2e] rounded-lg overflow-hidden shadow-2xl hover:-translate-y-2 transition-all duration-300 flex flex-col"
              >
                <div className="h-48 w-full overflow-hidden bg-[#1e2326]">
                  {project.image ? (
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                    />
                  ) : (
                    <div className="w-full h-full bg-linear-to-br from-[#1CB698]/20 to-[#1e2326] flex items-center justify-center">
                      <i className="fa-solid fa-laptop-code text-5xl text-[#1CB698]"></i>
                    </div>
                  )}
                </div>

                <div className="p-6 flex flex-col grow">
                  <h3 className="text-white text-xl font-bold mb-3">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 text-sm mb-4 leading-relaxed grow">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mt-auto">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[10px] bg-[#1CB698]/10 text-[#1CB698] px-2 py-1 rounded border border-[#1CB698]/30 font-bold uppercase"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="mt-4 flex flex-wrap gap-4">
                    {project.url && (
                      <a
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#1CB698] text-xs font-bold hover:underline inline-flex items-center gap-1"
                      >
                        VER PROYECTO{" "}
                        <i className="fa-solid fa-external-link text-[10px]"></i>
                      </a>
                    )}
                    {project.Repo && (
                      <a
                        href={project.Repo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#1CB698] text-xs font-bold hover:underline inline-flex items-center gap-1"
                      >
                        VER REPOSITORIO{" "}
                        <i className="fa-brands fa-github text-[12px]"></i>
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default Project;
