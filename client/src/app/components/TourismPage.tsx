import { Navigation } from './Navigation';
import { Card } from './ui/card';
import { Button } from './ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { Map, MapPin, Building, Landmark, Mountain, Waves, Star, Calendar, Palmtree, Sun, Sparkles, Award } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Badge } from './ui/badge';

type Page = 'home' | 'education' | 'children' | 'tourism' | 'ai-assistant';

interface TourismPageProps {
  onNavigate: (page: Page) => void;
}

export function TourismPage({ onNavigate }: TourismPageProps) {
  const regions = [
    {
      id: 1,
      name: 'الرياض',
      description: 'العاصمة النابضة بالحياة، حيث يلتقي التراث بالحداثة',
      image: 'https://images.unsplash.com/photo-1624277607212-cf5d6ecaab09?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyaXlhZGglMjBtb2Rlcm4lMjBjaXR5fGVufDF8fHx8MTc2ODE3NTA3MXww&ixlib=rb-4.1.0&q=80&w=1080',
      attractions: ['قصر المصمك', 'برج المملكة', 'وادي حنيفة', 'الدرعية التاريخية'],
      type: 'مدينة',
      rating: 4.8,
    },
    {
      id: 2,
      name: 'جدة',
      description: 'عروس البحر الأحمر، مدينة التاريخ والفن والبحر',
      image: 'https://images.unsplash.com/photo-1586715065342-98d1f6016fd1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxqZWRkYWglMjBzYXVkaSUyMGFyYWJpYXxlbnwxfHx8fDE3NjgyNDM4MjZ8MA&ixlib=rb-4.1.0&q=80&w=1080',
      attractions: ['البلد التاريخي', 'كورنيش جدة', 'نافورة الملك فهد', 'متحف عبد الرؤوف خليل'],
      type: 'ساحل',
      rating: 4.9,
    },
    {
      id: 3,
      name: 'مكة المكرمة',
      description: 'أقدس بقاع الأرض، قبلة المسلمين من كل أنحاء العالم',
      image: 'https://images.unsplash.com/photo-1580418827493-f2b22c0a76cb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWNjYSUyMHNhdWRpJTIwYXJhYmlhfGVufDF8fHx8MTc2ODI0MzgyNnww&ixlib=rb-4.1.0&q=80&w=1080',
      attractions: ['المسجد الحرام', 'جبل النور', 'جبل عرفة', 'متحف مكة'],
      type: 'ديني',
      rating: 5.0,
    },
    {
      id: 4,
      name: 'العلا',
      description: 'متحف الطبيعة المفتوح، موطن مدائن صالح',
      image: 'https://images.unsplash.com/photo-1615380098674-d28bf1a87cd3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzYXVkaSUyMGFyYWJpYSUyMGRlc2VydCUyMGxhbmRzY2FwZXxlbnwxfHx8fDE3NjgyMzgxMTV8MA&ixlib=rb-4.1.0&q=80&w=1080',
      attractions: ['مدائن صالح', 'جبل الفيل', 'البلدة القديمة', 'وادي العلا'],
      type: 'تراث',
      rating: 4.9,
    },
    {
      id: 5,
      name: 'أبها',
      description: 'عروس الجبال، مدينة الضباب والمناظر الخلابة',
      image: 'https://images.unsplash.com/photo-1755412734479-c0687daab775?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzYXVkaSUyMGFyYWJpYSUyMGhlcml0YWdlJTIwYXJjaGl0ZWN0dXJlfGVufDF8fHx8MTc2ODIwMzk5NHww&ixlib=rb-4.1.0&q=80&w=1080',
      attractions: ['قرية المفتاحة', 'جبل السودة', 'تلفريك أبها', 'قصر شدا'],
      type: 'جبال',
      rating: 4.7,
    },
    {
      id: 6,
      name: 'الطائف',
      description: 'مدينة الورود، معتدلة المناخ طوال العام',
      image: 'https://images.unsplash.com/photo-1741888019564-3e9d8fe95efb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzYXVkaSUyMHRyYWRpdGlvbmFsJTIwY3VsdHVyZXxlbnwxfHx8fDE3NjgyNDM4Mjd8MA&ixlib=rb-4.1.0&q=80&w=1080',
      attractions: ['سوق عكاظ', 'حديقة الورود', 'قصر شبرا', 'منتزه الردف'],
      type: 'طبيعة',
      rating: 4.6,
    },
  ];

  const activities = [
    { id: 1, name: 'تاريخية وتراثية', icon: Landmark, color: 'amber' },
    { id: 2, name: 'مغامرات صحراوية', icon: Mountain, color: 'orange' },
    { id: 3, name: 'رحلات بحرية', icon: Waves, color: 'blue' },
    { id: 4, name: 'سياحة المدن', icon: Building, color: 'purple' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 via-amber-50 to-white">
      <Navigation onNavigate={onNavigate} currentPage="tourism" />

      {/* Header */}
      <section className="bg-gradient-to-r from-green-700 via-green-600 to-green-700 text-white py-16 relative overflow-hidden">
        {/* Desert Pattern Background */}
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 10px, currentColor 10px, currentColor 11px)' }}></div>
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="flex items-center justify-center gap-4 mb-6">
            <Palmtree className="w-14 h-14 text-amber-300 animate-bounce" />
            <Sun className="w-16 h-16 text-amber-200" />
            <Mountain className="w-14 h-14 text-amber-300 animate-bounce" />
          </div>
          
          <div className="flex items-center justify-center gap-2 mb-4">
            <Star className="w-7 h-7 text-amber-400 fill-amber-400" />
            <h1 className="text-5xl font-bold text-amber-100" style={{ fontFamily: 'Ruwudu, serif' }}>
              اكتشف المملكة
            </h1>
            <Star className="w-7 h-7 text-amber-400 fill-amber-400" />
          </div>
          
          <p className="text-2xl max-w-3xl mx-auto text-amber-50 font-semibold mb-3" style={{ fontFamily: 'Noto Kufi Arabic, sans-serif' }}>
            رحلة سياحية عبر أجمل الوجهات السعودية
          </p>
          
          <p className="text-lg max-w-2xl mx-auto text-amber-100" style={{ fontFamily: 'Noto Kufi Arabic, sans-serif' }}>
            من صحاري الربع الخالي إلى سواحل البحر الأحمر، استكشف جمال وتنوع بلادنا
          </p>
          
          <div className="flex items-center justify-center gap-8 mt-8">
            <div className="flex items-center gap-2 text-amber-200">
              <Sparkles className="w-5 h-5" />
              <span style={{ fontFamily: 'Noto Kufi Arabic, sans-serif' }}>تراث عريق</span>
            </div>
            <div className="flex items-center gap-2 text-amber-200">
              <Sparkles className="w-5 h-5" />
              <span style={{ fontFamily: 'Noto Kufi Arabic, sans-serif' }}>طبيعة ساحرة</span>
            </div>
            <div className="flex items-center gap-2 text-amber-200">
              <Sparkles className="w-5 h-5" />
              <span style={{ fontFamily: 'Noto Kufi Arabic, sans-serif' }}>حداثة مبهرة</span>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Actions */}
      <section className="py-10 bg-white border-b-4 border-green-600">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4">
            {activities.map((activity) => {
              const Icon = activity.icon;
              return (
                <Button
                  key={activity.id}
                  variant="outline"
                  className="gap-3 px-6 py-6 text-lg font-bold border-3 border-amber-300 hover:bg-gradient-to-r hover:from-green-600 hover:to-green-700 hover:text-white hover:border-green-700 transition-all shadow-lg rounded-2xl"
                  style={{ fontFamily: 'Noto Kufi Arabic, sans-serif' }}
                >
                  <Icon className="w-6 h-6" />
                  {activity.name}
                </Button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Regions Grid */}
      <section className="py-16 container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Star className="w-8 h-8 text-amber-500 fill-amber-500 animate-pulse" />
            <h2 className="text-5xl text-green-800 font-bold" style={{ fontFamily: 'Ruwudu, serif' }}>
              الوجهات السياحية
            </h2>
            <Star className="w-8 h-8 text-amber-500 fill-amber-500 animate-pulse" />
          </div>
          <p className="text-2xl text-green-700 font-semibold" style={{ fontFamily: 'Noto Kufi Arabic, sans-serif' }}>
            اختر وجهتك المفضلة واستكشف معالمها الفريدة
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {regions.map((region) => (
            <Card 
              key={region.id} 
              className="overflow-hidden hover:shadow-2xl transition-all duration-300 group cursor-pointer border-4 border-amber-300 hover:border-green-500 bg-gradient-to-b from-white to-amber-50 relative"
            >
              <div className="absolute top-3 left-3 z-10">
                <Sparkles className="w-6 h-6 text-amber-400 animate-pulse" />
              </div>
              <div className="relative h-64 overflow-hidden">
                <ImageWithFallback
                  src={region.image}
                  alt={region.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
                <div className="absolute top-4 right-4">
                  <Badge className="bg-gradient-to-r from-green-700 to-green-600 text-white font-bold text-base px-4 py-2 shadow-lg" style={{ fontFamily: 'Noto Kufi Arabic, sans-serif' }}>
                    {region.type}
                  </Badge>
                </div>
                <div className="absolute bottom-4 right-4 left-4">
                  <h3 className="text-3xl text-white mb-2 font-bold" style={{ fontFamily: 'Ruwudu, serif' }}>
                    {region.name}
                  </h3>
                  <div className="flex items-center gap-2">
                    <Star className="w-5 h-5 text-amber-400 fill-amber-400" />
                    <span className="text-white text-lg font-bold" style={{ fontFamily: 'Noto Kufi Arabic, sans-serif' }}>
                      {region.rating}
                    </span>
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <p className="text-gray-700 mb-5 leading-relaxed text-base" style={{ fontFamily: 'Noto Kufi Arabic, sans-serif' }}>
                  {region.description}
                </p>
                
                <div className="space-y-3 mb-5">
                  <p className="text-base text-green-800 font-bold flex items-center gap-2" style={{ fontFamily: 'Noto Kufi Arabic, sans-serif' }}>
                    <Award className="w-5 h-5 text-amber-500" />
                    أهم المعالم:
                  </p>
                  {region.attractions.slice(0, 3).map((attraction, index) => (
                    <div key={index} className="flex items-center gap-2 text-base text-gray-700">
                      <MapPin className="w-4 h-4 text-green-600" />
                      <span style={{ fontFamily: 'Noto Kufi Arabic, sans-serif' }}>{attraction}</span>
                    </div>
                  ))}
                </div>

                <Button 
                  className="w-full bg-gradient-to-r from-green-700 to-green-600 hover:from-green-800 hover:to-green-700 text-white font-bold py-6 text-lg shadow-lg"
                  style={{ fontFamily: 'Noto Kufi Arabic, sans-serif' }}
                >
                  استكشف المزيد
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* Travel Tips */}
      <section className="py-16 bg-gradient-to-br from-amber-100 to-green-100">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center justify-center gap-2 mb-12">
              <Sparkles className="w-8 h-8 text-green-700" />
              <h2 className="text-5xl text-center text-green-800 font-bold" style={{ fontFamily: 'Ruwudu, serif' }}>
                نصائح السفر
              </h2>
              <Sparkles className="w-8 h-8 text-green-700" />
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="p-6 bg-white border-4 border-amber-300 hover:border-green-500 hover:shadow-xl transition-all">
                <Calendar className="w-12 h-12 text-green-700 mb-4" />
                <h3 className="text-2xl mb-3 text-green-800 font-bold" style={{ fontFamily: 'Noto Kufi Arabic, sans-serif' }}>
                  أفضل وقت للزيارة
                </h3>
                <p className="text-gray-700 leading-relaxed text-base" style={{ fontFamily: 'Noto Kufi Arabic, sans-serif' }}>
                  من أكتوبر إلى مارس يكون الطقس معتدلاً ومثالياً للسياحة في معظم المناطق
                </p>
              </Card>

              <Card className="p-6 bg-white border-4 border-amber-300 hover:border-green-500 hover:shadow-xl transition-all">
                <MapPin className="w-12 h-12 text-green-700 mb-4" />
                <h3 className="text-2xl mb-3 text-green-800 font-bold" style={{ fontFamily: 'Noto Kufi Arabic, sans-serif' }}>
                  التنقل
                </h3>
                <p className="text-gray-700 leading-relaxed text-base" style={{ fontFamily: 'Noto Kufi Arabic, sans-serif' }}>
                  تتوفر خدمات النقل العام والتطبيقات الذكية في المدن الرئيسية
                </p>
              </Card>

              <Card className="p-6 bg-white border-4 border-amber-300 hover:border-green-500 hover:shadow-xl transition-all">
                <Building className="w-12 h-12 text-green-700 mb-4" />
                <h3 className="text-2xl mb-3 text-green-800 font-bold" style={{ fontFamily: 'Noto Kufi Arabic, sans-serif' }}>
                  الإقامة
                </h3>
                <p className="text-gray-700 leading-relaxed text-base" style={{ fontFamily: 'Noto Kufi Arabic, sans-serif' }}>
                  تتنوع خيارات الإقامة من الفنادق الفاخرة إلى النزل التقليدية
                </p>
              </Card>

              <Card className="p-6 bg-white border-4 border-amber-300 hover:border-green-500 hover:shadow-xl transition-all">
                <Star className="w-12 h-12 text-green-700 mb-4" />
                <h3 className="text-2xl mb-3 text-green-800 font-bold" style={{ fontFamily: 'Noto Kufi Arabic, sans-serif' }}>
                  الثقافة المحلية
                </h3>
                <p className="text-gray-700 leading-relaxed text-base" style={{ fontFamily: 'Noto Kufi Arabic, sans-serif' }}>
                  احترم العادات والتقاليد المحلية واستمتع بالضيافة العربية الأصيلة
                </p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA to AI Assistant */}
      <section className="py-16 container mx-auto px-4">
        <Card className="p-12 text-center bg-gradient-to-r from-green-700 to-green-600 text-white border-0 shadow-2xl relative overflow-hidden">
          <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 10px, currentColor 10px, currentColor 11px)' }}></div>
          <div className="relative z-10">
            <Sparkles className="w-16 h-16 mx-auto mb-6 text-amber-300 animate-pulse" />
            <h2 className="text-4xl mb-4 font-bold" style={{ fontFamily: 'Ruwudu, serif' }}>
              هل تحتاج خطة سياحية مخصصة؟
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto text-amber-50" style={{ fontFamily: 'Noto Kufi Arabic, sans-serif' }}>
              استخدم المساعد الذكي للحصول على خطة سياحية مناسبة لميولك واهتماماتك
            </p>
            <Button 
              size="lg"
              className="bg-gradient-to-r from-amber-500 to-amber-600 text-green-900 hover:from-amber-600 hover:to-amber-700 text-xl px-10 py-7 shadow-2xl font-bold"
              onClick={() => onNavigate('ai-assistant')}
              style={{ fontFamily: 'Noto Kufi Arabic, sans-serif' }}
            >
              <Sparkles className="w-6 h-6 ml-2" />
              انتقل للمساعد الذكي
            </Button>
          </div>
        </Card>
      </section>
    </div>
  );
}
