import React from "react";
import { motion } from "framer-motion";

interface TimelineItem {
  title: string;
  company: string;
  period: string;
  description: string;
  type: "work" | "education" | "course";
}

const resumeData: TimelineItem[] = [
  {
    title: "Desarrollo de Aplicaciones",
    company: "Exelsium",
    period: "11/2025 - 5/2026",
    description: "Colaboración en la mejora de diseño y funcionalidad de aplicaciones de alertas escolares. Desarrollo de módulos de gestión de datos mediante el framework Blazor, optimizando la experiencia de usuario y eficiencia operativa.",
    type: "work",
  },
  {
    title: "Lead Developer (Proyecto GymUes)",
    company: "Universidad Estatal de Sonora",
    period: "02/2026 - 05/2026",
    description: "Liderazgo en el desarrollo de una plataforma de gestión y control de acceso para el gimnasio universitario, integrando códigos QR y seguimiento automatizado de historial.",
    type: "work",
  },
  {
    title: "Desarrollador Web Freelance",
    company: "Proyectos Independientes",
    period: "05/2024 - Presente",
    description: "Diseño e implementación de soluciones web a medida y responsivas para diversos sectores, gestionando el ciclo completo desde requerimientos hasta el mantenimiento post-lanzamiento.",
    type: "work",
  },
  {
    title: "Sistema de Gestión de Inventarios",
    company: "Tostitos El Rey",
    period: "2024",
    description: "Diseño y ejecución de un sistema integral basado en ASP.NET para el control de existencias, optimizando la operatividad de la empresa.",
    type: "work",
  },
  {
    title: "Ingeniería en Software",
    company: "Universidad Estatal de Sonora (UES)",
    period: "08/2021 - 11/2026",
    description: "Estudiante de último año con enfoque en desarrollo Full-Stack, arquitecturas escalables y gestión avanzada de bases de datos relacionales y NoSQL.",
    type: "education",
  },
  {
    title: "Certificación: Desarrollo Web Completo",
    company: "Udemy Certified",
    period: "2023 - 2024",
    description: "Especialización técnica en HTML5, CSS3, JavaScript, AJAX, PHP y MySQL para la creación de aplicaciones dinámicas.",
    type: "education", 
  },
   {
    title: "Certificación: desarrollo de aplicaciones moviles con React Native",
    company: "Udemy Certified",
    period: "2025 - 2026",
    description: "Especialización en el desarrollo de aplicaciones móviles con React Native, incluyendo diseño de interfaces, integración con APIs y despliegue en plataformas Android e iOS.",
    type: "education", 
  },
  {
    title: "Certificación: desarrollo de aplicaiones web React y TypeScript",
    company: "Udemy Certified",
    period: "2025 - 2026",
    description: "Especialización en el desarrollo de aplicaciones web utilizando React y TypeScript, abarcando desde la creación de componentes reutilizables hasta la gestión del estado y la integración con APIs RESTful.",
    type: "education", 
  },
];

const Resume: React.FC = () => {
  return (
    <section id="curriculum" className="py-20 bg-[#1e2326] text-white">
      <div className="max-w-[1100px] mx-auto px-5">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center mb-16 uppercase tracking-widest"
        >
          Mi <span className="text-[#1CB698]">Trayectoria</span>
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-10">
          {/* Columna Educación y Cursos */}
          <div>
            <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
              <i className="fa-solid fa-graduation-cap text-[#1CB698]"></i> Educación & Certificaciones
            </h3>
            <div className="space-y-8 border-l-2 border-gray-700 ml-4">
              {resumeData.filter(item => item.type === "education").map((item, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="relative pl-8 before:content-[''] before:absolute before:left-[-9px] before:top-1 before:w-4 before:h-4 before:bg-[#1CB698] before:rounded-full"
                >
                  <span className="text-[#1CB698] font-bold text-xs uppercase tracking-wider">{item.period}</span>
                  <h4 className="text-xl font-bold mt-1">{item.title}</h4>
                  <p className="text-gray-400 font-medium mb-2">{item.company}</p>
                  <p className="text-gray-500 text-sm leading-relaxed">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Columna Experiencia Laboral */}
          <div>
            <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
              <i className="fa-solid fa-briefcase text-[#1CB698]"></i> Experiencia Profesional
            </h3>
            <div className="space-y-8 border-l-2 border-gray-700 ml-4">
              {resumeData.filter(item => item.type === "work").map((item, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="relative pl-8 before:content-[''] before:absolute before:left-[-9px] before:top-1 before:w-4 before:h-4 before:bg-[#1CB698] before:rounded-full"
                >
                  <span className="text-[#1CB698] font-bold text-xs uppercase tracking-wider">{item.period}</span>
                  <h4 className="text-xl font-bold mt-1">{item.title}</h4>
                  <p className="text-gray-400 font-medium mb-2">{item.company}</p>
                  <p className="text-gray-500 text-sm leading-relaxed">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;