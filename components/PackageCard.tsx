
import React from 'react';

interface PackageCardProps {
  name: string;
  duration: string;
  price: string;
  features: string[];
  isPopular: boolean;
  image: string;
  waMessage: string;
}

const PackageCard: React.FC<PackageCardProps> = ({ name, duration, price, features, isPopular, image, waMessage }) => {
  const phoneNumber = "628561500883";
  const message = waMessage;
  const whatsappUrl = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(message)}`;

  return (
    <div className={`bg-white rounded-lg shadow-lg overflow-hidden transition-transform duration-300 ${isPopular ? 'transform md:-translate-y-4 border-4 border-primary shadow-2xl' : 'hover:transform hover:-translate-y-2'}`}>
      {isPopular && (
        <div className="bg-primary text-white text-center py-2 font-bold uppercase tracking-wider">
          PROGRAM FAVORIT
        </div>
      )}
      <img src={image} alt={`Paket Umroh ${name}`} className="w-full h-96 object-cover object-top" />
      <div className="p-6">
        <h3 className="text-2xl font-bold font-serif text-secondary">{name}</h3>
        <p className="text-gray-500 mb-4">{duration}</p>
        <p className="text-3xl font-bold text-primary mb-6">{price}</p>
        <ul className="space-y-3 mb-8 text-gray-700">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center">
              <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
              {feature}
            </li>
          ))}
        </ul>
        <a href={whatsappUrl} className="w-full block text-center bg-secondary hover:bg-gray-800 text-white font-bold py-3 px-6 rounded-lg transition duration-300">
          Konsultasi via WhatsApp
        </a>
      </div>
    </div>
  );
};

export default PackageCard;
