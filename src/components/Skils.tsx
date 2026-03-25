import React from 'react';
import { motion } from 'framer-motion';

interface Skill {
  name: string;
  category: 'Frontend' | 'Backend' | 'Otros' | 'Database';
  icon: string;
}

const skills: Skill[] = [
  // Backend & Core
  { name: 'C# / .NET', category: 'Backend', icon: 'fa-solid fa-code' },
  { name: 'Java', category: 'Backend', icon: 'fa-brands fa-java' },
  { name: 'Node.js', category: 'Backend', icon: 'fa-brands fa-node-js' },
  { name: 'ASP.NET MVC', category: 'Backend', icon: 'fa-solid fa-server' },
  { name: 'PHP / Laravel', category: 'Backend', icon: 'fa-brands fa-laravel' },
  { name: 'RESTful APIs', category: 'Backend', icon: 'fa-solid fa-cloud-arrow-down' },

  // Frontend & Mobile
  { name: 'React / Native', category: 'Frontend', icon: 'fa-brands fa-react' },
  { name: 'JavaScript', category: 'Frontend', icon: 'fa-brands fa-js' },
  { name: 'HTML5 / CSS3', category: 'Frontend', icon: 'fa-brands fa-html5' },
  { name: 'SASS / Tailwind', category: 'Frontend', icon: 'fa-brands fa-sass' },

  // Bases de Datos
  { name: 'PostgreSQL', category: 'Database', icon: 'fa-solid fa-database' },
  { name: 'SQL Server', category: 'Database', icon: 'fa-solid fa-table' },
  { name: 'MySQL', category: 'Database', icon: 'fa-solid fa-database' },
  { name: 'Firebase', category: 'Database', icon: 'fa-solid fa-fire' },
  { name: 'MongoDB', category: 'Database', icon: 'fa-solid fa-leaf' },

  // Otros
  { name: 'WordPress (SMTP)', category: 'Otros', icon: 'fa-brands fa-wordpress' },
  { name: 'Unity 2D', category: 'Otros', icon: 'fa-brands fa-unity' },
  { name: 'Git / GitHub', category: 'Otros', icon: 'fa-brands fa-github' },
];

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
      <div className="max-w-[1100px] mx-auto px-5">
        <motion.h2 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center text-white mb-16 uppercase tracking-widest"
        >
          Mis <span className="text-[#1CB698]">Skills</span>
        </motion.h2>
        
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6"
        >
          {skills.map((skill) => (
            <motion.div 
              key={skill.name}
              variants={itemVariants}
              whileHover={{ y: -5 }}
              className="bg-[#252a2e] p-6 rounded-xl border-b-4 border-transparent hover:border-[#1CB698] transition-all group shadow-xl flex flex-col items-center justify-center text-center"
            >
              <div className="mb-4 text-2xl text-gray-500 group-hover:text-[#1CB698] transition-colors">
                <i className={skill.icon}></i>
              </div>
              <h3 className="text-white text-sm font-bold group-hover:text-[#1CB698] transition-colors leading-tight">
                {skill.name}
              </h3>
              <p className="text-[9px] text-gray-500 mt-2 uppercase tracking-tighter">
                {skill.category}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;