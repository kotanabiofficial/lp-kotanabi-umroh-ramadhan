
import React from 'react';

const Gallery: React.FC = () => {
  const images = [
    'https://picsum.photos/seed/gallery1/600/400',
    'https://picsum.photos/seed/gallery2/600/400',
    'https://picsum.photos/seed/gallery3/600/400',
    'https://picsum.photos/seed/gallery4/600/400',
    'https://picsum.photos/seed/gallery5/600/400',
    'https://picsum.photos/seed/gallery6/600/400'
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
