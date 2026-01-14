import { Navigation } from '../Navigation';
import { Card } from '../ui/card';
import { Badge } from '../ui/badge';
import { 
  ArrowRight, Building2, Users, Landmark, History, 
  Calendar, Waves, MapPin, Sparkles, Ship, Star,
  TreePine, Factory, Coins, Fish, Palmtree, Anchor,
  Globe, GraduationCap, Utensils
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
    { name: 'جدة التاريخية (حي البلد)', icon: Landmark, description: 'قلب المدينة النابض المسجل في اليونسكو، تتميز بالبيوت المرجانية والروشان الخشبي مثل بيت نصيف.' },
    { name: 'واجهة جدة البحرية', icon: Waves, description: 'تضم نافورة الملك فهد (الأعلى عالمياً) ومجسمات فنية عالمية في متنزه ساحلي متطور.' },
    { name: 'ميناء جدة الإسلامي', icon: Ship, description: 'أكبر ميناء على البحر الأحمر والقلب الاقتصادي الذي يربط الشرق بالغرب منذ عهد الخليفة عثمان بن عفان.' },
    { name: 'منطقة أبحر', icon: Anchor, description: 'تُعرف بـ "شرم أبحر"، وجهة المنتجعات الفاخرة والرياضات المائية والغوص شمال جدة.' },
    { name: 'المسجد العائم', icon: Landmark, description: 'مسجد الرحمة، تحفة معمارية على سطح البحر تمزج بين العمارة الإسلامية الحديثة والقديمة.' },
  ];

  const historicalTribes = [
    { name: 'بنو قضاعة', description: 'من أقدم من استوطن المنطقة ومحيطها منذ العصور القديمة.' },
    { name: 'قبيلة خزاعة', description: 'كان لها دور بارز في مكة وجدة قبل العهد الإسلامي.' },
    { name: 'قبائل تهامة والحجاز', description: 'مثل (حرب، جهينة، وقريش) والقبائل المحيطة بجدة.' },
    { name: 'البيوتات الجداوية', description: 'الأسر التجارية التي شكلت ثقافة "أهل البحر" والصرافة عبر المئات من السنين.' },
  ];

  const resources = [
    { name: 'التجارة والخدمات اللوجستية', icon: Coins, description: 'المركز التجاري الأول للمملكة بفضل الميناء الضخم وحركة البضائع العالمية.' },
    { name: 'السياحة الدينية', icon: Landmark, description: 'بوابة مكة التي تستقبل ملايين الحجاج والمعتمرين، مما ينعش قطاع الفنادق والنقل.' },
    { name: 'الصناعة', icon: Factory, description: 'تضم المدينة الصناعية مئات المصانع التي تغطي احتياجات السوق المحلي والتصدير.' },
    { name: 'الثروة السمكية', icon: Fish, description: 'مصدر هام للمأكولات البحرية وصيد الأسماك نظراً لموقعها الاستراتيجي.' },
  ];

  const historyEras = [
    { 
      title: 'العصور القديمة والعهد الإسلامي', 
      year: '26 هـ', 
      description: 'اتخذها الخليفة عثمان بن عفان ميناءً رئيسياً لمكة. ظلت عبر العصور الميناء الأهم لتجارة التوابل والحج.' 
    },
    { 
      title: 'العهد العثماني والسور القديم', 
      year: 'السور التاريخي', 
      description: 'بني لحمايتها من هجمات البرتغاليين، وكان له بوابات شهيرة مثل باب مكة وباب شريف.' 
    },
    { 
      title: 'العهد السعودي الحديث', 
      year: '1925م', 
      description: 'دخول الملك عبدالعزيز وبداية عصر التطوير، هدم السور عام 1947 للتوسع العمراني وافتتاح المطار والميناء الحديث.' 
    },
  ];

  const modernEvents = [
    { name: 'موسم جدة', icon: Sparkles, description: 'مهرجان سنوي ضخم يضم فعاليات عالمية وحفلات موسيقية وعروض ترفيهية.' },
    { name: 'فورمولا 1', icon: Star, description: 'استضافة سباق جائزة السعودية الكبرى على أسرع حلبة شوارع في العالم.' },
    { name: 'مهرجان البحر الأحمر السينمائي', icon: History, description: 'حدث ثقافي عالمي جعل من جدة مركزاً لصناعة السينما في المنطقة.' },
    { name: 'مشاريع الرؤية (وسط جدة)', icon: Building2, description: 'مشروع ضخم يضم داراً للأوبرا ومتاحف وملاعب رياضية لتحويل المدينة لوجهة عالمية.' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 via-white to-amber-50">
      <Navigation onNavigate={onNavigate} currentPage="education" />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-700 via-cyan-600 to-blue-600 text-white py-20 overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 10px, currentColor 10px, currentColor 11px)' }}></div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <Button onClick={onBack} variant="outline" className="mb-6 bg-white/10 hover:bg-white/20 text-white border-white/30 font-bold">
            <ArrowRight className="w-5 h-5 ml-2" /> العودة للخريطة
          </Button>
          <h1 className="text-6xl font-bold text-amber-100 mb-4" style={{ fontFamily: 'Ruwudu, serif' }}>جدة</h1>
          <p className="text-2xl text-amber-50 font-semibold" style={{ fontFamily: 'Noto Kufi Arabic, sans-serif' }}>عروس البحر الأحمر - بوابة الحرمين الشريفين</p>
        </div>
      </section>

      {/* 1. Important Places */}
      <section className="py-12 container mx-auto px-4">
        <div className="flex items-center gap-3 mb-8">
          <MapPin className="w-10 h-10 text-cyan-700" />
          <h2 className="text-4xl font-bold text-blue-800" style={{ fontFamily: 'Ruwudu, serif' }}>أهم المناطق</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {landmarks.map((item, i) => (
            <Card key={i} className="p-6 border-2 border-cyan-100 hover:border-cyan-400 transition-colors">
              <div className="flex gap-4">
                <item.icon className="w-8 h-8 text-cyan-600 shrink-0" />
                <div>
                  <h3 className="text-xl font-bold text-blue-900 mb-2" style={{ fontFamily: 'Ruwudu, serif' }}>{item.name}</h3>
                  <p className="text-gray-600 leading-relaxed text-sm">{item.description}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* 2. Population & Tribes */}
      <section className="py-12 bg-blue-50/50">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-3 mb-8">
            <Users className="w-10 h-10 text-cyan-700" />
            <h2 className="text-4xl font-bold text-blue-800" style={{ fontFamily: 'Ruwudu, serif' }}>السكان والقبائل</h2>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-8">
            <Card className="p-8 border-4 border-white shadow-lg">
              <h3 className="text-2xl font-bold text-cyan-700 mb-4" style={{ fontFamily: 'Ruwudu, serif' }}>النسيج المجتمعي والجذور</h3>
              <div className="space-y-4">
                {historicalTribes.map((tribe, i) => (
                  <div key={i} className="border-r-4 border-cyan-500 pr-4">
                    <h4 className="font-bold text-blue-900">{tribe.name}</h4>
                    <p className="text-gray-600 text-sm">{tribe.description}</p>
                  </div>
                ))}
              </div>
            </Card>

            <Card className="p-8 border-4 border-white shadow-lg">
              <h3 className="text-2xl font-bold text-cyan-700 mb-6" style={{ fontFamily: 'Ruwudu, serif' }}>إحصائيات السكان (2022)</h3>
              <div className="overflow-hidden rounded-lg border border-gray-200">
                <table className="w-full text-right">
                  <thead className="bg-cyan-600 text-white">
                    <tr>
                      <th className="p-3">الفئة</th>
                      <th className="p-3">العدد التقريبي</th>
                      <th className="p-3">النسبة</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    <tr><td className="p-3 font-bold">سعوديون</td><td className="p-3">~2.1 مليون</td><td className="p-3">~45%</td></tr>
                    <tr className="bg-gray-50"><td className="p-3 font-bold">غير سعوديين</td><td className="p-3">~2.6 مليون</td><td className="p-3">~55%</td></tr>
                    <tr className="bg-cyan-50 font-bold"><td className="p-3">الإجمالي</td><td className="p-3">~4.7 مليون</td><td className="p-3">100%</td></tr>
                  </tbody>
                </table>
              </div>
              <p className="text-xs text-gray-400 mt-4">* تختلف النسب حسب تحديثات الهيئة العامة للإحصاء.</p>
            </Card>
          </div>
        </div>
      </section>

      {/* 3. Resources */}
      <section className="py-12 container mx-auto px-4">
        <div className="flex items-center gap-3 mb-8">
          <Factory className="w-10 h-10 text-cyan-700" />
          <h2 className="text-4xl font-bold text-blue-800" style={{ fontFamily: 'Ruwudu, serif' }}>مواردها الاقتصادية</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {resources.map((res, i) => (
            <div key={i} className="flex items-start gap-4 p-6 bg-white rounded-2xl shadow-sm border border-cyan-50">
              <div className="bg-cyan-100 p-3 rounded-full text-cyan-700"><res.icon /></div>
              <div>
                <h3 className="text-xl font-bold text-blue-900 mb-1" style={{ fontFamily: 'Ruwudu, serif' }}>{res.name}</h3>
                <p className="text-gray-600 leading-relaxed">{res.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. History */}
      <section className="py-12 bg-amber-50/30">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-3 mb-8">
            <History className="w-10 h-10 text-cyan-700" />
            <h2 className="text-4xl font-bold text-blue-800" style={{ fontFamily: 'Ruwudu, serif' }}>تاريخ جدة</h2>
          </div>
          <div className="relative border-r-4 border-cyan-200 pr-8 mr-4 space-y-12">
            {historyEras.map((era, i) => (
              <div key={i} className="relative">
                <div className="absolute -right-[42px] top-0 w-5 h-5 bg-cyan-600 rounded-full border-4 border-white"></div>
                <Badge className="mb-2 bg-cyan-100 text-cyan-800 hover:bg-cyan-100">{era.year}</Badge>
                <h3 className="text-2xl font-bold text-blue-900 mb-2" style={{ fontFamily: 'Ruwudu, serif' }}>{era.title}</h3>
                <p className="text-gray-700 text-lg max-w-3xl leading-relaxed">{era.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Civilization & Events */}
      <section className="py-12 container mx-auto px-4">
        <div className="flex items-center gap-3 mb-8">
          <Sparkles className="w-10 h-10 text-cyan-700" />
          <h2 className="text-4xl font-bold text-blue-800" style={{ fontFamily: 'Ruwudu, serif' }}>حضارتها وفعالياتها الحالية</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {modernEvents.map((event, i) => (
            <Card key={i} className="p-6 text-center hover:shadow-md transition-shadow bg-white border-b-4 border-amber-400">
              <event.icon className="w-12 h-12 text-cyan-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-blue-900 mb-3" style={{ fontFamily: 'Ruwudu, serif' }}>{event.name}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{event.description}</p>
            </Card>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 bg-blue-900 text-white text-center">
        <div className="container mx-auto px-4">
          <p className="text-2xl font-bold mb-2" style={{ fontFamily: 'Ruwudu, serif' }}>جدة - مدينة تجمع بين عراقة التاريخ ونبض الحداثة</p>
          <p className="opacity-70">بوابة الحرمين الشريفين وعروس البحر الأحمر</p>
        </div>
      </footer>
    </div>
  );
}