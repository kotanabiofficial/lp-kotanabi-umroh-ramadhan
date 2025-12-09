import React, { useState } from 'react';

// Define dataLayer on window
declare global {
  interface Window {
    dataLayer: any[];
  }
}

const ConsultationForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [phoneError, setPhoneError] = useState<string | null>(null);
  const [feedback, setFeedback] = useState<{ type: 'success' | 'error', message: string } | null>(null);

  // URL Google Apps Script (Gunakan endpoint yang sama untuk kemudahan, pastikan kolom di Sheet sesuai/fleksibel)
  const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbx7yCLegvMh3h_Pw40mjiEtGot490UvEnKwn7zZzMwAv4W7qZ1ULeE7r9NPSfn0U1L8/exec";
  const ADMIN_WA = "628561500883";

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    const cleanValue = value.replace(/\D/g, '');
    setFormData({ ...formData, phone: cleanValue });

    if (cleanValue !== value) {
      setPhoneError('Hanya angka yang diperbolehkan.');
    } else if (cleanValue.length > 0 && (cleanValue.length < 8 || cleanValue.length > 15)) {
      setPhoneError('Nomor tidak valid (8-15 digit).');
    } else {
      setPhoneError(null);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name || !formData.phone || !formData.message) {
      setFeedback({ type: 'error', message: 'Mohon lengkapi semua data.' });
      return;
    }

    if (phoneError) {
      setFeedback({ type: 'error', message: 'Mohon perbaiki format nomor telepon.' });
      return;
    }

    setIsSubmitting(true);
    setFeedback(null);

    // GTM Push
    if ((window as any).dataLayer) {
      (window as any).dataLayer.push({
        'event': 'konsultasi_submit',
        'formName': 'Consultation Form',
        'user_data': {
            'phone_number': formData.phone,
            'address': {
                'first_name': formData.name
            }
        }
      });
    }

    // 1. Prepare WhatsApp Message
    const text = `Halo Admin KotaNabi,
Saya ingin konsultasi:

Nama: ${formData.name}
No. WA: ${formData.phone}
Pesan: ${formData.message}

Terima kasih.`;
    
    const waUrl = `https://api.whatsapp.com/send?phone=${ADMIN_WA}&text=${encodeURIComponent(text)}`;

    // 2. Open WhatsApp immediately
    window.open(waUrl, '_blank');

    // 3. Send Data to Backend (Google Sheet)
    const payload = {
      timestamp: new Date().toLocaleString('id-ID'),
      name: formData.name,
      phone: formData.phone,
      domicile: '-', // Field wajib di script Anda saat ini, kita isi dash
      package: 'Konsultasi Umum', // Penanda sumber
      source: 'Page Konsultasi',
      message: formData.message // Pastikan script Google Apps Anda menangkap kolom 'message' jika ada, atau gabung ke 'source'/'package'
    };

    try {
      await fetch(GOOGLE_SCRIPT_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });
      
      setFeedback({ 
        type: 'success', 
        message: 'Pesan terkirim! Silakan lanjutkan chat di WhatsApp.' 
      });
      
      // Reset form
      setFormData({ name: '', phone: '', message: '' });

    } catch (error) {
      console.error(error);
      // Tetap sukses di mata user karena WA sudah terbuka
      setFeedback({ 
        type: 'success', 
        message: 'Mengalihkan ke WhatsApp...' 
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
      <div className="bg-secondary p-6 md:p-8 text-white">
        <h3 className="text-2xl font-serif font-bold mb-2">Formulir Konsultasi</h3>
        <p className="opacity-90 text-sm">Tanyakan apa saja seputar umroh &amp; haji. Kami siap membantu Anda.</p>
      </div>
      <div className="p-6 md:p-8">

        <div className="bg-white p-6 md:p-8 max-w-lg mx-auto">
          {feedback && (
            <div className={`mb-4 px-4 py-3 rounded-lg text-sm ${feedback.type === 'success' ? 'bg-green-100 text-green-700 border border-green-200' : 'bg-red-100 text-red-700 border border-red-200'}`}>
              {feedback.message}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Nama Lengkap</label>
              <input 
                type="text" 
                required
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition"
                placeholder="Nama Anda"
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Nomor WhatsApp</label>
              <input 
                type="tel" 
                required
                inputMode="numeric"
                pattern="[0-9]*"
                className={`w-full px-4 py-3 rounded-lg border focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition ${phoneError ? 'border-red-500' : 'border-gray-300'}`}
                placeholder="08123xxxx"
                value={formData.phone}
                onChange={handlePhoneChange}
              />
              {phoneError && <p className="text-red-500 text-xs mt-1">{phoneError}</p>}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Pesan / Pertanyaan</label>
              <textarea 
                required
                rows={4}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition resize-none"
                placeholder="Tulis pertanyaan Anda disini..."
                value={formData.message}
                onChange={(e) => setFormData({...formData, message: e.target.value})}
              />
            </div>

            <button 
              type="submit" 
              disabled={isSubmitting}
              className={`w-full bg-primary hover:bg-yellow-600 text-white font-bold py-3.5 rounded-lg transition-all shadow-md hover:shadow-lg flex justify-center items-center ${isSubmitting ? 'opacity-70 cursor-wait' : ''}`}
            >
              {isSubmitting ? (
                <span>Memproses...</span>
              ) : (
                <span className="flex items-center gap-2">
                  Kirim Pesan 
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
                  </svg>
                </span>
              )}
            </button>
          </form>
        </div>

      </div>
    </div>
  );
};

export default ConsultationForm;
