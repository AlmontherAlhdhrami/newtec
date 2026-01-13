import { Home, BookOpen, Baby, Map, Bot, Menu, X } from 'lucide-react';
import { Button } from './ui/button';
import { useState } from 'react';
import logoImage from '../../assets/f1bb54de25f709173b03a10a6f7674d50dde86ce.png';

type Page = 'home' | 'education' | 'children' | 'tourism' | 'ai-assistant';

interface NavigationProps {
  onNavigate: (page: Page) => void;
  currentPage?: Page;
}

export function Navigation({ onNavigate, currentPage = 'home' }: NavigationProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 'home' as Page, label: 'الرئيسية', icon: Home },
    { id: 'education' as Page, label: 'التعليم والثقافة', icon: BookOpen },
    { id: 'children' as Page, label: 'ركن الأطفال', icon: Baby },
    { id: 'tourism' as Page, label: 'السياحة', icon: Map },
    { id: 'ai-assistant' as Page, label: 'المساعد الذكي', icon: Bot },
  ];

  return (
    <nav className="relative bg-gradient-to-r from-white via-amber-50/30 to-white shadow-2xl sticky top-0 z-50 border-b-4 border-amber-300">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-24">
          {/* Logo */}
          <div 
            className="flex items-center gap-4 cursor-pointer hover:scale-105 transition-all duration-300 group"
            onClick={() => onNavigate('home')}
          >
            <div className="w-20 h-20 bg-gradient-to-br from-green-600 to-green-700 rounded-2xl p-2 shadow-2xl border-4 border-amber-300 group-hover:rotate-6 transition-transform">
              <img 
                src={logoImage} 
                alt="شعار المملكة العربية السعودية" 
                className="w-full h-full object-contain"
              />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-green-800 flex items-center gap-2" style={{ fontFamily: 'Ruwudu, serif', fontWeight: 700 }}>
                تراث المملكة
                <span className="text-2xl">🇸🇦</span>
              </h1>
              <p className="text-base text-amber-600 font-semibold" style={{ fontFamily: 'Noto Kufi Arabic, sans-serif' }}>
                رحلة في التاريخ والثقافة والتراث
              </p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-2">
            {navItems.map((item) => {
              const Icon = item.icon;
              return (
                <Button
                  key={item.id}
                  variant="ghost"
                  onClick={() => {
                    onNavigate(item.id);
                    setMobileMenuOpen(false);
                  }}
                  className={`gap-2 px-7 py-7 text-lg transition-all duration-300 rounded-2xl font-semibold border-2 ${
                    currentPage === item.id 
                      ? 'bg-gradient-to-r from-green-700 to-green-600 text-white border-green-800 hover:from-green-800 hover:to-green-700 shadow-xl scale-105' 
                      : 'text-green-800 border-transparent hover:bg-amber-100 hover:text-green-700 hover:border-amber-300 hover:scale-105'
                  }`}
                  style={{ fontFamily: 'Noto Kufi Arabic, sans-serif' }}
                >
                  <Icon className="w-5 h-5" />
                  {item.label}
                </Button>
              );
            })}
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            className="lg:hidden text-green-800 hover:bg-green-50 p-3"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="lg:hidden pb-4 space-y-2 pt-2 border-t border-green-100">
            {navItems.map((item) => {
              const Icon = item.icon;
              return (
                <Button
                  key={item.id}
                  variant="ghost"
                  onClick={() => {
                    onNavigate(item.id);
                    setMobileMenuOpen(false);
                  }}
                  className={`w-full justify-start gap-3 py-6 text-base transition-all rounded-lg ${
                    currentPage === item.id 
                      ? 'bg-gradient-to-r from-green-600 to-green-700 text-white hover:from-green-700 hover:to-green-800' 
                      : 'text-green-800 hover:bg-green-50'
                  }`}
                  style={{ fontFamily: 'Noto Kufi Arabic, sans-serif' }}
                >
                  <Icon className="w-5 h-5" />
                  {item.label}
                </Button>
              );
            })}
          </div>
        )}
      </div>
    </nav>
  );
}
