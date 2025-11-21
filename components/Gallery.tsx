
import React from 'react';

const Gallery: React.FC = () => {
  const images = [
    'https://storage.googleapis.com/muslimpergi/uploads/gallery/pict/10144/aqutour-jamaah-1.webp',
    'https://storage.googleapis.com/muslimpergi/uploads/gallery/pict/10145/aqutour-jamaah-2.webp',
    'https://storage.googleapis.com/muslimpergi/uploads/gallery/pict/10146/aqutour-jamaah-3.webp',
    'https://storage.googleapis.com/muslimpergi/uploads/gallery/pict/10085/kn-jamaah-mutiarasunnah.webp',
    'https://storage.googleapis.com/muslimpergi/uploads/gallery/pict/10086/kn-jamaah-mutiarasunnah-2.webp',
    'https://storage.googleapis.com/muslimpergi/uploads/gallery/pict/10160/kn-jamaah-nakhla-2.webp',
    'https://storage.googleapis.com/muslimpergi/uploads/gallery/pict/10159/kn-jamaah-nakhla.webp',
    'https://storage.googleapis.com/muslimpergi/uploads/gallery/pict/10085/prosesi_umroh_grup_20_juli_2025.webp',
    'https://storage.googleapis.com/muslimpergi/uploads/gallery/pict/10086/prosesi_umroh_grup_28_agustus_2025.webp'
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-serif text-secondary">Fasilitas dan Momen Perjalanan Kami</h2>
          <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
            Lihat lebih dekat kenyamanan yang akan Anda dapatkan dan kebersamaan jamaah yang telah mempercayakan perjalanannya pada kami.
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {images.map((src, index) => (
            <div key={index} className="overflow-hidden rounded-lg shadow-md">
              <img src={src} alt={`Gallery Image ${index + 1}`} className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-500 cursor-pointer" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
