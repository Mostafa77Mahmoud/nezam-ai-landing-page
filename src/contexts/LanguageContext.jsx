import React from 'react';

const LanguageContext = React.createContext({
  language: 'ar',
  toggleLanguage: () => {},
  t: (ar, en) => ar,
});

export default LanguageContext;