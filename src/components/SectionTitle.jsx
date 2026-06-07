import React from 'react';
import Bilingual from './Bilingual.jsx';

const SectionTitle = ({ ar, en, subtitle, className = '' }) => {
  return (
    <div className={`text-center mb-12 ${className}`}>
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-balance leading-[1.2]" style={{ letterSpacing: '-0.02em' }}>
        <Bilingual ar={ar} en={en} />
      </h2>
      {subtitle && (
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionTitle;