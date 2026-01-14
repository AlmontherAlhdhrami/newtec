import { Navigation } from '../Navigation';
import { Card } from '../ui/card';
import { Badge } from '../ui/badge';
import { 
  ArrowRight, Building2, Users, Landmark, History, 
  Calendar, Heart, MapPin, Sparkles, Crown, Star,
  TreePine, Factory, BookOpen, Palmtree, Building
} from 'lucide-react';
import { Button } from '../ui/button';
import { ImageWithFallback } from '../figma/ImageWithFallback';

type Page = 'home' | 'education' | 'children' | 'tourism' | 'ai-assistant';

interface MedinaPageProps {
  onNavigate: (page: Page) => void;
  onBack: () => void;
}

export function MedinaPage({ onNavigate, onBack }: MedinaPageProps) {
  const landmarks = [
    { name: 'المسجد النبوي الشريف', icon: Building, description: 'ثاني أقدس المساجد في الإسلام، يضم قبر النبي محمد ﷺ' },
    { name: 'مسجد قباء', icon: Building, description: 'أول مسجد بني في الإسلام، له فضل عظيم في السنة النبوية' },
    { name: 'جبل أحد', icon: TreePine, description: 'جبل تاريخي شهد غزوة أحد الشهيرة' },
    { name: 'البقيع', icon: Landmark, description: 'أقدم مقبرة إسلامية تضم صحابة رسول الله ﷺ' },
    { name: 'مسجد القبلتين', icon: Building, description: 'المسجد الذي تحولت فيه القبلة من القدس إلى مكة' },
    { name: 'وادي العقيق', icon: TreePine, description: 'وادٍ مبارك ذكره النبي ﷺ في أحاديثه' },
  ];

  const tribes = [
    { name: 'الأوس', description: 'من القبائل الأنصارية التي استقبلت النبي ﷺ' },
    { name: 'الخزرج', description: 'قبيلة أنصارية عريقة لها دور كبير في نصرة الإسلام' },
    { name: 'حرب', description: 'قبيلة كبيرة في المدينة المنورة ونواحيها' },
    { name: 'عنزة', description: 'من القبائل المعروفة في منطقة المدينة' },
    { name: 'جهينة', description: 'قبيلة عريقة لها تواجد في المدينة وضواحيها' },
    { name: 'بلي', description: 'قبيلة تاريخية في شمال الحجاز' },
  ];

  const resources = [
    { name: 'السياحة الدينية', icon: Heart, description: 'ملايين المسلمين يزورون المدينة سنوياً' },
    { name: 'التعليم الإسلامي', icon: BookOpen, description: 'موطن الجامعة الإسلامية ومراكز علمية' },
    { name: 'الزراعة', icon: Palmtree, description: 'مشهورة بزراعة التمور والحمضيات' },
    { name: 'الخدمات', icon: Factory, description: 'قطاع خدمي متطور لخدمة الزوار والمعتمرين' },
  ];

  const historicalEvents = [
    { year: '622م', event: 'الهجرة النبوية', description: 'هجرة النبي محمد ﷺ من مكة إلى المدينة، بداية التقويم الهجري' },
    { year: '625م', event: 'غزوة أحد', description: 'معركة فاصلة وقعت عند جبل أحد شمال المدينة' },
    { year: '627م', event: 'غزوة الأحزاب', description: 'الدفاع عن المدينة بحفر الخندق الشهير' },
    { year: '11هـ', event: 'وفاة النبي ﷺ', description: 'انتقال النبي محمد ﷺ إلى الرفيق الأعلى ودفنه في المدينة' },
    { year: '1926', event: 'الحكم السعودي', description: 'انضمام المدينة المنورة إلى المملكة العربية السعودية' },
    { year: '2020', event: 'توسعة الحرمين', description: 'استكمال مشاريع التوسعة الكبرى للمسجد النبوي' },
  ];

  const culturalEvents = [
    {
      name: 'موسم زيارة المسجد النبوي',
      period: 'على مدار العام',
      description: 'ملايين المسلمين يزورون المسجد النبوي الشريف للصلاة والزيارة والدعاء',
      image: 'https://images.unsplash.com/photo-1591604129853-9f37c384be82?w=800'
    },
    {
      name: 'موسم التمور',
      period: 'يوليو - سبتمبر',
      description: 'احتفال بموسم حصاد التمور الشهيرة في المدينة، خاصة تمر عجوة المدينة',
      image: 'https://images.unsplash.com/photo-1578849278619-e73505e9610f?w=800'
    },
    {
      name: 'الفعاليات الإسلامية',
      period: 'رمضان والمناسبات',
      description: 'محاضرات وندوات دينية وثقافية في شهر رمضان والمناسبات الإسلامية',
      image: 'https://images.unsplash.com/photo-1564769610726-62fc4955f03a?w=800'
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 via-white to-amber-50">
      <Navigation onNavigate={onNavigate} currentPage="education" />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-green-800 via-green-700 to-green-600 text-white py-20 overflow-hidden">
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
            <Building className="w-16 h-16 text-amber-300 animate-pulse" />
            <Heart className="w-20 h-20 text-amber-200 fill-amber-200" />
            <Building className="w-16 h-16 text-amber-300 animate-pulse" />
          </div>

          <div className="text-center">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Star className="w-8 h-8 text-amber-400 fill-amber-400" />
              <h1 className="text-6xl font-bold text-amber-100" style={{ fontFamily: 'Ruwudu, serif' }}>
                المدينة المنورة
              </h1>
              <Star className="w-8 h-8 text-amber-400 fill-amber-400" />
            </div>
            
            <p className="text-3xl text-amber-50 mb-4 font-semibold" style={{ fontFamily: 'Noto Kufi Arabic, sans-serif' }}>
              طيبة الطيبة - دار الهجرة
            </p>

            <div className="flex items-center justify-center gap-8 mt-6">
              <div className="flex items-center gap-2">
                <Users className="w-6 h-6 text-amber-300" />
                <span className="text-xl text-amber-100" style={{ fontFamily: 'Noto Kufi Arabic, sans-serif' }}>1.5 مليون نسمة</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-6 h-6 text-amber-300" />
                <span className="text-xl text-amber-100" style={{ fontFamily: 'Noto Kufi Arabic, sans-serif' }}>منطقة الحجاز - غرب المملكة</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-12 container mx-auto px-4">
        <Card className="p-8 bg-gradient-to-br from-white to-green-50 border-4 border-green-200 shadow-xl">
          <div className="flex items-center gap-3 mb-6">
            <Heart className="w-8 h-8 text-green-700 fill-green-600" />
            <h2 className="text-3xl font-bold text-green-800" style={{ fontFamily: 'Ruwudu, serif' }}>
              نبذة عن المدينة المنورة
            </h2>
          </div>
          <p className="text-xl leading-relaxed text-gray-700 mb-4" style={{ fontFamily: 'Noto Kufi Arabic, sans-serif' }}>
            المدينة المنورة هي ثاني أقدس مدينة في الإسلام بعد مكة المكرمة، وتقع في منطقة الحجاز غرب المملكة 
            العربية السعودية. كانت تُعرف قديماً باسم "يثرب" قبل الإسلام، ثم سُميت "المدينة المنورة" بعد هجرة 
            النبي محمد ﷺ إليها من مكة عام 622 ميلادية، وهو الحدث الذي يُعرف بالهجرة النبوية الشريفة.
          </p>
          <p className="text-xl leading-relaxed text-gray-700 mb-4" style={{ fontFamily: 'Noto Kufi Arabic, sans-serif' }}>
            تحتضن المدينة المسجد النبوي الشريف، الذي بناه النبي محمد ﷺ بنفسه، وهو يضم قبره الشريف وقبور 
            اثنين من خلفائه الراشدين: أبي بكر الصديق وعمر بن الخطاب رضي الله عنهما. تُعد الصلاة في المسجد 
            النبوي من أفضل الأعمال، حيث ورد في الحديث الشريف أن الصلاة فيه بألف صلاة فيما سواه إلا المسجد الحرام.
          </p>
          <p className="text-xl leading-relaxed text-gray-700" style={{ fontFamily: 'Noto Kufi Arabic, sans-serif' }}>
            تتميز المدينة المنورة بمكانة روحانية خاصة في قلوب المسلمين، فهي المدينة التي آوت النبي ﷺ وأصحابه، 
            وشهدت تأسيس أول دولة إسلامية، وفيها نزلت معظم آيات القرآن الكريم. اليوم، تجمع المدينة بين عراقة 
            التاريخ الإسلامي وحداثة التطور العمراني، حيث تستقبل ملايين المسلمين سنوياً من جميع أنحاء العالم.
          </p>
        </Card>
      </section>

      {/* Important Places */}
      <section className="py-12 container mx-auto px-4">
        <div className="flex items-center gap-3 mb-8">
          <Landmark className="w-10 h-10 text-green-700" />
          <h2 className="text-4xl font-bold text-green-800" style={{ fontFamily: 'Ruwudu, serif' }}>
            أهم المعالم والمناطق المقدسة
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {landmarks.map((landmark, index) => (
            <Card key={index} className="p-6 hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-white to-green-50 border-3 border-green-200 group cursor-pointer">
              <div className="flex items-start gap-4">
                <div className="bg-gradient-to-br from-green-700 to-green-800 p-4 rounded-xl group-hover:scale-110 transition-transform">
                  <landmark.icon className="w-8 h-8 text-amber-200" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-green-800 mb-2" style={{ fontFamily: 'Ruwudu, serif' }}>
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
      <section className="py-12 bg-gradient-to-r from-green-50 to-amber-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-3 mb-8">
            <Users className="w-10 h-10 text-green-700" />
            <h2 className="text-4xl font-bold text-green-800" style={{ fontFamily: 'Ruwudu, serif' }}>
              السكان والقبائل
            </h2>
          </div>

          <Card className="p-8 bg-white border-4 border-green-200 shadow-xl mb-6">
            <p className="text-xl leading-relaxed text-gray-700 mb-6" style={{ fontFamily: 'Noto Kufi Arabic, sans-serif' }}>
              سكان المدينة المنورة هم خليط من أحفاد الأنصار الذين استقبلوا النبي ﷺ، والقبائل العربية التي 
              استوطنت المنطقة عبر القرون، إضافة إلى المسلمين من مختلف الجنسيات الذين اختاروا العيش في هذه 
              المدينة المباركة. تتميز المدينة بالتنوع الثقافي والأخوة الإسلامية.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {tribes.map((tribe, index) => (
                <div key={index} className="bg-gradient-to-br from-green-50 to-amber-50 p-5 rounded-xl border-2 border-green-200">
                  <div className="flex items-center gap-2 mb-2">
                    <Palmtree className="w-5 h-5 text-green-600" />
                    <h3 className="text-lg font-bold text-green-800" style={{ fontFamily: 'Ruwudu, serif' }}>
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
          <Factory className="w-10 h-10 text-green-700" />
          <h2 className="text-4xl font-bold text-green-800" style={{ fontFamily: 'Ruwudu, serif' }}>
            الموارد الاقتصادية
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {resources.map((resource, index) => (
            <Card key={index} className="p-8 bg-gradient-to-br from-white to-green-50 border-4 border-green-200 hover:shadow-xl transition-all group">
              <div className="flex items-start gap-4">
                <div className="bg-gradient-to-br from-green-600 to-green-700 p-4 rounded-2xl group-hover:scale-110 transition-transform">
                  <resource.icon className="w-10 h-10 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-green-800 mb-3" style={{ fontFamily: 'Ruwudu, serif' }}>
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
      <section className="py-12 bg-gradient-to-r from-amber-50 to-green-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-3 mb-8">
            <History className="w-10 h-10 text-green-700" />
            <h2 className="text-4xl font-bold text-green-800" style={{ fontFamily: 'Ruwudu, serif' }}>
              التاريخ والمحطات المهمة
            </h2>
          </div>

          <div className="space-y-6">
            {historicalEvents.map((event, index) => (
              <Card key={index} className="p-6 bg-white border-l-8 border-green-600 hover:shadow-xl transition-all">
                <div className="flex items-start gap-6">
                  <div className="bg-gradient-to-br from-green-700 to-green-800 text-white px-6 py-4 rounded-2xl min-w-[120px] text-center">
                    <div className="text-2xl font-bold" style={{ fontFamily: 'Ruwudu, serif' }}>{event.year}</div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-green-800 mb-2" style={{ fontFamily: 'Ruwudu, serif' }}>
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
          <Calendar className="w-10 h-10 text-green-700" />
          <h2 className="text-4xl font-bold text-green-800" style={{ fontFamily: 'Ruwudu, serif' }}>
            الحياة الدينية والثقافية
          </h2>
        </div>

        <p className="text-xl leading-relaxed text-gray-700 mb-8 max-w-4xl" style={{ fontFamily: 'Noto Kufi Arabic, sans-serif' }}>
          تعيش المدينة المنورة على إيقاع روحاني متفرد، حيث تشهد زيارات ملايين المسلمين على مدار العام 
          لأداء الصلاة في المسجد النبوي والتبرك بزيارة قبر النبي ﷺ. كما تشتهر بالعلم الشرعي والثقافة 
          الإسلامية العميقة.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {culturalEvents.map((event, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-2xl transition-all duration-300 group border-4 border-green-200 hover:border-amber-500">
              <div className="relative h-64 overflow-hidden">
                <ImageWithFallback
                  src={event.image}
                  alt={event.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <Badge className="absolute top-4 right-4 bg-gradient-to-r from-green-700 to-green-600 text-white font-bold text-base px-4 py-2" style={{ fontFamily: 'Noto Kufi Arabic, sans-serif' }}>
                  {event.period}
                </Badge>
              </div>
              <div className="p-6 bg-gradient-to-br from-white to-green-50">
                <h3 className="text-2xl font-bold text-green-800 mb-3" style={{ fontFamily: 'Ruwudu, serif' }}>
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
      <section className="py-12 bg-gradient-to-r from-green-800 to-green-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Heart className="w-8 h-8 text-amber-400 fill-amber-400 animate-pulse" />
            <h3 className="text-3xl font-bold" style={{ fontFamily: 'Ruwudu, serif' }}>
              المدينة المنورة - طيبة الطيبة
            </h3>
            <Heart className="w-8 h-8 text-amber-400 fill-amber-400 animate-pulse" />
          </div>
          <p className="text-xl text-amber-100 max-w-3xl mx-auto" style={{ fontFamily: 'Noto Kufi Arabic, sans-serif' }}>
            مدينة مباركة في قلوب المسلمين، حيث نور النبوة وعبق التاريخ الإسلامي
          </p>
        </div>
      </section>
    </div>
  );
}
