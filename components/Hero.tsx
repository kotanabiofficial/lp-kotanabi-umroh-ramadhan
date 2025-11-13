
import React from 'react';
import CountdownTimer from './CountdownTimer';

const Hero: React.FC = () => {
  // Target date for Ramadhan 2026 (approximate, e.g., Feb 18, 2026)
  const targetDate = new Date('2026-02-18T00:00:00');

  return (
    <section className="relative h-screen flex items-center justify-center text-white font-serif">
      <div className="absolute inset-0 bg-black opacity-60 z-10"></div>
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
        poster="https://storage.googleapis.com/muslimpergi/uploads/gallery/pict/10022/mp-mekkah-kaabah.webp"
      >
        {/* Replace with an actual video if available */}
        <source src="https://motion-graphics.b-cdn.net/wp-content/uploads/2023/12/10-09-08-34.mp4" type="video/mp4" />
      </video>

      <div className="relative z-20 text-center px-4">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-4 animate-fade-in-down">
          Wujudkan Impian Umroh Penuh Berkah di Bulan Ramadhan 2026
        </h1>
        <p className="text-lg md:text-2xl mb-8 max-w-3xl mx-auto font-sans animate-fade-in-up">
          Raih Keberkahan Malam Lailatul Qadar & Idul Fitri di Tanah Suci. Sebuah perjalanan spiritual yang tak terlupakan menanti Anda.
        </p>
        <div className="mb-10">
          <a href="#paket" className="bg-primary hover:bg-yellow-600 text-white font-bold py-4 px-10 rounded-full text-lg transition duration-300 transform hover:scale-105 shadow-xl">
            Amankan Seat Anda Sekarang
          </a>
        </div>
        <CountdownTimer targetDate={targetDate} />
      </div>
    </section>
  );
};

export default Hero;
