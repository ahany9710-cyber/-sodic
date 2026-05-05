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
const OgamiLanding = lazy(() => import('./pages/OgamiLanding'));
const EastLanding = lazy(() => import('./pages/EastLanding'));

function App() {
  const arWa = config.whatsappDefaultMessageAr;

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
              <MobileBottomBar labels={{ call: 'Call us', whatsapp: 'WhatsApp', register: 'Register' }} />
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
              <FloatingActionBar rtl whatsappMessage={arWa} />
              <MobileBottomBar
                whatsappMessage={arWa}
                labels={{ call: 'اتصل بنا', whatsapp: 'واتساب', register: 'تسجيل' }}
              />
            </div>
          }
        />
        <Route
          path="/ar/ogami"
          element={
            <div className="min-h-screen bg-white pb-24 font-arabic md:pb-0" dir="rtl" lang="ar">
              <HeaderShortAr />
              <Suspense fallback={null}>
                <OgamiLanding locale="ar" />
              </Suspense>
              <FooterShortAr />
              <FloatingActionBar rtl whatsappMessage={config.whatsappOgamiMessageAr} />
              <MobileBottomBar
                whatsappMessage={config.whatsappOgamiMessageAr}
                labels={{ call: 'اتصل بنا', whatsapp: 'واتساب', register: 'تسجيل' }}
              />
            </div>
          }
        />
        <Route
          path="/ogami"
          element={
            <div className="min-h-screen bg-white pb-24 md:pb-0" dir="ltr" lang="en">
              <Header />
              <Suspense fallback={null}>
                <OgamiLanding locale="en" />
              </Suspense>
              <Footer />
              <FloatingActionBar whatsappMessage={config.whatsappOgamiMessageEn} />
              <MobileBottomBar
                whatsappMessage={config.whatsappOgamiMessageEn}
                labels={{ call: 'Call us', whatsapp: 'WhatsApp', register: 'Register' }}
              />
            </div>
          }
        />
        <Route
          path="/ar/east"
          element={
            <div className="min-h-screen bg-white pb-24 font-arabic md:pb-0" dir="rtl" lang="ar">
              <HeaderShortAr />
              <Suspense fallback={null}>
                <EastLanding locale="ar" />
              </Suspense>
              <FooterShortAr />
              <FloatingActionBar rtl whatsappMessage={config.whatsappEastMessageAr} />
              <MobileBottomBar
                whatsappMessage={config.whatsappEastMessageAr}
                leadFormSectionId="east-lead-form"
                labels={{ call: 'اتصل بنا', whatsapp: 'واتساب', register: 'تسجيل' }}
              />
            </div>
          }
        />
        <Route
          path="/east"
          element={
            <div className="min-h-screen bg-white pb-24 md:pb-0" dir="ltr" lang="en">
              <Header />
              <Suspense fallback={null}>
                <EastLanding locale="en" />
              </Suspense>
              <Footer />
              <FloatingActionBar whatsappMessage={config.whatsappEastMessageEn} />
              <MobileBottomBar
                whatsappMessage={config.whatsappEastMessageEn}
                leadFormSectionId="east-lead-form"
                labels={{ call: 'Call us', whatsapp: 'WhatsApp', register: 'Register' }}
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
