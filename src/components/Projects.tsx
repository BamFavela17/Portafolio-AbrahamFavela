import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface ProjectItem {
  title: string;
  description: string;
  url: string;
  image: string;
  tags: string[];
  category: "Web" | "Mobile" | "Videojuegos" | "Sistemas";
}

const projects: ProjectItem[] = [
  {
    title: "Aplicación de Alertas Escolares - Exelsium",
    description: "Optimización de experiencia de usuario y eficiencia operativa mediante módulos de carga de datos masivos con Blazor.",
    url: "",
    image: "",
    tags: ["Blazor", "C#", "SQL Server", "UI/UX"],
    category: "Sistemas",
  },
  {
    title: "Gestión de Inventarios - Tostitos El Rey",
    description: "Sistema integral desarrollado en ASP.NET para el control de existencias y optimización operativa.",
    url: "",
    image: "",
    tags: ["ASP.NET", "MVC", "C#", "SQL server"],
    category: "Sistemas",
  },
  {
    title: "Plataformas Web - Secretaría de Economía",
    description: "Desarrollo con enfoque en UX, configuración de servidores SMTP y automatización de comunicación vía WhatsApp API.",
    url: "",
    image: "",
    tags: ["WordPress", "SMTP", "APIs", "WhatsApp Integration"],
    category: "Web",
  },
  {
    title: "Sistema de Gestión de Gimnasio (UES)",
    description: "Control de accesos mediante tecnologías NFC/PIN y monitoreo de flujo de usuarios en tiempo real.",
    url: "",
    image: "",
    tags: ["React Native", "NFC", "Backend", "Hardware Integration", "PostgreSQL"],
    category: "Sistemas",
  },
  {
    title: "Invasión Covicho",
    description: "Videojuego 2D desarrollado en Unity inspirado en mecánicas de combate y físicas personalizadas.",
    url: "",
    image: "",
    tags: ["Unity", "C#", "GameDev", "2D Physics"],
    category: "Videojuegos",
  },
  {
    title: "Vamos Turisteando",
    description: "Landing page diseñada para la promoción de servicios de una operadora de tours turísticos.",
    url: "https://vamosturistiando.netlify.app/",
    image: "",
    tags: ["HTML", "CSS", "JS", "Responsive"],
    category: "Web",
  },
  {
    title: "Planificate",
    description: "Aplicación móvil diseñada para la planificación de gastos personales basada en presupuestos definidos.",
    url: "",
    image: "",
    tags: ["React Native", "CSS", "Mobile"],
    category: "Mobile",
  },
  {
    title: "Chat En Linea",
    description: "Aplicación móvil de mensajeria inmediata con autenticacion de usarios",
    url: "",
    image: "",
    tags: ["Kotlin", "FireBase", "Mobile"],
    category: "Mobile",
  },
  {
    title: "Festival de Música",
    description: "Aplicación web para la simulación de publicidad y gestión de venta de boletos para eventos masivos.",
    url: "https://festival-musica-sass-web.netlify.app/",
    image: "",
    tags: ["GULP", "SASS", "JAVASCRIPT", "HTML", "Responsive"],
    category: "Web",
  },
  {
    title: "Bienes Raíces - Administración",
    description: "Aplicación web diseñada para la gestión y administración de propiedades inmobiliarias y clientes.",
    url: "",
    image: "",
    tags: ["GULP", "SASS", "JAVASCRIPT", "HTML", "Responsive", "MySql"],
    category: "Web",
  },
];

const Project: React.FC = () => {
  const [filter, setFilter] = useState<string>("Todos");
  const categories = ["Todos", "Web", "Mobile", "Sistemas", "Videojuegos"];

  const filteredProjects = filter === "Todos" 
    ? projects 
    : projects.filter(p => p.category === filter);

  return (
    <section id="portfolio" className="py-20 bg-[#1e2326]">
      <div className="max-w-[1100px] mx-auto px-5">
        <motion.h2 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center text-white mb-8 uppercase tracking-widest"
        >
          Mi <span className="text-[#1CB698]">Portafolio</span>
        </motion.h2>

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
                    <div className="w-full h-full bg-gradient-to-br from-[#1CB698]/20 to-[#1e2326] flex items-center justify-center">
                      <i className="fa-solid fa-laptop-code text-5xl text-[#1CB698]"></i>
                    </div>
                  )}
                </div>

                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-white text-xl font-bold mb-3">{project.title}</h3>
                  <p className="text-gray-400 text-sm mb-4 leading-relaxed flex-grow">
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

                  {project.url && (
                    <a 
                      href={project.url} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="mt-4 text-[#1CB698] text-xs font-bold hover:underline inline-flex items-center gap-1"
                    >
                      VER PROYECTO <i className="fa-solid fa-external-link text-[10px]"></i>
                    </a>
                  )}
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