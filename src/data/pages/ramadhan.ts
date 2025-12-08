import type { LandingPageData } from '../types';

export const ramadhanData: LandingPageData = {
  hero: {
    title: "Wujudkan Impian Umroh Penuh Berkah di Bulan Ramadhan 2026",
    subtitle: "Raih Keberkahan Malam Lailatul Qadar & Idul Fitri di Tanah Suci. Sebuah perjalanan spiritual yang tak terlupakan menanti Anda.",
    targetDate: "2026-02-18T00:00:00"
  },
  valueProposition: {
    title: "Mengapa Memilih Kami Untuk Perjalanan Suci Anda?",
    subtitle: "Kami bukan hanya memberangkatkan, kami merancang setiap detail perjalanan agar Anda dapat beribadah dengan tenang, khusyuk, dan nyaman.",
    features: [
      { icon: '✈️', title: 'Penerbangan Langsung & Nyaman', description: 'Terbang tanpa transit dengan maskapai terbaik.' },
      { icon: '🏨', title: 'Hotel Jarak Dekat', description: 'Berbuka puasa dengan pemandangan Masjidil Haram & Masjid Nabawi.' },
      { icon: '👳‍♂️', title: 'Pembimbing Ibadah Profesional', description: 'Didampingi oleh Mutowwif & Ustadz berpengalaman.' },
      { icon: '🍽️', title: 'Sajian Sahur & Buka Puasa', description: 'Nikmati hidangan sahur dan iftar dengan menu lezat.' },
      { icon: '✨', title: 'Program Ramadhan Eksklusif', description: 'Ikuti kajian ilmu, i\'tikaf, dan program spesial lainnya.' },
      { icon: '✅', title: 'Jaminan Keberangkatan', description: 'Sebagai travel berizin resmi, kami memberikan jaminan 100%.' }
    ]
  },
  problemAgitation: {
    title: "Sebuah Panggilan Jiwa, Bukan Sekadar Perjalanan Biasa",
    description: "Bayangkan... Anda bersujud di Raudhah, shalat Tarawih di Masjidil Haram, dan berbuka puasa dengan jutaan umat Muslim dari seluruh dunia.",
    painPointsTitle: "Apakah Ini yang Anda Rasakan?",
    painPoints: [
      "Rindu yang mendalam untuk kembali ke Baitullah.",
      "Ingin merasakan Ramadhan yang lebih khusyuk dan bermakna.",
      "Berharap meraih ampunan dan keberkahan Lailatul Qadar.",
      "Mencari travel umroh yang amanah dan berpengalaman."
    ],
    solutionTitle: "Keistimewaan Umroh Ramadhan",
    solutionPoints: [
      "Pahala umroh setara dengan berhaji bersama Rasulullah ﷺ.",
      "Kesempatan emas untuk berburu malam Lailatul Qadar.",
      "Atmosfer spiritual yang tiada duanya di dunia.",
      "Merasakan Idul Fitri yang penuh haru di Kota Suci."
    ]
  },
  gallery: {
    title: "Fasilitas dan Momen Perjalanan Kami",
    subtitle: "Lihat lebih dekat kenyamanan yang akan Anda dapatkan.",
    images: [
        'https://storage.googleapis.com/muslimpergi/uploads/gallery/pict/10144/aqutour-jamaah-1.webp',
        'https://storage.googleapis.com/muslimpergi/uploads/gallery/pict/10145/aqutour-jamaah-2.webp',
        'https://storage.googleapis.com/muslimpergi/uploads/gallery/pict/10085/kn-jamaah-mutiarasunnah.webp',
        'https://storage.googleapis.com/muslimpergi/uploads/gallery/pict/10086/kn-jamaah-mutiarasunnah-2.webp',
        'https://storage.googleapis.com/muslimpergi/uploads/gallery/pict/10160/kn-jamaah-nakhla-2.webp',
        'https://storage.googleapis.com/muslimpergi/uploads/gallery/pict/10159/kn-jamaah-nakhla.webp',
    ]
  },
  testimonials: {
    title: "Apa Kata Mereka yang Telah Berangkat?",
    subtitle: "Kepuasan dan kekhusyukan ibadah Anda adalah prioritas utama kami.",
    items: [
      { quote: "Pengalaman umroh Ramadhan yang luar biasa.", name: "Bapak H. Ahmad Santoso", location: "Jakarta", avatar: "https://picsum.photos/seed/avatar1/100/100" },
      { quote: "Alhamdulillah, impian Itikaf di Masjidil Haram terwujud.", name: "Ibu Siti Fatimah", location: "Surabaya", avatar: "https://picsum.photos/seed/avatar2/100/100" },
      { quote: "Sangat direkomendasikan!", name: "Mas Budi Prasetyo", location: "Bandung", avatar: "https://picsum.photos/seed/avatar3/100/100" }
    ]
  },
  faq: [
    { question: "Bagaimana cara pendaftarannya?", answer: "Cukup klik tombol WhatsApp di halaman ini." },
    { question: "Apakah harga sudah termasuk semua biaya?", answer: "Betul, harga yang tertera adalah paket lengkap (all-in)." },
    { question: "Kapan waktu terbaik untuk umroh di bulan Ramadhan?", answer: "Setiap waktu di bulan Ramadhan itu istimewa." }
  ],
  cta: {
    title: "Jangan Tunda Lagi Panggilan ke Baitullah",
    description: "Program Umroh Itikaf Ramadhan adalah paket yang paling cepat terisi.",
    boxTitle: "Dapatkan Informasi Lengkap & Promo Spesial!",
    boxDescription: "Klik tombol di bawah untuk konsultasi gratis.",
    buttonText: "Chat di WhatsApp",
    whatsappMessage: "Assalamualaikum, saya tertarik dengan paket Umroh Ramadhan 2026. Mohon informasi lengkapnya."
  },
  packages: [
    {
      name: 'Umroh Awal Ramadhan',
      duration: '9 Hari',
      price: 'Mulai dari Rp28 Jt-an',
      features: ['Hotel Bintang 3 (5 Menit Jalan Kaki)', 'Raih Pahala Umroh Ramadhan', 'Free Tahallul', 'Free Ayam Albaik', 'Travel Aqu Tour'],
      isPopular: false,
      image: 'https://storage.googleapis.com/muslimpergi/uploads/gallery/pict/10125/aqutour-umroh-awal-ramadhan-2026.webp',
      waMessage: 'Assalamualaikum, saya tertarik dengan paket *Umroh Awal Ramadhan 2026 by Aqu Tour*. Mohon informasi lengkapnya.'
    },
    {
      name: 'Umroh Full Ramadhan',
      duration: '35 Hari',
      price: 'Mulai dari Rp33 Jt All-in',
      features: ['Hotel Bintang 3', 'Umroh 1 Bulan Penuh', 'Shalat Ied di Mekah', 'Lebaran di Mekah', 'Travel Aqu Tour'],
      isPopular: true,
      image: 'https://storage.googleapis.com/muslimpergi/uploads/gallery/pict/10126/aqutour-umroh-full-ramadhan-2026-35-hari.webp',
      waMessage: 'Assalamualaikum, saya tertarik dengan paket *Umroh Full Ramadhan 2026 by Aqu Tour*. Mohon informasi lengkapnya.'
    },
    {
      name: 'Umroh I\'tikaf Ramadhan',
      duration: '16 Hari',
      price: 'Mulai dari Rp34 Jt-an',
      features: ['Hotel Bintang 3', 'Full Itikaf 10 Hari Ramadhan', 'Shalat Ied di Mekah', 'Lebaran di Mekah', 'Travel Aqu Tour'],
      isPopular: false,
      image: 'https://storage.googleapis.com/muslimpergi/uploads/gallery/pict/10124/aqutour-umroh-itikaf-ramadhan-2026.webp',
      waMessage: 'Assalamualaikum, saya tertarik dengan paket *Umroh I\'tikaf Ramadhan 2026 by Aqu Tour*. Mohon informasi lengkapnya.'
    },
    {
      name: 'Umroh Awal Ramadhan',
      duration: '9 Hari',
      price: 'Mulai dari Rp28 Jt-an',
      features: ['Penerbangan Direct by Oman Air', 'Hotel Bintang 3 (Mekah & Madinah)', 'Ibadah Awal Ramadhan', 'Include Sahur dan Buka', 'Travel Mutiara Sunnah'],
      isPopular: false,
      image: 'https://storage.googleapis.com/muslimpergi/uploads/gallery/pict/10075/mutiarasunnah-easy-umroh-awal-ramadhan-2026.webp',
      waMessage: 'Assalamualaikum, saya tertarik dengan paket *Umroh Awal Ramadhan 2026 by Mutiara Sunnah*. Mohon informasi lengkapnya.'
    },
    {
      name: 'Umroh I\'tikaf 10 Malam Terakhir',
      duration: '16 Hari',
      price: 'Mulai dari Rp36 Jt-an',
      features: ['Fokus Ibadah 10 Malam Terakhir', 'Berburu Malam Lailatul Qadar', 'Suasana Itikaf yang Khusyuk', 'Langsung Umroh dan I\'tikaf', 'Travel Mutiara Sunnah'],
      isPopular: false,
      image: 'https://storage.googleapis.com/muslimpergi/uploads/gallery/pict/10074/mutiarasunnah-umroh-itikaf-ramadhan-9-maret-2026.webp',
      waMessage: 'Assalamualaikum, saya tertarik dengan paket *Umroh Itikaf Ramadhan 2026 by Mutiara Sunnah*. Mohon informasi lengkapnya.'
    },
    {
      name: 'Umroh I\'tikaf Madinah',
      duration: '15 Hari',
      price: 'Mulai dari Rp38 Jt-an',
      features: ['Meraih Lailatul Qadr di Madinah', 'Kesempatan Itikaf 10 Malam Terakhir', 'Hotel Bintang 3 Nyaman', 'City Tour Mekah & Madinah', 'Travel Nakhla Tour'],
      isPopular: false,
      image: 'https://storage.googleapis.com/muslimpergi/uploads/gallery/pict/10077/nakhla-saqeefa-umroh-itikaf-ramadhan-madinah-2026.webp',
      waMessage: 'Assalamualaikum, saya tertarik dengan paket *Umroh Itikaf Ramadhan Madinah by Nakhla*. Mohon informasi lengkapnya.'
    }
  ]
};
