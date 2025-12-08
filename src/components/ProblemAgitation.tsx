
import React from 'react';

const CheckIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-500 mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
  </svg>
);

interface ProblemAgitationProps {
  title?: string;
  description?: string;
  painPointsTitle?: string;
  painPoints?: string[];
  solutionTitle?: string;
  solutionPoints?: string[];
}

const ProblemAgitation: React.FC<ProblemAgitationProps> = ({
  title = "Sebuah Panggilan Jiwa, Bukan Sekadar Perjalanan Biasa",
  description = "Bayangkan... Anda bersujud di Raudhah, shalat Tarawih di Masjidil Haram, dan berbuka puasa dengan jutaan umat Muslim dari seluruh dunia. Ramadhan di Tanah Suci adalah pengalaman yang mengubah hidup.",
  painPointsTitle = "Apakah Ini yang Anda Rasakan?",
  painPoints,
  solutionTitle = "Keistimewaan Umroh Ramadhan",
  solutionPoints
}) => {
  const defaultPainPoints = [
    "Rindu yang mendalam untuk kembali ke Baitullah.",
    "Ingin merasakan Ramadhan yang lebih khusyuk dan bermakna.",
    "Berharap meraih ampunan dan keberkahan Lailatul Qadar.",
    "Mencari travel umroh yang amanah dan berpengalaman."
  ];

  const defaultSolutionPoints = [
    "Pahala umroh setara dengan berhaji bersama Rasulullah ﷺ.",
    "Kesempatan emas untuk berburu malam Lailatul Qadar.",
    "Atmosfer spiritual yang tiada duanya di dunia.",
    "Merasakan Idul Fitri yang penuh haru di Kota Suci."
  ];

  const displayPainPoints = painPoints || defaultPainPoints;
  const displaySolutionPoints = solutionPoints || defaultSolutionPoints;

  return (
    <section className="py-20 bg-accent">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold font-serif text-secondary mb-4">
          {title}
        </h2>
        <p className="max-w-3xl mx-auto text-lg text-gray-700 mb-12">
          {description}
        </p>
        <div className="flex flex-col md:flex-row justify-center items-start gap-8 text-left">
          <div className="bg-white p-8 rounded-lg shadow-xl w-full md:w-1/2 lg:w-1/3 transition-transform transform hover:-translate-y-2">
            <h3 className="text-xl font-bold font-serif text-secondary mb-4">{painPointsTitle}</h3>
            <ul className="space-y-3 text-gray-600">
              {displayPainPoints.map((point, idx) => (
                <li key={idx} className="flex items-start"><CheckIcon /> {point}</li>
              ))}
            </ul>
          </div>
          <div className="bg-secondary text-white p-8 rounded-lg shadow-xl w-full md:w-1/2 lg:w-1/3 transition-transform transform hover:-translate-y-2">
            <h3 className="text-xl font-bold font-serif text-primary mb-4">{solutionTitle}</h3>
            <ul className="space-y-3 text-gray-200">
              {displaySolutionPoints.map((point, idx) => (
                <li key={idx} className="flex items-start"><CheckIcon /> {point}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemAgitation;
