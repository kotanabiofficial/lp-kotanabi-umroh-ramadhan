import React, { useState } from 'react';
import type { PackageData } from '../data/types';

interface RegistrationFormProps {
  title?: string;
  description?: string;
  packages: PackageData[];
  formSource?: string;
  programName?: string;
}

const RegistrationForm: React.FC<RegistrationFormProps> = ({
  title = "Formulir Pendaftaran Prioritas",
  description = "Isi data diri Anda di bawah ini untuk mendapatkan prioritas konsultasi dan informasi ketersediaan seat Haji Furoda 2026.",
  packages,
  formSource = 'Landing Page Haji Furoda',
  programName = 'Haji'
}) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    domicile: ''
  });
  const initialSelectedPackage = packages.find(pkg => pkg.isPopular)?.name || (packages.length > 0 ? packages[0].name : '');
  const [selectedPackage, setSelectedPackage] = useState<string>(initialSelectedPackage);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [phoneError, setPhoneError] = useState<string | null>(null);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  // TODO: Ganti dengan URL Google Apps Script Web App Anda yang sebenarnya
  const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbwnQG8-PC6OfCWSHdB4jJpMMJyEOcwCD9pxG8zBeroAdXcq-0IM3V6mMS5Vtia8YPC83Q/exec"; 

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    // Remove non-digit characters
    const cleanValue = value.replace(/\D/g, ''); 
    setFormData({...formData, phone: cleanValue});

    if (cleanValue !== value) {
      setPhoneError('Nomor telepon hanya boleh berisi angka.');
    } else if (cleanValue.length < 8 || cleanValue.length > 15) { // Common phone number length checks
      setPhoneError('Nomor telepon harus antara 8 hingga 15 digit.');
    }
    else {
      setPhoneError(null);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Prevent submission if there's a phone error or phone is empty
    if (phoneError || !formData.phone) {
      setPhoneError(phoneError || 'Nomor telepon tidak boleh kosong.');
      return; 
    }

    setIsSubmitting(true);

    // GTM Data Layer Push
    if ((window as any).dataLayer) {
      (window as any).dataLayer.push({
        'event': 'haji_umroh_lead',
        'formName': 'Haji / Umroh Registration',
        'leadPackage': selectedPackage,
        'leadCity': formData.domicile,
        // Enhanced Conversions Data
        'user_data': {
          'phone_number': formData.phone, // GTM will hash this
          'address': {
            'first_name': formData.name, // GTM will hash this
            'city': formData.domicile
          }
        }
      });
    }

    const adminPhone = "628561500883"; // KotaNabi Admin
    const timestamp = new Date().toLocaleString('id-ID');
    
    const text = `Assalamualaikum Admin KotaNabi,
Saya ingin mendaftar/konsultasi program ${programName}.

*Data Diri:*
Nama: ${formData.name}
No. WA: ${formData.phone}
Domisili: ${formData.domicile}
Paket Dipilih: ${selectedPackage}

Mohon info lengkap dan ketersediaan seat. Terima kasih.`;

    const whatsappUrl = `https://api.whatsapp.com/send?phone=${adminPhone}&text=${encodeURIComponent(text)}`;
    
    // 1. Open WhatsApp immediately to avoid pop-up blockers
    const waWindow = window.open(whatsappUrl, '_blank');
    
    // Data payload for API/Sheet
    const payload = {
      timestamp,
      name: formData.name,
      phone: formData.phone,
      domicile: formData.domicile,
      package: selectedPackage,
      source: formSource
    };

    try {
      // 2. Send data to Google Sheet in the background
      await fetch(GOOGLE_SCRIPT_URL, {
        method: 'POST',
        mode: 'no-cors', 
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload)
      });
    } catch (error) {
      console.error("Error saving data:", error);
      // If saving fails, we don't close the window because the user is already in WhatsApp
    } finally {
      setIsSubmitting(false);
      // Reset form fields
      setFormData({
        name: '',
        phone: '',
        domicile: ''
      });
      setSelectedPackage(packages.length > 0 ? packages[0].name : '');
      setPhoneError(null); // Clear any phone errors

      // Show success message
      setShowSuccessMessage(true);
      setTimeout(() => {
        setShowSuccessMessage(false);
      }, 5000); // Hide after 5 seconds
    }
  };

  return (
    <section id="kontak" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 max-w-4xl">
        {showSuccessMessage && (
          <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative mb-8" role="alert">
            <strong className="font-bold">Alhamdulillah!</strong>
            <span className="block sm:inline ml-2">Langkah awal menuju Baitullah telah Anda ambil. Tim kami segera menghubungi Anda untuk memastikan seat Haji Furoda Anda aman.</span>
            <span className="absolute top-0 bottom-0 right-0 px-4 py-3" onClick={() => setShowSuccessMessage(false)}>
              <svg className="fill-current h-6 w-6 text-green-500" role="button" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><title>Close</title><path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z"/></svg>
            </span>
          </div>
        )}
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden flex flex-col md:flex-row">
          <div className="md:w-1/2 bg-secondary text-white p-8 md:p-12 flex flex-col justify-center">
            <h3 className="text-3xl font-bold font-serif mb-4">{title}</h3>
            <p className="text-gray-200 text-lg mb-6">{description}</p>
            <ul className="space-y-3 text-sm text-gray-300">
              <li className="flex items-center"><span className="mr-2">✓</span> Data Anda terjamin kerahasiaannya</li>
              <li className="flex items-center"><span className="mr-2">✓</span> Respon cepat dari konsultan haji</li>
              <li className="flex items-center"><span className="mr-2">✓</span> Prioritas informasi promo</li>
            </ul>
          </div>
          <div className="md:w-1/2 p-8 md:p-12">
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Nama Lengkap</label>
                <input
                  type="text"
                  id="name"
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition"
                  placeholder="Contoh: Abdullah"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Nomor WhatsApp</label>
                <input
                  type="tel" // Use type="tel" for phone numbers
                  id="phone"
                  required
                  inputMode="numeric" // Suggest numeric keyboard on mobile
                  pattern="[0-9]*" // Client-side pattern for numbers only
                  className={`w-full px-4 py-3 rounded-lg border focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition ${phoneError ? 'border-red-500' : 'border-gray-300'}`}
                  placeholder="Contoh: 081234567890"
                  value={formData.phone}
                  onChange={handlePhoneChange}
                />
                {phoneError && <p className="text-red-500 text-sm mt-1">{phoneError}</p>}
              </div>
               <div>
                <label htmlFor="domicile" className="block text-sm font-medium text-gray-700 mb-1">Kota Domisili</label>
                <input
                  type="text"
                  id="domicile"
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition"
                  placeholder="Contoh: Jakarta Selatan"
                  value={formData.domicile}
                  onChange={(e) => setFormData({...formData, domicile: e.target.value})}
                />
              </div>
              <div>
                <label htmlFor="package" className="block text-sm font-medium text-gray-700 mb-1">Pilih Paket Haji Furoda</label>
                <select
                  id="package"
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition bg-white"
                  value={selectedPackage}
                  onChange={(e) => setSelectedPackage(e.target.value)}
                >
                  {packages.map((pkg) => (
                    <option key={pkg.name} value={pkg.name}>
                      {pkg.name} - {pkg.price}
                    </option>
                  ))}
                </select>
              </div>
              <button
                type="submit"
                id="kirimFormWA"
                disabled={isSubmitting}
                className={`w-full bg-primary hover:bg-yellow-600 text-white font-bold py-4 px-6 rounded-lg transition duration-300 shadow-lg transform hover:scale-[1.02] ${isSubmitting ? 'opacity-75 cursor-not-allowed' : ''}`}
              >
                {isSubmitting ? 'Memproses...' : 'Daftar & Konsultasi Sekarang'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RegistrationForm;
