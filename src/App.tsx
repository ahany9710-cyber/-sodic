import { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import FloatingActionBar from './components/FloatingActionBar';
import Landing from './pages/Landing';

const ThankYou = lazy(() => import('./pages/ThankYou'));

function App() {
  return (
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
  );
}

export default App;
