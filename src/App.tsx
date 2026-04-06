import { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import FloatingActionBar from './components/FloatingActionBar';
import MobileBottomBar from './components/MobileBottomBar';
import HeaderShortAr from './components/HeaderShortAr';
import FooterShortAr from './components/FooterShortAr';
import { config } from './config';
import Landing from './pages/Landing';
import LandingShortAr from './pages/LandingShortAr';

const ThankYou = lazy(() => import('./pages/ThankYou'));

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <div className="min-h-screen bg-white pb-24 md:pb-0">
              <Header />
              <Landing />
              <Footer />
              <FloatingActionBar />
              <MobileBottomBar />
            </div>
          }
        />
        <Route
          path="/ar"
          element={
            <div className="min-h-screen bg-white pb-24 font-arabic md:pb-0" dir="rtl" lang="ar">
              <HeaderShortAr />
              <LandingShortAr />
              <FooterShortAr />
              <FloatingActionBar rtl whatsappMessage={config.whatsappDefaultMessageAr} />
              <MobileBottomBar
                whatsappMessage={config.whatsappDefaultMessageAr}
                labels={{ call: 'اتصل بنا', whatsapp: 'واتساب', register: 'تسجيل' }}
              />
            </div>
          }
        />
        <Route
          path="/thank-you"
          element={
            <Suspense fallback={null}>
              <ThankYou />
            </Suspense>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
