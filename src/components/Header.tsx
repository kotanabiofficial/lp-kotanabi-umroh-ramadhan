
import React, { useState } from 'react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Common links for reuse
  const navLinks = [
    { href: '#paket', text: 'Paket' },
    { href: '#testimoni', text: 'Testimoni' },
    { href: '#faq', text: 'FAQ' },
    { href: '/konsultasi/', text: 'Konsultasi' },
  ];

  return (
    <>
      <header className="bg-white/80 backdrop-blur-md shadow-md sticky top-0 z-50">
        <div className="container mx-auto px-6 py-3 flex justify-between items-center">
          <div>
            <a href="/">
              <img
                src="/assets/logo-kotanabi-umroh-online-terpercaya.webp"
                alt="KotaNabi Logo"
                className="h-12"
              />
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center">
            {navLinks.map(link => (
              <a key={link.href} href={link.href} className="text-gray-700 hover:text-primary transition duration-300 mx-4">{link.text}</a>
            ))}
            <a href="#kontak" className="bg-primary hover:bg-yellow-600 text-white font-bold py-2 px-6 rounded-full transition duration-300 shadow-lg ml-4">
              Hubungi Kami
            </a>
          </nav>

          {/* Mobile Menu Button (Hamburger) */}
          <div className="md:hidden">
            <button onClick={toggleMenu} aria-label="Buka menu" className="text-secondary p-2">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-white z-50 flex flex-col items-center justify-center md:hidden">
          <button onClick={toggleMenu} aria-label="Tutup menu" className="absolute top-6 right-6 text-secondary p-2">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          <nav className="flex flex-col items-center space-y-8">
            {navLinks.map(link => (
              <a key={link.href} href={link.href} onClick={toggleMenu} className="text-2xl text-gray-700 hover:text-primary transition duration-300">{link.text}</a>
            ))}
            <a href="#kontak" onClick={toggleMenu} className="mt-4 bg-primary hover:bg-yellow-600 text-white font-bold py-3 px-8 rounded-full transition duration-300 shadow-lg text-xl">
              Hubungi Kami
            </a>
          </nav>
        </div>
      )}
    </>
  );
};

export default Header;
