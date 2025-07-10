// components/About.jsx
import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { FaUser, FaFileAlt, FaAward } from 'react-icons/fa';

const About = ({ setActiveSection }) => {
  const aboutRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setActiveSection('about');
        }
      },
      { threshold: 0.3 }
    );

    if (aboutRef.current) {
      observer.observe(aboutRef.current);
    }

    return () => {
      if (aboutRef.current) {
        observer.unobserve(aboutRef.current);
      }
    };
  }, [setActiveSection]);

  const fadeIn = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section
      ref={aboutRef}
      id="about"
      className="py-20 px-6 bg-[#0a101e] relative overflow-hidden"
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
            About
          </h2>
          <div className="w-20 h-1 bg-[#149ddd] mx-auto mb-6"></div>
          <p className="text-gray-400 max-w-3xl mx-auto">
            Learn more about me, what I do, and my current skills mostly in terms
            of programming and technology
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute -inset-1 bg-gradient-to-r from-[#149ddd] to-[#1a1f2e] rounded-lg blur opacity-75"></div>
            <div className="relative bg-[#0e1625] p-8 rounded-lg h-full">
              <h3 className="text-2xl font-bold mb-6 text-white">
                UI/UX Designer & Web Developer
              </h3>
              <p className="text-gray-400 mb-6">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <span className="text-[#149ddd] mr-2">›</span>
                      <span className="text-gray-300">
                        <strong>Birthday:</strong> 1 May 1995
                      </span>
                    </li>
                    <li className="flex items-center">
                      <span className="text-[#149ddd] mr-2">›</span>
                      <span className="text-gray-300">
                        <strong>Website:</strong> www.example.com
                      </span>
                    </li>
                    <li className="flex items-center">
                      <span className="text-[#149ddd] mr-2">›</span>
                      <span className="text-gray-300">
                        <strong>Phone:</strong> +123 456 7890
                      </span>
                    </li>
                    <li className="flex items-center">
                      <span className="text-[#149ddd] mr-2">›</span>
                      <span className="text-gray-300">
                        <strong>City:</strong> New York, USA
                      </span>
                    </li>
                  </ul>
                </div>
                <div>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <span className="text-[#149ddd] mr-2">›</span>
                      <span className="text-gray-300">
                        <strong>Age:</strong> 30
                      </span>
                    </li>
                    <li className="flex items-center">
                      <span className="text-[#149ddd] mr-2">›</span>
                      <span className="text-gray-300">
                        <strong>Degree:</strong> Master
                      </span>
                    </li>
                    <li className="flex items-center">
                      <span className="text-[#149ddd] mr-2">›</span>
                      <span className="text-gray-300">
                        <strong>Email:</strong> email@example.com
                      </span>
                    </li>
                    <li className="flex items-center">
                      <span className="text-[#149ddd] mr-2">›</span>
                      <span className="text-gray-300">
                        <strong>Freelance:</strong> Available
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
              <p className="text-gray-400 mt-6">
                Officiis eligendi itaque labore et dolorum mollitia officiis
                optio vero. Quisquam sunt adipisci omnis et ut. Nulla
                accusantium dolor incidunt officia tempore. Et eius omnis.
                Cupiditate ut dicta maxime officiis quidem quia. Sed et
                consectetur qui quia repellendus itaque neque. Aliquid amet
                quidem ut quaerat cupiditate. Ab et eum qui repellendus omnis
                culpa magni laudantium dolores.
              </p>
            </div>
          </motion.div>

          <div className="space-y-12">
            <motion.div
              variants={fadeIn}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="relative"
            >
              <div className="absolute -inset-1 bg-gradient-to-r from-[#149ddd] to-[#1a1f2e] rounded-lg blur opacity-75"></div>
              <div className="relative bg-[#0e1625] p-8 rounded-lg">
                <div className="flex items-center mb-6">
                  <div className="bg-[#149ddd] p-3 rounded-full mr-4">
                    <FaUser className="text-white text-xl" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">Experience</h3>
                </div>
                <div className="space-y-8 pl-4 border-l-2 border-[#1a1f2e]">
                  {[
                    {
                      title: 'Senior Graphic Design Specialist',
                      period: '2019 - Present',
                      company: 'Experion, New York',
                      description:
                        'Qui deserunt veniam. Et sed aliquam labore tempore sed quisquam iusto autem sit. Ea vero voluptatum qui ut dignissimos deleniti nerada porti sand markend',
                    },
                    {
                      title: 'Graphic Design Specialist',
                      period: '2017 - 2018',
                      company: 'Experion, New York',
                      description:
                        'Qui deserunt veniam. Et sed aliquam labore tempore sed quisquam iusto autem sit. Ea vero voluptatum qui ut dignissimos deleniti nerada porti sand markend',
                    },
                  ].map((item, index) => (
                    <div key={index} className="relative pl-6 group">
                      <div className="absolute left-0 top-2 w-3 h-3 bg-[#149ddd] rounded-full transform -translate-x-1/2 group-hover:scale-150 transition-transform duration-300"></div>
                      <h4 className="text-lg font-semibold text-white">
                        {item.title}
                      </h4>
                      <p className="text-sm text-gray-400 mb-1">
                        {item.period} | {item.company}
                      </p>
                      <p className="text-gray-400">{item.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            <motion.div
              variants={fadeIn}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="relative"
            >
              <div className="absolute -inset-1 bg-gradient-to-r from-[#149ddd] to-[#1a1f2e] rounded-lg blur opacity-75"></div>
              <div className="relative bg-[#0e1625] p-8 rounded-lg">
                <div className="flex items-center mb-6">
                  <div className="bg-[#149ddd] p-3 rounded-full mr-4">
                    <FaFileAlt className="text-white text-xl" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">Education</h3>
                </div>
                <div className="space-y-8 pl-4 border-l-2 border-[#1a1f2e]">
                  {[
                    {
                      title: 'Master of Fine Arts & Graphic Design',
                      period: '2015 - 2016',
                      company: 'Rochester Institute of Technology, Rochester, NY',
                      description:
                        'Qui deserunt veniam. Et sed aliquam labore tempore sed quisquam iusto autem sit. Ea vero voluptatum qui ut dignissimos deleniti nerada porti sand markend',
                    },
                    {
                      title: 'Bachelor of Fine Arts & Graphic Design',
                      period: '2010 - 2014',
                      company: 'Rochester Institute of Technology, Rochester, NY',
                      description:
                        'Qui deserunt veniam. Et sed aliquam labore tempore sed quisquam iusto autem sit. Ea vero voluptatum qui ut dignissimos deleniti nerada porti sand markend',
                    },
                  ].map((item, index) => (
                    <div key={index} className="relative pl-6 group">
                      <div className="absolute left-0 top-2 w-3 h-3 bg-[#149ddd] rounded-full transform -translate-x-1/2 group-hover:scale-150 transition-transform duration-300"></div>
                      <h4 className="text-lg font-semibold text-white">
                        {item.title}
                      </h4>
                      <p className="text-sm text-gray-400 mb-1">
                        {item.period} | {item.company}
                      </p>
                      <p className="text-gray-400">{item.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;