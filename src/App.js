import React, { useState, useEffect } from 'react'; 
import DevFolio from './components/Layout/DevFolio'; 
import CounterAndPortfolio from './components/PortfolioSection/CounterAndPortfolio';
import FaqSection from './components/Overview/FaqSection'; 
import Contact from './components/ContactSection/Contact';
import Footer from './components/ContactSection/Footer'; 
import Service from './components/Overview/Service'; 
import CounterComponent from './components/Overview/CounterComponent'; 
import Loader from './components/Loader/Loader';

function App() {
  const [loading, setLoading] = useState(true); // وضعیت بارگذاری اولیه // Initial loading state

  useEffect(() => {
    // شبیه‌سازی بارگذاری اولیه با تأخیر // Simulate initial loading delay
    const timer = setTimeout(() => {
      setLoading(false); // پایان بارگذاری پس از ۲ ثانیه // End loading after 2 seconds
    }, 2000);

    return () => clearTimeout(timer); // پاک‌سازی تایمر هنگام خروج // Cleanup timer on unmount
  }, []);

  if (loading) {
    return <Loader />; // نمایش لودینگ در حالت بارگذاری // Show loader while loading
  }

  return (
    <div className="App"> {/* ریشه اپلیکیشن // App root container */}
      <DevFolio /> {/* معرفی و هدر سایت // Intro and header */}
      <Service /> {/* بخش خدمات // Services section */}
      <CounterAndPortfolio /> {/* شمارنده و گالری پروژه‌ها // Counter and portfolio */}
      <FaqSection /> {/* سوالات متداول // FAQ section */}
      <CounterComponent /> {/* ویژگی‌های عددی با انیمیشن // Animated counter features */}
      <Contact /> {/* فرم تماس با ما // Contact form */}
      <Footer /> {/* فوتر سایت // Site footer */}
    </div>
  );
}

export default App; 