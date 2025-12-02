import { createContext, useContext, useState, ReactNode } from "react";

type Language = "en" | "am" | "both";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (en: string, am: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>("both");

  const t = (en: string, am: string): string => {
    switch (language) {
      case "en":
        return en;
      case "am":
        return am;
      case "both":
        return `${en} / ${am}`;
      default:
        return en;
    }
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};
