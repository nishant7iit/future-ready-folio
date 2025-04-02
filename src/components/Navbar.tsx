
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from './ui/button';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-background/95 backdrop-blur-sm shadow-sm' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4 md:justify-start md:space-x-10">
          <div className="flex justify-start lg:w-0 lg:flex-1">
            <a href="#" className="font-display font-bold text-xl text-primary">
              Portfolio
            </a>
          </div>
          
          <div className="md:hidden">
            <button
              type="button"
              className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none"
              onClick={toggleMenu}
            >
              <span className="sr-only">Open menu</span>
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
          
          <nav className="hidden md:flex space-x-10">
            <a href="#home" className="nav-link nav-active">Home</a>
            <a href="#about" className="nav-link">About</a>
            <a href="#skills" className="nav-link">Skills</a>
            <a href="#projects" className="nav-link">Projects</a>
            <a href="#education" className="nav-link">Education</a>
            <a href="#contact" className="nav-link">Contact</a>
          </nav>
          
          <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
            <Button className="btn-primary">Download CV</Button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-background shadow-lg md:hidden">
          <div className="pt-2 pb-4 px-4 space-y-1">
            <a href="#home" className="block px-3 py-2 rounded-md text-base font-medium text-primary hover:bg-secondary">Home</a>
            <a href="#about" className="block px-3 py-2 rounded-md text-base font-medium text-foreground hover:bg-secondary">About</a>
            <a href="#skills" className="block px-3 py-2 rounded-md text-base font-medium text-foreground hover:bg-secondary">Skills</a>
            <a href="#projects" className="block px-3 py-2 rounded-md text-base font-medium text-foreground hover:bg-secondary">Projects</a>
            <a href="#education" className="block px-3 py-2 rounded-md text-base font-medium text-foreground hover:bg-secondary">Education</a>
            <a href="#contact" className="block px-3 py-2 rounded-md text-base font-medium text-foreground hover:bg-secondary">Contact</a>
            <div className="pt-4">
              <Button className="w-full">Download CV</Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
