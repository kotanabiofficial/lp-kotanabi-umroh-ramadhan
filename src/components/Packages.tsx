
import React from 'react';
import PackageCard from './PackageCard';

interface PackageData {
  name: string;
  duration: string;
  price: string;
  features: string[];
  isPopular: boolean;
  image: string;
  waMessage: string;
}

interface PackagesProps {
  title?: string;
  subtitle?: string;
  data: PackageData[];
}

const Packages: React.FC<PackagesProps> = ({ 
  title = "Pilih Paket Perjalanan Spiritual Anda", 
  subtitle = "Setiap paket dirancang untuk memberikan pengalaman terbaik. Seat sangat terbatas, amankan pilihan Anda sekarang.",
  data 
}) => {
  const phoneNumber = "628561500883";
  const message = "Assalamualaikum, saya tertarik dengan paket Haji / Umroh di Kota Nabi. Mohon informasi lengkapnya.";
  const whatsappUrl = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(message)}`;

  return (
    <section id="paket" className="py-20 bg-accent">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-serif text-secondary">{title}</h2>
          <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
            {subtitle}
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-start">
          {data.map((pkg, index) => (
            <PackageCard key={index} {...pkg} />
          ))}
        </div>
      </div>
      <div className="relative z-20 text-center px-4 mt-12">
        <a href={whatsappUrl} className="ctawa bg-primary hover:bg-yellow-600 text-white font-bold py-4 px-10 rounded-full text-lg transition duration-300 transform hover:scale-105 shadow-xl">Lihat Paket Lain</a>
      </div>
    </section>
  );
};

export default Packages;
