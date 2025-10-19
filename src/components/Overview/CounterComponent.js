import React, { useEffect } from "react"; 
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; // ایمپورت آیکون‌ها از FontAwesome // Import FontAwesome icons
import { faBookOpen, faTasks, faPalette, faMobile } from "@fortawesome/free-solid-svg-icons"; // آیکون‌های ویژگی‌ها // Feature icons
import bac from "../images/counters-bg.jpg"; // تصویر پس‌زمینه بخش شمارنده // Background image for counter section
import $ from "jquery"; // ایمپورت jQuery برای انیمیشن شمارنده // Import jQuery for counter animation

const CounterComponent = () => {
  useEffect(() => {
    // تابع بررسی قابل مشاهده بودن عنصر در viewport // Check if element is visible in viewport
    function visible(partial) {
      const $t = $(partial),
        $w = $(window),
        viewTop = $w.scrollTop(),
        viewBottom = viewTop + $w.height(),
        _top = $t.offset().top,
        _bottom = _top + $t.height(),
        compareTop = partial === true ? _bottom : _top,
        compareBottom = partial === true ? _top : _bottom;

      return compareBottom <= viewBottom && compareTop >= viewTop && $t.is(":visible");
    }

    // رویداد اسکرول برای فعال‌سازی انیمیشن شمارنده // Scroll event to trigger counter animation
    $(window).scroll(function () {
      if (visible($(".counter"))) {
        if ($(".counter").hasClass("counter-loaded")) return; // جلوگیری از اجرای مجدد // Prevent re-trigger
        $(".counter").addClass("counter-loaded");

        $(".counter").each(function () {
          const $this = $(this);
          $({ Counter: 0 }).animate(
            { Counter: parseInt($this.text()) }, // مقدار اولیه شمارنده // Initial counter value
            {
              duration: 4000,
              easing: "swing",
              step: function () {
                $this.text(Math.ceil(this.Counter) + "%"); // نمایش درصد با انیمیشن // Display percentage with animation
              },
            }
          );
        });
      }
    });

    return () => {
      $(window).off("scroll"); // حذف لیسنر اسکرول هنگام خروج // Remove scroll listener on unmount
    };
  }, []);

  return (
    <div className="section-counter paralax-mf bg-image" style={{ backgroundImage: `url(${bac})` }}> {/* سکشن شمارنده با تصویر پس‌زمینه // Counter section with background image */}
      <div className="overlay-mf"></div> {/* لایه تیره روی تصویر // Overlay layer */}
      <div className="container">
        <div className="row z-index-top">
          {/* آیتم اول: یادگیری مداوم // First item: Continuous learning */}
          <div className="col-sm-3 col-lg-3">
            <div className="counter-box counter-box pt-4 pt-md-0">
              <div className="counter-ico">
                <span className="ico-circle">
                  <FontAwesomeIcon icon={faBookOpen} />
                </span>
              </div>
              <div className="counter-num">
                <p className="counter">100%</p>
                <span className="counter-text">روحیه یادگیری مداوم</span>
              </div>
            </div>
          </div>

          {/* آیتم دوم: مسئولیت‌پذیری // Second item: Responsibility */}
          <div className="col-sm-3 col-lg-3">
            <div className="counter-box pt-4 pt-md-0">
              <div className="counter-ico">
                <span className="ico-circle">
                  <FontAwesomeIcon icon={faTasks} />
                </span>
              </div>
              <div className="counter-num">
                <p className="counter">100%</p>
                <span className="counter-text">مسئولیت‌پذیری و زمان‌بندی مؤثر</span>
              </div>
            </div>
          </div>

          {/* آیتم سوم: خلاقیت طراحی // Third item: Design creativity */}
          <div className="col-sm-3 col-lg-3">
            <div className="counter-box pt-4 pt-md-0">
              <div className="counter-ico">
                <span className="ico-circle">
                  <FontAwesomeIcon icon={faPalette} />
                </span>
              </div>
              <div className="counter-num">
                <p className="counter">100%</p>
                <span className="counter-text">خلاقیت و دید طراحی</span>
              </div>
            </div>
          </div>

          {/* آیتم چهارم: طراحی ریسپانسیو // Fourth item: Responsive design */}
          <div className="col-sm-3 col-lg-3">
            <div className="counter-box pt-4 pt-md-0">
              <div className="counter-ico">
                <span className="ico-circle">
                  <FontAwesomeIcon icon={faMobile} />
                </span>
              </div>
              <div className="counter-num">
                <p className="counter">100%</p>
                <span className="counter-text">طراحی ریسپانسیو و موبایل‌پسند</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CounterComponent;
