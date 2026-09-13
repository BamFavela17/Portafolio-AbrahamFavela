import React from "react";
import { motion } from "framer-motion";
import cvaf from "../assets/Abraham_Alejandro_Favela_Fernandez_CV.pdf";

const About: React.FC = () => {
  return (
    <section
      id="sobremi"
      className="py-20 bg-[#252a2e] text-white overflow-hidden"
    >
      <div className="max-w-275 mx-auto px-5">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center mb-16 uppercase tracking-widest"
        >
          Sobre <span className="text-[#9338f3]">Mí</span>
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Columna de Texto */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold">
              Desarrollador Full-Stack e{" "}
              <span className="text-[#9338f3]">Ingeniero de Software</span>
            </h3>
            <p className="text-gray-300 leading-relaxed text-lg">
              Me apasiona transformar retos complejos en realidades; cuando un
              proyecto llega a mis manos,{" "}
              <span className="text-white font-semibold">no me detengo</span>{" "}
              hasta asegurar su despliegue y éxito.
            </p>
            <p className="text-gray-300 leading-relaxed">
              Disfruto creando soluciones digitales que dejan huella y resuelven
              necesidades reales, lo que me impulsa a evolucionar constantemente
              como ingeniero. Me especializo en estructurar la lógica de negocio
              ideal para cada escenario, integrándome de forma armónica en los
              flujos de trabajo existentes para potenciar la eficiencia sin
              fricciones.
            </p>

            {/* Datos Rápidos del CV */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-6 border-t border-gray-700/50">
              <div>
                <span className="block text-[#9338f3] font-bold uppercase text-[10px] tracking-[2px] mb-1">
                  Especialidad
                </span>
                <span className="text-sm text-gray-200">
                  Desarrollo Web, Móvil & Multiplataforma
                </span>
              </div>
              <div>
                <span className="block text-[#9338f3] font-bold uppercase text-[10px] tracking-[2px] mb-1">
                  Stack Principal
                </span>
                <span className="text-sm text-gray-200">
                  React, React Native, Laravel, Node.js y PHP
                </span>
              </div>
              <div>
                <span className="block text-[#9338f3] font-bold uppercase text-[10px] tracking-[2px] mb-1">
                  Bases de Datos
                </span>
                <span className="text-sm text-gray-200">
                  PostgreSQL, SQL Server, NoSQL & MySQL
                </span>
              </div>
              <div>
                <span className="block text-[#9338f3] font-bold uppercase text-[10px] tracking-[2px] mb-1">
                  Educación
                </span>
                <span className="text-sm text-gray-200">
                  Ingeniería de Software — UES
                </span>
              </div>
            </div>

            <div className="pt-4">
              <a
                href={cvaf}
                download="Abraham_Alejandro_Favela_Fernández_CV.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 px-8 py-3 bg-[#9338f3] text-white font-bold rounded-full hover:bg-transparent hover:border-[#9338f3] border-2 border-transparent transition-all uppercase text-sm tracking-widest shadow-lg shadow-[#9338f3]/10"
              >
                Descargar CV
                <i className="fa-solid fa-download group-hover:translate-y-1 transition-transform"></i>
              </a>
            </div>
          </motion.div>

          {/* Columna de Puntos Clave */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex justify-center"
          >
            <div className="relative group w-full max-w-md">
              <div className="absolute -inset-1 bg-[#9338f3] rounded-2xl blur opacity-10 group-hover:opacity-30 transition duration-1000"></div>
              <div className="relative bg-[#2b3136] p-8 rounded-2xl border border-gray-700 shadow-2xl">
                <h4 className="text-3xl font-bold mb-8 text-center text-[#9338f3] tracking-widest uppercase">
                  Puntos Clave
                </h4>
                <ul className="space-y-6">
                  <li className="flex items-start gap-4">
                    <div className="bg-[#1e2326] p-3 rounded-lg">
                      <i className="fa-solid fa-rocket text-[#9338f3]"></i>
                    </div>
                    <div>
                      <span className="block font-bold">Despliegue Real</span>
                      <p className="text-xs text-gray-400 mt-1 italic">
                        Experiencia comprobada desplegando sistemas robustos y
                        plataformas de control de acceso.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="bg-[#1e2326] p-3 rounded-lg">
                      <i className="fa-solid fa-code text-[#9338f3]"></i>
                    </div>
                    <div>
                      <span className="block font-bold">Código Limpio</span>
                      <p className="text-xs text-gray-400 mt-1 italic">
                        Arquitecturas modulares diseñadas con Clean Code y
                        mejores prácticas.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="bg-[#1e2326] p-3 rounded-lg">
                      <i className="fa-solid fa-gears text-[#9338f3]"></i>
                    </div>
                    <div>
                      <span className="block font-bold">Mentalidad Ágil</span>
                      <p className="text-xs text-gray-400 mt-1 italic">
                        Capacidad autodidacta para adoptar tecnologías
                        rápidamente y adaptarme a flujos de trabajo.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
