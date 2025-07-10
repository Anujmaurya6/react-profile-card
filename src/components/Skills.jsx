// components/Skills.jsx
import { useEffect, useRef } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { skills } from '../utils/constants';

const Skills = ({ setActiveSection }) => {
  const skillsRef = useRef(null);
  const controls = useAnimation();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setActiveSection('skills');
          controls.start('visible');
        }
      },
      { threshold: 0.2 }
    );

    if (skillsRef.current) {
      observer.observe(skillsRef.current);
    }

    return () => {
      if (skillsRef.current) {
        observer.unobserve(skillsRef.current);
      }
    };
  }, [controls, setActiveSection]);

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section
      ref={skillsRef}
      id="skills"
      className="py-20 px-6 bg-[#040b14] relative"
    >
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            Skills
          </h2>
          <div className="w-20 h-1 bg-[#149ddd] mx-auto mb-6"></div>
          <p className="text-gray-400 max-w-3xl mx-auto">
            Here are the skills I've developed over the years. I'm constantly
            learning and improving my abilities.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          animate={controls}
          className="grid grid-cols-1 md:grid-cols-2 gap-12"
        >
          {skills.map((skill) => (
            <motion.div
              key={skill.name}
              variants={item}
              className="relative group"
            >
              <div className="flex justify-between mb-2">
                <span className="text-gray-300 font-medium">{skill.name}</span>
                <span className="text-gray-400">{skill.percentage}%</span>
              </div>
              <div className="w-full bg-[#1a1f2e] rounded-full h-2.5">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${skill.percentage}%` }}
                  transition={{
                    duration: 1.5,
                    delay: 0.2,
                    type: 'spring',
                    damping: 10,
                  }}
                  className="h-2.5 rounded-full bg-gradient-to-r from-[#149ddd] to-[#1a1f2e] relative overflow-hidden"
                >
                  <div className="absolute inset-0 bg-white opacity-10 animate-pulse-slow"></div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-20"
        >
          <h3 className="text-2xl font-bold mb-8 text-white text-center">
            Additional Skills
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              'Responsive Design',
              'Cross Browser Compatibility',
              'Agile Methodologies',
              'Problem Solving',
              'Team Leadership',
              'Project Management',
            ].map((skill, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 bg-[#1a1f2e] rounded-full text-gray-300 hover:bg-[#149ddd] hover:text-white transition-all duration-300 cursor-default"
              >
                {skill}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;