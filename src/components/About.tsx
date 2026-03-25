import React from "react";
import { motion } from "framer-motion";
import cvaf from '../assets/Abraham-CV.pdf'

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
              Ingeniero de Software en formación por la <span className="text-[#1CB698]">UES</span>
            </h3>
            <p className="text-gray-300 leading-relaxed text-lg">
              Me especializo en el desarrollo <span className="text-white font-semibold">Full-Stack</span> con un enfoque estratégico en soluciones web escalables y optimización de la comunicación digital. Mi experiencia abarca desde el despliegue de plataformas en entornos gubernamentales hasta el diseño de arquitecturas robustas con <span className="text-white font-semibold">PostgreSQL</span> y SQL Server.
            </p>
            <p className="text-gray-300 leading-relaxed">
              Destaco por una mentalidad ágil y autodidacta, comprometido con las <span className="text-white font-semibold italic border-b border-[#1CB698]/50">buenas prácticas de código limpio</span> y la entrega eficiente de proyectos que impulsan la transformación digital. Mi objetivo es transformar problemas complejos en herramientas funcionales.
            </p>

            {/* Datos Rápidos */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-6 border-t border-gray-700">
              <div>
                <span className="block text-[#1CB698] font-bold uppercase text-[10px] tracking-[2px] mb-1">
                  Ubicación
                </span>
                <span className="text-sm text-gray-200">Hermosillo, Sonora</span>
              </div>
              <div>
                <span className="block text-[#1CB698] font-bold uppercase text-[10px] tracking-[2px] mb-1">
                  Email
                </span>
                <span className="text-sm text-gray-200">favela.abraham17mx@gmail.com</span>
              </div>
              <div>
                <span className="block text-[#1CB698] font-bold uppercase text-[10px] tracking-[2px] mb-1">
                  Especialidad
                </span>
                <span className="text-sm text-gray-200">Full-Stack / .NET / Mobile</span>
              </div>
              <div>
                <span className="block text-[#1CB698] font-bold uppercase text-[10px] tracking-[2px] mb-1">
                  Base de Datos
                </span>
                <span className="text-sm text-gray-200">PostgreSQL / SQL Server</span>
              </div>
            </div>
            
            <div className="pt-4">
               <a 
                href={cvaf}
                download="CV_Abraham_Favela.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 px-8 py-3 bg-[#1CB698] text-white font-bold rounded-full hover:bg-transparent hover:border-[#1CB698] border-2 border-transparent transition-all uppercase text-sm tracking-widest"
              >
                Descargar CV 
                <i className="fa-solid fa-download group-hover:translate-y-1 transition-transform"></i>
              </a>
            </div>
          </motion.div>

          {/* Columna de Tarjeta de Habilidades */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex justify-center"
          >
            <div className="relative group w-full max-w-md">
              <div className="absolute -inset-1 bg-[#1CB698] rounded-2xl blur opacity-10 group-hover:opacity-30 transition duration-1000"></div>
              <div className="relative bg-[#252a2e] p-8 rounded-2xl border border-gray-700 shadow-2xl">
                <h4 className="text-xl font-bold mb-8 text-center text-[#1CB698] tracking-widest uppercase text-sm">Enfoque Profesional</h4>
                <ul className="space-y-6">
                  <li className="flex items-start gap-4 group/item">
                    <div className="bg-[#1e2326] p-3 rounded-lg group-hover/item:bg-[#1CB698]/10 transition-colors">
                      <i className="fa-solid fa-code-branch text-[#1CB698] text-xl"></i>
                    </div>
                    <div>
                      <span className="block font-bold">Desarrollo End-to-End</span>
                      <p className="text-xs text-gray-400 mt-1 italic">Lógica de negocio sólida y persistencia de datos optimizada.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4 group/item">
                    <div className="bg-[#1e2326] p-3 rounded-lg group-hover/item:bg-[#1CB698]/10 transition-colors">
                      <i className="fa-solid fa-database text-[#1CB698] text-xl"></i>
                    </div>
                    <div>
                      <span className="block font-bold">Arquitectura de Datos</span>
                      <p className="text-xs text-gray-400 mt-1 italic">Dominio de PostgreSQL para sistemas de alta integridad.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4 group/item">
                    <div className="bg-[#1e2326] p-3 rounded-lg group-hover/item:bg-[#1CB698]/10 transition-colors">
                      <i className="fa-solid fa-rocket text-[#1CB698] text-xl"></i>
                    </div>
                    <div>
                      <span className="block font-bold">Transformación Digital</span>
                      <p className="text-xs text-gray-400 mt-1 italic">Modernización de procesos con tecnología de vanguardia.</p>
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