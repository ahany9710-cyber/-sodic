import { lazy, Suspense, useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import FloatingActionBar from './components/FloatingActionBar';
import Landing from './pages/Landing';
import { trackMetaPageView } from './utils/metaPixel';

const ThankYou = lazy(() => import('./pages/ThankYou'));

function MetaPixelPageViews() {
  const location = useLocation();
  useEffect(() => {
    trackMetaPageView();
  }, [location.pathname]);
  return null;
}

function App() {
  return (
    <BrowserRouter>
      <MetaPixelPageViews />
      <Routes>
        <Route
          path="/"
          element={
            <div className="min-h-screen bg-white">
              <Header />
              <Landing />
              <Footer />
              <FloatingActionBar />
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
