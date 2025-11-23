import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Briefcase } from 'lucide-react';
import { Button } from './Button';

export const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const navLinks = [
    { name: '홈', path: '/' },
    { name: '멘토링 프로그램', path: '/#services' },
    { name: '수강 후기', path: '/#reviews' },
    { name: 'FAQ', path: '/faq' },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/95 backdrop-blur-sm shadow-md py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-2 text-primary font-bold text-2xl">
          <Briefcase className="w-8 h-8" />
          <span>CareerUp</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              to={link.path}
              className={`text-sm font-medium transition-colors ${
                scrolled ? 'text-slate-700 hover:text-primary' : 'text-slate-800 hover:text-primary'
              }`}
            >
              {link.name}
            </Link>
          ))}
          <Link to="/booking">
            <Button variant="accent" size="sm">
              멘토링 예약하기
            </Button>
          </Link>
        </nav>

        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden text-slate-700"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="absolute top-full left-0 right-0 bg-white shadow-lg md:hidden p-4 flex flex-col space-y-4 border-t border-slate-100">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              to={link.path}
              className="text-slate-700 font-medium py-2 px-4 hover:bg-slate-50 rounded-lg"
            >
              {link.name}
            </Link>
          ))}
          <Link to="/booking" className="w-full">
            <Button variant="accent" fullWidth>
              멘토링 예약하기
            </Button>
          </Link>
        </div>
      )}
    </header>
  );
};