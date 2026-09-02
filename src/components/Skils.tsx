import React from 'react';
import { motion } from 'framer-motion';

interface Skill {
  name: string;
  category: 'Frontend' | 'Mobile' | 'Backend' | 'Database' | 'Arquitectura' | 'DevOps & Tools';
  icon: string;
  isCentralStock?: boolean;
}

const skills: Skill[] = [
  // Frontend
  { name: 'JavaScript', category: 'Frontend', icon: 'fa-brands fa-js' },
  { name: 'React', category: 'Frontend', icon: 'fa-brands fa-react', isCentralStock: true },
  { name: 'HTML5 / CSS3', category: 'Frontend', icon: 'fa-brands fa-html5' },
  { name: 'SASS / Tailwind', category: 'Frontend', icon: 'fa-brands fa-sass', isCentralStock: true },

  // Mobile
  { name: 'React Native', category: 'Mobile', icon: 'fa-brands fa-react', isCentralStock: true },
  { name: 'Android Studio', category: 'Mobile', icon: 'fa-brands fa-android' },

  // Backend
  { name: 'C# / .NET', category: 'Backend', icon: 'fa-solid fa-code' },
  { name: 'Java', category: 'Backend', icon: 'fa-brands fa-java' },
  { name: 'Node.js', category: 'Backend', icon: 'fa-brands fa-node-js', isCentralStock: true },
  { name: 'PHP / Laravel', category: 'Backend', icon: 'fa-brands fa-laravel', isCentralStock: true },
  { name: 'RESTful APIs', category: 'Backend', icon: 'fa-solid fa-cloud-arrow-down',isCentralStock: true  },

  // Bases de Datos
  { name: 'PostgreSQL', category: 'Database', icon: 'fa-solid fa-database' },
  { name: 'SQL Server', category: 'Database', icon: 'fa-solid fa-table', isCentralStock: true },
  { name: 'MySQL', category: 'Database', icon: 'fa-solid fa-database', isCentralStock: true },
  { name: 'Firebase', category: 'Database', icon: 'fa-solid fa-fire' },
  { name: 'MongoDB', category: 'Database', icon: 'fa-solid fa-leaf' },

  // Arquitectura
  { name: 'MVC', category: 'Arquitectura', icon: 'fa-solid fa-sitemap', isCentralStock: true },
  { name: 'Microservicios', category: 'Arquitectura', icon: 'fa-solid fa-network-wired' },
  { name: 'Arquitectura Limpia', category: 'Arquitectura', icon: 'fa-solid fa-layer-group' },
  { name: 'SOA', category: 'Arquitectura', icon: 'fa-solid fa-network-wired' },
  { name: 'Cliente-Servidor', category: 'Arquitectura', icon: 'fa-solid fa-server', isCentralStock: true },

  // DevOps & Otros
  { name: 'Git / GitHub', category: 'DevOps & Tools', icon: 'fa-brands fa-github', isCentralStock: true },
  { name: 'Windows/Ubuntu Server', category: 'DevOps & Tools', icon: 'fa-solid fa-server' },
  { name: 'WordPress', category: 'DevOps & Tools', icon: 'fa-brands fa-wordpress' },
  { name: 'Unity 2D', category: 'DevOps & Tools', icon: 'fa-brands fa-unity' },
];

const categories: Skill['category'][] = ['Frontend', 'Mobile', 'Backend', 'Database', 'Arquitectura', 'DevOps & Tools'];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1 },
};

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-20 bg-[#1e2326] overflow-hidden">
      <div className="max-w-275 mx-auto px-5">
        <motion.h2 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center text-white mb-16 uppercase tracking-widest"
        >
          Mis <span className="text-[#1CB698]">Skills</span>
        </motion.h2>
        
        <div className="space-y-16">
          {categories.map((category) => {
            const filteredSkills = skills.filter((skill) => skill.category === category);
            
            if (filteredSkills.length === 0) return null;

            return (
              <div key={category}>
                <motion.h3 
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="text-2xl font-semibold text-white mb-6 border-l-4 border-[#1CB698] pl-3"
                >
                  {category}
                </motion.h3>

                <motion.div 
                  variants={containerVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6"
                >
                  {filteredSkills.map((skill) => (
                    <motion.div 
                      key={skill.name}
                      variants={itemVariants}
                      whileHover={{ y: -5 }}
                      className={`bg-[#252a2e] p-6 rounded-xl border-b-4 border-transparent hover:border-[#1CB698] transition-all group shadow-xl flex flex-col items-center justify-center text-center ${skill.isCentralStock ? 'border-[#D4AF37]' : ''}`}
                    >
                      <div className="relative mb-4">
                        <div className={`text-2xl text-gray-500 group-hover:text-[#1CB698] transition-colors ${skill.isCentralStock ? 'text-[#D4AF37]! group-hover:text-[#D4AF37]!' : ''}`}>
                          <i className={skill.icon}></i>
                        </div>
                        
                        {skill.isCentralStock && (
                          <i className="fas fa-star absolute -top-3 -right-3 text-[#D4AF37] text-xs"></i>
                        )}
                      </div>
                      
                      <h4 className={`text-white text-sm font-bold group-hover:text-[#1CB698] transition-colors leading-tight ${skill.isCentralStock ? 'text-[#D4AF37]! group-hover:text-[#D4AF37]!' : ''}`}>
                        {skill.name}
                      </h4>
                    </motion.div>
                  ))}
                </motion.div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;