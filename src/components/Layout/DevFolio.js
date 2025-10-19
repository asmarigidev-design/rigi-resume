import React, { useEffect, useState } from "react"; // ایمپورت ری‌اکت و هوک‌ها // Import React and hooks
import Typed from 'typed.js'; // ایمپورت تایپ انیمیشن // Import typing animation
import 'bootstrap/dist/css/bootstrap.min.css'; // ایمپورت استایل بوت‌استرپ // Import Bootstrap styles
import introBg from '../images/2.jpeg'; // تصویر پس‌زمینه معرفی // Intro background image
import intropro from '../images/code3.webp'; // تصویر معرفی پروژه // Project intro image
import codeLogo from '../images/code3.webp'; // لوگوی کد // Code logo
//import codeLogo2 from './images/white.gif'; // تصویر جایگزین لوگو // Alternate logo image


const DevFolio = () => {
    useEffect(() => {
      const typed = new Typed("#typed", {
        strings: [
          "Creative Web Development", // توسعه وب خلاقانه
          "Elevating Design with Code", // ارتقای طراحی با کدنویسی
          "Optimized Performance" // عملکرد بهینه‌شده
        ],
        typeSpeed: 50,
        backSpeed: 25,
        loop: true,
        showCursor: true, /* نمایش نشانگر تایپ // Show typing cursor */
        cursorChar: "|", /* کاراکتر نشانگر تایپ // Typing cursor character */
      });

      return () => {
        typed.destroy(); // پاک‌سازی تایپ انیمیشن هنگام خروج // Cleanup on unmount
      };
    }, []);

useEffect(() => {
  const handleResponsiveToggle = () => {
    const toggler = document.querySelector(".navbar-toggler"); // انتخاب دکمه همبرگر // Select hamburger button
    if (!toggler) return;

    if (window.innerWidth > 768) {
      toggler.style.display = "none"; // مخفی کردن در دسکتاپ // Hide on desktop
    } else {
      toggler.style.display = "block"; // نمایش در موبایل // Show on mobile
    }
  };

  window.addEventListener("resize", handleResponsiveToggle); // واکنش به تغییر سایز صفحه // Listen to resize
  handleResponsiveToggle(); // اجرای اولیه برای تنظیم نمایش // Initial run

  return () => {
    window.removeEventListener("resize", handleResponsiveToggle); // حذف لیسنر هنگام خروج // Cleanup listener
  };
}, []);

useEffect(() => {
  const changeNavbarStyle = () => {
    const navbar = document.getElementById("navbar"); // گرفتن المنت ناوبری // Get navbar element
    if (!navbar) return;

    if (window.scrollY > 50) { // تغییر استایل هنگام اسکرول // Change style on scroll
      navbar.classList.add("bg-white", "shadow-blue"); // افزودن کلاس‌های پس‌زمینه و سایه // Add background and shadow
      navbar.classList.add("animated-navbar"); // افزودن انیمیشن ناوبری // Add navbar animation
    } else {
      navbar.classList.remove("bg-white", "shadow-blue", "animated-navbar"); // حذف کلاس‌ها هنگام برگشت بالا // Remove classes on top
    }
  };

  window.addEventListener("resize", changeNavbarStyle); // واکنش به تغییر سایز // Listen to resize
  window.addEventListener("scroll", changeNavbarStyle); // واکنش به اسکرول // Listen to scroll
  changeNavbarStyle(); // اجرای اولیه برای تنظیم استایل // Initial run

  return () => {
    window.removeEventListener("resize", changeNavbarStyle); // حذف لیسنر سایز // Cleanup resize
    window.removeEventListener("scroll", changeNavbarStyle); // حذف لیسنر اسکرول // Cleanup scroll
  };
}, []);

const [isOpen, setIsOpen] = useState(false); // وضعیت باز بودن منو // Navbar open state
const toggleNavbar = () => setIsOpen(!isOpen); // تابع تغییر وضعیت منو // Toggle navbar state

// استفاده از IntersectionObserver برای انیمیشن نوار مهارت‌ها // Use IntersectionObserver for skill bar animation
useEffect(() => {
    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    const progressBars = entry.target.querySelectorAll(".progress .progress-bar"); // گرفتن نوارهای پیشرفت // Get progress bars
                    progressBars.forEach((bar) => {
                        bar.style.width = bar.getAttribute("aria-valuenow") + "%"; // تنظیم عرض نوار بر اساس مقدار // Set width by value
                    });
                }
            });
        },
        { threshold: 0.8 } // آستانه ورود به دید // Visibility threshold
    );

    const skillsAnimation = document.querySelectorAll(".skills-animation"); // گرفتن بخش‌های انیمیشن مهارت‌ها // Get skill animation sections
    skillsAnimation.forEach((el) => observer.observe(el)); // مشاهده هر بخش // Observe each section

    return () => {
        skillsAnimation.forEach((el) => observer.unobserve(el)); // توقف مشاهده هنگام خروج // Unobserve on unmount
    };
}, []);

return (
  <div>
    <nav id="navbar" className="navbar navbar-expand-md navbar-light bg-light fixed-top"> {/* ناوبری اصلی سایت // Main site navbar */}
      <div className="container ">
        <a className="navbar-brand resume-logo" href="#contact"> {/* لوگوی برند در ناوبری // Brand logo in navbar */}
          <img className="imgg" src={codeLogo} alt="Code Logo"  /> {/* تصویر لوگو // Logo image */}
        </a>

        <button
          className={`navbar-toggler ${isOpen ? "clicked" : ""}`} // دکمه همبرگر برای موبایل // Hamburger button for mobile
          type="button"
          onClick={toggleNavbar} // کلیک برای باز/بستن منو // Click to toggle menu
          aria-controls="navbarNav"
          aria-expanded={isOpen}
          aria-label="Toggle navigation"
        >
          <div className="hamburger-lines"> {/* خطوط دکمه همبرگر // Hamburger lines */}
            <span className="line line-1"></span>
            <span className="line line-2"></span>
            <span className="line line-3"></span>
            <div className="hamburger-glow"></div> {/* افکت نور دکمه // Glow effect */}
          </div>
        </button>

        <div className={`collapse rtll navbar-collapse ${isOpen ? "show" : ""}`} id="navbarNav"> {/* منوی ناوبری بازشو // Collapsible navbar menu */}
          <ul className="navbar-nav ">
            <li className="nav-item ">
              <a className="nav-link" href="#home">خانه</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#about">درباره ما</a> 
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#service">خدمات</a> 
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#portfolio">پروژه ها</a> 
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#faq">راهنمای خدمات</a> 
            </li>
          </ul>
        </div>
      </div>
    </nav>{/* Intro Section | بخش معرفی */}
<div
  id="home"
  className="hero intro route bg-image section dark-background" // سکشن معرفی با پس‌زمینه تیره // Intro section with dark background
  style={{
    backgroundImage: `url(${introBg})`, // تصویر پس‌زمینه معرفی // Intro background image
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '100vh', // ارتفاع تمام صفحه // Full screen height
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  }}
  data-aos="fade-in" // انیمیشن ورود با AOS // AOS fade-in animation
>
  {/* محتوای دیگر | Other content */}

  <div className="overlay-itro"></div> {/* لایه تیره روی تصویر پس‌زمینه // Overlay layer */}
  <div className="intro-content"> {/* محتوای معرفی // Intro content */}
    <div className="table-cell">
      <div className="container">
        <h1
          className="intro-title mb-4"
          data-aos="fade-up"
          data-aos-delay="100"
          style={{
            fontWeight: "bold",
            textAlign: "center",
            letterSpacing: "2px"
          }}
        >
          Asma Rigi frontend developer {/* عنوان اصلی معرفی // Main intro title */}
        </h1>
        <p className="intro-subtitle ">
          <h1 className="color">
            <span id="typed"></span> {/* متن تایپ‌شونده با Typed.js // Typed text */}
            <span style={{ fontFamily: 'Bebas Neue' }}></span>
          </h1>
        </p>
      </div>
    </div>
  </div>
</div>

{/* About Section | بخش درباره من */}
<section id="about" className="about section">
  <div className="container" data-aos="fade-up" data-aos-delay="100">
    <div className="row gy-4 ">
      <div className="col-md-6">
        <div className="row justify-content-between gy-4">
          <div className="col-lg-7 about-info rtl">
            {/* اطلاعات شخصی | Personal info */}
            <p><strong>نام: </strong> <span>اسما ریگی</span></p>
            <p><strong>تحصیلات: </strong> <span>کارشناس علوم کامپیوتر</span></p>
            <p><strong>عنوان شغلی: </strong> <span>توسعه‌دهنده فرانت‌اند دی وی لوپر</span></p>
          </div>

          <div className="col-lg-5 logo-wrapper">
            <img src={intropro} className="img-fluid" alt="Profile" /> {/* تصویر پروفایل // Profile image */}
            {
              /* تصویر جایگزین غیرفعال‌شده // Optional alternate image */
              /* <img src={codeLogo2} className="img-fluid imgpro" alt="Profile" /> */
            }
          </div>
        </div>

        <div className="skills-content skills-animation ltr"> {/* بخش مهارت‌ها با انیمیشن // Skills section with animation */}
          <h5>مهارت‌ها</h5>

          {/* نوارهای پیشرفت مهارت‌ها | Skill progress bars */}
          <div className="progress">
            <span className="skill"><span>HTML</span> <i className="val">100%</i></span>
            <div className="progress-bar-wrap">
              <div className="progress-bar" role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
            </div>
          </div>

          <div className="progress">
            <span className="skill"><span>css</span> <i className="val">100%</i></span>
            <div className="progress-bar-wrap">
              <div className="progress-bar" role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
            </div>
          </div>

          <div className="progress">
            <span className="skill"><span>JavaScript</span> <i className="val">70%</i></span>
            <div className="progress-bar-wrap">
              <div className="progress-bar" role="progressbar" aria-valuenow="70" aria-valuemin="0" aria-valuemax="100"></div>
            </div>
          </div>

          <div className="progress">
            <span className="skill"><span>Tailwind Css</span> <i className="val">90%</i></span>
            <div className="progress-bar-wrap">
              <div className="progress-bar" role="progressbar" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100"></div>
            </div>
          </div>

          {/* End Skills Item | پایان آیتم‌های مهارت */}
          <div className="progress">
            <span className="skill"><span>Bootstrap</span> <i className="val">100%</i></span>
            <div className="progress-bar-wrap">
              <div className="progress-bar" role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
            </div>
          </div>

          <div className="progress">
            <span className="skill"><span>Materialize</span> <i className="val">90%</i></span>
            <div className="progress-bar-wrap">
              <div className="progress-bar" role="progressbar" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100"></div>
            </div>
          </div>
        </div>
      </div>

      <div className="col-md-6">
        <div className="about-me"> {/* توضیحات درباره من // About me description */}
          <h4>درباره من</h4>
       <p>
    زندگی یک مسیر پر از تجربه و یادگیری است.  همیشه به دنبال فرصت‌هایی برای رشد و پیشرفت هستم
    با انگیزه و تعهد، مهارت‌های خود را توسعه داده‌ام تا بتوانم در دنیای حرفه‌ای تأثیرگذار باشم
</p>
<p>
    توانایی من در تجزیه و تحلیل، خلاقیت و حل مسائل، به من این امکان را داده است که چالش‌ها را به فرصت‌های ارزشمند تبدیل کنم.
    با بهره‌گیری از دانش و تجربه، به دنبال ایجاد راهکارهای نوآورانه و مؤثر هستم
</p>
<p>
    هدف من نه تنها موفقیت فردی، بلکه ایجاد تأثیر مثبت در پروژه‌ها و همکاری‌های حرفه‌ای است
    با اشتیاق و پشتکار، به سوی آینده‌ای روشن و پر از فرصت‌های جدید حرکت می‌کنم
</p>
          {/* لیست مهارت‌ها به صورت تگ | Skill tags list */}
          <p style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
            {[
              'HTML', 'CSS', 'JavaScript', 'Bootstrap', 'React', 'Redux',
              'Tailwind Css', 'Materialize', 'UI/UX', 'Git & GitHub',
              'Illustrator', 'CorelDRAW', 'Photoshop'
            ].map((skill) => (
              <span className="skill-tag" key={skill}>{skill}</span> // تگ مهارت // Skill tag
            ))}
          </p>
        </div>
      </div>
    </div>
  </div>
</section>

        </div>
    );
};

export default DevFolio;
