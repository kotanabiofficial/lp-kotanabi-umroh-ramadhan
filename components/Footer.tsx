
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-dark text-gray-300 py-12">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
        <div>
          <img 
            src="https://storage.googleapis.com/muslimpergi/uploads/site/logo2/2/medium_logo-kotanabi-umroh-online-terpercaya.webp" 
            alt="Baitullah Journey Logo" 
            className="h-12 mb-4 mx-auto md:mx-0" 
          />
          <p className="text-gray-400">
            PT. Perjalanan Suci Indonesia<br />
            Izin Umroh (PPIU) No. 123/456<br />
            Jl. Jenderal Sudirman Kav. 52-53<br />
            Jakarta Selatan, 12190
          </p>
        </div>
        <div>
          <h3 className="text-xl font-bold font-serif text-white mb-4">Hubungi Kami</h3>
          <ul className="space-y-2">
            <li><a href="tel:+62211234567" className="hover:text-primary">Telp: (021) 123-4567</a></li>
            <li><a href="https://wa.me/6281234567890" className="hover:text-primary">WhatsApp: 0812-3456-7890</a></li>
            <li><a href="mailto:info@baitullahjourney.com" className="hover:text-primary">Email: info@baitullahjourney.com</a></li>
          </ul>
        </div>
        <div>
          <h3 className="text-xl font-bold font-serif text-white mb-4">Ikuti Kami</h3>
          <div className="flex justify-center md:justify-start space-x-4">
            <a href="#" className="text-gray-400 hover:text-primary transition duration-300">Facebook</a>
            <a href="#" className="text-gray-400 hover:text-primary transition duration-300">Instagram</a>
            <a href="#" className="text-gray-400 hover:text-primary transition duration-300">YouTube</a>
          </div>
        </div>
      </div>
      <div className="mt-8 pt-8 border-t border-gray-700 text-center text-gray-500">
        <p>&copy; {new Date().getFullYear()} Baitullah Journey. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
