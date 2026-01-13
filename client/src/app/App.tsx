import { useState } from 'react';
import { HomePage } from './components/HomePage';
import { EducationPage } from './components/EducationPage';
import { ChildrenPage } from './components/ChildrenPage';
import { TourismPage } from './components/TourismPage';
import { AIAssistantPage } from './components/AIAssistantPage';

type Page = 'home' | 'education' | 'children' | 'tourism' | 'ai-assistant';

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home');

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-white" dir="rtl">
      {currentPage === 'home' && <HomePage onNavigate={setCurrentPage} />}
      {currentPage === 'education' && <EducationPage onNavigate={setCurrentPage} />}
      {currentPage === 'children' && <ChildrenPage onNavigate={setCurrentPage} />}
      {currentPage === 'tourism' && <TourismPage onNavigate={setCurrentPage} />}
      {currentPage === 'ai-assistant' && <AIAssistantPage onNavigate={setCurrentPage} />}
    </div>
  );
}
