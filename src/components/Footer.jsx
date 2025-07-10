// components/Footer.jsx
import { motion } from 'framer-motion';
import { FaArrowUp, FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer className="bg-[#0a101e] py-12 px-6 relative">
      <div className="container mx-auto text-center">
        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={scrollToTop}
          className="w-12 h-12 bg-[#149ddd] rounded-full flex items-center justify-center mx-auto mb-8 cursor-pointer hover:bg-[#0d8acd] transition-colors duration-300"
        >
          <FaArrowUp className="text-white text-xl" />
        </motion.div>

        <div className="flex justify-center space-x-6 mb-8">
          <motion.a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ y: -5 }}
            className="text-gray-400 hover:text-[#149ddd] text-xl transition-colors duration-300"
          >
            <FaLinkedin />
          </motion.a>
          <motion.a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ y: -5 }}
            className="text-gray-400 hover:text-[#149ddd] text-xl transition-colors duration-300"
          >
            <FaGithub />
          </motion.a>
          <motion.a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ y: -5 }}
            className="text-gray-400 hover:text-[#149ddd] text-xl transition-colors duration-300"
          >
            <FaTwitter />
          </motion.a>
        </div>

        <p className="text-gray-500 mb-4">
          © {new Date().getFullYear()} <strong className="text-white">Your Name</strong>. All Rights Reserved
        </p>
        <p className="text-gray-500 text-sm">
          Designed with ❤️ by{' '}
          <a
            href="#home"
            className="text-[#149ddd] hover:underline transition-colors duration-300"
          >
            Your Name
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;