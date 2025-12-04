import React, { createContext, useContext, useState, useEffect } from 'react';

type Language = 'en' | 'am';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType>({
  language: 'en',
  setLanguage: () => {},
  t: (key: string) => key,
});

export const useLanguage = (): LanguageContextType => {
  return useContext(LanguageContext);
};

const translations = {
  en: {
    home: 'Home',
    products: 'Products',
    about: 'About',
    contact: 'Contact',
    featuredCollection: 'Featured Collection',
    discoverHandpicked: 'Discover our handpicked selection of premium furniture pieces',
    viewAllProducts: 'View All Products',
    whatOurCustomersSay: 'What Our Customers Say',
    realExperiences: 'Real experiences from real customers who transformed their spaces',
    loadingFeatured: 'Loading featured products...',
    loadingTestimonials: 'Loading testimonials...',
    addToCart: 'Add to Cart',
    livingRoom: 'Living Room',
    dining: 'Dining',
    bedroom: 'Bedroom',
  },
  am: {
    home: 'ቤት',
    products: 'ምርቶች',
    about: 'ስለ እኛ',
    contact: 'እንገናኛለን',
    featuredCollection: 'የተለየ ስብስብ',
    discoverHandpicked: 'የተለየ የቤት እቃዎች ምርጫችንን ያውቁ',
    viewAllProducts: 'ሁሉንም ምርቶች ይመልከቱ',
    whatOurCustomersSay: 'ደንበኞቻችን ምን ይላሉ',
    realExperiences: 'ቦታዎቻቸውን ከቀየሩ እውነተኛ ደንበኞች የተገኙ እውነተኛ ተሞክሮዎች',
    loadingFeatured: 'የተለየ ምርቶች በመስቀል ላይ...',
    loadingTestimonials: 'ተሞክሮዎች በመስቀል ላይ...',
    addToCart: 'ወደ ገበያ ቦታ ያስገቡ',
    livingRoom: 'የሆነ ቦታ',
    dining: 'ምግብ ቤት',
    bedroom: 'ክፍል ቦታ',
  },
};

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>('en');

  useEffect(() => {
    const savedLanguage = localStorage.getItem('language') as Language;
    if (savedLanguage && (savedLanguage === 'en' || savedLanguage === 'am')) {
      setLanguageState(savedLanguage);
    }
  }, []);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem('language', lang);
  };

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations.en] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};
