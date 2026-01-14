import { useState, useEffect } from 'react';
import { HomePage } from './components/HomePage';
import { EducationPage } from './components/EducationPage';
import { ChildrenPage } from './components/ChildrenPage';
import { TourismPage } from './components/TourismPage';
import { AIAssistantPage } from './components/AIAssistantPage';

type Page = 'home' | 'education' | 'children' | 'tourism' | 'ai-assistant';

const VALID_PAGES: Page[] = ['home', 'education', 'children', 'tourism', 'ai-assistant'];

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>(() => {
    // Try to get page from URL hash
    const hash = window.location.hash.replace('#', '');
    if (hash && VALID_PAGES.includes(hash as Page)) {
      return hash as Page;
    }
    
    // Fallback to localStorage
    const saved = localStorage.getItem('currentPage');
    if (saved && VALID_PAGES.includes(saved as Page)) {
      return saved as Page;
    }
    
    return 'home';
  });

  // Save to localStorage and update URL whenever page changes
  useEffect(() => {
    localStorage.setItem('currentPage', currentPage);
    window.location.hash = currentPage;
  }, [currentPage]);

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
