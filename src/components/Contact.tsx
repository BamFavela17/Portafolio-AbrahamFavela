import React, { useRef, useState } from 'react';
import { sendContactEmail } from './sendContactEmail';
import { motion, AnimatePresence } from 'framer-motion';

const Contact: React.FC = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;

    setStatus('loading');
    const formData = new FormData(formRef.current);

    const data = {
      name: formData.get('user_name') as string,
      email: formData.get('user_email') as string,
      title: 'Mensaje desde Portafolio',
      message: formData.get('user_message') as string,
    };

    try {
      await sendContactEmail(data);
      setStatus('success');
      formRef.current.reset();
      // Volver al estado inicial después de 5 segundos
      setTimeout(() => setStatus('idle'), 5000);
    } catch (error) {
      console.error("Error de envío:", error);
      setStatus('error');
      setTimeout(() => setStatus('idle'), 5000);
    }
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
          {/* Columna de Información (Se mantiene similar, optimizada) */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-[#1CB698] font-bold uppercase text-[10px] tracking-[3px] mb-6">Canales Directos</h3>
              <ul className="space-y-6">
                <li className="flex items-center gap-4 group cursor-pointer">
                  <div className="bg-[#1e2326] w-12 h-12 flex items-center justify-center rounded-full text-[#1CB698] group-hover:bg-[#1CB698] group-hover:text-white transition-all duration-300 shadow-lg">
                    <i className="fa-solid fa-envelope"></i>
                  </div>
                  <div>
                    <span className="block text-gray-500 text-[10px] uppercase font-bold tracking-wider">Email</span>
                    <a href="mailto:favela.abraham17mx@gmail.com" className="text-white font-medium hover:text-[#1CB698] transition-colors">favela.abraham17mx@gmail.com</a>
                  </div>
                </li>
                <li className="flex items-center gap-4 group">
                  <div className="bg-[#1e2326] w-12 h-12 flex items-center justify-center rounded-full text-[#1CB698] group-hover:bg-[#1CB698] group-hover:text-white transition-all duration-300 shadow-lg">
                    <i className="fa-solid fa-location-dot"></i>
                  </div>
                  <div>
                    <span className="block text-gray-500 text-[10px] uppercase font-bold tracking-wider">Ubicación</span>
                    <span className="text-white font-medium">Hermosillo, Sonora, México</span>
                  </div>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-[#1CB698] font-bold uppercase text-[10px] tracking-[3px] mb-6">Presencia Digital</h3>
              <div className="flex gap-4">
                {[
                  { icon: 'fa-linkedin-in', link: 'https://linkedin.com/in/abraham-alejandro-favela-fernandez-28b598337' },
                  { icon: 'fa-github', link: 'https://github.com/BamFavela17' }
                ].map((social, i) => (
                  <a key={i} href={social.link} target="_blank" rel="noreferrer" className="w-12 h-12 bg-[#1e2326] flex items-center justify-center rounded-xl text-white hover:bg-[#1CB698] hover:-translate-y-1 transition-all duration-300 border border-gray-800">
                    <i className={`fa-brands ${social.icon} text-lg`}></i>
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Formulario Optimizado */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="md:col-span-2"
          >
            <form 
              ref={formRef} 
              onSubmit={handleFormSubmit} 
              className="space-y-5 bg-[#1e2326] p-10 rounded-3xl shadow-2xl border border-gray-800/50 relative overflow-hidden"
            >
              <div className="grid md:grid-cols-2 gap-5">
                <div className="space-y-2">
                  <label className="text-[10px] text-gray-500 uppercase tracking-[2px] font-bold ml-1">Nombre</label>
                  <input 
                    required
                    name="user_name"
                    type="text" 
                    placeholder="Ej. Juan Pérez" 
                    className="w-full bg-[#252a2e] text-white p-4 rounded-2xl focus:ring-2 focus:ring-[#1CB698]/50 outline-none border border-gray-700/50 focus:border-[#1CB698] transition-all placeholder:text-gray-600"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] text-gray-500 uppercase tracking-[2px] font-bold ml-1">Email</label>
                  <input 
                    required
                    name="user_email"
                    type="email" 
                    placeholder="correo@empresa.com" 
                    className="w-full bg-[#252a2e] text-white p-4 rounded-2xl focus:ring-2 focus:ring-[#1CB698]/50 outline-none border border-gray-700/50 focus:border-[#1CB698] transition-all placeholder:text-gray-600"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-[10px] text-gray-500 uppercase tracking-[2px] font-bold ml-1">Mensaje</label>
                <textarea 
                  required
                  name="user_message"
                  placeholder="Cuéntame sobre tu proyecto..." 
                  rows={5}
                  className="w-full bg-[#252a2e] text-white p-4 rounded-2xl focus:ring-2 focus:ring-[#1CB698]/50 outline-none border border-gray-700/50 focus:border-[#1CB698] transition-all placeholder:text-gray-600 resize-none"
                ></textarea>
              </div>
              
              <div className="flex flex-col sm:flex-row items-center gap-6 pt-4">
                <button 
                  type="submit"
                  disabled={status === 'loading' || status === 'success'}
                  className={`relative group flex items-center gap-3 px-10 py-4 rounded-full font-bold uppercase tracking-widest text-xs transition-all duration-300 shadow-lg ${
                    status === 'success' 
                    ? 'bg-green-500 text-white' 
                    : 'bg-[#1CB698] text-white hover:shadow-[#1CB698]/20 hover:-translate-y-1'
                  } disabled:opacity-70 disabled:hover:translate-y-0`}
                >
                  {status === 'loading' ? 'Procesando...' : status === 'success' ? '¡Enviado!' : 'Enviar Mensaje'}
                  <i className={`fa-solid ${
                    status === 'loading' ? 'fa-spinner animate-spin' : 
                    status === 'success' ? 'fa-check' : 'fa-paper-plane'
                  } group-hover:translate-x-1 transition-transform`}></i>
                </button>

                <AnimatePresence>
                  {status === 'success' && (
                    <motion.span 
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0 }}
                      className="text-green-400 text-xs font-medium italic"
                    >
                      Gracias por escribir, te responderé pronto.
                    </motion.span>
                  )}
                  {status === 'error' && (
                    <motion.span 
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0 }}
                      className="text-red-400 text-xs font-medium italic"
                    >
                      Algo salió mal. Intenta de nuevo.
                    </motion.span>
                  )}
                </AnimatePresence>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;