// utils/constants.js
export const socialLinks = [
  {
    id: 1,
    name: 'Twitter',
    url: 'https://twitter.com',
    icon: <i className="fab fa-twitter"></i>,
  },
  {
    id: 2,
    name: 'Facebook',
    url: 'https://facebook.com',
    icon: <i className="fab fa-facebook"></i>,
  },
  {
    id: 3,
    name: 'Instagram',
    url: 'https://instagram.com',
    icon: <i className="fab fa-instagram"></i>,
  },
  {
    id: 4,
    name: 'LinkedIn',
    url: 'https://linkedin.com',
    icon: <i className="fab fa-linkedin"></i>,
  },
  {
    id: 5,
    name: 'GitHub',
    url: 'https://github.com',
    icon: <i className="fab fa-github"></i>,
  },
];

export const navLinks = [
  {
    id: 'home',
    text: 'Home',
    icon: <i className="fas fa-home"></i>,
  },
  {
    id: 'about',
    text: 'About',
    icon: <i className="fas fa-user"></i>,
  },
  {
    id: 'skills',
    text: 'Skills',
    icon: <i className="fas fa-list"></i>,
  },
  {
    id: 'portfolio',
    text: 'Portfolio',
    icon: <i className="fas fa-briefcase"></i>,
  },
  {
    id: 'contact',
    text: 'Contact',
    icon: <i className="fas fa-envelope"></i>,
  },
];

export const skills = [
  { name: 'HTML', percentage: 100 },
  { name: 'CSS', percentage: 90 },
  { name: 'JavaScript', percentage: 85 },
  { name: 'React', percentage: 80 },
  { name: 'Node.js', percentage: 75 },
  { name: 'UI/UX Design', percentage: 85 },
  { name: 'Photoshop', percentage: 70 },
  { name: 'Illustrator', percentage: 65 },
];

export const portfolioItems = [
  {
    id: 1,
    title: 'Web Design Project',
    description: 'A modern website design for a creative agency',
    category: 'web',
    image: '/project1.jpg',
    link: '#',
    detailsLink: '#',
  },
  {
    id: 2,
    title: 'Mobile App UI',
    description: 'User interface for a fitness tracking application',
    category: 'app',
    image: '/project2.jpg',
    link: '#',
    detailsLink: '#',
  },
  {
    id: 3,
    title: 'Brand Identity',
    description: 'Logo and branding for a coffee shop',
    category: 'design',
    image: '/project3.jpg',
    link: '#',
    detailsLink: '#',
  },
  {
    id: 4,
    title: 'E-commerce Website',
    description: 'Online store with custom checkout process',
    category: 'web',
    image: '/project4.jpg',
    link: '#',
    detailsLink: '#',
  },
  {
    id: 5,
    title: 'Dashboard UI',
    description: 'Admin dashboard for analytics platform',
    category: 'app',
    image: '/project5.jpg',
    link: '#',
    detailsLink: '#',
  },
  {
    id: 6,
    title: 'Packaging Design',
    description: 'Product packaging for organic skincare line',
    category: 'design',
    image: '/project6.jpg',
    link: '#',
    detailsLink: '#',
  },
];

export const particlesConfig = {
  particles: {
    number: {
      value: 80,
      density: {
        enable: true,
        value_area: 800,
      },
    },
    color: {
      value: '#149ddd',
    },
    shape: {
      type: 'circle',
      stroke: {
        width: 0,
        color: '#000000',
      },
      polygon: {
        nb_sides: 5,
      },
    },
    opacity: {
      value: 0.5,
      random: false,
      anim: {
        enable: false,
        speed: 1,
        opacity_min: 0.1,
        sync: false,
      },
    },
    size: {
      value: 3,
      random: true,
      anim: {
        enable: false,
        speed: 40,
        size_min: 0.1,
        sync: false,
      },
    },
    line_linked: {
      enable: true,
      distance: 150,
      color: '#149ddd',
      opacity: 0.4,
      width: 1,
    },
    move: {
      enable: true,
      speed: 2,
      direction: 'none',
      random: false,
      straight: false,
      out_mode: 'out',
      bounce: false,
      attract: {
        enable: false,
        rotateX: 600,
        rotateY: 1200,
      },
    },
  },
  interactivity: {
    detect_on: 'canvas',
    events: {
      onhover: {
        enable: true,
        mode: 'grab',
      },
      onclick: {
        enable: true,
        mode: 'push',
      },
      resize: true,
    },
    modes: {
      grab: {
        distance: 140,
        line_linked: {
          opacity: 1,
        },
      },
      bubble: {
        distance: 400,
        size: 40,
        duration: 2,
        opacity: 8,
        speed: 3,
      },
      repulse: {
        distance: 200,
        duration: 0.4,
      },
      push: {
        particles_nb: 4,
      },
      remove: {
        particles_nb: 2,
      },
    },
  },
  retina_detect: true,
};