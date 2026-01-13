import { useState } from 'react';
import { Navigation } from './Navigation';
import { Card } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Badge } from './ui/badge';
import { Bot, Send, Calendar, MapPin, DollarSign, Users, Sparkles, Clock, Check, Building, Star, Palmtree, Mountain, Landmark, BookOpen, Award, MessageSquare, Plus, Trash2 } from 'lucide-react';
import { Avatar, AvatarFallback } from './ui/avatar';

type Page = 'home' | 'education' | 'children' | 'tourism' | 'ai-assistant';

interface AIAssistantPageProps {
  onNavigate: (page: Page) => void;
}

interface Message {
  id: number;
  sender: 'user' | 'ai';
  text: string;
  timestamp: Date;
}

interface TripPlan {
  destination: string;
  duration: string;
  budget: string;
  activities: string[];
  accommodations: string[];
  tips: string[];
}

interface ChatHistory {
  id: number;
  title: string;
  messages: Message[];
  timestamp: Date;
}

export function AIAssistantPage({ onNavigate }: AIAssistantPageProps) {
  const [currentChatId, setCurrentChatId] = useState(1);
  const [chatHistories, setChatHistories] = useState<ChatHistory[]>([
    {
      id: 1,
      title: 'محادثة جديدة',
      messages: [
        {
          id: 1,
          sender: 'ai',
          text: 'مرحباً! 👋 أنا مساعدك السياحي الذكي\n\n✨ اسألني عن:\n• أماكن سياحية رائعة\n• تراث وتاريخ المملكة\n• خطط سفر مخصصة\n\nكيف أساعدك اليوم؟',
          timestamp: new Date(),
        },
      ],
      timestamp: new Date(),
    },
  ]);

  const currentChat = chatHistories.find(chat => chat.id === currentChatId);
  const messages = currentChat?.messages || [];
  
  const [inputMessage, setInputMessage] = useState('');
  const [showPlanForm, setShowPlanForm] = useState(false);
  const [generatedPlan, setGeneratedPlan] = useState<TripPlan | null>(null);

  const [planFormData, setPlanFormData] = useState({
    destination: '',
    duration: '',
    budget: '',
    interests: '',
  });

  // Mock responses
  const mockResponses: { [key: string]: string } = {
    'مرحبا': 'أهلاً! 😊 كيف أساعدك في رحلتك؟',
    'الرياض': '🏙️ الرياض - العاصمة النابضة\n\n🔸 قصر المصمك التاريخي\n🔸 برج المملكة\n🔸 وادي حنيفة\n🔸 الدرعية التاريخية\n\nتريد خطة كاملة للرياض؟',
    'جدة': '🌊 جدة - عروس البحر الأحمر\n\n🔸 البلد التاريخي (يونسكو)\n🔸 كورنيش جدة\n🔸 نافورة الملك فهد\n🔸 الفن الحديث والتراث\n\nأخطط لك رحلة؟',
    'العلا': '🏜️ العلا - جوهرة الصحراء\n\n🔸 مدائن صالح (يونسكو)\n🔸 جبل الفيل\n🔸 مناظر طبيعية خلابة\n🔸 تجربة استثنائية\n\nتريد تفاصيل أكثر؟',
    'خطة': '✨ رائع! سأصمم لك خطة مثالية\n\nاضغط "إنشاء خطة" بالأسفل',
  };

  const handleSendMessage = () => {
    if (!inputMessage.trim()) return;

    const userMessage: Message = {
      id: messages.length + 1,
      sender: 'user',
      text: inputMessage,
      timestamp: new Date(),
    };

    const updatedMessages = [...messages, userMessage];
    
    // Update chat history
    setChatHistories(prev => 
      prev.map(chat => 
        chat.id === currentChatId 
          ? { ...chat, messages: updatedMessages, title: chat.messages.length === 1 ? inputMessage.slice(0, 30) + '...' : chat.title }
          : chat
      )
    );

    // Generate AI response
    setTimeout(() => {
      let aiResponse = 'شكراً لسؤالك! ';
      
      const lowerInput = inputMessage.toLowerCase();
      
      if (lowerInput.includes('خطة') || lowerInput.includes('برنامج') || lowerInput.includes('رحلة')) {
        aiResponse = '✨ ممتاز! سأصمم لك خطة مثالية\n\nاضغط على زر "🌟 إنشاء خطة" بالأسفل';
        setTimeout(() => setShowPlanForm(true), 1000);
      } else if (lowerInput.includes('رياض')) {
        aiResponse = mockResponses['الرياض'];
      } else if (lowerInput.includes('جدة')) {
        aiResponse = mockResponses['جدة'];
      } else if (lowerInput.includes('علا')) {
        aiResponse = mockResponses['العلا'];
      } else if (lowerInput.includes('مرحبا') || lowerInput.includes('السلام')) {
        aiResponse = mockResponses['مرحبا'];
      } else {
        aiResponse = '🇸🇦 المملكة مليئة بالوجهات الرائعة:\n\n• الرياض (العاصمة)\n• جدة (البحر الأحمر)\n• العلا (التراث)\n• أبها (الجبال)\n• الطائف (الطبيعة)\n\nاختر مدينة لأخبرك عنها!';
      }

      const aiMessage: Message = {
        id: messages.length + 2,
        sender: 'ai',
        text: aiResponse,
        timestamp: new Date(),
      };

      setChatHistories(prev => 
        prev.map(chat => 
          chat.id === currentChatId 
            ? { ...chat, messages: [...chat.messages, aiMessage] }
            : chat
        )
      );
    }, 1000);

    setInputMessage('');
  };

  const handleNewChat = () => {
    const newChatId = Math.max(...chatHistories.map(c => c.id)) + 1;
    const newChat: ChatHistory = {
      id: newChatId,
      title: 'محادثة جديدة',
      messages: [
        {
          id: 1,
          sender: 'ai',
          text: 'مرحباً! 👋 أنا مساعدك السياحي الذكي\n\n✨ اسألني عن:\n• أماكن سياحية رائعة\n• تراث وتاريخ المملكة\n• خطط سفر مخصصة\n\nكيف أساعدك اليوم؟',
          timestamp: new Date(),
        },
      ],
      timestamp: new Date(),
    };
    setChatHistories(prev => [...prev, newChat]);
    setCurrentChatId(newChatId);
    setGeneratedPlan(null);
    setShowPlanForm(false);
  };

  const handleDeleteChat = (chatId: number) => {
    if (chatHistories.length === 1) return;
    setChatHistories(prev => prev.filter(chat => chat.id !== chatId));
    if (currentChatId === chatId) {
      setCurrentChatId(chatHistories.find(chat => chat.id !== chatId)?.id || 1);
    }
  };

  const handleSwitchChat = (chatId: number) => {
    setCurrentChatId(chatId);
    setGeneratedPlan(null);
    setShowPlanForm(false);
  };

  const handleGeneratePlan = () => {
    // Mock trip plan generation
    const plan: TripPlan = {
      destination: planFormData.destination || 'الرياض',
      duration: planFormData.duration || '3 أيام',
      budget: planFormData.budget || 'متوسط',
      activities: [
        'زيارة قصر المصمك التاريخي',
        'التسوق في برج المملكة',
        'نزهة في وادي حنيفة',
        'استكشاف الدرعية التاريخية',
        'زيارة المتحف الوطني السعودي',
        'جولة في سوق الديرة التقليدي',
      ],
      accommodations: [
        'فندق فورسيزونز الرياض (5 نجوم)',
        'فندق نارسيس الرياض (4 نجوم)',
        'فندق أوالف انترناشيونال الرياض (متوسط)',
      ],
      tips: [
        'احجز الفنادق مسبقاً خاصة في المواسم السياحية',
        'استخدم تطبيقات المواصلات مثل أوبر وكريم للتنقل',
        'لا تفوت زيارة الدرعية في المساء لمشاهدة الإضاءة الليلية',
        'جرب المطاعم المحلية لتذوق الأكلات السعودية الأصيلة',
      ],
    };

    setGeneratedPlan(plan);
    setShowPlanForm(false);

    const aiMessage: Message = {
      id: messages.length + 1,
      sender: 'ai',
      text: `تم إنشاء خطتك السياحية! انظر أدناه للتفاصيل الكاملة 👇`,
      timestamp: new Date(),
    };

    setChatHistories(prev => 
      prev.map(chat => 
        chat.id === currentChatId 
          ? { ...chat, messages: [...chat.messages, aiMessage] }
          : chat
      )
    );
  };

  const quickQuestions = [
    '🏛️ أماكن سياحية في الرياض',
    '🏜️ أخبرني عن العلا',
    '✨ اصنع لي خطة سياحية',
    '🌊 ماذا عن جدة؟',
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navigation onNavigate={onNavigate} currentPage="ai-assistant" />

      {/* Main Content Area */}
      <div className="flex-1 flex">
        {/* Sidebar - Chat History */}
        <aside className="w-80 bg-gradient-to-b from-green-800 to-green-900 text-white flex flex-col border-l-4 border-amber-400 sticky top-0 h-screen">
          {/* Sidebar Header */}
          <div className="p-6 border-b-2 border-amber-400/50">
            <div className="flex items-center gap-3 mb-4">
              <Bot className="w-10 h-10 text-amber-300" />
              <div>
                <h2 className="text-xl font-bold text-amber-100" style={{ fontFamily: 'Ruwudu, serif' }}>
                  المحادثات
                </h2>
                <p className="text-xs text-amber-200" style={{ fontFamily: 'Noto Kufi Arabic, sans-serif' }}>
                  {chatHistories.length} محادثة
                </p>
              </div>
            </div>
            
            <Button
              onClick={handleNewChat}
              className="w-full bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-green-900 font-bold shadow-lg"
              style={{ fontFamily: 'Noto Kufi Arabic, sans-serif' }}
            >
              <Plus className="w-5 h-5 ml-2" />
              محادثة جديدة
            </Button>
          </div>

          {/* Chat List */}
          <div className="flex-1 overflow-y-auto p-4 space-y-2">
            {chatHistories.map((chat) => (
              <div
                key={chat.id}
                className={`group relative p-4 rounded-lg cursor-pointer transition-all ${
                  currentChatId === chat.id
                    ? 'bg-amber-400/20 border-2 border-amber-400'
                    : 'bg-white/5 hover:bg-white/10 border-2 border-transparent'
                }`}
                onClick={() => handleSwitchChat(chat.id)}
              >
                <div className="flex items-start gap-2">
                  <MessageSquare className={`w-5 h-5 flex-shrink-0 mt-1 ${
                    currentChatId === chat.id ? 'text-amber-300' : 'text-green-300'
                  }`} />
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-semibold truncate text-amber-100" style={{ fontFamily: 'Noto Kufi Arabic, sans-serif' }}>
                      {chat.title}
                    </p>
                    <p className="text-xs text-green-200 mt-1">
                      {chat.messages.length} رسالة
                    </p>
                  </div>
                  {chatHistories.length > 1 && (
                    <Button
                      variant="ghost"
                      size="sm"
                      className="opacity-0 group-hover:opacity-100 transition-opacity p-1 h-auto hover:bg-red-500/20"
                      onClick={(e) => {
                        e.stopPropagation();
                        handleDeleteChat(chat.id);
                      }}
                    >
                      <Trash2 className="w-4 h-4 text-red-300" />
                    </Button>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Sidebar Footer */}
          <div className="p-4 border-t-2 border-amber-400/50 bg-green-900/50">
            <div className="flex items-center gap-2 text-amber-200 text-xs">
              <Sparkles className="w-4 h-4" />
              <span style={{ fontFamily: 'Noto Kufi Arabic, sans-serif' }}>
                مدعوم بالذكاء الاصطناعي
              </span>
            </div>
          </div>
        </aside>

        {/* Main Chat Area */}
        <main className="flex-1 bg-gradient-to-b from-amber-50 via-green-50 to-white">
          {/* Chat Header */}
          <header className="bg-gradient-to-r from-green-700 via-green-600 to-green-700 text-white py-6 px-8 border-b-4 border-amber-400 shadow-lg sticky top-0 z-10">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 bg-amber-400 rounded-full flex items-center justify-center shadow-lg">
                  <Bot className="w-8 h-8 text-green-800" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-amber-100" style={{ fontFamily: 'Ruwudu, serif' }}>
                    المساعد السياحي الذكي
                  </h2>
                  <p className="text-amber-200 text-sm flex items-center gap-2" style={{ fontFamily: 'Noto Kufi Arabic, sans-serif' }}>
                    <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                    متصل الآن
                  </p>
                </div>
              </div>
              
              <div className="flex gap-2">
                <div className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg border border-amber-300/50">
                  <p className="text-xs text-amber-200" style={{ fontFamily: 'Noto Kufi Arabic, sans-serif' }}>🏛️ التراث</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg border border-amber-300/50">
                  <p className="text-xs text-amber-200" style={{ fontFamily: 'Noto Kufi Arabic, sans-serif' }}>🗺️ الأماكن</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg border border-amber-300/50">
                  <p className="text-xs text-amber-200" style={{ fontFamily: 'Noto Kufi Arabic, sans-serif' }}>📋 الخطط</p>
                </div>
              </div>
            </div>
          </header>

          {/* Unified Chat Container - Single Seamless Area */}
          <div className="flex-1 bg-gradient-to-b from-amber-50/30 to-green-50/20">
            <div className="max-w-5xl mx-auto pt-8 px-6 pb-8">
              {/* Messages Area */}
              <div className="space-y-6 mb-8">
                {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex gap-4 ${message.sender === 'user' ? 'justify-end' : 'justify-start'} animate-in fade-in slide-in-from-bottom-4 duration-500`}
                >
                  {message.sender === 'ai' && (
                    <Avatar className="w-14 h-14 border-4 border-amber-400 shadow-xl flex-shrink-0">
                      <AvatarFallback className="bg-gradient-to-br from-green-600 to-green-700 text-white">
                        <Bot className="w-7 h-7" />
                      </AvatarFallback>
                    </Avatar>
                  )}
                  <div
                    className={`max-w-2xl p-6 rounded-3xl shadow-lg transform hover:scale-[1.01] transition-all ${
                      message.sender === 'user'
                        ? 'bg-gradient-to-br from-green-700 to-green-600 text-white'
                        : 'bg-white/95 backdrop-blur-sm border-2 border-amber-200 text-gray-800'
                    }`}
                  >
                    <p className="leading-relaxed whitespace-pre-line text-lg" style={{ fontFamily: 'Noto Kufi Arabic, sans-serif' }}>
                      {message.text}
                    </p>
                    <p className="text-xs mt-3 opacity-60 flex items-center gap-1" style={{ fontFamily: 'Noto Kufi Arabic, sans-serif' }}>
                      <Clock className="w-3 h-3" />
                      {message.timestamp.toLocaleTimeString('ar-SA', { hour: '2-digit', minute: '2-digit' })}
                    </p>
                  </div>
                  {message.sender === 'user' && (
                    <Avatar className="w-14 h-14 border-4 border-amber-400 shadow-xl flex-shrink-0">
                      <AvatarFallback className="bg-gradient-to-br from-amber-500 to-amber-600 text-white text-2xl">
                        👤
                      </AvatarFallback>
                    </Avatar>
                  )}
                </div>
                ))}
              </div>

              {/* Input Area - Part of the Container */}
              <div className="bg-white/70 backdrop-blur-sm rounded-3xl p-6 shadow-xl border-2 border-amber-200">
                <div className="flex gap-4 mb-4">
                  <Input
                    value={inputMessage}
                    onChange={(e) => setInputMessage(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                    placeholder="اكتب سؤالك هنا... 💬"
                    className="flex-1 border-2 border-amber-300 focus:border-green-500 text-base py-7 text-lg rounded-3xl shadow-md bg-white"
                    style={{ fontFamily: 'Noto Kufi Arabic, sans-serif' }}
                  />
                  <Button
                    onClick={handleSendMessage}
                    className="bg-gradient-to-r from-green-700 to-green-600 hover:from-green-800 hover:to-green-700 px-10 py-7 shadow-lg rounded-3xl"
                  >
                    <Send className="w-7 h-7" />
                  </Button>
                </div>

                {/* Quick Questions */}
                <div className="flex flex-wrap gap-2 justify-center">
                  {quickQuestions.map((question, index) => (
                    <Badge
                      key={index}
                      variant="outline"
                      className="cursor-pointer hover:bg-green-100 border-2 border-green-300 text-sm py-2.5 px-4 hover:border-green-500 transition-all hover:scale-105 shadow-sm rounded-2xl bg-white"
                      onClick={() => setInputMessage(question)}
                      style={{ fontFamily: 'Noto Kufi Arabic, sans-serif' }}
                    >
                      {question}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>

      {/* Trip Planning Form Modal */}
      {showPlanForm && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <Card className="max-w-2xl w-full p-8 border-4 border-amber-400 bg-white shadow-2xl max-h-[90vh] overflow-y-auto">
            <h3 className="text-3xl mb-6 text-green-800 font-bold text-center" style={{ fontFamily: 'Ruwudu, serif' }}>
              ✨ إنشاء خطة سياحية مخصصة
            </h3>

            <div className="space-y-5">
              <div>
                <label className="block text-base mb-2 text-gray-700 font-semibold" style={{ fontFamily: 'Noto Kufi Arabic, sans-serif' }}>
                  <MapPin className="w-5 h-5 inline ml-1" />
                  الوجهة المفضلة
                </label>
                <Input
                  value={planFormData.destination}
                  onChange={(e) => setPlanFormData({ ...planFormData, destination: e.target.value })}
                  placeholder="مثال: الرياض، جدة، العلا..."
                  className="border-3 border-amber-300 text-lg py-6"
                  style={{ fontFamily: 'Noto Kufi Arabic, sans-serif' }}
                />
              </div>

              <div>
                <label className="block text-base mb-2 text-gray-700 font-semibold" style={{ fontFamily: 'Noto Kufi Arabic, sans-serif' }}>
                  <Calendar className="w-5 h-5 inline ml-1" />
                  مدة الرحلة
                </label>
                <Input
                  value={planFormData.duration}
                  onChange={(e) => setPlanFormData({ ...planFormData, duration: e.target.value })}
                  placeholder="مثال: 3 أيام، أسبوع..."
                  className="border-3 border-amber-300 text-lg py-6"
                  style={{ fontFamily: 'Noto Kufi Arabic, sans-serif' }}
                />
              </div>

              <div>
                <label className="block text-base mb-2 text-gray-700 font-semibold" style={{ fontFamily: 'Noto Kufi Arabic, sans-serif' }}>
                  <DollarSign className="w-5 h-5 inline ml-1" />
                  الميزانية
                </label>
                <Input
                  value={planFormData.budget}
                  onChange={(e) => setPlanFormData({ ...planFormData, budget: e.target.value })}
                  placeholder="مثال: اقتصادي، متوسط، فاخر..."
                  className="border-3 border-amber-300 text-lg py-6"
                  style={{ fontFamily: 'Noto Kufi Arabic, sans-serif' }}
                />
              </div>

              <div>
                <label className="block text-base mb-2 text-gray-700 font-semibold" style={{ fontFamily: 'Noto Kufi Arabic, sans-serif' }}>
                  <Users className="w-5 h-5 inline ml-1" />
                  اهتماماتك
                </label>
                <Textarea
                  value={planFormData.interests}
                  onChange={(e) => setPlanFormData({ ...planFormData, interests: e.target.value })}
                  placeholder="مثال: التاريخ، الطبيعة، المغامرة، التسوق..."
                  className="border-3 border-amber-300 text-lg"
                  style={{ fontFamily: 'Noto Kufi Arabic, sans-serif' }}
                  rows={4}
                />
              </div>

              <div className="flex gap-4 pt-4">
                <Button
                  onClick={handleGeneratePlan}
                  className="flex-1 bg-gradient-to-r from-green-700 to-green-600 hover:from-green-800 hover:to-green-700 text-white py-6 text-lg font-bold"
                  style={{ fontFamily: 'Noto Kufi Arabic, sans-serif' }}
                >
                  <Sparkles className="w-5 h-5 ml-2" />
                  إنشاء الخطة
                </Button>
                <Button
                  variant="outline"
                  onClick={() => setShowPlanForm(false)}
                  className="px-8 py-6 text-lg border-3 border-gray-300"
                  style={{ fontFamily: 'Noto Kufi Arabic, sans-serif' }}
                >
                  إلغاء
                </Button>
              </div>
            </div>
          </Card>
        </div>
      )}

      {/* Generated Plan - Display in Messages Area */}
      {generatedPlan && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <Card className="max-w-4xl w-full p-8 border-4 border-amber-400 bg-white shadow-2xl max-h-[90vh] overflow-y-auto">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-green-600 to-green-700 rounded-full flex items-center justify-center shadow-lg">
                <Check className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-4xl text-green-800 font-bold" style={{ fontFamily: 'Ruwudu, serif' }}>
                خطتك السياحية جاهزة!
              </h3>
            </div>

            {/* Plan Details */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="flex items-center gap-4 p-6 bg-gradient-to-br from-green-50 to-white rounded-xl border-3 border-amber-300 shadow-md">
                <MapPin className="w-8 h-8 text-green-700" />
                <div>
                  <p className="text-sm text-gray-600 font-semibold" style={{ fontFamily: 'Noto Kufi Arabic, sans-serif' }}>الوجهة</p>
                  <p className="text-xl font-bold text-green-800" style={{ fontFamily: 'Noto Kufi Arabic, sans-serif' }}>{generatedPlan.destination}</p>
                </div>
              </div>
              <div className="flex items-center gap-4 p-6 bg-gradient-to-br from-green-50 to-white rounded-xl border-3 border-amber-300 shadow-md">
                <Clock className="w-8 h-8 text-green-700" />
                <div>
                  <p className="text-sm text-gray-600 font-semibold" style={{ fontFamily: 'Noto Kufi Arabic, sans-serif' }}>المدة</p>
                  <p className="text-xl font-bold text-green-800" style={{ fontFamily: 'Noto Kufi Arabic, sans-serif' }}>{generatedPlan.duration}</p>
                </div>
              </div>
              <div className="flex items-center gap-4 p-6 bg-gradient-to-br from-green-50 to-white rounded-xl border-3 border-amber-300 shadow-md">
                <DollarSign className="w-8 h-8 text-green-700" />
                <div>
                  <p className="text-sm text-gray-600 font-semibold" style={{ fontFamily: 'Noto Kufi Arabic, sans-serif' }}>الميزانية</p>
                  <p className="text-xl font-bold text-green-800" style={{ fontFamily: 'Noto Kufi Arabic, sans-serif' }}>{generatedPlan.budget}</p>
                </div>
              </div>
            </div>

            {/* Activities */}
            <div className="mb-8">
              <h4 className="text-2xl mb-5 text-green-800 flex items-center gap-3 font-bold" style={{ fontFamily: 'Ruwudu, serif' }}>
                <MapPin className="w-7 h-7 text-amber-500" />
                الأنشطة المقترحة
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {generatedPlan.activities.map((activity, index) => (
                  <div key={index} className="flex items-start gap-3 p-4 bg-white rounded-lg border-3 border-green-200 hover:border-green-400 transition-all">
                    <Check className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-base" style={{ fontFamily: 'Noto Kufi Arabic, sans-serif' }}>{activity}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Accommodations */}
            <div className="mb-8">
              <h4 className="text-2xl mb-5 text-green-800 flex items-center gap-3 font-bold" style={{ fontFamily: 'Ruwudu, serif' }}>
                <Building className="w-7 h-7 text-amber-500" />
                خيارات الإقامة
              </h4>
              <div className="space-y-3">
                {generatedPlan.accommodations.map((hotel, index) => (
                  <div key={index} className="flex items-center gap-3 p-4 bg-white rounded-lg border-3 border-amber-200 hover:border-amber-400 transition-all">
                    <Star className="w-6 h-6 text-yellow-500 fill-yellow-500" />
                    <span className="text-base" style={{ fontFamily: 'Noto Kufi Arabic, sans-serif' }}>{hotel}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Tips */}
            <div className="mb-8">
              <h4 className="text-2xl mb-5 text-green-800 flex items-center gap-3 font-bold" style={{ fontFamily: 'Ruwudu, serif' }}>
                <Sparkles className="w-7 h-7 text-amber-500" />
                نصائح مهمة
              </h4>
              <div className="space-y-3">
                {generatedPlan.tips.map((tip, index) => (
                  <div key={index} className="flex items-start gap-3 p-4 bg-amber-50 rounded-lg border-3 border-amber-300">
                    <span className="text-2xl flex-shrink-0">💡</span>
                    <span className="text-green-900 text-base" style={{ fontFamily: 'Noto Kufi Arabic, sans-serif' }}>{tip}</span>
                  </div>
                ))}
              </div>
            </div>

            <Button
              onClick={() => setGeneratedPlan(null)}
              className="w-full bg-gradient-to-r from-green-700 to-green-600 hover:from-green-800 hover:to-green-700 text-white py-6 text-lg font-bold"
              style={{ fontFamily: 'Noto Kufi Arabic, sans-serif' }}
            >
              إغلاق
            </Button>
          </Card>
        </div>
      )}
    </div>
  );
}
