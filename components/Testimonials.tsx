
import React from 'react';

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      quote: "Pengalaman umroh Ramadhan yang luar biasa. Pembimbingnya sangat sabar, hotelnya dekat sekali, jadi tidak capek bolak-balik ke masjid. Benar-benar bisa fokus ibadah.",
      name: "Bapak H. Ahmad Santoso",
      location: "Jakarta",
      avatar: "https://picsum.photos/seed/avatar1/100/100"
    },
    {
      quote: "Alhamdulillah, impian Itikaf di Masjidil Haram terwujud. Terima kasih Baitullah Journey atas pelayanannya yang profesional. Makanan sahur dan buka puasanya juga enak-enak.",
      name: "Ibu Siti Fatimah",
      location: "Surabaya",
      avatar: "https://picsum.photos/seed/avatar2/100/100"
    },
    {
      quote: "Awalnya ragu berangkat sendiri, tapi ternyata jamaahnya ramah-ramah dan suasananya sangat kekeluargaan. Saya merasa aman dan nyaman. Sangat direkomendasikan!",
      name: "Mas Budi Prasetyo",
      location: "Bandung",
      avatar: "https://picsum.photos/seed/avatar3/100/100"
    }
  ];

  return (
    <section id="testimoni" className="py-20 bg-accent">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-serif text-secondary">Apa Kata Mereka yang Telah Berangkat Bersama Kami?</h2>
          <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
            Kepuasan dan kekhusyukan ibadah Anda adalah prioritas utama kami.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-8 rounded-lg shadow-lg">
              <p className="text-gray-600 italic mb-6">"{testimonial.quote}"</p>
              <div className="flex items-center">
                <img src={testimonial.avatar} alt={testimonial.name} className="w-14 h-14 rounded-full mr-4" />
                <div>
                  <p className="font-bold text-secondary">{testimonial.name}</p>
                  <p className="text-gray-500 text-sm">{testimonial.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
