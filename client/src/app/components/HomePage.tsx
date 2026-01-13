import { Navigation } from './Navigation';
import { Button } from './ui/button';
import { Card } from './ui/card';
import { BookOpen, Baby, Map, Bot, Landmark, Users, Globe } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import logoImage from '../../assets/f1bb54de25f709173b03a10a6f7674d50dde86ce.png';

type Page = 'home' | 'education' | 'children' | 'tourism' | 'ai-assistant';

interface HomePageProps {
  onNavigate: (page: Page) => void;
}

export function HomePage({ onNavigate }: HomePageProps) {
  const features = [
    {
      id: 'education' as Page,
      icon: BookOpen,
      title: 'التعليم والثقافة',
      description: 'اكتشف تاريخ المملكة العربية السعودية وتراثها الغني من خلال مقالات تعليمية وفيديوهات تثقيفية',
      color: 'from-blue-500 to-blue-700',
    },
    {
      id: 'children' as Page,
      icon: Baby,
      title: 'ركن الأطفال',
      description: 'رحلة تعليمية تفاعلية للأطفال مع سالم - شخصيتنا الافتراضية لاستكشاف التاريخ والتقاليد',
      color: 'from-pink-500 to-pink-700',
    },
    {
      id: 'tourism' as Page,
      icon: Map,
      title: 'السياحة',
      description: 'استكشف أجمل المناطق السياحية في المملكة من الرياض إلى جدة ومكة والمدينة',
      color: 'from-purple-500 to-purple-700',
    },
    {
      id: 'ai-assistant' as Page,
      icon: Bot,
      title: 'المساعد الذكي',
      description: 'احصل على إجابات فورية واستشارات سياحية مخصصة تناسب ميولك واهتماماتك',
      color: 'from-green-500 to-green-700',
    },
  ];

  return (
    <div className="min-h-screen">
      <Navigation onNavigate={onNavigate} currentPage="home" />

      {/* Hero Section */}
      <section className="relative h-[700px] overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1755412734479-c0687daab775?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzYXVkaSUyMGFyYWJpYSUyMGhlcml0YWdlJTIwYXJjaGl0ZWN0dXJlfGVufDF8fHx8MTc2ODIwMzk5NHww&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Saudi Heritage"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
        </div>

        <div className="relative container mx-auto px-4 h-full flex flex-col justify-center items-center text-center">
          {/* Main Title with Gold Accent */}
          <div className="mb-8 relative">
            <h1 
              className="text-6xl md:text-8xl text-white mb-4 animate-fade-in drop-shadow-2xl"
              style={{ fontFamily: 'Ruwudu, serif' }}
            >
              مرحباً بكم في تراث المملكة
            </h1>
            <div className="h-2 w-32 bg-gradient-to-r from-amber-400 to-amber-300 mx-auto rounded-full shadow-lg" />
          </div>
          
          <p 
            className="text-2xl md:text-3xl text-amber-100 mb-12 max-w-4xl leading-relaxed drop-shadow-lg"
            style={{ fontFamily: 'Noto Kufi Arabic, sans-serif' }}
          >
            رحلة تفاعلية في تاريخ وثقافة المملكة العربية السعودية 🇸🇦 للكبار والصغار
          </p>
          
          <div className="flex flex-wrap gap-6 justify-center">
            <Button 
              size="lg" 
              onClick={() => onNavigate('education')}
              className="bg-amber-400 hover:bg-amber-500 text-green-900 text-xl px-12 py-8 rounded-2xl shadow-2xl hover:scale-105 transition-all font-bold border-4 border-amber-300"
              style={{ fontFamily: 'Noto Kufi Arabic, sans-serif' }}
            >
              <BookOpen className="ml-2 w-6 h-6" />
              ابدأ التعلم الآن
            </Button>
            <Button 
              size="lg" 
              onClick={() => onNavigate('tourism')}
              className="bg-white hover:bg-amber-50 text-green-800 text-xl px-12 py-8 rounded-2xl shadow-2xl hover:scale-105 transition-all font-bold border-4 border-white"
              style={{ fontFamily: 'Noto Kufi Arabic, sans-serif' }}
            >
              <Map className="ml-2 w-6 h-6" />
              استكشف السياحة
            </Button>
            <Button 
              size="lg" 
              onClick={() => onNavigate('children')}
              className="bg-green-800 hover:bg-green-900 text-amber-300 text-xl px-12 py-8 rounded-2xl shadow-2xl hover:scale-105 transition-all font-bold border-4 border-green-700"
              style={{ fontFamily: 'Noto Kufi Arabic, sans-serif' }}
            >
              <Baby className="ml-2 w-6 h-6" />
              ركن الأطفال
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-gradient-to-b from-white via-amber-50/30 to-green-50/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <div className="inline-block mb-6">
              <div className="flex items-center gap-3 bg-gradient-to-r from-green-100 to-amber-100 px-8 py-3 rounded-full border-2 border-amber-300">
                <span className="text-3xl">✨</span>
                <span className="text-green-800 font-bold text-lg" style={{ fontFamily: 'Noto Kufi Arabic, sans-serif' }}>
                  خدماتنا المميزة
                </span>
                <span className="text-3xl">✨</span>
              </div>
            </div>
            <h2 
              className="text-5xl md:text-6xl text-green-800 mb-6"
              style={{ fontFamily: 'Ruwudu, serif' }}
            >
              اكتشف عالم التراث السعودي
            </h2>
            <p 
              className="text-2xl text-gray-700 max-w-3xl mx-auto leading-relaxed"
              style={{ fontFamily: 'Noto Kufi Arabic, sans-serif' }}
            >
              منصة شاملة تجمع بين التعليم والترفيه والسياحة في تجربة واحدة فريدة 🎯
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {features.map((feature) => {
              const Icon = feature.icon;
              return (
                <Card
                  key={feature.id}
                  className="group hover:shadow-2xl transition-all duration-500 overflow-hidden cursor-pointer border-4 border-amber-300 hover:border-green-600 bg-white hover:scale-[1.02] relative"
                  onClick={() => onNavigate(feature.id)}
                >
                  {/* Decorative Corner */}
                  <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-amber-300 to-transparent opacity-50" />
                  <div className="absolute bottom-0 left-0 w-20 h-20 bg-gradient-to-tr from-green-200 to-transparent opacity-50" />
                  
                  <div className="p-10 relative">
                    <div className={`w-20 h-20 rounded-3xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all shadow-xl`}>
                      <Icon className="w-10 h-10 text-white" />
                    </div>
                    <h3 
                      className="text-3xl mb-4 text-green-900 font-bold"
                      style={{ fontFamily: 'Ruwudu, serif' }}
                    >
                      {feature.title}
                    </h3>
                    <p 
                      className="text-gray-700 leading-relaxed text-lg"
                      style={{ fontFamily: 'Noto Kufi Arabic, sans-serif' }}
                    >
                      {feature.description}
                    </p>
                    
                    {/* Arrow indicator */}
                    <div className="mt-6 flex items-center gap-2 text-green-700 font-bold group-hover:gap-4 transition-all">
                      <span style={{ fontFamily: 'Noto Kufi Arabic, sans-serif' }}>اكتشف المزيد</span>
                      <span className="text-2xl">←</span>
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-gradient-to-r from-green-800 via-green-700 to-green-800 py-20 relative overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3z' fill='%23ffffff' fill-opacity='1' fill-rule='evenodd'/%3E%3C/svg%3E")`
        }} />
        
        <div className="container mx-auto px-4 relative">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl text-amber-300 font-bold mb-4" style={{ fontFamily: 'Ruwudu, serif' }}>
              إنجازاتنا بالأرقام ✨
            </h2>
            <div className="h-1 w-24 bg-amber-400 mx-auto rounded-full" />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
            <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-10 border-4 border-amber-400 hover:scale-105 transition-all shadow-2xl">
              <div className="w-20 h-20 bg-amber-400 rounded-full flex items-center justify-center mx-auto mb-6 shadow-xl">
                <Landmark className="w-10 h-10 text-green-900" />
              </div>
              <div className="text-6xl mb-3 text-amber-300 font-bold" style={{ fontFamily: 'Ruwudu, serif' }}>
                +100
              </div>
              <div className="text-2xl text-white font-bold" style={{ fontFamily: 'Noto Kufi Arabic, sans-serif' }}>
                مقال تعليمي شامل
              </div>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-10 border-4 border-amber-400 hover:scale-105 transition-all shadow-2xl">
              <div className="w-20 h-20 bg-amber-400 rounded-full flex items-center justify-center mx-auto mb-6 shadow-xl">
                <Users className="w-10 h-10 text-green-900" />
              </div>
              <div className="text-6xl mb-3 text-amber-300 font-bold" style={{ fontFamily: 'Ruwudu, serif' }}>
                +50
              </div>
              <div className="text-2xl text-white font-bold" style={{ fontFamily: 'Noto Kufi Arabic, sans-serif' }}>
                قصة تفاعلية للأطفال
              </div>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-10 border-4 border-amber-400 hover:scale-105 transition-all shadow-2xl">
              <div className="w-20 h-20 bg-amber-400 rounded-full flex items-center justify-center mx-auto mb-6 shadow-xl">
                <Globe className="w-10 h-10 text-green-900" />
              </div>
              <div className="text-6xl mb-3 text-amber-300 font-bold" style={{ fontFamily: 'Ruwudu, serif' }}>
                +30
              </div>
              <div className="text-2xl text-white font-bold" style={{ fontFamily: 'Noto Kufi Arabic, sans-serif' }}>
                وجهة سياحية مميزة
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-b from-green-900 to-green-950 text-white py-16 relative overflow-hidden">
        {/* Decorative Pattern */}
        <div className="absolute inset-0 opacity-5" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }} />
        
        <div className="container mx-auto px-4 text-center relative">
          {/* Logo Section */}
          <div className="mb-8">
            <div className="w-24 h-24 bg-gradient-to-br from-amber-400 to-amber-500 rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-2xl border-4 border-amber-300 p-3">
              <img 
                src={logoImage} 
                alt="شعار المملكة العربية السعودية" 
                className="w-full h-full object-contain"
              />
            </div>
            <h3 className="text-4xl mb-3 text-amber-300 font-bold" style={{ fontFamily: 'Ruwudu, serif' }}>
              تراث المملكة العربية السعودية
            </h3>
            <div className="h-1 w-32 bg-amber-400 mx-auto rounded-full mb-6" />
          </div>
          
          {/* Description */}
          <p className="text-xl text-amber-100 mb-8 max-w-2xl mx-auto leading-relaxed" style={{ fontFamily: 'Noto Kufi Arabic, sans-serif' }}>
            رحلة تفاعلية في التاريخ والثقافة والتراث السعودي العريق 🇸🇦
          </p>
          
          {/* Quick Links */}
          <div className="flex flex-wrap justify-center gap-6 mb-8">
            <Button
              variant="ghost"
              onClick={() => onNavigate('education')}
              className="text-amber-200 hover:text-amber-400 hover:bg-green-800 text-lg px-6 py-3 rounded-xl"
              style={{ fontFamily: 'Noto Kufi Arabic, sans-serif' }}
            >
              التعليم والثقافة
            </Button>
            <Button
              variant="ghost"
              onClick={() => onNavigate('tourism')}
              className="text-amber-200 hover:text-amber-400 hover:bg-green-800 text-lg px-6 py-3 rounded-xl"
              style={{ fontFamily: 'Noto Kufi Arabic, sans-serif' }}
            >
              السياحة
            </Button>
            <Button
              variant="ghost"
              onClick={() => onNavigate('children')}
              className="text-amber-200 hover:text-amber-400 hover:bg-green-800 text-lg px-6 py-3 rounded-xl"
              style={{ fontFamily: 'Noto Kufi Arabic, sans-serif' }}
            >
              ركن الأطفال
            </Button>
            <Button
              variant="ghost"
              onClick={() => onNavigate('ai-assistant')}
              className="text-amber-200 hover:text-amber-400 hover:bg-green-800 text-lg px-6 py-3 rounded-xl"
              style={{ fontFamily: 'Noto Kufi Arabic, sans-serif' }}
            >
              المساعد الذكي
            </Button>
          </div>
          
          {/* Divider */}
          <div className="h-px bg-gradient-to-r from-transparent via-amber-400 to-transparent mb-8" />
          
          {/* Copyright */}
          <div className="flex items-center justify-center gap-3 text-amber-200/80">
            <span className="text-lg" style={{ fontFamily: 'Noto Kufi Arabic, sans-serif' }}>
              © 2026 جميع الحقوق محفوظة
            </span>
            <span className="text-2xl">•</span>
            <span className="text-lg" style={{ fontFamily: 'Noto Kufi Arabic, sans-serif' }}>
              صُنع بكل ❤️ في المملكة
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
}