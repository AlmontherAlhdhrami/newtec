import { Navigation } from './Navigation';
import { Card } from './ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { BookOpen, Video, FileText, Users, Crown, Calendar, Palmtree, Building, Mountain, Star, Sparkles } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Badge } from './ui/badge';

type Page = 'home' | 'education' | 'children' | 'tourism' | 'ai-assistant';

interface EducationPageProps {
  onNavigate: (page: Page) => void;
}

export function EducationPage({ onNavigate }: EducationPageProps) {
  const articles = [
    {
      id: 1,
      title: 'تاريخ تأسيس المملكة العربية السعودية',
      excerpt: 'تعرف على رحلة تأسيس المملكة العربية السعودية على يد الملك عبدالعزيز آل سعود وكيف وحد المملكة',
      category: 'تاريخ',
      image: 'https://images.unsplash.com/photo-1755412734479-c0687daab775?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzYXVkaSUyMGFyYWJpYSUyMGhlcml0YWdlJTIwYXJjaGl0ZWN0dXJlfGVufDF8fHx8MTc2ODIwMzk5NHww&ixlib=rb-4.1.0&q=80&w=1080',
      readTime: '10 دقائق',
    },
    {
      id: 2,
      title: 'العادات والتقاليد السعودية',
      excerpt: 'استكشف العادات والتقاليد الأصيلة في ا��مملكة من الضيافة العربية إلى الاحتفالات والمناسبات',
      category: 'ثقافة',
      image: 'https://images.unsplash.com/photo-1741888019564-3e9d8fe95efb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzYXVkaSUyMHRyYWRpdGlvbmFsJTIwY3VsdHVyZXxlbnwxfHx8fDE3NjgyNDM4Mjd8MA&ixlib=rb-4.1.0&q=80&w=1080',
      readTime: '8 دقائق',
    },
    {
      id: 3,
      title: 'التراث المعماري في نجد',
      excerpt: 'اكتشف فن العمارة التقليدية في منطقة نجد وكيف عكست البيئة والثقافة المحلية',
      category: 'عمارة',
      image: 'https://images.unsplash.com/photo-1615380098674-d28bf1a87cd3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzYXVkaSUyMGFyYWJpYSUyMGRlc2VydCUyMGxhbmRzY2FwZXxlbnwxfHx8fDE3NjgyMzgxMTV8MA&ixlib=rb-4.1.0&q=80&w=1080',
      readTime: '12 دقيقة',
    },
    {
      id: 4,
      title: 'الأدب والشعر العربي السعودي',
      excerpt: 'تعرف على أبرز الشعراء والأدباء السعوديين وإسهاماتهم في الأدب العربي',
      category: 'أدب',
      image: 'https://images.unsplash.com/photo-1720701575651-3d84bb362cf1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcmFiaWMlMjBjYWxsaWdyYXBoeSUyMGFydHxlbnwxfHx8fDE3NjgxNDcwNTF8MA&ixlib=rb-4.1.0&q=80&w=1080',
      readTime: '15 دقيقة',
    },
  ];

  const videos = [
    {
      id: 1,
      title: 'رحلة في تاريخ المملكة',
      duration: '25:30',
      category: 'تاريخ',
      views: '150K',
    },
    {
      id: 2,
      title: 'الحرف اليدوية التقليدية',
      duration: '18:45',
      category: 'تراث',
      views: '89K',
    },
    {
      id: 3,
      title: 'المهرجانات الثقافية السعودية',
      duration: '22:15',
      category: 'ثقافة',
      views: '120K',
    },
  ];

  const books = [
    {
      id: 1,
      title: 'تاريخ المملكة العربية السعودية الحديث',
      author: 'د. محمد العثيمين',
      pages: 450,
    },
    {
      id: 2,
      title: 'العادات والتقاليد في الجزيرة العربية',
      author: 'د. سعد الصويان',
      pages: 320,
    },
    {
      id: 3,
      title: 'الأمثال الشعبية السعودية',
      author: 'أحمد الجهني',
      pages: 280,
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 via-white to-green-50">
      <Navigation onNavigate={onNavigate} currentPage="education" />

      {/* Header */}
      <section className="bg-gradient-to-r from-green-700 via-green-600 to-green-700 text-white py-16 relative overflow-hidden">
        {/* Islamic Pattern Background */}
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 10px, currentColor 10px, currentColor 11px)' }}></div>
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="flex items-center justify-center gap-3 mb-6">
            <Palmtree className="w-12 h-12 text-amber-300 animate-pulse" />
            <Building className="w-16 h-16 text-amber-200" />
            <Mountain className="w-12 h-12 text-amber-300 animate-pulse" />
          </div>
          
          <div className="flex items-center justify-center gap-2 mb-4">
            <Star className="w-6 h-6 text-amber-400 fill-amber-400" />
            <h1 className="text-5xl font-bold text-amber-100" style={{ fontFamily: 'Ruwudu, serif' }}>
              التعليم والثقافة
            </h1>
            <Star className="w-6 h-6 text-amber-400 fill-amber-400" />
          </div>
          
          <p className="text-2xl max-w-3xl mx-auto text-amber-50 font-semibold mb-3" style={{ fontFamily: 'Noto Kufi Arabic, sans-serif' }}>
            رحلة في تاريخ وتراث المملكة العربية السعودية
          </p>
          
          <p className="text-lg max-w-2xl mx-auto text-amber-100" style={{ fontFamily: 'Noto Kufi Arabic, sans-serif' }}>
            استكشف ثقافتنا الأصيلة من خلال مقالات تعليمية، فيديوهات، وكتب تراثية
          </p>
          
          <div className="flex items-center justify-center gap-8 mt-8">
            <div className="flex items-center gap-2 text-amber-200">
              <Sparkles className="w-5 h-5" />
              <span style={{ fontFamily: 'Noto Kufi Arabic, sans-serif' }}>تراث أصيل</span>
            </div>
            <div className="flex items-center gap-2 text-amber-200">
              <Sparkles className="w-5 h-5" />
              <span style={{ fontFamily: 'Noto Kufi Arabic, sans-serif' }}>ثقافة عريقة</span>
            </div>
            <div className="flex items-center gap-2 text-amber-200">
              <Sparkles className="w-5 h-5" />
              <span style={{ fontFamily: 'Noto Kufi Arabic, sans-serif' }}>تاريخ مجيد</span>
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 container mx-auto px-4">
        <Tabs defaultValue="articles" className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-12 max-w-3xl mx-auto h-auto bg-gradient-to-r from-green-100 to-amber-100 p-2 rounded-2xl shadow-lg border-2 border-green-200" style={{ fontFamily: 'Noto Kufi Arabic, sans-serif' }}>
            <TabsTrigger value="articles" className="text-lg py-4 rounded-xl font-bold data-[state=active]:bg-gradient-to-r data-[state=active]:from-green-700 data-[state=active]:to-green-600 data-[state=active]:text-white data-[state=active]:shadow-lg transition-all">
              <FileText className="w-5 h-5 ml-2" />
              المقالات
            </TabsTrigger>
            <TabsTrigger value="videos" className="text-lg py-4 rounded-xl font-bold data-[state=active]:bg-gradient-to-r data-[state=active]:from-green-700 data-[state=active]:to-green-600 data-[state=active]:text-white data-[state=active]:shadow-lg transition-all">
              <Video className="w-5 h-5 ml-2" />
              الفيديوهات
            </TabsTrigger>
            <TabsTrigger value="books" className="text-lg py-4 rounded-xl font-bold data-[state=active]:bg-gradient-to-r data-[state=active]:from-green-700 data-[state=active]:to-green-600 data-[state=active]:text-white data-[state=active]:shadow-lg transition-all">
              <BookOpen className="w-5 h-5 ml-2" />
              الكتب
            </TabsTrigger>
          </TabsList>

          {/* Articles Tab */}
          <TabsContent value="articles">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {articles.map((article) => (
                <Card key={article.id} className="overflow-hidden hover:shadow-2xl transition-all duration-300 group cursor-pointer border-4 border-amber-200 hover:border-green-500 bg-gradient-to-br from-white to-amber-50 relative">
                  <div className="absolute top-2 left-2 z-10">
                    <Star className="w-6 h-6 text-amber-400 fill-amber-400 animate-pulse" />
                  </div>
                  <div className="relative h-56 overflow-hidden">
                    <ImageWithFallback
                      src={article.image}
                      alt={article.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                    <div className="absolute top-4 right-4">
                      <Badge className="bg-gradient-to-r from-green-700 to-green-600 text-white font-bold text-base px-4 py-1.5 shadow-lg" style={{ fontFamily: 'Noto Kufi Arabic, sans-serif' }}>
                        {article.category}
                      </Badge>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-2xl mb-3 text-green-800 font-bold leading-relaxed" style={{ fontFamily: 'Ruwudu, serif' }}>
                      {article.title}
                    </h3>
                    <p className="text-gray-700 mb-4 leading-relaxed text-base" style={{ fontFamily: 'Noto Kufi Arabic, sans-serif' }}>
                      {article.excerpt}
                    </p>
                    <div className="flex items-center justify-between pt-4 border-t-2 border-amber-200">
                      <span className="flex items-center gap-2 text-amber-700 font-semibold" style={{ fontFamily: 'Noto Kufi Arabic, sans-serif' }}>
                        <Calendar className="w-5 h-5" />
                        {article.readTime}
                      </span>
                      <span className="flex items-center gap-2 text-green-700 hover:text-green-900 cursor-pointer font-bold group-hover:gap-3 transition-all" style={{ fontFamily: 'Noto Kufi Arabic, sans-serif' }}>
                        <span>اقرأ المزيد</span>
                        <Sparkles className="w-4 h-4" />
                      </span>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Videos Tab */}
          <TabsContent value="videos">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {videos.map((video) => (
                <Card key={video.id} className="overflow-hidden hover:shadow-2xl transition-all duration-300 cursor-pointer border-4 border-green-200 hover:border-amber-500 bg-gradient-to-br from-white to-green-50 group relative">
                  <div className="absolute top-2 right-2 z-10">
                    <Star className="w-5 h-5 text-amber-400 fill-amber-400 animate-pulse" />
                  </div>
                  <div className="relative bg-gradient-to-br from-green-600 to-green-700 h-48 flex items-center justify-center group-hover:from-green-700 group-hover:to-green-800 transition-all">
                    <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 10px, white 10px, white 11px)' }}></div>
                    <Video className="w-20 h-20 text-white/90 animate-pulse" />
                    <div className="absolute bottom-3 left-3 bg-gradient-to-r from-amber-500 to-amber-600 text-white px-3 py-1.5 rounded-lg text-base font-bold shadow-lg" style={{ fontFamily: 'Noto Kufi Arabic, sans-serif' }}>
                      {video.duration}
                    </div>
                  </div>
                  <div className="p-5">
                    <Badge className="mb-3 bg-gradient-to-r from-amber-100 to-amber-200 text-green-800 font-bold border-2 border-amber-300" style={{ fontFamily: 'Noto Kufi Arabic, sans-serif' }}>
                      {video.category}
                    </Badge>
                    <h3 className="text-xl mb-3 text-green-800 font-bold leading-relaxed" style={{ fontFamily: 'Noto Kufi Arabic, sans-serif' }}>
                      {video.title}
                    </h3>
                    <p className="text-base text-amber-700 font-semibold flex items-center gap-2" style={{ fontFamily: 'Noto Kufi Arabic, sans-serif' }}>
                      <Users className="w-5 h-5" />
                      {video.views} مشاهدة
                    </p>
                  </div>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Books Tab */}
          <TabsContent value="books">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {books.map((book) => (
                <Card key={book.id} className="p-6 hover:shadow-2xl transition-all duration-300 cursor-pointer border-4 border-amber-200 hover:border-green-500 bg-gradient-to-br from-white to-amber-50 group relative">
                  <div className="absolute top-3 left-3">
                    <Star className="w-5 h-5 text-amber-400 fill-amber-400 group-hover:animate-spin" />
                  </div>
                  <div className="flex items-start gap-5">
                    <div className="w-16 h-20 bg-gradient-to-br from-green-700 to-green-800 rounded-lg flex items-center justify-center flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform">
                      <BookOpen className="w-8 h-8 text-amber-200" />
                    </div>
                    <div className="flex-1 pt-1">
                      <h3 className="text-xl mb-3 text-green-800 font-bold leading-relaxed" style={{ fontFamily: 'Ruwudu, serif' }}>
                        {book.title}
                      </h3>
                      <div className="space-y-2">
                        <p className="text-base text-amber-700 font-semibold flex items-center gap-2" style={{ fontFamily: 'Noto Kufi Arabic, sans-serif' }}>
                          <Crown className="w-5 h-5 text-amber-500" />
                          {book.author}
                        </p>
                        <p className="text-sm text-gray-600 flex items-center gap-2 font-semibold" style={{ fontFamily: 'Noto Kufi Arabic, sans-serif' }}>
                          <FileText className="w-4 h-4 text-green-600" />
                          {book.pages} صفحة
                        </p>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </section>
    </div>
  );
}