import React, { useState, useContext } from 'react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu, ExternalLink } from 'lucide-react';
import LanguageToggle from './LanguageToggle.jsx';
import Bilingual from './Bilingual.jsx';
import LanguageContext from '@/contexts/LanguageContext.jsx';

const PRODUCT_URL = 'https://contracts.nezam-ai.com/';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { language } = useContext(LanguageContext);

  const navItems = [
    { ar: 'الرئيسية', en: 'Home', href: '#home' },
    { ar: 'المنتج', en: 'Product', href: '#product' },
    { ar: 'كيف يعمل', en: 'How It Works', href: '#how-it-works' },
    { ar: 'تواصل', en: 'Contact', href: '#contact' },
  ];

  const NavLinks = ({ mobile = false }) => (
    <>
      {navItems.map((item, index) => (
        <a
          key={index}
          href={item.href}
          onClick={() => mobile && setIsOpen(false)}
          className={`font-medium transition-all duration-200 hover:text-primary ${
            mobile ? 'block py-3 text-lg' : ''
          }`}
        >
          <Bilingual ar={item.ar} en={item.en} />
        </a>
      ))}
    </>
  );

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <a href="#home" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-lg">N</span>
            </div>
            <span className="font-bold text-xl text-balance">Nezam-AI</span>
          </a>

          <nav className="hidden md:flex items-center gap-8">
            <NavLinks />
          </nav>

          <div className="flex items-center gap-3">
            <LanguageToggle />

            <a href={PRODUCT_URL} target="_blank" rel="noopener noreferrer" className="hidden md:inline-flex">
              <Button size="sm" className="gap-2 transition-all duration-200 active:scale-[0.98]">
                <Bilingual ar="دخول المنتج" en="Launch App" />
                <ExternalLink className="h-3.5 w-3.5" />
              </Button>
            </a>
            
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild className="md:hidden">
                <Button variant="outline" size="icon">
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side={language === 'ar' ? 'right' : 'left'}>
                <nav className="flex flex-col gap-2 mt-8">
                  <NavLinks mobile />
                  <a
                    href={PRODUCT_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setIsOpen(false)}
                    className="mt-4"
                  >
                    <Button className="w-full gap-2">
                      <Bilingual ar="دخول المنتج" en="Launch App" />
                      <ExternalLink className="h-4 w-4" />
                    </Button>
                  </a>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
