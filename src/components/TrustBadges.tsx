
import React from 'react';

interface Badge {
  name: string;
  path: string;
}

interface TrustBadgesProps {
  logos?: Badge[];
}

const TrustBadges: React.FC<TrustBadgesProps> = ({ logos }) => {
  const defaultLogos = [
    { name: "Kemenag RI", path: "https://storage.googleapis.com/muslimpergi/uploads/gallery/pict/849/partner-kemenag.png" },
    { name: "SISKOPATUH", path: "https://storage.googleapis.com/muslimpergi/uploads/gallery/pict/1282/logo_siskopatuh.png" },
    { name: "Lima PASTI", path: "https://storage.googleapis.com/muslimpergi/uploads/gallery/pict/2688/social-proof-logo-5-pasti-rounded.png" },
  ];

  const displayLogos = logos || defaultLogos;

  return (
    <div className="bg-white py-8">
      <div className="container mx-auto px-6">
        <h3 className="text-center text-gray-600 font-semibold mb-6">
          Bersama Mitra Travel Berizin Resmi &amp; Amanah
        </h3>
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
          {displayLogos.map((logo) => (
            <img key={logo.name} src={logo.path} alt={logo.name} className="h-12 md:h-16 grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition duration-300" />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TrustBadges;
