import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import Bilingual from './Bilingual.jsx';

const FeatureCard = ({ icon: Icon, titleAr, titleEn, descAr, descEn }) => {
  return (
    <Card className="bg-card border-border hover:shadow-lg transition-all duration-300 h-full">
      <CardContent className="p-[var(--spacing-card)] flex flex-col h-full">
        <div className="mb-6 text-primary">
          <Icon className="h-12 w-12" />
        </div>
        <h3 className="text-2xl font-semibold mb-4 text-balance leading-[1.3]">
          <Bilingual ar={titleAr} en={titleEn} />
        </h3>
        <p className="text-muted-foreground leading-relaxed text-lg">
          <Bilingual ar={descAr} en={descEn} />
        </p>
      </CardContent>
    </Card>
  );
};

export default FeatureCard;