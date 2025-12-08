import type { LandingPageData } from '../types';

export const akhirTahunData: LandingPageData = {
  hero: {
    title: "Wujudkan Impian Umroh Akhir Tahun Anda di Tanah Suci",
    subtitle: "Sambut pergantian tahun dengan pengalaman spiritual tak terlupakan. Bergabunglah dengan perjalanan Umroh Akhir Tahun kami.",
    targetDate: "2025-12-20T00:00:00"
  },
  valueProposition: {
    title: "Kenapa Umroh Akhir Tahun Bersama Kami?",
    subtitle: "Liburan sekolah dan akhir tahun yang penuh makna untuk keluarga Anda.",
    features: [
      { icon: '👨‍👩‍👧‍👦', title: 'Ramah Keluarga', description: 'Program khusus yang nyaman untuk anak-anak dan lansia.' },
      { icon: '❄️', title: 'Cuaca Sejuk', description: 'Desember adalah waktu dengan cuaca terbaik di Tanah Suci.' },
      { icon: '🏫', title: 'Edukasi Islami', description: 'City tour sejarah nabi yang mendidik untuk buah hati.' },
      { icon: '🏨', title: 'Hotel Strategis', description: 'Akses mudah ke Masjidil Haram untuk shalat 5 waktu.' },
      { icon: '✈️', title: 'Penerbangan Direct', description: 'Meminimalisir kelelahan perjalanan.' },
      { icon: '🤝', title: 'Pembimbing Sabar', description: 'Mutowwif yang mengerti kebutuhan keluarga.' }
    ]
  },
  problemAgitation: {
    title: "Liburan Akhir Tahun Biasanya Hanya Hura-hura?",
    description: "Ubah kebiasaan lama. Jadikan momen pergantian tahun sebagai titik balik spiritual Anda dan keluarga.",
    painPointsTitle: "Renungan Akhir Tahun",
    painPoints: [
      "Merasa liburan akhir tahun biasanya kurang bermakna.",
      "Ingin memberikan edukasi agama nyata untuk anak-anak.",
      "Butuh ketenangan dari hiruk pikuk pekerjaan setahun ini.",
      "Ingin memulai tahun baru dengan doa di tempat mustajab."
    ],
    solutionTitle: "Solusi Perjalanan Berkah",
    solutionPoints: [
      "Muhasabah diri di depan Ka'bah.",
      "Mempererat bonding keluarga dalam ketaatan.",
      "Mengunjungi tempat-tempat bersejarah Islam.",
      "Pulang dengan semangat baru dan hati yang bersih."
    ]
  },
  gallery: {
    title: "Keseruan Umroh Akhir Tahun",
    subtitle: "Senyum bahagia jamaah kami saat menikmati musim dingin di Madinah.",
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
    title: "Cerita Keluarga Alumni Umroh Akhir Tahun",
    subtitle: "Mereka telah membuktikan indahnya berlibur sambil beribadah.",
    items: [
      { quote: "Anak-anak senang sekali, tidak rewel karena udaranya sejuk.", name: "Bapak Rahmat", location: "Bekasi", avatar: "https://picsum.photos/seed/rahmat/100/100" },
      { quote: "Cara terbaik menutup tahun. Sangat berkesan.", name: "Ibu Yulia", location: "Semarang", avatar: "https://picsum.photos/seed/yulia/100/100" },
      { quote: "Pelayanan KotaNabi top banget. Hotelnya beneran deket.", name: "Keluarga H. Dedi", location: "Bogor", avatar: "https://picsum.photos/seed/dedi/100/100" }
    ]
  },
  faq: [
    { question: "Apakah cocok untuk membawa balita?", answer: "Sangat cocok. Cuaca akhir tahun (Desember) di Arab Saudi sejuk (sekitar 20-25°C), sangat nyaman untuk anak-anak." },
    { question: "Apakah ada program diskon untuk anak?", answer: "Ya, kami memiliki harga khusus untuk bayi (infant) dan anak (child) dengan kondisi tertentu." },
    { question: "Bagaimana kepadatan saat akhir tahun?", answer: "Akhir tahun memang high season, namun dengan manajemen perjalanan kami, Anda tetap akan mendapatkan kenyamanan maksimal." }
  ],
  cta: {
    title: "Seat Umroh Akhir Tahun Sangat Terbatas!",
    description: "Karena bertepatan dengan liburan sekolah, seat pesawat cepat habis. Jangan sampai kehabisan.",
    boxTitle: "Amankan Liburan Berkah Keluarga Anda",
    boxDescription: "Diskusikan rencana perjalanan Anda dengan konsultan kami sekarang.",
    buttonText: "Tanya Paket Akhir Tahun",
    whatsappMessage: "Assalamualaikum, saya tertarik dengan paket Umroh Akhir Tahun. Mohon info detailnya."
  },
  packages: [
    {
      name: 'Umroh Akhir Tahun Hemat',
      duration: '9 Hari',
      price: 'Mulai dari Rp26 Jt-an',
      features: ['Hotel Bintang 3 Dekat Masjid', 'Penerbangan Direct', 'Pembimbing Ibadah Berpengalaman', 'City Tour Mekah Madinah'],
      isPopular: true,
      image: 'https://storage.googleapis.com/muslimpergi/uploads/gallery/pict/10022/mp-mekkah-kaabah.webp',
      waMessage: 'Assalamualaikum, saya tertarik dengan paket *Umroh Akhir Tahun Hemat*. Mohon informasi lengkapnya.'
    },
    {
      name: 'Umroh Liburan Sekolah',
      duration: '12 Hari',
      price: 'Mulai dari Rp30 Jt-an',
      features: ['Program Edukasi Islami untuk Anak', 'Hotel Bintang 4', 'Kereta Cepat Haramain', 'Ziarah Thaif'],
      isPopular: false,
      image: 'https://storage.googleapis.com/muslimpergi/uploads/gallery/pict/10022/mp-mekkah-kaabah.webp',
      waMessage: 'Assalamualaikum, saya tertarik dengan paket *Umroh Liburan Sekolah*. Mohon informasi lengkapnya.'
    },
      {
      name: 'Umroh Plus Turki Akhir Tahun',
      duration: '14 Hari',
      price: 'Mulai dari Rp35 Jt-an',
      features: ['Wisata Halal Turki 3 Hari', 'Hotel Bintang 5', 'Penerbangan Turkish Airlines', 'Full Board Meals'],
      isPopular: false,
      image: 'https://storage.googleapis.com/muslimpergi/uploads/gallery/pict/10022/mp-mekkah-kaabah.webp',
      waMessage: 'Assalamualaikum, saya tertarik dengan paket *Umroh Plus Turki Akhir Tahun*. Mohon informasi lengkapnya.'
    }
  ]
};
