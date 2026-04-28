import React from "react";
import { motion } from "framer-motion";

const Hero: React.FC = () => {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center bg-[#1e2326] overflow-hidden"
    >
      {/* Decoración de fondo sutil */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 opacity-20">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-[#1CB698] blur-[120px]"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[30%] h-[30%] rounded-full bg-[#1CB698] blur-[100px]"></div>
      </div>

      <div className="relative z-10 max-w-[1100px] mx-auto px-5 text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-[#1CB698] tracking-[5px] uppercase font-bold mb-4 text-sm md:text-base"
        >
          Ingeniero de Software Full-Stack
        </motion.p>
        
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-5xl md:text-8xl font-black text-white mb-8 tracking-tighter"
        >
          SOY <span className="text-[#1CB698]">ABRAHAM FAVELA</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-lg md:text-2xl text-gray-300 max-w-3xl mx-auto mb-12 leading-relaxed font-light"
        >
        Construyo software escalable que convierte procesos complejos en soluciones simples y eficientes.
        </motion.p>
         

        {/* Diferenciador */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="text-gray-400 max-w-xl mx-auto mb-12"
        >
          Especializado en arquitectura de software, desarrollo Full-Stack y transformación digital orientada a resultados.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-5 justify-center"
        >
          <a
            href="#portfolio"
            className="group px-10 py-4 bg-[#1CB698] text-white font-bold rounded-full hover:bg-transparent hover:border-[#1CB698] border-2 border-transparent transition-all uppercase tracking-widest text-sm flex items-center justify-center gap-2"
          >
            Ver Proyectos
            <i className="fa-solid fa-arrow-right group-hover:translate-x-1 transition-transform"></i>
          </a>
          <a
            href="#contacto"
            className="px-10 py-4 border-2 border-gray-600 text-white font-bold rounded-full hover:border-[#1CB698] hover:text-[#1CB698] transition-all uppercase tracking-widest text-sm flex items-center justify-center"
          >
            Contactar
          </a>
        </motion.div>
      </div>

      {/* Indicador de scroll */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 hidden md:block"
      >
        <div className="w-[2px] h-12 bg-gradient-to-b from-[#1CB698] to-transparent mx-auto"></div>
      </motion.div>
    </section>
  );
};

export default Hero;
