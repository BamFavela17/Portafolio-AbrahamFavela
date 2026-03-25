import React, { useState, useEffect } from 'react';

interface NavItem {
  label: string;
  href: string;
}

const navItems: NavItem[] = [
  { label: 'Inicio', href: '#inicio' },
  { label: 'Sobre Mí', href: '#sobremi' },
  { label: 'Portfolio', href: '#portfolio' },
  { label: 'Trayectoria', href: '#curriculum' },
  { label: 'Skills', href: '#skills' },
  { label: 'Contacto', href: '#contacto' },
];

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [scrolled, setScrolled] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMenuOpen]);

  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-[100] transition-all duration-500 ${
        scrolled || isMenuOpen 
          ? 'bg-[#1e2326] shadow-2xl py-3' 
          : 'bg-transparent py-5'
      }`}
    >
      <div className="flex justify-between items-center max-w-[1100px] mx-auto px-6">
        
        <div className="z-[110]">
          <a 
            href="#inicio" 
            className="text-2xl font-bold text-[#1CB698] tracking-tighter transition-transform active:scale-95 block"
            style={{ fontFamily: 'Righteous, sans-serif' }}
          >
            Abraham<span className="text-white">.</span>
          </a>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:block">
          <ul className="flex space-x-8">
            {navItems.map((item) => (
              <li key={item.href}>
                <a 
                  href={item.href}
                  className="text-white text-[11px] font-bold uppercase tracking-[2px] hover:text-[#1CB698] transition-colors relative group"
                >
                  {item.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-[#1CB698] transition-all group-hover:w-full"></span>
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Mobile Toggle */}
        <button 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden z-[110] p-2 text-[#1CB698] transition-transform active:scale-90"
        >
          <i className={`fa-solid ${isMenuOpen ? 'fa-xmark' : 'fa-bars-staggered'} text-2xl`}></i>
        </button>

        {/* Mobile Menu Overlay */}
        <div className={`
          fixed inset-0 bg-[#1e2326] flex flex-col items-center justify-center transition-all duration-300 md:hidden
          ${isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'}
        `}>
          <ul className="space-y-8 text-center">
            {navItems.map((item, index) => (
              <li 
                key={item.href}
                className={`transition-all duration-500 transform ${isMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
                style={{ transitionDelay: isMenuOpen ? `${index * 70}ms` : '0ms' }}
              >
                <a 
                  href={item.href}
                  onClick={handleLinkClick}
                  className="text-white text-2xl font-black uppercase tracking-[4px] active:text-[#1CB698]"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;