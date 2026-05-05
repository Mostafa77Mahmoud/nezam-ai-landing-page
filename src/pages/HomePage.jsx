import React from 'react';
import { Helmet } from 'react-helmet';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { FileText, Shield, TrendingDown, CheckCircle2, Scale, Users, Building2, Briefcase } from 'lucide-react';
import { motion } from 'framer-motion';
import Bilingual from '@/components/Bilingual.jsx';
import SectionTitle from '@/components/SectionTitle.jsx';
import FeatureCard from '@/components/FeatureCard.jsx';
import StepCard from '@/components/StepCard.jsx';

const HomePage = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 }
  };

  return (
    <>
      <Helmet>
        <title>Nezam-AI - AI Systems for Complex Decision Analysis</title>
        <meta name="description" content="Nezam-AI provides AI-powered tools for contract analysis and Sharia compliance detection, helping organizations analyze risks and ensure compliance." />
      </Helmet>

      <div className="min-h-screen">
        {/* Hero Section */}
        <section id="home" className="min-h-[100dvh] flex items-center justify-center bg-gradient-to-b from-background to-secondary/30 py-20">
          <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div {...fadeInUp} className="text-center max-w-4xl mx-auto">
              <Badge className="mb-6 text-sm px-4 py-1.5">Nezam-AI</Badge>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-balance leading-[1.15] tracking-tight">
                <span className="block">
                  <Bilingual 
                    ar="أنظمة ذكاء اصطناعي للامتثال الشرعي والقانوني"
                    en="AI Systems for Sharia & Lawful compliance"
                  />
                </span>
                <span className="block text-3xl md:text-4xl lg:text-5xl text-foreground/80 mt-3 leading-[1.2]">
                  <Bilingual 
                    ar="للشركات والأفراد"
                    en="for Businesses & Individuals"
                  />
                </span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed max-w-2xl mx-auto">
                <Bilingual 
                  ar="نساعد الشركات والأفراد على فهم القواعد، اكتشاف المخاطر مبكرًا، وتحسين دقة القرار في العقود والأنظمة المالية والتنظيمية"
                  en="We help organizations analyze risks and make informed decisions through specialized AI"
                />
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="text-base transition-all duration-200 active:scale-[0.98]">
                  <Bilingual ar="ابدأ تحليل عقدك الآن" en="Start Analyzing Your Contract Now" />
                </Button>
                <Button size="lg" variant="outline" className="text-base transition-all duration-200 active:scale-[0.98]">
                  <Bilingual ar="استكشف المنتج" en="Explore the Product" />
                </Button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* What We Do Section */}
        <section className="py-[var(--spacing-section)] bg-background">
          <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-[var(--spacing-grid)]">
              <SectionTitle 
                ar="نبني أدوات ذكية لفهم الأنظمة المعقدة واتخاذ قرارات أدق"
                en="We Build Intelligent Tools To Analyze Complex Systems & Make Accurate Decisions"
                className="mb-0"
              />
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-[var(--spacing-grid)] max-w-5xl mx-auto">
              <motion.div {...fadeInUp} transition={{ delay: 0.1 }}>
                <FeatureCard 
                  icon={FileText}
                  titleAr="تحليل العقود"
                  titleEn="Contract Analysis"
                  descAr="تحليل تلقائي للبنود والشروط مع تصنيف دقيق للمخاطر القانونية والتوافق الشرعي"
                  descEn="Automatic analysis of clauses and terms with accurate classification of legal risks and Sharia compliance"
                />
              </motion.div>

              <motion.div {...fadeInUp} transition={{ delay: 0.2 }}>
                <FeatureCard 
                  icon={Shield}
                  titleAr="دعم الامتثال"
                  titleEn="Compliance Support"
                  descAr="كشف البنود غير المتوافقة مع المعايير الشرعية وتقديم بدائل مقترحة"
                  descEn="Detection of non-compliant clauses with Sharia standards and providing suggested alternatives"
                />
              </motion.div>

              <motion.div {...fadeInUp} transition={{ delay: 0.3}} className="md:col-span-2">
                <FeatureCard 
                  icon={TrendingDown}
                  titleAr="تقليل المخاطر التشغيلية"
                  titleEn="Operational Risk Reduction"
                  descAr="تحديد المخاطر المحتملة في العقود قبل التوقيع وتوفير تقارير شاملة للمراجعة"
                  descEn="Identifying potential risks in contracts before signing and providing comprehensive reports for review"
                />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Product Section */}
        <section id="product" className="py-20 bg-secondary">
          <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionTitle 
              ar="منتجنا الرئيسي"
              en="Our Main Product"
            />
            
            <motion.div {...fadeInUp} className="max-w-3xl mx-auto">
              <Card className="shadow-lg">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-12 h-12 rounded-xl bg-primary flex items-center justify-center">
                      <FileText className="h-6 w-6 text-primary-foreground" />
                    </div>
                    <CardTitle className="text-2xl text-balance leading-[1.3]">Nezam Contracts</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    <Bilingual 
                      ar="نظام متخصص في تحليل العقود التجارية والمالية، مع التركيز على كشف البنود غير المتوافقة مع الضوابط الشرعية. يوفر النظام تحليلاً تفصيلياً لكل بند، مع تصنيفات واضحة وملاحظات دقيقة واقتراحات بديلة."
                      en="A specialized system for analyzing commercial and financial contracts, focusing on detecting clauses that are non-compliant with Sharia regulations. The system provides detailed analysis of each clause, with clear classifications, accurate notes, and alternative suggestions."
                    />
                  </p>
                  <Button className="transition-all duration-200 active:scale-[0.98]">
                    <Bilingual ar="عرض المنتج" en="View Product" />
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </section>

        {/* How It Works Section */}
        <section className="py-20 bg-background">
          <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionTitle 
              ar="كيف يعمل النظام؟"
              en="How Does the System Work?"
            />
            
            <div className="max-w-3xl mx-auto space-y-8">
              <motion.div {...fadeInUp} transition={{ delay: 0.1 }}>
                <StepCard 
                  number={1}
                  titleAr="رفع العقد"
                  titleEn="Upload Contract"
                  descAr="قم برفع ملف العقد بصيغة PDF أو Word"
                  descEn="Upload the contract file in PDF or Word format"
                />
              </motion.div>

              <motion.div {...fadeInUp} transition={{ delay: 0.2 }}>
                <StepCard 
                  number={2}
                  titleAr="تحليل تلقائي للبنود"
                  titleEn="Automatic Clause Analysis"
                  descAr="يقوم النظام بتحليل جميع البنود والشروط تلقائياً"
                  descEn="The system automatically analyzes all clauses and terms"
                />
              </motion.div>

              <motion.div {...fadeInUp} transition={{ delay: 0.3 }}>
                <StepCard 
                  number={3}
                  titleAr="التصنيف"
                  titleEn="Classification"
                  descAr="تصنيف كل بند حسب مستوى التوافق الشرعي"
                  descEn="Classify each clause according to the level of Sharia compliance"
                />
              </motion.div>

              <motion.div {...fadeInUp} transition={{ delay: 0.4 }}>
                <StepCard 
                  number={4}
                  titleAr="عرض الملاحظات"
                  titleEn="Display Notes"
                  descAr="عرض ملاحظات تفصيلية لكل بند مع الأسباب"
                  descEn="Display detailed notes for each clause with reasons"
                />
              </motion.div>

              <motion.div {...fadeInUp} transition={{ delay: 0.5 }}>
                <StepCard 
                  number={5}
                  titleAr="إظهار التعديلات"
                  titleEn="Show Modifications"
                  descAr="اقتراح صياغات بديلة للبنود غير المتوافقة"
                  descEn="Suggest alternative formulations for non-compliant clauses"
                />
              </motion.div>

              <motion.div {...fadeInUp} transition={{ delay: 0.6 }}>
                <StepCard 
                  number={6}
                  titleAr="تحميل النسخة الآمنة"
                  titleEn="Download Safe Version"
                  descAr="تحميل تقرير شامل مع النسخة المعدلة من العقد"
                  descEn="Download comprehensive report with the modified version of the contract"
                  isLast
                />
              </motion.div>
            </div>
          </div>
        </section>

       
        {/* Trust & Transparency Section */}
        <section className="py-20 bg-background">
          <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionTitle 
              ar="الشفافية والثقة"
              en="Trust & Transparency"
            />
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              <motion.div {...fadeInUp} transition={{ delay: 0.1 }} className="flex gap-4">
                <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold mb-2 text-balance leading-[1.3]">
                    <Bilingual ar="لا يصدر فتاوى شرعية" en="Does Not Issue Religious Rulings" />
                  </h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    <Bilingual 
                      ar="النظام أداة مساعدة للتحليل وليس بديلاً عن المستشار الشرعي"
                      en="The system is an analytical support tool, not a replacement for a Sharia advisor"
                    />
                  </p>
                </div>
              </motion.div>

              <motion.div {...fadeInUp} transition={{ delay: 0.2 }} className="flex gap-4">
                <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold mb-2 text-balance leading-[1.3]">
                    <Bilingual ar="أداة دعم القرار" en="Decision Support Tool" />
                  </h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    <Bilingual 
                      ar="يساعد في تحديد النقاط التي تحتاج مراجعة متخصصة"
                      en="Helps identify points that require specialized review"
                    />
                  </p>
                </div>
              </motion.div>

              <motion.div {...fadeInUp} transition={{ delay: 0.3 }} className="flex gap-4">
                <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold mb-2 text-balance leading-[1.3]">
                    <Bilingual ar="مبني على معايير AAOIFI" en="Based on AAOIFI Standards" />
                  </h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    <Bilingual 
                      ar="يعتمد على المعايير الشرعية المعتمدة دولياً"
                      en="Relies on internationally recognized Sharia standards"
                    />
                  </p>
                </div>
              </motion.div>

              <motion.div {...fadeInUp} transition={{ delay: 0.4 }} className="flex gap-4">
                <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold mb-2 text-balance leading-[1.3]">
                    <Bilingual ar="شفافية كاملة" en="Complete Transparency" />
                  </h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    <Bilingual 
                      ar="توضيح الأسباب والمراجع لكل تصنيف وملاحظة"
                      en="Clarification of reasons and references for each classification and note"
                    />
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Target Users Section */}
        <section className="py-20 bg-secondary">
          <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionTitle 
              ar="من نخدم"
              en="Who We Serve"
            />
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <motion.div {...fadeInUp} transition={{ delay: 0.1 }}>
                <Card className="text-center h-full hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-6 flex flex-col items-center h-full">
                    <Scale className="h-12 w-12 text-primary mb-4" />
                    <h4 className="font-semibold mb-2 text-balance leading-[1.3]">
                      <Bilingual ar="مكاتب المحاماة" en="Law Firms" />
                    </h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      <Bilingual 
                        ar="تسريع مراجعة العقود وتحديد المخاطر"
                        en="Accelerate contract review and risk identification"
                      />
                    </p>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div {...fadeInUp} transition={{ delay: 0.2 }}>
                <Card className="text-center h-full hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-6 flex flex-col items-center h-full">
                    <Users className="h-12 w-12 text-primary mb-4" />
                    <h4 className="font-semibold mb-2 text-balance leading-[1.3]">
                      <Bilingual ar="المستشارون الشرعيون" en="Sharia Advisors" />
                    </h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      <Bilingual 
                        ar="أداة مساعدة للتحليل الأولي"
                        en="Support tool for preliminary analysis"
                      />
                    </p>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div {...fadeInUp} transition={{ delay: 0.3 }}>
                <Card className="text-center h-full hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-6 flex flex-col items-center h-full">
                    <Building2 className="h-12 w-12 text-primary mb-4" />
                    <h4 className="font-semibold mb-2 text-balance leading-[1.3]">
                      <Bilingual ar="الشركات المالية" en="Finance Companies" />
                    </h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      <Bilingual 
                        ar="ضمان التوافق الشرعي للعقود"
                        en="Ensure Sharia compliance of contracts"
                      />
                    </p>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div {...fadeInUp} transition={{ delay: 0.4 }}>
                <Card className="text-center h-full hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-6 flex flex-col items-center h-full">
                    <Briefcase className="h-12 w-12 text-primary mb-4" />
                    <h4 className="font-semibold mb-2 text-balance leading-[1.3]">
                      <Bilingual ar="فرق الامتثال" en="Compliance Teams" />
                    </h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      <Bilingual 
                        ar="تحسين عمليات المراجعة والامتثال"
                        en="Improve review and compliance processes"
                      />
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section id="contact" className="py-24 bg-primary text-primary-foreground">
          <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div {...fadeInUp} className="text-center max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-balance leading-[1.2]" style={{ letterSpacing: '-0.02em' }}>
                <Bilingual 
                  ar="ابدأ تحليل عقدك خلال دقائق"
                  en="Start analyzing your contract in minutes"
                />
              </h2>
              <p className="text-lg mb-8 leading-relaxed opacity-90">
                <Bilingual 
                  ar="جرّب النظام الآن واحصل على تحليل شامل لعقودك"
                  en="Try the system now and get comprehensive analysis of your contracts"
                />
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" variant="secondary" className="text-base transition-all duration-200 active:scale-[0.98]">
                  <Bilingual ar="ابدأ الآن" en="Start Now" />
                </Button>
                <Button size="lg" variant="outline" className="text-base bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10 transition-all duration-200 active:scale-[0.98]">
                  <Bilingual ar="جرّب مثال" en="Try Example" />
                </Button>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
};

export default HomePage;