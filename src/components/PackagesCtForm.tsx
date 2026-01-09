
import React from 'react';
import PackageCard from './PackageCardCtForm';

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
  title: string;
  subtitle: string;
  items: PackageData[];
}

const Packages: React.FC<PackagesProps> = ({ 
  title, 
  subtitle,
  items 
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
          {items.map((pkg, index) => (
            <PackageCard key={index} {...pkg} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Packages;
