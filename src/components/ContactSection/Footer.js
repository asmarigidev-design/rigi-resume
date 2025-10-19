import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // ایمپورت آیکون‌ها از FontAwesome // Import FontAwesome icons
import { faTelegram, faWhatsapp, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons'; // آیکون‌های شبکه‌های اجتماعی // Social media icons

const Footer = () => {
  return (
    <footer id="footer" className="footer accent-background"> {/* سکشن فوتر سایت // Site footer section */}
      <div className="container">
        
        {/* بخش کپی‌رایت | Copyright section */}
        <div className="copyright text-center">
          <p>
            <span></span> <strong className="px-1 sitename"></strong> <span> </span>
          </p>
        </div>

        {/* لینک‌های شبکه‌های اجتماعی | Social media links */}
        <div className="social-links d-flex justify-content-center">
          <a href="/"><FontAwesomeIcon icon={faTelegram} /></a> {/* لینک تلگرام // Telegram link */}
          <a href="/"><FontAwesomeIcon icon={faWhatsapp} /></a> {/* لینک واتساپ // WhatsApp link */}
          <a href="/"><FontAwesomeIcon icon={faInstagram} /></a> {/* لینک اینستاگرام // Instagram link */}
          <a href="/"><FontAwesomeIcon icon={faLinkedin} /></a> {/* لینک لینکدین // LinkedIn link */}
        </div>
      </div>
    </footer>
  );
};

export default Footer; 
