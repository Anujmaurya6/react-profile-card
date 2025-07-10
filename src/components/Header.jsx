// components/Header.jsx
import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { socialLinks, navLinks } from '../utils/constants';

const Header = ({ activeSection, setActiveSection }) => {
  const headerRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        headerRef.current.classList.add('header-scrolled');
      } else {
        headerRef.current.classList.remove('header-scrolled');
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.header
      ref={headerRef}
      initial={{ opacity: 0, x: -100 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 1 }}
      className="fixed top-0 left-0 bottom-0 w-[300px] bg-[#040b14] z-50 shadow-lg overflow-y-auto transition-all duration-300 header-transform"
    >
      <div className="flex flex-col h-full p-8">
        <div className="flex flex-col items-center">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="rounded-full border-4 border-[#2c2f3f] w-32 h-32 overflow-hidden mb-4"
          >
            <img
              src="/profile.jpg"
              alt="Profile"
              className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
            />
          </motion.div>
          <h1 className="text-2xl font-bold text-center mb-1">
            <a href="#home" className="text-white hover:text-[#149ddd] transition-colors duration-300">
              Your Name
            </a>
          </h1>
          <div className="flex space-x-4 my-4">
            {socialLinks.map((link) => (
              <motion.a
                key={link.id}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -5, scale: 1.2 }}
                className="text-gray-400 hover:text-[#149ddd] text-xl transition-colors duration-300"
              >
                {link.icon}
              </motion.a>
            ))}
          </div>
        </div>

        <nav className="mt-8">
          <ul>
            {navLinks.map((link) => (
              <motion.li
                key={link.id}
                whileHover={{ x: 10 }}
                className={`mb-2 ${activeSection === link.id ? 'active' : ''}`}
              >
                <a
                  href={`#${link.id}`}
                  onClick={() => setActiveSection(link.id)}
                  className={`flex items-center py-2 px-4 rounded-md transition-all duration-300 ${
                    activeSection === link.id
                      ? 'bg-[#1a1f2e] text-[#149ddd]'
                      : 'text-gray-400 hover:bg-[#1a1f2e] hover:text-white'
                  }`}
                >
                  <span className="mr-3">{link.icon}</span>
                  <span>{link.text}</span>
                </a>
              </motion.li>
            ))}
          </ul>
        </nav>

        <div className="mt-auto text-center text-gray-500 text-sm">
          <p>© {new Date().getFullYear()} Your Name</p>
        </div>
      </div>
    </motion.header>
  );
};

export default Header;