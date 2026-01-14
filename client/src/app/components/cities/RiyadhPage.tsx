import { Navigation } from '../Navigation';
import { Card } from '../ui/card';
import { Badge } from '../ui/badge';
import { 
  ArrowRight, Building2, Users, Landmark, History, 
  Calendar, Trophy, MapPin, Sparkles, Crown, Star,
  TreePine, Factory, Coins, GraduationCap, Palmtree
} from 'lucide-react';
import { Button } from '../ui/button';
import { ImageWithFallback } from '../figma/ImageWithFallback';

type Page = 'home' | 'education' | 'children' | 'tourism' | 'ai-assistant';

interface RiyadhPageProps {
  onNavigate: (page: Page) => void;
  onBack: () => void;
}

export function RiyadhPage({ onNavigate, onBack }: RiyadhPageProps) {
  const landmarks = [
    { name: 'برج المملكة', icon: Building2, description: 'أحد أطول الأبراج في المملكة بارتفاع 302 متر' },
    { name: 'قصر المصمك', icon: Landmark, description: 'قلعة تاريخية شهدت توحيد المملكة' },
    { name: 'وادي حنيفة', icon: TreePine, description: 'محمية طبيعية تمتد لمسافة 120 كم' },
    { name: 'المتحف الوطني', icon: History, description: 'يحكي قصة الجزيرة العربية عبر العصور' },
    { name: 'قصر الحكم', icon: Crown, description: 'مقر الإمارة ورمز الحكم في نجد' },
    { name: 'برج الفيصلية', icon: Building2, description: 'أول ناطحة سحاب في السعودية' },
  ];

  const tribes = [
    { name: 'عنزة', description: 'من أكبر القبائل العربية في نجد' },
    { name: 'تميم', description: 'قبيلة عريقة في وسط الجزيرة العربية' },
    { name: 'سبيع', description: 'قبيلة نجدية ذات تاريخ عريق' },
    { name: 'قحطان', description: 'من القبائل الكبرى في المملكة' },
    { name: 'شمر', description: 'قبيلة عربية أصيلة في نجد' },
    { name: 'الدواسر', description: 'قبيلة لها حضور قوي في الرياض' },
  ];

  const resources = [
    { name: 'النفط والغاز', icon: Factory, description: 'مركز إدارة قطاع الطاقة في المملكة' },
    { name: 'الخدمات المالية', icon: Coins, description: 'مركز مالي واقتصادي رئيسي' },
    { name: 'التعليم والبحث', icon: GraduationCap, description: 'موطن أكبر الجامعات السعودية' },
    { name: 'التقنية والابتكار', icon: Sparkles, description: 'مركز التحول الرقمي والتقنية' },
  ];

  const historicalEvents = [
    { year: '1902', event: 'استرداد الرياض', description: 'استرد الملك عبدالعزيز الرياض في معركة تاريخية' },
    { year: '1932', event: 'عاصمة المملكة', description: 'أصبحت الرياض العاصمة الرسمية للمملكة الموحدة' },
    { year: '1953', event: 'بداية التطور', description: 'بدء خطط التطوير العمراني الحديث' },
    { year: '2030', event: 'رؤية المستقبل', description: 'محور أساسي في رؤية المملكة 2030' },
  ];

  const culturalEvents = [
    {
      name: 'موسم الرياض',
      period: 'أكتوبر - مارس',
      description: 'أكبر موسم ترفيهي في المنطقة يضم فعاليات عالمية متنوعة',
      image: 'https://images.unsplash.com/photo-1539635278303-d4002c07eae3?w=800'
    },
    {
      name: 'مهرجان الجنادرية',
      period: 'فبراير',
      description: 'مهرجان تراثي يعرض الثقافة والتقاليد السعودية الأصيلة',
      image: 'https://images.unsplash.com/photo-1591604466107-ec97de577aff?w=800'
    },
    {
      name: 'سباق فورمولا إي',
      period: 'يناير',
      description: 'سباق السيارات الكهربائية في شوارع الدرعية التاريخية',
      image: 'https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?w=800'
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 via-white to-green-50">
      <Navigation onNavigate={onNavigate} currentPage="education" />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-green-700 via-green-600 to-amber-600 text-white py-20 overflow-hidden">
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
            <Building2 className="w-16 h-16 text-amber-300 animate-pulse" />
            <Crown className="w-20 h-20 text-amber-200" />
            <Building2 className="w-16 h-16 text-amber-300 animate-pulse" />
          </div>

          <div className="text-center">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Star className="w-8 h-8 text-amber-400 fill-amber-400" />
              <h1 className="text-6xl font-bold text-amber-100" style={{ fontFamily: 'Ruwudu, serif' }}>
                الرياض
              </h1>
              <Star className="w-8 h-8 text-amber-400 fill-amber-400" />
            </div>
            
            <p className="text-3xl text-amber-50 mb-4 font-semibold" style={{ fontFamily: 'Noto Kufi Arabic, sans-serif' }}>
              عاصمة المملكة العربية السعودية
            </p>

            <div className="flex items-center justify-center gap-8 mt-6">
              <div className="flex items-center gap-2">
                <Users className="w-6 h-6 text-amber-300" />
                <span className="text-xl text-amber-100" style={{ fontFamily: 'Noto Kufi Arabic, sans-serif' }}>7.6 مليون نسمة</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-6 h-6 text-amber-300" />
                <span className="text-xl text-amber-100" style={{ fontFamily: 'Noto Kufi Arabic, sans-serif' }}>منطقة نجد - وسط المملكة</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-12 container mx-auto px-4">
        <Card className="p-8 bg-gradient-to-br from-white to-amber-50 border-4 border-green-200 shadow-xl">
          <div className="flex items-center gap-3 mb-6">
            <Sparkles className="w-8 h-8 text-amber-600" />
            <h2 className="text-3xl font-bold text-green-800" style={{ fontFamily: 'Ruwudu, serif' }}>
              نبذة عن المدينة
            </h2>
          </div>
          <p className="text-xl leading-relaxed text-gray-700 mb-4" style={{ fontFamily: 'Noto Kufi Arabic, sans-serif' }}>
            الرياض عاصمة المملكة العربية السعودية وأكبر مدنها، تقع في قلب الجزيرة العربية في إقليم نجد التاريخي. 
            شهدت المدينة تحولاً هائلاً من واحة صحراوية صغيرة إلى واحدة من أسرع المدن نمواً في العالم، لتصبح مركزاً 
            إدارياً واقتصادياً وثقافياً رئيسياً في المنطقة.
          </p>
          <p className="text-xl leading-relaxed text-gray-700" style={{ fontFamily: 'Noto Kufi Arabic, sans-serif' }}>
            تجمع الرياض بشكل فريد بين التراث العريق والحداثة المتطورة، حيث تقف القلاع التاريخية جنباً إلى جنب 
            مع ناطحات السحاب الشاهقة، وتمتزج الأسواق التقليدية مع مراكز التسوق العصرية، مما يجعلها نموذجاً حياً 
            للمزج بين الأصالة والمعاصرة.
          </p>
        </Card>
      </section>

      {/* Important Places */}
      <section className="py-12 container mx-auto px-4">
        <div className="flex items-center gap-3 mb-8">
          <Landmark className="w-10 h-10 text-green-700" />
          <h2 className="text-4xl font-bold text-green-800" style={{ fontFamily: 'Ruwudu, serif' }}>
            أهم المعالم والمناطق
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {landmarks.map((landmark, index) => (
            <Card key={index} className="p-6 hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-white to-green-50 border-3 border-green-200 group cursor-pointer">
              <div className="flex items-start gap-4">
                <div className="bg-gradient-to-br from-green-600 to-green-700 p-4 rounded-xl group-hover:scale-110 transition-transform">
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
            <Users className="w-10 h-10 text-amber-700" />
            <h2 className="text-4xl font-bold text-green-800" style={{ fontFamily: 'Ruwudu, serif' }}>
              السكان والقبائل
            </h2>
          </div>

          <Card className="p-8 bg-white border-4 border-amber-200 shadow-xl mb-6">
            <p className="text-xl leading-relaxed text-gray-700 mb-6" style={{ fontFamily: 'Noto Kufi Arabic, sans-serif' }}>
              تعد الرياض موطناً لخليط متنوع من السكان، حيث تجتمع فيها قبائل نجد الأصيلة مع سكان من مختلف 
              مناطق المملكة والمقيمين من جنسيات متعددة. تشتهر المدينة بكرم الضيافة النجدية الأصيلة والتمسك 
              بالقيم العربية الأصيلة.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {tribes.map((tribe, index) => (
                <div key={index} className="bg-gradient-to-br from-amber-50 to-green-50 p-5 rounded-xl border-2 border-green-200">
                  <div className="flex items-center gap-2 mb-2">
                    <Palmtree className="w-5 h-5 text-amber-600" />
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
            <Card key={index} className="p-8 bg-gradient-to-br from-white to-amber-50 border-4 border-green-200 hover:shadow-xl transition-all group">
              <div className="flex items-start gap-4">
                <div className="bg-gradient-to-br from-amber-500 to-amber-600 p-4 rounded-2xl group-hover:scale-110 transition-transform">
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
            <History className="w-10 h-10 text-amber-700" />
            <h2 className="text-4xl font-bold text-green-800" style={{ fontFamily: 'Ruwudu, serif' }}>
              التاريخ والمحطات المهمة
            </h2>
          </div>

          <div className="space-y-6">
            {historicalEvents.map((event, index) => (
              <Card key={index} className="p-6 bg-white border-l-8 border-green-600 hover:shadow-xl transition-all">
                <div className="flex items-start gap-6">
                  <div className="bg-gradient-to-br from-green-600 to-green-700 text-white px-6 py-4 rounded-2xl min-w-[120px] text-center">
                    <div className="text-3xl font-bold" style={{ fontFamily: 'Ruwudu, serif' }}>{event.year}</div>
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
          <Trophy className="w-10 h-10 text-amber-700" />
          <h2 className="text-4xl font-bold text-green-800" style={{ fontFamily: 'Ruwudu, serif' }}>
            الحضارة والفعاليات الحالية
          </h2>
        </div>

        <p className="text-xl leading-relaxed text-gray-700 mb-8 max-w-4xl" style={{ fontFamily: 'Noto Kufi Arabic, sans-serif' }}>
          تشهد الرياض نهضة ثقافية وحضارية غير مسبوقة، حيث تستضيف العديد من الفعاليات العالمية والمهرجانات 
          الثقافية التي تجمع بين التراث الأصيل والترفيه المعاصر، مما يجعلها وجهة سياحية وثقافية رائدة في المنطقة.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {culturalEvents.map((event, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-2xl transition-all duration-300 group border-4 border-amber-200 hover:border-green-500">
              <div className="relative h-64 overflow-hidden">
                <ImageWithFallback
                  src={event.image}
                  alt={event.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <Badge className="absolute top-4 right-4 bg-gradient-to-r from-amber-600 to-amber-500 text-white font-bold text-base px-4 py-2" style={{ fontFamily: 'Noto Kufi Arabic, sans-serif' }}>
                  {event.period}
                </Badge>
              </div>
              <div className="p-6 bg-gradient-to-br from-white to-amber-50">
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
      <section className="py-12 bg-gradient-to-r from-green-700 to-green-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Star className="w-8 h-8 text-amber-400 fill-amber-400 animate-pulse" />
            <h3 className="text-3xl font-bold" style={{ fontFamily: 'Ruwudu, serif' }}>
              الرياض - قلب المملكة النابض
            </h3>
            <Star className="w-8 h-8 text-amber-400 fill-amber-400 animate-pulse" />
          </div>
          <p className="text-xl text-amber-100 max-w-3xl mx-auto" style={{ fontFamily: 'Noto Kufi Arabic, sans-serif' }}>
            مدينة تجمع بين عراقة الماضي وطموحات المستقبل، لتكون نموذجاً حضارياً فريداً في قلب الجزيرة العربية
          </p>
        </div>
      </section>
    </div>
  );
}
