import React, { useEffect } from "react"; 
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; // ایمپورت آیکون‌ها از FontAwesome // Import FontAwesome icons
import { faChevronDown } from "@fortawesome/free-solid-svg-icons"; // آیکون فلش پایین برای سوالات // Chevron down icon for FAQ

const faqData = [
  {
    num: "1.",
    question: "طراحی سایت‌های تعاملی و مدرن",
    answer: "توسعه وب‌سایت‌های پیشرفته با طراحی منحصر‌به‌فرد، عملکرد بهینه و تجربه کاربری عالی، با تمرکز بر تعامل و جذابیت بصری.",
  },
  {
    num: "2.",
    question: "بهینه‌سازی عملکرد و تجربه کاربری",
    answer: "استفاده از تکنیک‌های بهینه‌سازی سرعت، کاهش زمان بارگذاری صفحات، و بهبود تعامل برای ایجاد تجربه کاربری روان و بی‌وقفه.",
  },
  {
    num: "3.",
    question: "توسعه وب خلاقانه",
    answer: "ایجاد وب‌سایت‌های نوآورانه و پویا با استفاده از فناوری‌های مدرن برای ارائه راهکارهای دیجیتال جذاب و تأثیرگذار.",
  },
  {
    num: "4.",
    question: "رابط‌های کاربری مدرن و هوشمند",
    answer: "طراحی رابط‌های کاربری مبتنی بر تجربه کاربر (UX) با استفاده از فریم‌ورک‌های پیشرفته برای بهبود قابلیت تعامل و دسترسی‌پذیری.",
  },
  {
    num: "5.",
    question: "توسعه اپلیکیشن‌های تحت وب",
    answer: "ساخت اپلیکیشن‌های مقیاس‌پذیر، واکنش‌گرا و امن با بهره‌گیری از معماری مدرن برای ارتقای عملکرد و تجربه کاربران.",
  },
];

const FaqSection = () => {
  useEffect(() => {
    const faqItems = document.querySelectorAll(".faq-item h3"); // گرفتن همه عنوان‌های سوالات // Select all FAQ headers

    const toggleFaq = (event) => {
      const parent = event.currentTarget.parentNode; // گرفتن والد برای تغییر کلاس // Get parent element
      parent.classList.toggle("faq-active"); // فعال/غیرفعال کردن سوال // Toggle FAQ active class

      const icon = parent.querySelector(".faq-icon"); // گرفتن آیکون فلش // Select chevron icon
      icon.classList.toggle("open"); // چرخش آیکون هنگام باز شدن // Toggle icon rotation
    };

    faqItems.forEach((faqItem) => {
      faqItem.addEventListener("click", toggleFaq); // افزودن رویداد کلیک به هر سوال // Add click event to each FAQ
    });

    return () => {
      faqItems.forEach((faqItem) => {
        faqItem.removeEventListener("click", toggleFaq); // حذف رویداد هنگام خروج // Cleanup event listeners
      });
    };
  }, []);

  return (
    <section id="faq" className="faq section"> {/* سکشن سوالات متداول // FAQ section */}
      <div className="container rtl">
        <div className="row gy-4">
          <div className="col-lg-4">
            <div className="content ">
              <h3>
                <strong>توسعه فرانت‌اند و بهینه‌سازی تجربه کاربری</strong> {/* عنوان بخش سوالات // FAQ section title */}
              </h3>
              <p>
                این بخش، مرتبط با توسعه فرانت‌اند هست... {/* توضیح کلی درباره خدمات // General description */}
              </p>
            </div>
          </div>
          <div className="col-lg-8 ">
            <div className="faq-container "> {/* کانتینر سوالات متداول // FAQ container */}
              {faqData.map((item, index) => (
                <div key={index} className="faq-item "> {/* آیتم سوال // FAQ item */}
                  <h3 style={{ display: "flex", alignItems: "center" }}>
                    <span className="num">{item.num}</span> {/* شماره سوال // Question number */}
                    <span style={{ flexGrow: 1 }}>{item.question}</span> {/* متن سوال // Question text */}
                    <FontAwesomeIcon className="faq-icon" icon={faChevronDown} // آیکون فلش برای باز/بستن پاسخ // Chevron icon for toggle
                      style={{
                        backgroundColor: '#f0f4f8',
                        padding: '8px',
                        borderRadius: '50%',
                        marginLeft: 'auto',
                        transition: 'transform 0.3s',
                      }} />
                  </h3>
                  <div className="faq-content"> {/* محتوای پاسخ سوال // FAQ answer content */}
                    <p>{item.answer}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FaqSection; 
