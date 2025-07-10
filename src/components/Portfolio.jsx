// components/Portfolio.jsx
import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { portfolioItems } from '../utils/constants';

const Portfolio = ({ setActiveSection }) => {
  const [filter, setFilter] = useState('all');
  const [filteredItems, setFilteredItems] = useState(portfolioItems);
  const portfolioRef = useRef(null);

  useEffect(() => {
    if (filter === 'all') {
      setFilteredItems(portfolioItems);
    } else {
      setFilteredItems(portfolioItems.filter((item) => item.category === filter));
    }
  }, [filter]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setActiveSection('portfolio');
        }
      },
      { threshold: 0.2 }
    );

    if (portfolioRef.current) {
      observer.observe(portfolioRef.current);
    }

    return () => {
      if (portfolioRef.current) {
        observer.unobserve(portfolioRef.current);
      }
    };
  }, [setActiveSection]);

  const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  return (
    <section
      ref={portfolioRef}
      id="portfolio"
      className="py-20 px-6 bg-[#0a101e] relative"
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
            Portfolio
          </h2>
          <div className="w-20 h-1 bg-[#149ddd] mx-auto mb-6"></div>
          <p className="text-gray-400 max-w-3xl mx-auto">
            Here are some of my recent projects. Each one was carefully crafted to
            solve specific problems and deliver exceptional results.
          </p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex flex-wrap justify-center mb-12 gap-4"
        >
          {['all', 'web', 'app', 'design'].map((item) => (
            <motion.button
              key={item}
              variants={fadeInUp}
              onClick={() => setFilter(item)}
              className={`px-6 py-2 rounded-full capitalize transition-all duration-300 ${
                filter === item
                  ? 'bg-[#149ddd] text-white'
                  : 'bg-[#1a1f2e] text-gray-400 hover:bg-[#149ddd] hover:text-white'
              }`}
            >
              {item}
            </motion.button>
          ))}
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredItems.map((item) => (
            <motion.div
              key={item.id}
              variants={fadeInUp}
              className="relative group overflow-hidden rounded-lg"
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 flex items-end p-6">
                <div className="transform translate-y-8 group-hover:translate-y-0 transition-transform duration-500">
                  <h3 className="text-white text-xl font-bold mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-300 mb-4">{item.description}</p>
                  <div className="flex space-x-4">
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-[#149ddd] text-white px-4 py-2 rounded-full text-sm hover:bg-white hover:text-[#149ddd] transition-colors duration-300"
                    >
                      View Project
                    </a>
                    <a
                      href={item.detailsLink}
                      className="bg-transparent border border-white text-white px-4 py-2 rounded-full text-sm hover:bg-white hover:text-[#149ddd] transition-colors duration-300"
                    >
                      Details
                    </a>
                  </div>
                </div>
              </div>
              <div className="absolute inset-0 bg-[#149ddd] opacity-0 group-hover:opacity-20 transition-opacity duration-500 z-0"></div>
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-64 object-cover transform group-hover:scale-110 transition-transform duration-500"
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Portfolio;