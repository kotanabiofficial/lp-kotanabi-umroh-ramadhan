
import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="bg-white/80 backdrop-blur-md shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-6 py-3 flex justify-between items-center">
        <div>
          <a href="#">
            <img 
              src="https://storage.googleapis.com/muslimpergi/uploads/site/logo2/2/medium_logo-kotanabi-umroh-online-terpercaya.webp" 
              alt="Baitullah Journey Logo" 
              className="h-12" 
            />
          </a>
        </div>
        <nav>
          <a href="#paket" className="hidden md:inline text-gray-700 hover:text-primary transition duration-300 mx-4">Paket</a>
          <a href="#testimoni" className="hidden md:inline text-gray-700 hover:text-primary transition duration-300 mx-4">Testimoni</a>
          <a href="#faq" className="hidden md:inline text-gray-700 hover:text-primary transition duration-300 mx-4">FAQ</a>
          <a href="#kontak" className="bg-primary hover:bg-yellow-600 text-white font-bold py-2 px-6 rounded-full transition duration-300 shadow-lg">
            Hubungi Kami
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
