import React from 'react';
import { Helmet } from 'react-helmet';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import {
  FileText, Shield, TrendingDown, CheckCircle2,
  Scale, Users, Building2, Briefcase, ArrowLeft, ArrowRight,
  ExternalLink, Upload, Cpu, Tag, MessageSquare, Pencil, Download,
  Zap, Lock, Globe
} from 'lucide-react';
import { motion } from 'framer-motion';
import Bilingual from '@/components/Bilingual.jsx';
import SectionTitle from '@/components/SectionTitle.jsx';
import FeatureCard from '@/components/FeatureCard.jsx';
import StepCard from '@/components/StepCard.jsx';
import { useContext } from 'react';
import LanguageContext from '@/contexts/LanguageContext.jsx';

const PRODUCT_URL = 'https://contracts.nezam-ai.com/';

const HomePage = () => {
  const { language } = useContext(LanguageContext);
  const isRtl = language === 'ar';

  const fadeInUp = {
    initial: { opacity: 0, y: 24 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.55 }
  };

  const ArrowIcon = isRtl ? ArrowLeft : ArrowRight;

  return (
    <>
      <Helmet>
        <title>Nezam-AI - أنظمة ذكاء اصطناعي للامتثال الشرعي والقانوني</title>
        <meta name="description" content="Nezam-AI يوفر أدوات ذكاء اصطناعي لتحليل العقود وكشف التوافق الشرعي، مما يساعد المنظمات على تحليل المخاطر وضمان الامتثال بناءً على معايير AAOIFI." />
        <meta property="og:title" content="Nezam-AI - AI Systems for Sharia & Lawful Compliance" />
        <meta property="og:description" content="AI-powered contract analysis and Sharia compliance detection for businesses and individuals." />
        <meta property="og:url" content="https://nezam-ai.com/" />
      </Helmet>

      <div className="min-h-screen">

        {/* ── Hero ── */}
        <section id="home" className="min-h-[100dvh] flex items-center justify-center bg-gradient-to-b from-background to-secondary/40 py-20">
          <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div {...fadeInUp} className="text-center max-w-4xl mx-auto">
              <Badge className="mb-6 text-sm px-4 py-1.5">Nezam-AI</Badge>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-balance leading-[1.15] tracking-tight">
                <span className="block">
                  <Bilingual
                    ar="أنظمة ذكاء اصطناعي للامتثال الشرعي والقانوني"
                    en="AI Systems for Sharia & Lawful Compliance"
                  />
                </span>
                <span className="block text-3xl md:text-4xl lg:text-5xl text-foreground/70 mt-3 leading-[1.2]">
                  <Bilingual ar="للشركات والأفراد" en="for Businesses & Individuals" />
                </span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground mb-10 leading-relaxed max-w-2xl mx-auto">
                <Bilingual
                  ar="نساعد الشركات والأفراد على فهم القواعد، اكتشاف المخاطر مبكرًا، وتحسين دقة القرار في العقود والأنظمة المالية والتنظيمية"
                  en="We help organizations analyze risks and make informed decisions through specialized AI for contracts and financial regulations"
                />
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href={PRODUCT_URL} target="_blank" rel="noopener noreferrer">
                  <Button size="lg" className="text-base gap-2 transition-all duration-200 active:scale-[0.98] w-full sm:w-auto">
                    <Bilingual ar="ابدأ تحليل عقدك الآن" en="Start Analyzing Your Contract" />
                    <ArrowIcon className="h-4 w-4" />
                  </Button>
                </a>
                <a href="#product">
                  <Button size="lg" variant="outline" className="text-base transition-all duration-200 active:scale-[0.98] w-full sm:w-auto">
                    <Bilingual ar="استكشف المنتج" en="Explore the Product" />
                  </Button>
                </a>
              </div>

              {/* Trust badges */}
              <div className="mt-12 flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground">
                <span className="flex items-center gap-1.5">
                  <Lock className="h-4 w-4 text-primary" />
                  <Bilingual ar="تشفير كامل" en="Fully Encrypted" />
                </span>
                <span className="flex items-center gap-1.5">
                  <Globe className="h-4 w-4 text-primary" />
                  <Bilingual ar="عربي وإنجليزي" en="Arabic & English" />
                </span>
                <span className="flex items-center gap-1.5">
                  <Zap className="h-4 w-4 text-primary" />
                  <Bilingual ar="نتائج فورية" en="Instant Results" />
                </span>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ── What We Do ── */}
        <section className="py-[var(--spacing-section)] bg-background">
          <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-[var(--spacing-grid)]">
              <SectionTitle
                ar="نبني أدوات ذكية لفهم الأنظمة المعقدة واتخاذ قرارات أدق"
                en="Intelligent Tools for Complex Systems & Accurate Decisions"
                className="mb-0"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-[var(--spacing-grid)] max-w-5xl mx-auto">
              <motion.div {...fadeInUp} transition={{ delay: 0.1 }}>
                <FeatureCard
                  icon={FileText}
                  titleAr="تحليل العقود"
                  titleEn="Contract Analysis"
                  descAr="تحليل تلقائي للبنود والشروط مع تصنيف دقيق للمخاطر القانونية والتوافق الشرعي وفق معايير AAOIFI"
                  descEn="Automatic analysis of clauses and terms with accurate classification of legal risks and Sharia compliance per AAOIFI standards"
                />
              </motion.div>

              <motion.div {...fadeInUp} transition={{ delay: 0.2 }}>
                <FeatureCard
                  icon={Shield}
                  titleAr="دعم الامتثال الشرعي"
                  titleEn="Sharia Compliance Support"
                  descAr="كشف البنود غير المتوافقة مع الضوابط الشرعية وتقديم بدائل مقترحة بصياغات واضحة"
                  descEn="Detection of non-compliant clauses with Sharia standards and suggested alternative formulations"
                />
              </motion.div>

              <motion.div {...fadeInUp} transition={{ delay: 0.3 }} className="md:col-span-2">
                <FeatureCard
                  icon={TrendingDown}
                  titleAr="تقليل المخاطر التشغيلية"
                  titleEn="Operational Risk Reduction"
                  descAr="تحديد المخاطر المحتملة في العقود قبل التوقيع وتوفير تقارير شاملة للمراجعة القانونية والشرعية"
                  descEn="Identifying potential risks in contracts before signing and providing comprehensive reports for legal and Sharia review"
                />
              </motion.div>
            </div>
          </div>
        </section>

        {/* ── Product Section ── */}
        <section id="product" className="py-20 bg-secondary">
          <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionTitle ar="منتجنا الرئيسي" en="Our Main Product" />

            <motion.div {...fadeInUp} className="max-w-3xl mx-auto">
              <Card className="shadow-lg overflow-hidden">
                <CardHeader className="pb-4">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-12 h-12 rounded-xl bg-primary flex items-center justify-center">
                      <FileText className="h-6 w-6 text-primary-foreground" />
                    </div>
                    <div>
                      <CardTitle className="text-2xl text-balance leading-[1.3]">Nezam Contracts</CardTitle>
                      <a
                        href={PRODUCT_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-primary hover:underline flex items-center gap-1 mt-0.5"
                      >
                        contracts.nezam-ai.com
                        <ExternalLink className="h-3 w-3" />
                      </a>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    <Bilingual
                      ar="نظام متخصص في تحليل العقود التجارية والمالية، مع التركيز على كشف البنود غير المتوافقة مع الضوابط الشرعية. يوفر النظام تحليلاً تفصيلياً لكل بند، مع تصنيفات واضحة وملاحظات دقيقة واقتراحات بديلة مستندة إلى معايير AAOIFI المعتمدة دولياً."
                      en="A specialized system for analyzing commercial and financial contracts, focusing on detecting clauses non-compliant with Sharia regulations. It provides detailed per-clause analysis, clear classifications, accurate notes, and alternative suggestions based on internationally recognized AAOIFI standards."
                    />
                  </p>

                  {/* Feature highlights */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-8">
                    {[
                      { icon: Upload, ar: 'رفع PDF/Word', en: 'Upload PDF/Word' },
                      { icon: Cpu, ar: 'تحليل فوري بالذكاء الاصطناعي', en: 'Instant AI Analysis' },
                      { icon: Download, ar: 'تحميل تقرير شامل', en: 'Download Full Report' },
                    ].map(({ icon: Icon, ar, en }, i) => (
                      <div key={i} className="flex items-center gap-2 bg-secondary rounded-lg px-3 py-2 text-sm font-medium">
                        <Icon className="h-4 w-4 text-primary flex-shrink-0" />
                        <Bilingual ar={ar} en={en} />
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-col sm:flex-row gap-3">
                    <a href={PRODUCT_URL} target="_blank" rel="noopener noreferrer">
                      <Button className="gap-2 transition-all duration-200 active:scale-[0.98] w-full sm:w-auto">
                        <Bilingual ar="افتح المنتج" en="Open Product" />
                        <ExternalLink className="h-4 w-4" />
                      </Button>
                    </a>
                    <a href="#how-it-works">
                      <Button variant="outline" className="transition-all duration-200 active:scale-[0.98] w-full sm:w-auto">
                        <Bilingual ar="كيف يعمل؟" en="How does it work?" />
                      </Button>
                    </a>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </section>

        {/* ── How It Works ── */}
        <section id="how-it-works" className="py-20 bg-background">
          <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionTitle ar="كيف يعمل النظام؟" en="How Does the System Work?" />

            <div className="max-w-3xl mx-auto space-y-8">
              {[
                {
                  icon: Upload,
                  titleAr: 'رفع العقد',
                  titleEn: 'Upload Contract',
                  descAr: 'قم برفع ملف العقد بصيغة PDF أو Word',
                  descEn: 'Upload the contract file in PDF or Word format',
                },
                {
                  icon: Cpu,
                  titleAr: 'تحليل تلقائي للبنود',
                  titleEn: 'Automatic Clause Analysis',
                  descAr: 'يقوم النظام بتحليل جميع البنود والشروط تلقائياً بالذكاء الاصطناعي',
                  descEn: 'The system automatically analyzes all clauses and terms using AI',
                },
                {
                  icon: Tag,
                  titleAr: 'التصنيف',
                  titleEn: 'Classification',
                  descAr: 'تصنيف كل بند حسب مستوى التوافق الشرعي وفق معايير AAOIFI',
                  descEn: 'Classify each clause according to Sharia compliance level per AAOIFI standards',
                },
                {
                  icon: MessageSquare,
                  titleAr: 'عرض الملاحظات',
                  titleEn: 'Display Notes',
                  descAr: 'عرض ملاحظات تفصيلية لكل بند مع الأسباب والمراجع الشرعية',
                  descEn: 'Detailed notes for each clause with reasons and Sharia references',
                },
                {
                  icon: Pencil,
                  titleAr: 'اقتراح التعديلات',
                  titleEn: 'Suggest Modifications',
                  descAr: 'اقتراح صياغات بديلة للبنود غير المتوافقة',
                  descEn: 'Suggest alternative formulations for non-compliant clauses',
                },
                {
                  icon: Download,
                  titleAr: 'تحميل النسخة الآمنة',
                  titleEn: 'Download Safe Version',
                  descAr: 'تحميل تقرير شامل مع النسخة المعدلة من العقد',
                  descEn: 'Download comprehensive report with the modified version of the contract',
                  isLast: true,
                },
              ].map((step, i) => (
                <motion.div key={i} {...fadeInUp} transition={{ delay: i * 0.1 }}>
                  <StepCard
                    number={i + 1}
                    titleAr={step.titleAr}
                    titleEn={step.titleEn}
                    descAr={step.descAr}
                    descEn={step.descEn}
                    isLast={step.isLast}
                  />
                </motion.div>
              ))}
            </div>

            <motion.div {...fadeInUp} transition={{ delay: 0.7 }} className="text-center mt-14">
              <a href={PRODUCT_URL} target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="gap-2 transition-all duration-200 active:scale-[0.98]">
                  <Bilingual ar="جرّب النظام الآن" en="Try the System Now" />
                  <ArrowIcon className="h-4 w-4" />
                </Button>
              </a>
            </motion.div>
          </div>
        </section>

        {/* ── Trust & Transparency ── */}
        <section className="py-20 bg-secondary">
          <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionTitle ar="الشفافية والثقة" en="Trust & Transparency" />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {[
                {
                  ar: 'لا يصدر فتاوى شرعية',
                  en: 'Does Not Issue Religious Rulings',
                  descAr: 'النظام أداة مساعدة للتحليل وليس بديلاً عن المستشار الشرعي',
                  descEn: 'The system is an analytical support tool, not a replacement for a Sharia advisor',
                },
                {
                  ar: 'أداة دعم القرار',
                  en: 'Decision Support Tool',
                  descAr: 'يساعد في تحديد النقاط التي تحتاج مراجعة متخصصة',
                  descEn: 'Helps identify points that require specialized review',
                },
                {
                  ar: 'مبني على معايير AAOIFI',
                  en: 'Based on AAOIFI Standards',
                  descAr: 'يعتمد على المعايير الشرعية المعتمدة دولياً من هيئة المحاسبة والمراجعة',
                  descEn: 'Relies on internationally recognized Sharia standards from AAOIFI',
                },
                {
                  ar: 'شفافية كاملة',
                  en: 'Complete Transparency',
                  descAr: 'توضيح الأسباب والمراجع لكل تصنيف وملاحظة',
                  descEn: 'Clarification of reasons and references for each classification and note',
                },
              ].map((item, i) => (
                <motion.div key={i} {...fadeInUp} transition={{ delay: i * 0.1 }} className="flex gap-4">
                  <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold mb-2 text-balance leading-[1.3]">
                      <Bilingual ar={item.ar} en={item.en} />
                    </h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      <Bilingual ar={item.descAr} en={item.descEn} />
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Who We Serve ── */}
        <section className="py-20 bg-background">
          <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionTitle ar="من نخدم" en="Who We Serve" />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  icon: Scale,
                  ar: 'مكاتب المحاماة',
                  en: 'Law Firms',
                  descAr: 'تسريع مراجعة العقود وتحديد المخاطر',
                  descEn: 'Accelerate contract review and risk identification',
                },
                {
                  icon: Users,
                  ar: 'المستشارون الشرعيون',
                  en: 'Sharia Advisors',
                  descAr: 'أداة مساعدة للتحليل الأولي وتوفير الوقت',
                  descEn: 'Support tool for preliminary analysis and time saving',
                },
                {
                  icon: Building2,
                  ar: 'الشركات المالية',
                  en: 'Finance Companies',
                  descAr: 'ضمان التوافق الشرعي لجميع العقود',
                  descEn: 'Ensure Sharia compliance of all contracts',
                },
                {
                  icon: Briefcase,
                  ar: 'فرق الامتثال',
                  en: 'Compliance Teams',
                  descAr: 'تحسين عمليات المراجعة والامتثال التنظيمي',
                  descEn: 'Improve review and regulatory compliance processes',
                },
              ].map(({ icon: Icon, ar, en, descAr, descEn }, i) => (
                <motion.div key={i} {...fadeInUp} transition={{ delay: i * 0.1 }}>
                  <Card className="text-center h-full hover:shadow-lg transition-all duration-300">
                    <CardContent className="p-6 flex flex-col items-center h-full">
                      <Icon className="h-12 w-12 text-primary mb-4" />
                      <h4 className="font-semibold mb-2 text-balance leading-[1.3]">
                        <Bilingual ar={ar} en={en} />
                      </h4>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        <Bilingual ar={descAr} en={descEn} />
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Final CTA ── */}
        <section id="contact" className="py-24 bg-primary text-primary-foreground">
          <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div {...fadeInUp} className="text-center max-w-3xl mx-auto">
              <h2
                className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-balance leading-[1.2]"
                style={{ letterSpacing: '-0.02em' }}
              >
                <Bilingual
                  ar="ابدأ تحليل عقدك خلال دقائق"
                  en="Start Analyzing Your Contract in Minutes"
                />
              </h2>
              <p className="text-lg mb-10 leading-relaxed opacity-90">
                <Bilingual
                  ar="جرّب النظام الآن واحصل على تحليل شامل لعقودك — مجاناً كضيف"
                  en="Try the system now and get comprehensive analysis of your contracts — free as a guest"
                />
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href={PRODUCT_URL} target="_blank" rel="noopener noreferrer">
                  <Button
                    size="lg"
                    variant="secondary"
                    className="text-base gap-2 transition-all duration-200 active:scale-[0.98] w-full sm:w-auto"
                  >
                    <Bilingual ar="ابدأ الآن" en="Start Now" />
                    <ArrowIcon className="h-4 w-4" />
                  </Button>
                </a>
                <a href={PRODUCT_URL} target="_blank" rel="noopener noreferrer">
                  <Button
                    size="lg"
                    variant="outline"
                    className="text-base bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10 transition-all duration-200 active:scale-[0.98] w-full sm:w-auto"
                  >
                    <Bilingual ar="جرّب كضيف" en="Try as Guest" />
                  </Button>
                </a>
              </div>
              <p className="mt-6 text-sm opacity-70">
                <a
                  href={PRODUCT_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:opacity-100 underline underline-offset-4 flex items-center justify-center gap-1"
                >
                  contracts.nezam-ai.com
                  <ExternalLink className="h-3.5 w-3.5" />
                </a>
              </p>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
};

export default HomePage;
