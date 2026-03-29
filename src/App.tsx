import { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { LazyMotion } from 'framer-motion';
import Header from './components/Header';
import Footer from './components/Footer';
import FloatingActionBar from './components/FloatingActionBar';
import Landing from './pages/Landing';

const loadFeatures = () => import('framer-motion').then((m) => m.domAnimation);

const ThankYou = lazy(() => import('./pages/ThankYou'));

function App() {
  return (
    <LazyMotion features={loadFeatures} strict>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <div className="min-h-screen bg-modon-bg">
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
    </LazyMotion>
  );
}

export default App;
