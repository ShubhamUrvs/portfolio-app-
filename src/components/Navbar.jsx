import { useState, useEffect } from 'react';
import { Link as ScrollLink } from 'react-scroll';
import { Link as RouterLink, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X, Code2 } from 'lucide-react';
import { motion } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const isHomePage = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Skills', to: 'skills' },
    { name: 'Projects', to: 'projects' },
    { name: 'Education', to: 'education' },
    { name: 'Certifications', to: 'certifications' },
    { name: 'Contact', to: 'contact' },
  ];

  const handleNavClick = (target) => {
    if (isHomePage) {
      // Smooth scroll on home page
      const element = document.getElementById(target);
      if (element) {
        window.scrollTo({
          top: element.offsetTop - 70,
          behavior: 'smooth',
        });
      }
    } else {
      // Navigate to home and then scroll
      navigate(`/#${target}`);
    }
    setIsOpen(false);
  };

  const NavLink = ({ to, name }) => {
    if (isHomePage) {
      return (
        <ScrollLink
          to={to}
          smooth={true}
          duration={500}
          offset={-70}
          onClick={() => setIsOpen(false)}
          className="hover:text-primary transition-colors cursor-pointer text-sm font-medium text-gray-300 hover:text-white"
        >
          {name}
        </ScrollLink>
      );
    }
    return (
      <a 
        href={`/#${to}`} 
        onClick={(e) => {
          e.preventDefault();
          handleNavClick(to);
        }}
        className="hover:text-primary transition-colors cursor-pointer text-sm font-medium text-gray-300 hover:text-white"
      >
        {name}
      </a>
    );
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-background/80 backdrop-blur-md border-b border-white/10' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <RouterLink to="/" className="flex items-center gap-2 cursor-pointer group">
            <Code2 className="text-primary h-8 w-8 group-hover:rotate-12 transition-transform" />
            <span className="font-bold text-xl tracking-tighter">Shubham<span className="text-primary">.dev</span></span>
          </RouterLink>

          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navLinks.map((link) => (
                <NavLink key={link.name} {...link} />
              ))}
            </div>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-white focus:outline-none"
            >
              {isOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-surface border-b border-white/10"
        >
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
               <a
                key={link.name}
                href={`/#${link.to}`}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.to);
                }}
                className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium cursor-pointer hover:bg-white/5"
              >
                {link.name}
              </a>
            ))}
          </div>
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;
