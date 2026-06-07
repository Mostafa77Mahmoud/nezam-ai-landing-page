import React, { useContext } from 'react';
import LanguageContext from '@/contexts/LanguageContext.jsx';

const Bilingual = ({ ar, en, className = '' }) => {
  const { t } = useContext(LanguageContext);
  return <span className={className}>{t(ar, en)}</span>;
};

export default Bilingual;