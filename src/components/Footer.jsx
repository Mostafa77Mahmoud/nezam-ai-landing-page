import React from 'react';
import { Separator } from '@/components/ui/separator';
import LanguageToggle from './LanguageToggle.jsx';
import Bilingual from './Bilingual.jsx';
import { ExternalLink } from 'lucide-react';

const PRODUCT_URL = 'https://contracts.nezam-ai.com/';

const Footer = () => {
  return (
    <footer className="bg-secondary text-secondary-foreground border-t">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-lg">N</span>
              </div>
              <span className="font-bold text-xl">Nezam-AI</span>
            </div>
            <p className="text-sm leading-relaxed">
              <Bilingual 
                ar="أنظمة ذكاء اصطناعي لتحليل القرارات المعقدة"
                en="AI systems for analyzing complex decisions"
              />
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-4">
              <Bilingual ar="تواصل معنا" en="Contact Us" />
            </h3>
            <p className="text-sm">
              <Bilingual ar="البريد الإلكتروني" en="Email" />: contact@nezam-ai.com
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-4">
              <Bilingual ar="روابط مهمة" en="Important Links" />
            </h3>
            <div className="flex flex-col gap-2 text-sm">
              <a
                href={PRODUCT_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary transition-all duration-200 flex items-center gap-1.5 font-medium"
              >
                Nezam Contracts
                <ExternalLink className="h-3.5 w-3.5" />
              </a>
              <a href="#privacy" className="hover:text-primary transition-all duration-200">
                <Bilingual ar="سياسة الخصوصية" en="Privacy Policy" />
              </a>
              <a href="#terms" className="hover:text-primary transition-all duration-200">
                <Bilingual ar="شروط الخدمة" en="Terms of Service" />
              </a>
            </div>
          </div>
        </div>

        <Separator className="mb-6" />

        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm">
            © 2026 Nezam-AI. <Bilingual ar="جميع الحقوق محفوظة" en="All rights reserved" />.
          </p>
          <LanguageToggle />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
