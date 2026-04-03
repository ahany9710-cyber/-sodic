import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Check } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { trackConversion } from '../utils/gtag';

const ThankYou = () => {
  useEffect(() => {
    trackConversion();
  }, []);

  return (
    <div className="flex min-h-screen flex-col bg-white">
      <Header />
      <main className="flex flex-1 items-center justify-center px-6 pb-20 pt-32">
        <div className="w-full max-w-lg border border-gray-100 p-10 text-center shadow-sm">
          <div className="mx-auto grid h-16 w-16 place-items-center bg-black text-white">
            <Check size={30} />
          </div>
          <h1 className="mt-6 font-heading text-4xl font-bold text-black">Thank you for your inquiry</h1>
          <p className="mt-3 text-gray-600">Our team will get in touch with you shortly.</p>
          <Link to="/" className="mt-8 inline-flex bg-black px-8 py-4 text-sm font-semibold uppercase tracking-wide text-white">
            Back to Home
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ThankYou;
