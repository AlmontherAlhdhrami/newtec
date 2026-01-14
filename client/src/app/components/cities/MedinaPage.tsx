import { Navigation } from '../Navigation';
import { Card } from '../ui/card';
import { Badge } from '../ui/badge';
import { 
  ArrowRight, Building2, Users, Landmark, History, 
  Calendar, Heart, MapPin, Sparkles, Crown, Star,
  TreePine, Factory, BookOpen, Palmtree, Building,
  Coins, GraduationCap, Map
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
    { name: 'المسجد النبوي الشريف', icon: Building, description: 'قلب المدينة وروحها، يضم الروضة الشريفة وقبر النبي ﷺ وصاحبيه.' },
    { name: 'مسجد قباء', icon: Building, description: 'أول مسجد أُسس في الإسلام، وتعدل الصلاة فيه أجر عمرة.' },
    { name: 'جبل أحد', icon: TreePine, description: 'معلم تاريخي مرتبط بالسيرة النبوية ويضم مقبرة الشهداء.' },
    { name: 'مسجد القبلتين', icon: Building, description: 'المكان الذي شهد تحول القبلة من بيت المقدس إلى الكعبة المشرفة.' },
    { name: 'درب السنة', icon: Map, description: 'مشروع ثقافي يربط بين المسجد النبوي ومسجد قباء لتجربة تاريخية غنية.' },
    { name: 'وادي العقيق', icon: TreePine, description: 'يُعرف بالوادي المبارك، وتنتشر على ضفافه القصور والمزارع التاريخية.' },
  ];

  const tribes = [
    { name: 'الأنصار (الأوس والخزرج)', description: 'الجذور التاريخية الذين نصروا النبي ﷺ واستقبلوا المهاجرين.' },
    { name: 'قبائل حرب وجهينة ومزينة', description: 'من كبريات القبائل التي تشكل السواد الأعظم من سكان المنطقة تاريخياً.' },
    { name: 'بنو سليم وعنزة', description: 'قبائل عريقة استقرت في المدينة المنورة والحجاز منذ قرون.' },
    { name: 'المجاورون (التنوع العالمي)', description: 'عوائل استقرت من أنحاء العالم الإسلامي (بخارية، شناقطة، مغاربة) لخلق نسيج فريد.' },
  ];

  const resources = [
    { name: 'السياحة الدينية', icon: Heart, description: 'دعم قطاعات الفندقة والنقل لخدمة ملايين الزوار والمعتمرين سنوياً.' },
    { name: 'زراعة التمور', icon: Palmtree, description: 'تشتهر بأجود الأنواع عالمياً مثل "عجوة المدينة" كركيزة اقتصادية.' },
    { name: 'الصناعات المعرفية', icon: BookOpen, description: 'مدينة المعرفة الاقتصادية لجذب الاستثمارات التقنية والتعليمية.' },
    { name: 'قطاع التعدين', icon: Factory, description: 'تضم مناجم كبرى مثل "منجم مهد الذهب"، أقدم مناجم الذهب في المملكة.' },
  ];

  const historicalEvents = [
    { year: '622م', event: 'الهجرة النبوية', description: 'بداية التاريخ الحقيقي للمدينة كعاصمة الإسلام الأولى ومطلق الفتوحات.' },
    { year: 'العهد الراشدي', event: 'عاصمة الخلافة', description: 'ظلت مركزاً للحكم الإسلامي حتى نهاية عهد الإمام علي بن أبي طالب رضي الله عنه.' },
    { year: 'العصور الوسطى', event: 'الاهتمام العمراني', description: 'شهدت تطوراً كبيراً في عمارة المسجد النبوي وتوفير موارد المياه كعين زبيدة.' },
    { year: '1925م', event: 'العهد السعودي الحديث', description: 'دخولها تحت حكم الملك عبد العزيز وبداية قفزات التوسعة والخدمات الكبرى.' },
    { year: 'الرؤية 2030', event: 'رؤى المدينة', description: 'تحويلها إلى مدينة ذكية حديثة مع رفع الطاقة الاستيعابية لخدمة ضيوف الرحمن.' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 via-white to-amber-50">
      <Navigation onNavigate={onNavigate} currentPage="education" />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-green-800 via-green-700 to-green-600 text-white py-20 overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 10px, currentColor 10px, currentColor 11px)' }}></div>
        
        <div className="container mx-auto px-4 relative z-10 text-center">
          <Button
            onClick={onBack}
            variant="outline"
            className="mb-6 bg-white/10 hover:bg-white/20 text-white border-white/30 font-bold"
            style={{ fontFamily: 'Noto Kufi Arabic, sans-serif' }}
          >
            <ArrowRight className="w-5 h-5 ml-2" />
            العودة للخريطة
          </Button>

          <h1 className="text-6xl font-bold text-amber-100 mb-4" style={{ fontFamily: 'Ruwudu, serif' }}>
            المدينة المنورة
          </h1>
          <p className="text-2xl text-amber-50 mb-8 font-semibold" style={{ fontFamily: 'Noto Kufi Arabic, sans-serif' }}>
            طيبة الطيبة - دار الهجرة وعاصمة الثقافة الإسلامية
          </p>

          <div className="flex flex-wrap items-center justify-center gap-8">
            <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full">
              <Users className="w-6 h-6 text-amber-300" />
              <span className="text-xl" style={{ fontFamily: 'Noto Kufi Arabic, sans-serif' }}>2.1 مليون نسمة</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full">
              <MapPin className="w-6 h-6 text-amber-300" />
              <span className="text-xl" style={{ fontFamily: 'Noto Kufi Arabic, sans-serif' }}>منطقة الحجاز</span>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-12 container mx-auto px-4">
        <Card className="p-8 border-4 border-green-200 shadow-xl">
          <h2 className="text-3xl font-bold text-green-800 mb-6 flex items-center gap-3" style={{ fontFamily: 'Ruwudu, serif' }}>
            <History className="w-8 h-8" /> نبذة عن طيبة الطيبة
          </h2>
          <div className="space-y-4 text-xl leading-relaxed text-gray-700" style={{ fontFamily: 'Noto Kufi Arabic, sans-serif' }}>
            <p>
              كانت تُعرف قديماً باسم "يثرب"، وهي واحة زراعية عريقة برزت كمركز تجاري هام. تغير اسمها ومكانتها عالمياً مع هجرة النبي محمد ﷺ إليها، لتصبح عاصمة الإسلام الأولى ومأرز الإيمان.
            </p>
            <p>
              تجمع المدينة اليوم بين الهدوء الروحاني والنهضة العصرية، حيث تشهد مشاريع ضخمة مثل "رؤى المدينة" ومتاحف عالمية مثل "متحف السيرة النبوية" الذي يستخدم أحدث التقنيات لعرض تاريخ الإسلام.
            </p>
          </div>
        </Card>
      </section>

      {/* Important Places */}
      <section className="py-12 container mx-auto px-4">
        <h2 className="text-4xl font-bold text-green-800 mb-8 text-center" style={{ fontFamily: 'Ruwudu, serif' }}>أهم المناطق والمعالم</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {landmarks.map((landmark, index) => (
            <Card key={index} className="p-6 hover:shadow-xl transition-all border-2 border-green-100 group">
              <div className="bg-green-700 w-12 h-12 rounded-lg flex items-center justify-center mb-4 group-hover:bg-amber-600 transition-colors">
                <landmark.icon className="text-white w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-green-900 mb-2" style={{ fontFamily: 'Ruwudu, serif' }}>{landmark.name}</h3>
              <p className="text-gray-600" style={{ fontFamily: 'Noto Kufi Arabic, sans-serif' }}>{landmark.description}</p>
            </Card>
          ))}
        </div>
      </section>

      {/* Population Table */}
      <section className="py-12 bg-green-900 text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center" style={{ fontFamily: 'Ruwudu, serif' }}>التركيبة السكانية (تعداد 2022)</h2>
          <div className="overflow-x-auto max-w-2xl mx-auto">
            <table className="w-full text-right border-collapse bg-white/10 rounded-lg overflow-hidden">
              <thead>
                <tr className="bg-white/20">
                  <th className="p-4 border-b border-white/10">الفئة</th>
                  <th className="p-4 border-b border-white/10">العدد التقريبي</th>
                  <th className="p-4 border-b border-white/10">النسبة</th>
                </tr>
              </thead>
              <tbody style={{ fontFamily: 'Noto Kufi Arabic, sans-serif' }}>
                <tr>
                  <td className="p-4 border-b border-white/10">سعوديون</td>
                  <td className="p-4 border-b border-white/10">1.1 مليون</td>
                  <td className="p-4 border-b border-white/10">53%</td>
                </tr>
                <tr>
                  <td className="p-4 border-b border-white/10">غير سعوديين</td>
                  <td className="p-4 border-b border-white/10">1 مليون</td>
                  <td className="p-4 border-b border-white/10">47%</td>
                </tr>
                <tr className="font-bold text-amber-300">
                  <td className="p-4">الإجمالي</td>
                  <td className="p-4">2.1 مليون نسمة</td>
                  <td className="p-4">100%</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Economy & Resources */}
      <section className="py-12 container mx-auto px-4">
        <h2 className="text-4xl font-bold text-green-800 mb-8 flex items-center gap-3" style={{ fontFamily: 'Ruwudu, serif' }}>
          <Coins className="w-10 h-10" /> الموارد الاقتصادية
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {resources.map((res, i) => (
            <Card key={i} className="p-6 bg-gradient-to-l from-green-50 to-white border-r-4 border-green-600">
              <div className="flex gap-4">
                <res.icon className="w-8 h-8 text-green-700 shrink-0" />
                <div>
                  <h3 className="text-xl font-bold text-green-900 mb-2" style={{ fontFamily: 'Ruwudu, serif' }}>{res.name}</h3>
                  <p className="text-gray-700" style={{ fontFamily: 'Noto Kufi Arabic, sans-serif' }}>{res.description}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* History Timeline */}
      <section className="py-12 bg-amber-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-green-800 mb-12 text-center" style={{ fontFamily: 'Ruwudu, serif' }}>المحطات التاريخية</h2>
          <div className="relative border-r-2 border-green-200 mr-4 space-y-8 pr-8">
            {historicalEvents.map((ev, i) => (
              <div key={i} className="relative">
                <div className="absolute -right-10 top-0 w-4 h-4 bg-green-600 rounded-full border-4 border-white"></div>
                <div className="bg-white p-6 rounded-xl shadow-md">
                  <span className="text-green-700 font-bold text-lg">{ev.year}</span>
                  <h3 className="text-xl font-bold text-green-900 mt-1 mb-2" style={{ fontFamily: 'Ruwudu, serif' }}>{ev.event}</h3>
                  <p className="text-gray-600" style={{ fontFamily: 'Noto Kufi Arabic, sans-serif' }}>{ev.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-green-900 text-white text-center">
        <Heart className="w-12 h-12 text-amber-400 mx-auto mb-4 animate-pulse" />
        <h2 className="text-3xl font-bold mb-2" style={{ fontFamily: 'Ruwudu, serif' }}>المدينة المنورة</h2>
        <p className="text-amber-100" style={{ fontFamily: 'Noto Kufi Arabic, sans-serif' }}>حيث نور النبوة وعبق التاريخ الإسلامي</p>
      </footer>
    </div>
  );
}