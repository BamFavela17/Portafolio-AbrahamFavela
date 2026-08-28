import React from "react";
import { motion } from "framer-motion";
import cvaf from "../assets/Abraham_Favela_CV.pdf";

const About: React.FC = () => {
  return (
    <section id="sobremi" className="py-20 bg-[#252a2e] text-white overflow-hidden">
      <div className="max-w-[1100px] mx-auto px-5">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center mb-16 uppercase tracking-widest"
        >
          Sobre <span className="text-[#1CB698]">Mí</span>
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
              Desarrollador Full-Stack e <span className="text-[#1CB698]">Ingeniero de Software</span>
            </h3>
            <p className="text-gray-300 leading-relaxed text-lg">
              Mi enfoque se centra en el ciclo de vida completo del desarrollo: desde la concepción de la arquitectura <span className="text-white font-semibold">Full-Stack</span> hasta el despliegue de soluciones web escalables.
            
            </p>
            <p className="text-gray-300 leading-relaxed">
              Me especializo en la optimización de la comunicación digital y en el diseño de arquitecturas de software orientadas a resultados. Destaco por mi mentalidad ágil y autodidacta, con capacidad demostrada para integrar nuevas tecnologías y garantizar la integridad de los datos en cada proyecto.
            </p>
            
            {/* Datos Rápidos del CV */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-6 border-t border-gray-700/50">
              <div>
                <span className="block text-[#1CB698] font-bold uppercase text-[10px] tracking-[2px] mb-1">Especialidad</span>
                <span className="text-sm text-gray-200">Web, Mobile & Multiplataforma</span>
              </div>
              <div>
                <span className="block text-[#1CB698] font-bold uppercase text-[10px] tracking-[2px] mb-1">Stack Principal</span>
                <span className="text-sm text-gray-200">C#, React, Node.js, Laravel</span>
              </div>
              <div>
                <span className="block text-[#1CB698] font-bold uppercase text-[10px] tracking-[2px] mb-1">Bases de Datos</span>
                <span className="text-sm text-gray-200">PostgreSQL, SQL Server, NoSQL & MySQL</span>
              </div>
              <div>
                <span className="block text-[#1CB698] font-bold uppercase text-[10px] tracking-[2px] mb-1">Educación</span>
                <span className="text-sm text-gray-200">Universidad Estatal de Sonora (UES)</span>
              </div>
            </div>
            
            <div className="pt-4">
               <a 
                href={cvaf}
                download="Abraham_Alejandro_Favela_Fernández_cv.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 px-8 py-3 bg-[#1CB698] text-white font-bold rounded-full hover:bg-transparent hover:border-[#1CB698] border-2 border-transparent transition-all uppercase text-sm tracking-widest shadow-lg shadow-[#1CB698]/10"
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
              <div className="absolute -inset-1 bg-[#1CB698] rounded-2xl blur opacity-10 group-hover:opacity-30 transition duration-1000"></div>
              <div className="relative bg-[#2b3136] p-8 rounded-2xl border border-gray-700 shadow-2xl">
                <h4 className="text-xl font-bold mb-8 text-center text-[#1CB698] tracking-widest uppercase text-sm">Puntos Clave</h4>
                <ul className="space-y-6">
                  <li className="flex items-start gap-4">
                    <div className="bg-[#1e2326] p-3 rounded-lg"><i className="fa-solid fa-rocket text-[#1CB698]"></i></div>
                    <div>
                      <span className="block font-bold">Despliegue Real</span>
                      <p className="text-xs text-gray-400 mt-1 italic">Experiencia desplegando sistemas y control de acceso.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="bg-[#1e2326] p-3 rounded-lg"><i className="fa-solid fa-code text-[#1CB698]"></i></div>
                    <div>
                      <span className="block font-bold">Código Limpio</span>
                      <p className="text-xs text-gray-400 mt-1 italic">Arquitecturas modulares con Clean Code y buenas prácticas.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="bg-[#1e2326] p-3 rounded-lg"><i className="fa-solid fa-gears text-[#1CB698]"></i></div>
                    <div>
                      <span className="block font-bold">Mentalidad Ágil</span>
                      <p className="text-xs text-gray-400 mt-1 italic">Capacidad autodidacta para adoptar nuevas tecnologías rápidamente.</p>
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