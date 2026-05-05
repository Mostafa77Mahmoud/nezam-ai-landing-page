import React, { useContext } from 'react';
import { Button } from '@/components/ui/button';
import { Globe } from 'lucide-react';
import LanguageContext from '@/contexts/LanguageContext.jsx';

const LanguageToggle = () => {
  const { language, toggleLanguage } = useContext(LanguageContext);

  return (
    <Button
      variant="outline"
      size="sm"
      onClick={toggleLanguage}
      className="gap-2 transition-all duration-200"
    >
      <Globe className="h-4 w-4" />
      <span className="font-medium">{language === 'ar' ? 'EN' : 'عربي'}</span>
    </Button>
  );
};

export default LanguageToggle;