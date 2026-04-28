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
    title: "Desarrollador Full-Stack & Gestión de Proyectos",
    company: "Secretaría de Economía (Gobierno del Estado de Sonora)",
    period: "03/2025 - Presente",
    description: "Desarrollo de plataformas institucionales y administración de infraestructura en Windows y Ubuntu Server. Implementación de servicios SMTP y optimización de flujos de comunicación digital.",
    type: "work",
  },
  {
    title: "Lead Developer (Proyecto GymUes)",
    company: "Universidad Estatal de Sonora",
    period: "02/2026 - 04/2026",
    description: "Arquitectura y despliegue de un sistema de control de acceso utilizando Node.js, TypeScript y MySQL. Optimización de bases de datos con tipos JSONB para trazabilidad histórica.",
    type: "work",
  },
  {
    title: "Desarrollador Full-Stack (Proyecto)",
    company: "Exelsium",
    period: "2024 - 2025",
    description: "Optimización de experiencia de usuario mediante el desarrollo de módulos de carga masiva de datos utilizando Blazor y SQL Server.",
    type: "work",
  },
  {
    title: "Desarrollador Freelance",
    company: "Tostitos El Rey",
    period: "03/2024 - 06/2024",
    description: "Diseño y ejecución de un sistema integral de gestión de inventarios basado en ASP.NET y bases de datos relacionales.",
    type: "work",
  },
  {
    title: "Ingeniería en Software",
    company: "Universidad Estatal de Sonora (UES)",
    period: "2021 - Presente",
    description: "Estudiante de último año enfocado en ingeniería de software, arquitectura de sistemas escalables y administración de bases de datos (PostgreSQL/SQL Server).",
    type: "education",
  },
  {
    title: "Especialización en Desarrollo Moderno",
    company: "Udemy Certified",
    period: "2023 - 2024",
    description: "Formación intensiva en React con TypeScript, Node.js y desarrollo móvil multiplataforma con React Native.",
    type: "education", 
  },
];

const Resume: React.FC = () => {
  return (
    <section id="curriculum" className="py-20 bg-[#252a2e] text-white">
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