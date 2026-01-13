import { useState } from 'react';
import { Navigation } from './Navigation';
import { Card } from './ui/card';
import { Button } from './ui/button';
import { Progress } from './ui/progress';
import { Baby, Star, Trophy, Map as MapIcon, BookOpen, Users, Sparkles, Award } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import { Badge } from './ui/badge';
import salemImage from '../../assets/salem.png';

type Page = 'home' | 'education' | 'children' | 'tourism' | 'ai-assistant';

interface ChildrenPageProps {
  onNavigate: (page: Page) => void;
}

interface Quest {
  id: number;
  title: string;
  description: string;
  historicalFigure: string;
  topic: string;
  completed: boolean;
  progress: number;
  stars: number;
}

export function ChildrenPage({ onNavigate }: ChildrenPageProps) {
  const [selectedQuest, setSelectedQuest] = useState<Quest | null>(null);
  const [currentStep, setCurrentStep] = useState(0);

  const quests: Quest[] = [
    {
      id: 1,
      title: 'رحلة مع الملك عبدالعزيز',
      description: 'تعرف على قصة تأسيس المملكة مع سالم والملك عبدالعزيز',
      historicalFigure: 'الملك عبدالعزيز آل سعود',
      topic: 'تاريخ',
      completed: false,
      progress: 0,
      stars: 3,
    },
    {
      id: 2,
      title: 'عادات الضيافة العربية',
      description: 'اكتشف تقاليد الضيافة مع سالم والشيخ محمد',
      historicalFigure: 'الشيخ محمد بن عبدالوهاب',
      topic: 'ثقافة',
      completed: false,
      progress: 0,
      stars: 3,
    },
    {
      id: 3,
      title: 'سوق البيع والشراء القديم',
      description: 'تجول في الأسواق التقليدية وتعلم عن التجارة',
      historicalFigure: 'التاجر أحمد السديري',
      topic: 'اقتصاد',
      completed: false,
      progress: 0,
      stars: 3,
    },
    {
      id: 4,
      title: 'فنون العمارة النجدية',
      description: 'تعلم كيف بنى أجدادنا بيوتهم من الطين',
      historicalFigure: 'المعمار سعد الراشد',
      topic: 'عمارة',
      completed: false,
      progress: 0,
      stars: 3,
    },
  ];

  const conversationSteps = [
    {
      speaker: 'salem',
      text: 'مرحباً يا صديقي! أنا سالم، سأكون دليلك في هذه الرحلة المشوقة! هل أنت مستعد؟',
    },
    {
      speaker: 'historical',
      text: 'السلام عليكم ورحمة الله وبركاته، أهلاً وسهلاً بك في عصر تأسيس المملكة',
    },
    {
      speaker: 'salem',
      text: 'دعني أخبرك قصة رائعة عن كيف وحد الملك عبدالعزيز المملكة...',
    },
    {
      speaker: 'historical',
      text: 'بدأت الرحلة من الرياض في عام 1902م، حيث استعدت قصر المصمك',
    },
    {
      speaker: 'salem',
      text: 'رائع! الآن حان دورك، ما هو اسم القصر الذي استعاده الملك عبدالعزيز؟',
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation onNavigate={onNavigate} currentPage="children" />

      {/* Header */}
      <section className="bg-white text-gray-800 py-12 relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 max-w-5xl mx-auto">
            {/* Salem Character with Speech Bubble */}
            <div className="relative flex-shrink-0">
              {/* Salem Character */}
              <div className="relative">
                <div className="w-56 h-56 bg-gradient-to-br from-amber-100 to-white rounded-full flex items-center justify-center shadow-2xl border-4 border-amber-300 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-amber-50/50 to-transparent"></div>
                  <img 
                    src={salemImage} 
                    alt="سالم - دليلك في الرحلة" 
                    className="w-full h-full object-cover relative z-10 scale-110"
                  />
                </div>
                <div className="absolute -top-4 -right-4">
                  <Star className="w-10 h-10 text-amber-300 fill-amber-300 animate-pulse" />
                </div>
                <div className="absolute -bottom-4 -left-4">
                  <Sparkles className="w-10 h-10 text-amber-400 animate-bounce" />
                </div>
              </div>
            </div>

            {/* Speech Bubble */}
            <div className="relative max-w-xl animate-fade-in">
              {/* Speech Bubble Arrow */}
              <div className="absolute right-full top-12 w-0 h-0 border-t-[15px] border-t-transparent border-b-[15px] border-b-transparent border-r-[20px] border-r-white hidden md:block"></div>
              
              {/* Speech Bubble Content */}
              <div className="bg-white rounded-3xl p-6 shadow-2xl border-4 border-amber-300 relative">
                <div className="absolute -top-3 right-8">
                  <div className="bg-amber-400 rounded-full w-12 h-12 flex items-center justify-center shadow-lg">
                    <Star className="w-6 h-6 text-white fill-white animate-pulse" />
                  </div>
                </div>
                
                <div className="space-y-3 pt-4">
                  <h2 className="text-2xl font-bold text-green-800 flex items-center gap-2" style={{ fontFamily: 'Ruwudu, serif' }}>
                    <Star className="w-7 h-7 text-amber-500 fill-amber-500" />
                    مرحباً يا صديقي!
                  </h2>
                  
                  <p className="text-lg text-gray-700 leading-relaxed" style={{ fontFamily: 'Noto Kufi Arabic, sans-serif' }}>
                    أنا <span className="font-bold text-green-700">سالم</span>، سأكون دليلك في رحلة مشوقة عبر تاريخ وتراث المملكة العربية السعودية!
                  </p>
                  
                  <div className="bg-amber-50 rounded-2xl p-4 border-2 border-amber-200">
                    <p className="text-base text-green-800 font-semibold mb-3 flex items-center gap-2" style={{ fontFamily: 'Noto Kufi Arabic, sans-serif' }}>
                      <Sparkles className="w-5 h-5 text-amber-500" />
                      ماذا ستفعل هنا؟
                    </p>
                    <ul className="space-y-2 text-sm text-gray-700" style={{ fontFamily: 'Noto Kufi Arabic, sans-serif' }}>
                      <li className="flex items-start gap-2">
                        <BookOpen className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" />
                        <span>اختر مهمة تعليمية ممتعة من الأسفل</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Users className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" />
                        <span>العب وتعلم مع الشخصيات التاريخية</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Star className="w-5 h-5 text-amber-500 fill-amber-500 flex-shrink-0 mt-0.5" />
                        <span>اجمع النجوم والنقاط عند إكمال المهام</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Trophy className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" />
                        <span>تحدى نفسك وكن بطل المعرفة!</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div className="flex items-center gap-2 pt-2">
                    <Award className="w-6 h-6 text-green-600 animate-bounce" />
                    <p className="text-base font-bold text-green-700" style={{ fontFamily: 'Noto Kufi Arabic, sans-serif' }}>
                      ابدأ الآن واختر مغامرتك الأولى!
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Progress Dashboard */}
      <section className="py-6 bg-white border-b-4 border-green-600">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Card className="p-4 bg-gradient-to-br from-amber-50 to-amber-100 border-3 border-amber-400 shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-center gap-3">
                <div className="w-14 h-14 bg-gradient-to-br from-amber-400 to-amber-500 rounded-full flex items-center justify-center">
                  <Trophy className="w-7 h-7 text-white" />
                </div>
                <div>
                  <p className="text-3xl font-bold text-amber-800" style={{ fontFamily: 'Ruwudu, serif' }}>12</p>
                  <p className="text-sm text-amber-700 font-semibold" style={{ fontFamily: 'Noto Kufi Arabic, sans-serif' }}>نقطة الإنجاز</p>
                </div>
              </div>
            </Card>
            <Card className="p-4 bg-gradient-to-br from-green-50 to-green-100 border-3 border-green-400 shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-center gap-3">
                <div className="w-14 h-14 bg-gradient-to-br from-green-600 to-green-700 rounded-full flex items-center justify-center">
                  <Star className="w-7 h-7 text-white fill-white" />
                </div>
                <div>
                  <p className="text-3xl font-bold text-green-800" style={{ fontFamily: 'Ruwudu, serif' }}>4/12</p>
                  <p className="text-sm text-green-700 font-semibold" style={{ fontFamily: 'Noto Kufi Arabic, sans-serif' }}>المهام المكتملة</p>
                </div>
              </div>
            </Card>
            <Card className="p-4 bg-gradient-to-br from-emerald-50 to-emerald-100 border-3 border-emerald-400 shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-center gap-3">
                <div className="w-14 h-14 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-full flex items-center justify-center">
                  <MapIcon className="w-7 h-7 text-white" />
                </div>
                <div>
                  <p className="text-3xl font-bold text-emerald-800" style={{ fontFamily: 'Ruwudu, serif' }}>3</p>
                  <p className="text-sm text-emerald-700 font-semibold" style={{ fontFamily: 'Noto Kufi Arabic, sans-serif' }}>المستوى الحالي</p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Quests Section */}
      {!selectedQuest ? (
        <section className="py-10 container mx-auto px-4">
          <div className="text-center mb-8">
            <div className="flex items-center justify-center gap-2 mb-3">
              <Star className="w-8 h-8 text-amber-500 fill-amber-500" />
              <BookOpen className="w-10 h-10 text-green-700" />
              <Star className="w-8 h-8 text-amber-500 fill-amber-500" />
            </div>
            <h2 className="text-4xl mb-2 text-green-800 font-bold" style={{ fontFamily: 'Ruwudu, serif' }}>
              المهام التعليمية
            </h2>
            <p className="text-xl text-green-700" style={{ fontFamily: 'Noto Kufi Arabic, sans-serif' }}>
              اختر مهمة واستكشف التاريخ والثقافة مع سالم
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {quests.map((quest) => (
              <Card 
                key={quest.id} 
                className="p-5 hover:shadow-2xl transition-all cursor-pointer border-3 border-green-300 hover:border-amber-500 bg-gradient-to-br from-white to-green-50"
                onClick={() => setSelectedQuest(quest)}
              >
                <div className="flex items-start gap-3 mb-3">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-600 to-green-700 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg">
                    <BookOpen className="w-8 h-8 text-white" />
                  </div>
                  <div className="flex-1">
                    <Badge className="mb-2 bg-gradient-to-r from-amber-500 to-amber-600 text-white font-bold" style={{ fontFamily: 'Noto Kufi Arabic, sans-serif' }}>
                      {quest.topic}
                    </Badge>
                    <h3 className="text-xl mb-1.5 text-green-800 font-bold" style={{ fontFamily: 'Noto Kufi Arabic, sans-serif' }}>
                      {quest.title}
                    </h3>
                    <p className="text-gray-700 text-sm mb-2" style={{ fontFamily: 'Noto Kufi Arabic, sans-serif' }}>
                      {quest.description}
                    </p>
                    <div className="flex items-center gap-2 text-sm text-gray-500">
                      <Users className="w-4 h-4" />
                      <span style={{ fontFamily: 'Tajawal, sans-serif' }}>{quest.historicalFigure}</span>
                    </div>
                  </div>
                </div>

                <div className="space-y-1.5">
                  <div className="flex justify-between text-sm font-semibold">
                    <span className="text-green-700" style={{ fontFamily: 'Noto Kufi Arabic, sans-serif' }}>التقدم</span>
                    <span className="text-green-800" style={{ fontFamily: 'Noto Kufi Arabic, sans-serif' }}>{quest.progress}%</span>
                  </div>
                  <Progress value={quest.progress} className="h-2" />
                  <div className="flex gap-0.5 justify-end">
                    {[...Array(quest.stars)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-amber-500 fill-amber-500" />
                    ))}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </section>
      ) : (
        /* Interactive Quest View */
        <section className="py-10 container mx-auto px-4">
          <Button 
            variant="outline" 
            onClick={() => {
              setSelectedQuest(null);
              setCurrentStep(0);
            }}
            className="mb-6 border-2 border-green-600 text-green-800 hover:bg-green-50 font-bold"
            style={{ fontFamily: 'Noto Kufi Arabic, sans-serif' }}
          >
            ← العودة للمهام
          </Button>

          <Card className="p-6 max-w-4xl mx-auto border-4 border-green-600 shadow-2xl bg-gradient-to-b from-white to-amber-50">
            <div className="mb-6">
              <h2 className="text-3xl mb-2 text-green-800 font-bold" style={{ fontFamily: 'Ruwudu, serif' }}>
                {selectedQuest.title}
              </h2>
              <div className="flex items-center gap-2 mb-3">
                <Badge className="bg-gradient-to-r from-amber-500 to-amber-600 text-white font-bold text-sm" style={{ fontFamily: 'Noto Kufi Arabic, sans-serif' }}>
                  {selectedQuest.topic}
                </Badge>
                <span className="text-green-700 text-base" style={{ fontFamily: 'Noto Kufi Arabic, sans-serif' }}>
                  مع {selectedQuest.historicalFigure}
                </span>
              </div>
              <Progress value={(currentStep / conversationSteps.length) * 100} className="h-2" />
              <p className="text-sm text-green-700 mt-1.5 font-semibold" style={{ fontFamily: 'Noto Kufi Arabic, sans-serif' }}>
                الخطوة {currentStep + 1} من {conversationSteps.length}
              </p>
            </div>

            {/* Conversation */}
            <div className="space-y-4 mb-6">
              {conversationSteps.slice(0, currentStep + 1).map((step, index) => (
                <div 
                  key={index} 
                  className={`flex gap-3 ${step.speaker === 'salem' ? 'justify-end' : 'justify-start'}`}
                >
                  {step.speaker === 'historical' && (
                    <Avatar className="w-12 h-12 border-3 border-amber-400 shadow-lg">
                      <AvatarFallback className="bg-gradient-to-br from-amber-600 to-amber-800 text-white text-2xl">
                        👴
                      </AvatarFallback>
                    </Avatar>
                  )}
                  <div className={`max-w-md p-4 rounded-2xl shadow-lg ${
                    step.speaker === 'salem' 
                      ? 'bg-gradient-to-br from-green-600 to-green-700 text-white border-2 border-amber-400' 
                      : 'bg-gradient-to-br from-amber-50 to-amber-100 text-gray-800 border-2 border-green-300'
                  }`}>
                    <p className="leading-relaxed text-base" style={{ fontFamily: 'Noto Kufi Arabic, sans-serif' }}>
                      {step.text}
                    </p>
                  </div>
                  {step.speaker === 'salem' && (
                    <Avatar className="w-12 h-12 border-3 border-green-600 shadow-lg overflow-hidden">
                      <AvatarImage src={salemImage} alt="سالم" className="object-cover" />
                      <AvatarFallback className="bg-gradient-to-br from-green-600 to-green-800 text-white">
                        <img src={salemImage} alt="سالم" className="w-full h-full object-cover" />
                      </AvatarFallback>
                    </Avatar>
                  )}
                </div>
              ))}
            </div>

            {/* Interactive Questions */}
            {currentStep === conversationSteps.length - 1 && (
              <Card className="p-5 bg-gradient-to-br from-amber-50 to-green-50 border-3 border-amber-400 shadow-lg">
                <h3 className="text-xl mb-3 text-green-800 font-bold" style={{ fontFamily: 'Noto Kufi Arabic, sans-serif' }}>
                  أجب على السؤال:
                </h3>
                <div className="grid grid-cols-1 gap-2">
                  {['قصر المصمك', 'قصر الحمراء', 'قصر الأمير'].map((answer, i) => (
                    <Button
                      key={i}
                      variant="outline"
                      className="justify-start h-auto py-3 text-base font-semibold border-2 border-green-400 hover:bg-green-100 hover:border-green-600"
                      style={{ fontFamily: 'Noto Kufi Arabic, sans-serif' }}
                      onClick={() => {
                        if (i === 0) {
                          alert('إجابة صحيحة! أحسنت! 🎉');
                        }
                      }}
                    >
                      {answer}
                    </Button>
                  ))}
                </div>
              </Card>
            )}

            {currentStep < conversationSteps.length - 1 && (
              <div className="flex justify-center">
                <Button 
                  onClick={() => setCurrentStep(currentStep + 1)}
                  className="bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white font-bold text-base px-6 py-5 shadow-lg"
                  style={{ fontFamily: 'Noto Kufi Arabic, sans-serif' }}
                >
                  التالي ←
                </Button>
              </div>
            )}
          </Card>
        </section>
      )}
    </div>
  );
}