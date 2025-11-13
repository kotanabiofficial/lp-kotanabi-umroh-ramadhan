
import React from 'react';
import PackageCard from './PackageCard';

const Packages: React.FC = () => {
  const packages = [
    {
      name: 'Awal Ramadhan',
      duration: '12 Hari',
      price: 'Mulai dari Rp 35 Jt',
      features: ['Penerbangan Direct', 'Hotel Bintang 5 (Mekkah & Madinah)', 'Ibadah Awal Ramadhan', 'City Tour Mekkah & Madinah'],
      isPopular: false,
      image: 'https://picsum.photos/seed/awal/400/300'
    },
    {
      name: 'Full Ramadhan & Idul Fitri',
      duration: '30 Hari',
      price: 'Mulai dari Rp 75 Jt',
      features: ['Merasakan Idul Fitri di Haramain', 'Pahala Haji Bersama Nabi', 'Kesempatan Itikaf 10 Malam Terakhir', 'Hotel Bintang 5 Dekat Masjid'],
      isPopular: true,
      image: 'https://picsum.photos/seed/full/400/300'
    },
    {
      name: 'Lailatul Qadar (10 Malam Terakhir)',
      duration: '15 Hari',
      price: 'Mulai dari Rp 55 Jt',
      features: ['Fokus Ibadah 10 Malam Terakhir', 'Berburu Malam Lailatul Qadar', 'Suasana Itikaf yang Khusyuk', 'Hotel Bintang 5 Dekat Masjid'],
      isPopular: false,
      image: 'https://picsum.photos/seed/akhir/400/300'
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
