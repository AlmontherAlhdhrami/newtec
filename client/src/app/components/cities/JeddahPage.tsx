import { Navigation } from '../Navigation';
import { Card } from '../ui/card';
import { Badge } from '../ui/badge';
import { 
  ArrowRight, Building2, Users, Landmark, History, 
  Calendar, Waves, MapPin, Sparkles, Ship, Star,
  TreePine, Factory, Coins, Fish, Palmtree, Anchor
} from 'lucide-react';
import { Button } from '../ui/button';
import { ImageWithFallback } from '../figma/ImageWithFallback';

type Page = 'home' | 'education' | 'children' | 'tourism' | 'ai-assistant';

interface JeddahPageProps {
  onNavigate: (page: Page) => void;
  onBack: () => void;
}

export function JeddahPage({ onNavigate, onBack }: JeddahPageProps) {
  const landmarks = [
    { name: 'كورنيش جدة', icon: Waves, description: 'واجهة بحرية ممتدة بطول 30 كم على البحر الأحمر' },
    { name: 'نافورة الملك فهد', icon: Waves, description: 'أطول نافورة في العالم بارتفاع 312 متر' },
    { name: 'البلد (جدة التاريخية)', icon: Landmark, description: 'منطقة تراثية مسجلة في اليونسكو' },
    { name: 'مسجد الرحمة', icon: Landmark, description: 'مسجد عائم على البحر الأحمر، معلم أيقوني' },
    { name: 'بوابة مكة', icon: Building2, description: 'بوابة تاريخية رمز دخول الحجاج إلى مكة' },
    { name: 'برج المملكة', icon: Building2, description: 'من أبرز الأبراج الحديثة في جدة' },
  ];

  const tribes = [
    { name: 'حرب', description: 'من أكبر القبائل في منطقة الحجاز' },
    { name: 'جهينة', description: 'قبيلة عريقة في غرب المملكة' },
    { name: 'بني مالك', description: 'قبيلة حجازية أصيلة' },
    { name: 'قريش', description: 'القبيلة النبوية الشريفة لها حضور في جدة' },
    { name: 'بلي', description: 'قبيلة تاريخية في الحجاز' },
    { name: 'عتيبة', description: 'قبيلة كبيرة لها تواجد في جدة ونواحيها' },
  ];

  const resources = [
    { name: 'الموانئ البحرية', icon: Ship, description: 'ميناء جدة الإسلامي أكبر ميناء في البحر الأحمر' },
    { name: 'التجارة والأعمال', icon: Coins, description: 'المركز التجاري والاقتصادي الرئيسي للمملكة' },
    { name: 'السياحة', icon: Palmtree, description: 'وجهة سياحية رائدة على البحر الأحمر' },
    { name: 'الثروة السمكية', icon: Fish, description: 'صيد الأسماك وصناعة المأكولات البحرية' },
  ];

  const historicalEvents = [
    { year: '647هـ', event: 'تأسيس جدة', description: 'أسسها الخليفة عثمان بن عفان كميناء لمكة المكرمة' },
    { year: '1916', event: 'الثورة العربية', description: 'دور جدة في الثورة العربية الكبرى' },
    { year: '1925', event: 'الحكم السعودي', description: 'دخول الملك عبدالعزيز جدة وضمها للمملكة' },
    { year: '1970', event: 'الطفرة العمرانية', description: 'بداية التطور العمراني والاقتصادي الكبير' },
    { year: '2014', event: 'اليونسكو', description: 'تسجيل جدة التاريخية في قائمة التراث العالمي' },
    { year: '2030', event: 'رؤية المستقبل', description: 'مشاريع تطوير جدة ضمن رؤية 2030' },
  ];

  const culturalEvents = [
    {
      name: 'موسم جدة',
      period: 'يونيو - يوليو',
      description: 'موسم صيفي حافل بالفعاليات الترفيهية والثقافية على شواطئ البحر الأحمر',
      image: 'https://images.unsplash.com/photo-1569154941061-e231b4725ef1?w=800'
    },
    {
      name: 'سباق جائزة السعودية الكبرى',
      period: 'مارس',
      description: 'سباق الفورمولا 1 على حلبة كورنيش جدة، أسرع حلبة في العالم',
      image: 'https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?w=800'
    },
    {
      name: 'مهرجان البحر الأحمر السينمائي',
      period: 'ديسمبر',
      description: 'مهرجان سينمائي دولي يستضيف نجوم ومخرجين من العالم',
      image: 'https://images.unsplash.com/photo-1574267432667-f0fbf1d90373?w=800'
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 via-white to-amber-50">
      <Navigation onNavigate={onNavigate} currentPage="education" />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-700 via-cyan-600 to-blue-600 text-white py-20 overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 10px, currentColor 10px, currentColor 11px)' }}></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <Button
            onClick={onBack}
            variant="outline"
            className="mb-6 bg-white/10 hover:bg-white/20 text-white border-white/30 font-bold"
            style={{ fontFamily: 'Noto Kufi Arabic, sans-serif' }}
          >
            <ArrowRight className="w-5 h-5 ml-2" />
            العودة للخريطة
          </Button>

          <div className="flex items-center justify-center gap-4 mb-6">
            <Waves className="w-16 h-16 text-amber-300 animate-bounce" />
            <Ship className="w-20 h-20 text-amber-200" />
            <Waves className="w-16 h-16 text-amber-300 animate-bounce" />
          </div>

          <div className="text-center">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Star className="w-8 h-8 text-amber-400 fill-amber-400" />
              <h1 className="text-6xl font-bold text-amber-100" style={{ fontFamily: 'Ruwudu, serif' }}>
                جدة
              </h1>
              <Star className="w-8 h-8 text-amber-400 fill-amber-400" />
            </div>
            
            <p className="text-3xl text-amber-50 mb-4 font-semibold" style={{ fontFamily: 'Noto Kufi Arabic, sans-serif' }}>
              عروس البحر الأحمر - بوابة الحرمين الشريفين
            </p>

            <div className="flex items-center justify-center gap-8 mt-6">
              <div className="flex items-center gap-2">
                <Users className="w-6 h-6 text-amber-300" />
                <span className="text-xl text-amber-100" style={{ fontFamily: 'Noto Kufi Arabic, sans-serif' }}>4.7 مليون نسمة</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-6 h-6 text-amber-300" />
                <span className="text-xl text-amber-100" style={{ fontFamily: 'Noto Kufi Arabic, sans-serif' }}>ساحل البحر الأحمر - غرب المملكة</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-12 container mx-auto px-4">
        <Card className="p-8 bg-gradient-to-br from-white to-blue-50 border-4 border-cyan-200 shadow-xl">
          <div className="flex items-center gap-3 mb-6">
            <Waves className="w-8 h-8 text-cyan-600" />
            <h2 className="text-3xl font-bold text-blue-800" style={{ fontFamily: 'Ruwudu, serif' }}>
              نبذة عن مدينة جدة
            </h2>
          </div>
          <p className="text-xl leading-relaxed text-gray-700 mb-4" style={{ fontFamily: 'Noto Kufi Arabic, sans-serif' }}>
            جدة هي ثاني أكبر مدينة في المملكة العربية السعودية وعاصمتها الاقتصادية والسياحية. تقع على ساحل 
            البحر الأحمر في منطقة مكة المكرمة، وتُعرف بلقب "عروس البحر الأحمر" و"بوابة الحرمين الشريفين" 
            حيث تستقبل ملايين الحجاج والمعتمرين القادمين إلى مكة والمدينة سنوياً.
          </p>
          <p className="text-xl leading-relaxed text-gray-700 mb-4" style={{ fontFamily: 'Noto Kufi Arabic, sans-serif' }}>
            تتميز جدة بموقعها الاستراتيجي كميناء رئيسي على البحر الأحمر، مما جعلها مركزاً تجارياً عالمياً 
            منذ قرون. أسسها الخليفة عثمان بن عفان رضي الله عنه عام 647 هجرية لتكون ميناء لمكة المكرمة، 
            ومنذ ذلك الحين أصبحت بوابة للتجارة والثقافة والتنوع.
          </p>
          <p className="text-xl leading-relaxed text-gray-700" style={{ fontFamily: 'Noto Kufi Arabic, sans-serif' }}>
            تجمع جدة بشكل فريد بين التراث العريق في البلد التاريخية والحداثة الفائقة في أحيائها الجديدة. 
            تشتهر بكورنيشها الساحلي الخلاب، نافورة الملك فهد الأيقونية، منحوتاتها الفنية المنتشرة في الشوارع، 
            وحيويتها الثقافية التي تجعلها واحدة من أكثر المدن السعودية انفتاحاً وتنوعاً.
          </p>
        </Card>
      </section>

      {/* Important Places */}
      <section className="py-12 container mx-auto px-4">
        <div className="flex items-center gap-3 mb-8">
          <Landmark className="w-10 h-10 text-cyan-700" />
          <h2 className="text-4xl font-bold text-blue-800" style={{ fontFamily: 'Ruwudu, serif' }}>
            أهم المعالم والمناطق
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {landmarks.map((landmark, index) => (
            <Card key={index} className="p-6 hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-white to-blue-50 border-3 border-cyan-200 group cursor-pointer">
              <div className="flex items-start gap-4">
                <div className="bg-gradient-to-br from-cyan-600 to-blue-700 p-4 rounded-xl group-hover:scale-110 transition-transform">
                  <landmark.icon className="w-8 h-8 text-amber-200" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-blue-800 mb-2" style={{ fontFamily: 'Ruwudu, serif' }}>
                    {landmark.name}
                  </h3>
                  <p className="text-gray-700 leading-relaxed" style={{ fontFamily: 'Noto Kufi Arabic, sans-serif' }}>
                    {landmark.description}
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* Population & Tribes */}
      <section className="py-12 bg-gradient-to-r from-cyan-50 to-amber-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-3 mb-8">
            <Users className="w-10 h-10 text-cyan-700" />
            <h2 className="text-4xl font-bold text-blue-800" style={{ fontFamily: 'Ruwudu, serif' }}>
              السكان والقبائل
            </h2>
          </div>

          <Card className="p-8 bg-white border-4 border-cyan-200 shadow-xl mb-6">
            <p className="text-xl leading-relaxed text-gray-700 mb-6" style={{ fontFamily: 'Noto Kufi Arabic, sans-serif' }}>
              جدة مدينة عالمية بحق، تجمع سكاناً من مختلف مناطق المملكة والعالم. تشتهر بتنوعها الثقافي 
              والاجتماعي، حيث تمتزج القبائل الحجازية الأصيلة مع الوافدين من جميع أنحاء العالم الإسلامي، 
              مما أكسبها طابعاً كوزموبوليتانياً فريداً مع الحفاظ على الهوية السعودية الأصيلة.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {tribes.map((tribe, index) => (
                <div key={index} className="bg-gradient-to-br from-cyan-50 to-blue-50 p-5 rounded-xl border-2 border-cyan-200">
                  <div className="flex items-center gap-2 mb-2">
                    <Palmtree className="w-5 h-5 text-cyan-600" />
                    <h3 className="text-lg font-bold text-blue-800" style={{ fontFamily: 'Ruwudu, serif' }}>
                      {tribe.name}
                    </h3>
                  </div>
                  <p className="text-gray-700 text-sm" style={{ fontFamily: 'Noto Kufi Arabic, sans-serif' }}>
                    {tribe.description}
                  </p>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </section>

      {/* Resources */}
      <section className="py-12 container mx-auto px-4">
        <div className="flex items-center gap-3 mb-8">
          <Factory className="w-10 h-10 text-cyan-700" />
          <h2 className="text-4xl font-bold text-blue-800" style={{ fontFamily: 'Ruwudu, serif' }}>
            الموارد الاقتصادية
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {resources.map((resource, index) => (
            <Card key={index} className="p-8 bg-gradient-to-br from-white to-cyan-50 border-4 border-cyan-200 hover:shadow-xl transition-all group">
              <div className="flex items-start gap-4">
                <div className="bg-gradient-to-br from-cyan-600 to-blue-600 p-4 rounded-2xl group-hover:scale-110 transition-transform">
                  <resource.icon className="w-10 h-10 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-blue-800 mb-3" style={{ fontFamily: 'Ruwudu, serif' }}>
                    {resource.name}
                  </h3>
                  <p className="text-gray-700 text-lg leading-relaxed" style={{ fontFamily: 'Noto Kufi Arabic, sans-serif' }}>
                    {resource.description}
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* History */}
      <section className="py-12 bg-gradient-to-r from-amber-50 to-cyan-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-3 mb-8">
            <History className="w-10 h-10 text-cyan-700" />
            <h2 className="text-4xl font-bold text-blue-800" style={{ fontFamily: 'Ruwudu, serif' }}>
              التاريخ والمحطات المهمة
            </h2>
          </div>

          <div className="space-y-6">
            {historicalEvents.map((event, index) => (
              <Card key={index} className="p-6 bg-white border-l-8 border-cyan-600 hover:shadow-xl transition-all">
                <div className="flex items-start gap-6">
                  <div className="bg-gradient-to-br from-cyan-600 to-blue-700 text-white px-6 py-4 rounded-2xl min-w-[120px] text-center">
                    <div className="text-2xl font-bold" style={{ fontFamily: 'Ruwudu, serif' }}>{event.year}</div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-blue-800 mb-2" style={{ fontFamily: 'Ruwudu, serif' }}>
                      {event.event}
                    </h3>
                    <p className="text-gray-700 text-lg leading-relaxed" style={{ fontFamily: 'Noto Kufi Arabic, sans-serif' }}>
                      {event.description}
                    </p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Cultural Events */}
      <section className="py-12 container mx-auto px-4">
        <div className="flex items-center gap-3 mb-8">
          <Calendar className="w-10 h-10 text-cyan-700" />
          <h2 className="text-4xl font-bold text-blue-800" style={{ fontFamily: 'Ruwudu, serif' }}>
            الحضارة والفعاليات الحالية
          </h2>
        </div>

        <p className="text-xl leading-relaxed text-gray-700 mb-8 max-w-4xl" style={{ fontFamily: 'Noto Kufi Arabic, sans-serif' }}>
          تشهد جدة نهضة ثقافية وترفيهية غير مسبوقة، حيث أصبحت مركزاً للفعاليات العالمية الكبرى 
          والمهرجانات الفنية والرياضية. المدينة تجمع بين سحر البحر والتراث الأصيل والحداثة المعاصرة، 
          مما يجعلها وجهة رئيسية للسياحة والثقافة في المنطقة.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {culturalEvents.map((event, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-2xl transition-all duration-300 group border-4 border-cyan-200 hover:border-amber-500">
              <div className="relative h-64 overflow-hidden">
                <ImageWithFallback
                  src={event.image}
                  alt={event.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <Badge className="absolute top-4 right-4 bg-gradient-to-r from-cyan-600 to-blue-600 text-white font-bold text-base px-4 py-2" style={{ fontFamily: 'Noto Kufi Arabic, sans-serif' }}>
                  {event.period}
                </Badge>
              </div>
              <div className="p-6 bg-gradient-to-br from-white to-cyan-50">
                <h3 className="text-2xl font-bold text-blue-800 mb-3" style={{ fontFamily: 'Ruwudu, serif' }}>
                  {event.name}
                </h3>
                <p className="text-gray-700 leading-relaxed" style={{ fontFamily: 'Noto Kufi Arabic, sans-serif' }}>
                  {event.description}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* Footer */}
      <section className="py-12 bg-gradient-to-r from-cyan-700 to-blue-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Anchor className="w-8 h-8 text-amber-400 animate-pulse" />
            <h3 className="text-3xl font-bold" style={{ fontFamily: 'Ruwudu, serif' }}>
              جدة - عروس البحر الأحمر
            </h3>
            <Anchor className="w-8 h-8 text-amber-400 animate-pulse" />
          </div>
          <p className="text-xl text-amber-100 max-w-3xl mx-auto" style={{ fontFamily: 'Noto Kufi Arabic, sans-serif' }}>
            مدينة تجمع بين جمال البحر وعراقة التاريخ ونبض الحداثة، لتكون بوابة المملكة إلى العالم
          </p>
        </div>
      </section>
    </div>
  );
}
