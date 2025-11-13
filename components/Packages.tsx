
import React from 'react';
import PackageCard from './PackageCard';

const Packages: React.FC = () => {
  const packages = [
    {
      name: 'Umroh Awal Ramadhan',
      duration: '9 Hari',
      price: 'Mulai dari Rp28 Jt-an',
      features: ['Penerbangan Direct by Oman Air', 'Hotel Bintang 3 (Mekah & Madinah)', 'Ibadah Awal Ramadhan', 'Include Sahur dan Buka'],
      isPopular: false,
      image: 'https://storage.googleapis.com/muslimpergi/uploads/gallery/pict/10075/mutiarasunnah-easy-umroh-awal-ramadhan-2026.webp',
      waMessage: 'Assalamualaikum, saya tertarik dengan paket *Umroh Awal Ramadhan 2026 by Mutiara Sunnah*. Mohon informasi lengkapnya.'
    },
    {
      name: 'Umroh I\'tikaf 10 Malam Terakhir)',
      duration: '16 Hari',
      price: 'Mulai dari Rp36 Jt-an',
      features: ['Fokus Ibadah 10 Malam Terakhir', 'Berburu Malam Lailatul Qadar', 'Suasana Itikaf yang Khusyuk', 'Langsung Umroh dan I\'tikaf'],
      isPopular: true,
      image: 'https://storage.googleapis.com/muslimpergi/uploads/gallery/pict/10074/mutiarasunnah-umroh-itikaf-ramadhan-9-maret-2026.webp',
      waMessage: 'Assalamualaikum, saya tertarik dengan paket *Umroh Itikaf Ramadhan 2026 by Mutiara Sunnah*. Mohon informasi lengkapnya.'
    },
    {
      name: 'Umroh I\'tikaf Madinah',
      duration: '15 Hari',
      price: 'Mulai dari Rp38 Jt-an',
      features: ['Meraih Lailatul Qadr di Madinah', 'Kesempatan Itikaf 10 Malam Terakhir', 'Hotel Bintang 3 Nyaman', 'City Tour Mekah & Madinah'],
      isPopular: false,
      image: 'https://storage.googleapis.com/muslimpergi/uploads/gallery/pict/10077/nakhla-saqeefa-umroh-itikaf-ramadhan-madinah-2026.webp',
      waMessage: 'Assalamualaikum, saya tertarik dengan paket *Umroh Itikaf Ramadhan Madinah by Nakhla*. Mohon informasi lengkapnya.'
    }
  ];

  return (
    <section id="paket" className="py-20 bg-accent">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-serif text-secondary">Pilih Paket Perjalanan Spiritual Anda</h2>
          <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
            Setiap paket dirancang untuk memberikan pengalaman Ramadhan terbaik. Kursi sangat terbatas, amankan pilihan Anda sekarang.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-start">
          {packages.map((pkg, index) => (
            <PackageCard key={index} {...pkg} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Packages;
