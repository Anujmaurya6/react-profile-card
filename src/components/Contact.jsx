// components/Contact.jsx
import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { FaMapMarkerAlt, FaEnvelope, FaPhoneAlt } from 'react-icons/fa';

const Contact = ({ setActiveSection }) => {
  const contactRef = useRef(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [formStatus, setFormStatus] = useState('');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setActiveSection('contact');
        }
      },
      { threshold: 0.2 }
    );

    if (contactRef.current) {
      observer.observe(contactRef.current);
    }

    return () => {
      if (contactRef.current) {
        observer.unobserve(contactRef.current);
      }
    };
  }, [setActiveSection]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the form data to a server
    console.log('Form submitted:', formData);
    setFormStatus('success');
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: '',
    });
    setTimeout(() => setFormStatus(''), 3000);
  };

  const fadeIn = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section
      ref={contactRef}
      id="contact"
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
            Contact
          </h2>
          <div className="w-20 h-1 bg-[#149ddd] mx-auto mb-6"></div>
          <p className="text-gray-400 max-w-3xl mx-auto">
            Feel free to reach out to me for any questions or opportunities. I'll
            get back to you as soon as possible.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="flex items-start">
              <div className="bg-[#149ddd] p-3 rounded-full mr-4">
                <FaMapMarkerAlt className="text-white text-xl" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-2">Location:</h3>
                <p className="text-gray-400">New York, USA</p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="bg-[#149ddd] p-3 rounded-full mr-4">
                <FaEnvelope className="text-white text-xl" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-2">Email:</h3>
                <p className="text-gray-400">info@example.com</p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="bg-[#149ddd] p-3 rounded-full mr-4">
                <FaPhoneAlt className="text-white text-xl" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-2">Call:</h3>
                <p className="text-gray-400">+1 5589 55488 55</p>
              </div>
            </div>

            <div className="mt-8">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.215573291865!2d-73.9878449241646!3d40.74844047138961!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a9b3117469%3A0xd134e199a405a163!2sEmpire%20State%20Building!5e0!3m2!1sen!2sus!4v1620000000000!5m2!1sen!2sus"
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                className="rounded-lg shadow-lg"
              ></iframe>
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
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-gray-300 mb-2 font-medium"
                    >
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full bg-[#1a1f2e] border border-[#2c2f3f] rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-[#149ddd] transition-all duration-300"
                      required
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-gray-300 mb-2 font-medium"
                    >
                      Your Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full bg-[#1a1f2e] border border-[#2c2f3f] rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-[#149ddd] transition-all duration-300"
                      required
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="subject"
                    className="block text-gray-300 mb-2 font-medium"
                  >
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full bg-[#1a1f2e] border border-[#2c2f3f] rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-[#149ddd] transition-all duration-300"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block text-gray-300 mb-2 font-medium"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="6"
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full bg-[#1a1f2e] border border-[#2c2f3f] rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-[#149ddd] transition-all duration-300"
                    required
                  ></textarea>
                </div>
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="text-center"
                >
                  <button
                    type="submit"
                    className="bg-[#149ddd] text-white px-8 py-3 rounded-full font-medium hover:bg-[#0d8acd] transition-all duration-300"
                  >
                    Send Message
                  </button>
                </motion.div>
                {formStatus === 'success' && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-green-500/20 text-green-400 p-4 rounded-lg text-center"
                  >
                    Your message has been sent successfully!
                  </motion.div>
                )}
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;