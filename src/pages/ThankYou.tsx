import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { trackConversion } from '../utils/gtag';

const ThankYou = () => {
  useEffect(() => {
    trackConversion();
  }, []);

  return (
    <div className="min-h-screen bg-modon-bg flex flex-col">
      <Header />
      <main className="flex-1 flex items-center justify-center px-4 py-section-sm md:py-section-lg pt-28">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-md w-full text-center"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.15, type: 'spring', stiffness: 200 }}
            className="w-20 h-20 bg-modon-sand rounded-full flex items-center justify-center mx-auto mb-6"
          >
            <svg className="w-10 h-10 text-modon-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </motion.div>
          <h1 className="font-heading text-3xl md:text-4xl font-bold text-modon-black mb-4 tracking-heading">
            شكراً لتسجيل اهتمامك
          </h1>
          <p className="text-gray-600 text-lg mb-10 font-arabic leading-relaxed">
            سيتواصل معك فريقنا في أقرب وقت
          </p>
          <Link
            to="/"
            className="inline-block w-full px-8 py-4 bg-modon-black text-white rounded font-semibold hover:bg-black transition-colors font-heading shadow-lg"
          >
            العودة للصفحة الرئيسية
          </Link>
        </motion.div>
      </main>
      <Footer />
    </div>
  );
};

export default ThankYou;
