
import React from 'react';

interface Feature {
  icon: string;
  title: string;
  description: string;
}

interface ValuePropositionProps {
  title?: string;
  subtitle?: string;
  features?: Feature[];
}

const ValueProposition: React.FC<ValuePropositionProps> = ({
  title = "Mengapa Memilih Kami Untuk Perjalanan Suci Anda?",
  subtitle = "Kami bukan hanya memberangkatkan, kami merancang setiap detail perjalanan agar Anda dapat beribadah dengan tenang, khusyuk, dan nyaman.",
  features
}) => {
  const defaultFeatures = [
    {
      icon: '✈️',
      title: 'Penerbangan Langsung & Nyaman',
      description: 'Terbang tanpa transit dengan maskapai terbaik, menghemat waktu dan tenaga Anda agar tetap bugar untuk beribadah.'
    },
    {
      icon: '🏨',
      title: 'Hotel Jarak Dekat',
      description: 'Berbuka puasa dengan pemandangan Masjidil Haram & Masjid Nabawi dari hotel bintang 5 Anda yang hanya beberapa langkah saja.'
    },
    {
      icon: '👳‍♂️',
      title: 'Pembimbing Ibadah Profesional',
      description: 'Didampingi oleh Mutowwif & Ustadz berpengalaman yang akan membimbing setiap prosesi ibadah Anda sesuai ketentuan syariat.'
    },
    {
      icon: '🍽️',
      title: 'Sajian Sahur & Buka Puasa',
      description: 'Nikmati hidangan sahur dan iftar dengan menu internasional dan nusantara yang lezat dan higienis setiap hari.'
    },
    {
      icon: '✨',
      title: 'Program Ramadhan Eksklusif',
      description: 'Ikuti kajian ilmu, i\'tikaf, dan program spesial lainnya untuk memaksimalkan ibadah Anda di bulan suci.'
    },
    {
      icon: '✅',
      title: 'Jaminan Keberangkatan',
      description: 'Sebagai travel berizin resmi Kemenag, kami memberikan jaminan keberangkatan 100% untuk ketenangan hati Anda.'
    }
  ];

  const displayFeatures = features || defaultFeatures;

  return (
    <section id="keunggulan" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-serif text-secondary">{title}</h2>
          <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
            {subtitle}
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayFeatures.map((feature, index) => (
            <div key={index} className="bg-accent/50 p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
              <div className="text-center text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-center text-xl font-bold font-serif text-secondary mb-2">{feature.title}</h3>
              <p className="text-gray-700">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValueProposition;
