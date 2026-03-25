import React from 'react';
import { motion } from 'framer-motion';

const Contact: React.FC = () => {
    const handleFormSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Aquí podrías integrar EmailJS o un servicio similar
        alert("¡Mensaje enviado con éxito!");
    };

  return (
    <section id="contacto" className="py-20 bg-[#252a2e] overflow-hidden">
      <div className="max-w-[1100px] mx-auto px-5">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center text-white mb-16 uppercase tracking-widest"
        >
          Ponte en <span className="text-[#1CB698]">Contacto</span>
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-12">
          {/* Información de Contacto */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-[#1CB698] font-bold uppercase text-xs tracking-widest mb-4">Información</h3>
              <ul className="space-y-6">
                <li className="flex items-center gap-4 group">
                  <div className="bg-[#1e2326] p-4 rounded-full text-[#1CB698] group-hover:bg-[#1CB698] group-hover:text-white transition-all shadow-lg">
                    <i className="fa-solid fa-envelope"></i>
                  </div>
                  <div>
                    <span className="block text-gray-400 text-xs uppercase">Email</span>
                    <span className="text-white font-medium">favela.abraham17mx@gmail.com</span>
                  </div>
                </li>
                <li className="flex items-center gap-4 group">
                  <div className="bg-[#1e2326] p-4 rounded-full text-[#1CB698] group-hover:bg-[#1CB698] group-hover:text-white transition-all shadow-lg">
                    <i className="fa-solid fa-location-dot"></i>
                  </div>
                  <div>
                    <span className="block text-gray-400 text-xs uppercase">Ubicación</span>
                    <span className="text-white font-medium">Hermosillo, Sonora, México</span>
                  </div>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-[#1CB698] font-bold uppercase text-xs tracking-widest mb-4">Redes Sociales</h3>
              <div className="flex gap-4">
                <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="w-12 h-12 bg-[#1e2326] flex items-center justify-center rounded-lg text-white hover:bg-[#1CB698] transition-all">
                  <i className="fa-brands fa-linkedin-in"></i>
                </a>
                <a href="https://github.com" target="_blank" rel="noreferrer" className="w-12 h-12 bg-[#1e2326] flex items-center justify-center rounded-lg text-white hover:bg-[#1CB698] transition-all">
                  <i className="fa-brands fa-github"></i>
                </a>
              </div>
            </div>
          </motion.div>

          {/* Formulario */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="md:col-span-2"
          >
            <form onSubmit={handleFormSubmit} className="space-y-6 bg-[#1e2326] p-8 rounded-2xl shadow-2xl border border-gray-800">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] text-gray-500 uppercase tracking-widest ml-1">Nombre</label>
                  <input 
                    required
                    type="text" 
                    placeholder="Tu nombre completo" 
                    className="w-full bg-[#252a2e] text-white p-4 rounded-xl focus:ring-2 focus:ring-[#1CB698] outline-none border border-transparent transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] text-gray-500 uppercase tracking-widest ml-1">Email</label>
                  <input 
                    required
                    type="email" 
                    placeholder="correo@ejemplo.com" 
                    className="w-full bg-[#252a2e] text-white p-4 rounded-xl focus:ring-2 focus:ring-[#1CB698] outline-none border border-transparent transition-all"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-[10px] text-gray-500 uppercase tracking-widest ml-1">Mensaje</label>
                <textarea 
                  required
                  placeholder="¿En qué puedo ayudarte?" 
                  rows={4}
                  className="w-full bg-[#252a2e] text-white p-4 rounded-xl focus:ring-2 focus:ring-[#1CB698] outline-none border border-transparent transition-all"
                ></textarea>
              </div>
              
              <button 
                type="submit"
                className="group flex items-center gap-3 px-12 py-4 bg-[#1CB698] text-white font-bold rounded-full hover:shadow-[0_0_20px_rgba(28,182,152,0.4)] transition-all uppercase tracking-widest text-sm"
              >
                Enviar Mensaje
                <i className="fa-solid fa-paper-plane group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"></i>
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;