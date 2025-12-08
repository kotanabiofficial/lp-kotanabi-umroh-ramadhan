export interface PackageData {
  name: string;
  duration: string;
  price: string;
  features: string[];
  isPopular: boolean;
  image: string;
  waMessage: string;
}

export interface TestimonialData {
  quote: string;
  name: string;
  location: string;
  avatar: string;
}

export interface FaqItemData {
  question: string;
  answer: string;
}

export interface FeatureData {
  icon: string;
  title: string;
  description: string;
}

export interface LandingPageData {
  hero: {
    title: string;
    subtitle: string;
    targetDate: string;
    bgImage?: string;
  };
  valueProposition: {
    title: string;
    subtitle: string;
    features: FeatureData[];
  };
  problemAgitation: {
    title: string;
    description: string;
    painPointsTitle: string;
    painPoints: string[];
    solutionTitle: string;
    solutionPoints: string[];
  };
  gallery: {
    title: string;
    subtitle: string;
    images: string[];
  };
  testimonials: {
    title: string;
    subtitle: string;
    items: TestimonialData[];
  };
  faq: FaqItemData[];
  cta: {
    title: string;
    description: string;
    boxTitle: string;
    boxDescription: string;
    buttonText: string;
    whatsappMessage: string;
  };
  packages: PackageData[];
}
