import React from 'react';
import Bilingual from './Bilingual.jsx';

const StepCard = ({ number, titleAr, titleEn, descAr, descEn, isLast = false }) => {
  return (
    <div className="relative">
      <div className="flex items-start gap-4">
        <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-primary text-primary-foreground flex items-center justify-center font-bold text-lg">
          {number}
        </div>
        <div className="flex-1 pt-1">
          <h4 className="text-lg font-semibold mb-2 text-balance leading-[1.3]">
            <Bilingual ar={titleAr} en={titleEn} />
          </h4>
          <p className="text-muted-foreground leading-relaxed">
            <Bilingual ar={descAr} en={descEn} />
          </p>
        </div>
      </div>
      {!isLast && (
        <div className="absolute top-14 start-6 w-0.5 h-12 bg-border" />
      )}
    </div>
  );
};

export default StepCard;