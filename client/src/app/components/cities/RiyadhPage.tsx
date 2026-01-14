import { Navigation } from '../Navigation';
import { Card } from '../ui/card';
import { Badge } from '../ui/badge';
import { 
  ArrowRight, Building2, Users, Landmark, History, 
  Calendar, Trophy, MapPin, Sparkles, Crown, Star,
  TreePine, Factory, Coins, GraduationCap, Palmtree,
  ShieldCheck, Map as MapIcon, Landmark as Monument,
  Tent, Droplets, Sword
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
    { name: 'الدرعية التاريخية', icon: Monument, description: 'جوهرة المملكة وموقع اليونسكو، العاصمة الأولى للدولة السعودية وحي الطريف بقصوره الطينية.' },
    { name: 'قصر المصمك', icon: Sword, description: 'حصن اللبن التاريخي في حي الديرة، شهد معركة فتح الرياض عام 1902م ويعد رمز التوحيد.' },
    { name: 'مركز الملك عبدالعزيز التاريخي', icon: Landmark, description: 'يضم قصر المربع والمتحف الوطني، ويعرض قطعاً أثرية نادرة من مختلف العصور.' },
    { name: 'حي الديرة والأسواق القديمة', icon: Tent, description: 'يضم سوق الزل العريق، بوابة الثميري، وجامع الإمام تركي بن عبدالله.' },
    { name: 'وادي حنيفة', icon: Droplets, description: 'متنزه بيئي يمتد لمسافات طويلة، شهد استقرار القبائل منذ القدم ويضم مزارع تقليدية.' },
    { name: 'قرية الفاو', icon: MapIcon, description: 'عاصمة مملكة كندة الأثرية (جنوب غرب الرياض)، تضم بقايا معابد ونقوش ما قبل الإسلام.' },
  ];

  const historicalTimeline = [
    { year: 'العصور القديمة', event: 'موطن الساميين', description: 'استوطنتها قبائل طسم وجديس البائدة، وترتبط أساطيرها بزرقاء اليمامة.' },
    { year: 'القرن 5 ميلادي', event: 'بنو حنيفة', description: 'تأسيس مدينة "حجر" وبروز شخصيات مثل ثمامة بن أثال، وشهدت معركة اليمامة.' },
    { year: '1824م', event: 'عاصمة الدولة الثانية', description: 'اتخذها الإمام تركي بن عبدالله عاصمة للدولة السعودية الثانية.' },
    { year: '1902م', event: 'انطلاقة التوحيد', description: 'استعادة الملك عبدالعزيز للرياض وبدء تأسيس المملكة الحديثة.' },
    { year: 'المرحلة المعاصرة', event: 'النهضة الكبرى', description: 'التحول لميتروبوليتان ضخم مع مشاريع رؤية 2030 مثل حديقة الملك سلمان والرياض الخضراء.' },
  ];

  const demographics = [
    { category: 'سعوديون', count: '4.4 مليون', percentage: '51.7%', color: 'bg-green-600' },
    { category: 'غير سعوديين', count: '4.1 مليون', percentage: '48.3%', color: 'bg-amber-600' },
    { category: 'الإجمالي', count: '8.59 مليون', percentage: '100%', color: 'bg-blue-600' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 via-white to-green-50">
      <Navigation onNavigate={onNavigate} currentPage="education" />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-green-800 via-green-700 to-amber-700 text-white py-24 overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 10px, currentColor 10px, currentColor 11px)' }}></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <Button
            onClick={onBack}
            variant="outline"
            className="mb-8 bg-white/10 hover:bg-white/20 text-white border-white/30 font-bold backdrop-blur-sm"
          >
            <ArrowRight className="w-5 h-5 ml-2" />
            العودة للخريطة
          </Button>

          <div className="text-center">
            <Badge className="mb-4 bg-amber-400 text-green-900 hover:bg-amber-300 font-bold px-4 py-1">قلب المملكة النابض</Badge>
            <h1 className="text-7xl font-bold text-amber-100 mb-6" style={{ fontFamily: 'Ruwudu, serif' }}>الرياض</h1>
            <p className="text-3xl text-amber-50/90 max-w-3xl mx-auto leading-relaxed font-medium" style={{ fontFamily: 'Noto Kufi Arabic, sans-serif' }}>
              من "حِجْر" اليمامة إلى عاصمة المتروبوليتان العالمية
            </p>
          </div>
        </div>
      </section>

      {/* Landmarks Grid */}
      <section className="py-16 container mx-auto px-4">
        <div className="flex items-center gap-4 mb-12 border-r-8 border-green-600 pr-6">
          <div>
            <h2 className="text-4xl font-bold text-green-900" style={{ fontFamily: 'Ruwudu, serif' }}>أهم المناطق والمعالم</h2>
            <p className="text-gray-600 mt-2 text-lg">شواهد التاريخ وكنوز التراث العالمي</p>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {landmarks.map((item, index) => (
            <Card key={index} className="group hover:shadow-2xl transition-all duration-500 border-none bg-white overflow-hidden">
              <div className="p-8">
                <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-green-600 transition-colors duration-300">
                  <item.icon className="w-8 h-8 text-green-700 group-hover:text-white" />
                </div>
                <h3 className="text-2xl font-bold text-green-800 mb-4" style={{ fontFamily: 'Ruwudu, serif' }}>{item.name}</h3>
                <p className="text-gray-600 leading-relaxed text-lg" style={{ fontFamily: 'Noto Kufi Arabic, sans-serif' }}>{item.description}</p>
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* History Timeline */}
      <section className="py-16 bg-green-900 text-white">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-4 mb-16 justify-center">
            <History className="w-10 h-10 text-amber-400" />
            <h2 className="text-4xl font-bold" style={{ fontFamily: 'Ruwudu, serif' }}>تاريخ الرياض عبر العصور</h2>
          </div>

          <div className="relative border-r-2 border-amber-400/30 pr-8 mr-4 space-y-12">
            {historicalTimeline.map((step, index) => (
              <div key={index} className="relative">
                <div className="absolute -right-[41px] top-0 w-5 h-5 bg-amber-400 rounded-full border-4 border-green-900 shadow-[0_0_0_4px_rgba(251,191,36,0.2)]"></div>
                <div className="bg-white/5 p-6 rounded-2xl backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all">
                  <span className="text-amber-400 font-bold text-xl mb-2 block">{step.year}</span>
                  <h3 className="text-2xl font-bold mb-3" style={{ fontFamily: 'Ruwudu, serif' }}>{step.event}</h3>
                  <p className="text-green-50/80 leading-relaxed text-lg">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Population & Tribes */}
      <section className="py-16 container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <Users className="w-10 h-10 text-amber-600" />
              <h2 className="text-4xl font-bold text-green-900" style={{ fontFamily: 'Ruwudu, serif' }}>السكان والنسيج المجتمعي</h2>
            </div>
            <div className="space-y-6 text-xl text-gray-700 leading-relaxed" style={{ fontFamily: 'Noto Kufi Arabic, sans-serif' }}>
              <p>
                بدأت القصة مع <span className="font-bold text-green-700">بني حنيفة</span> الذين استوطنوا "حجر اليمامة"، وهم الجذم الذي تنحدر منه أسرة آل سعود.
              </p>
              <p>
                اليوم، تعد الرياض "بوصلة" استقطبت أبناء القبائل الكبرى مثل <span className="text-amber-700">عتيبة، مطير، قحطان، الدواسر، شمر، وحرب</span>، لتشكل نسيجاً يمزج بين العوائل الحاضرة والبادية.
              </p>
            </div>

            <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-4">
              {demographics.map((stat, i) => (
                <div key={i} className="p-4 rounded-xl border-2 border-amber-100 bg-amber-50/50">
                  <p className="text-sm text-gray-500 mb-1">{stat.category}</p>
                  <p className="text-2xl font-bold text-green-800">{stat.count}</p>
                  <Badge variant="secondary" className="mt-2">{stat.percentage}</Badge>
                </div>
              ))}
            </div>
            <p className="text-xs text-gray-400 mt-4 italic">* حسب تعداد عام 2022م</p>
          </div>

          <Card className="p-8 border-none bg-gradient-to-br from-green-50 to-amber-50 shadow-inner">
            <h3 className="text-2xl font-bold text-green-800 mb-6 flex items-center gap-2">
              <ShieldCheck className="w-6 h-6" /> التحديات والأمن
            </h3>
            <div className="space-y-6">
              <div className="bg-white p-5 rounded-xl shadow-sm">
                <h4 className="font-bold text-red-700 mb-2">فترة (1995-2004)</h4>
                <p className="text-gray-600">واجهت المدينة تحديات أمنية وهجمات إرهابية تم التعامل معها بحزم وقوة أمنية.</p>
              </div>
              <div className="bg-white p-5 rounded-xl shadow-sm border-r-4 border-green-500">
                <h4 className="font-bold text-green-700 mb-2">الدفاع الجوي (2017-2020)</h4>
                <p className="text-gray-600">نجحت قوات الدفاع الجوي السعودي في اعتراض وتدمير كافة محاولات الاستهداف بالصواريخ البالستية.</p>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Footer / Summary */}
      <section className="py-12 bg-amber-100 border-t-4 border-amber-200">
        <div className="container mx-auto px-4 text-center">
          <Palmtree className="w-12 h-12 text-green-700 mx-auto mb-4" />
          <p className="text-2xl text-green-900 font-bold mb-2" style={{ fontFamily: 'Ruwudu, serif' }}>
            الرياض: حيث تعانق قصور الطين ناطحات السحاب
          </p>
          <p className="text-gray-600 italic">المصدر: توثيق تاريخي وتعداد 2022</p>
        </div>
      </section>
    </div>
  );
}