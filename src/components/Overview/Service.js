import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; 
import { faDesktop, faMobileAlt, faPaintBrush, faClock, faLaptopCode, faCode } from '@fortawesome/free-solid-svg-icons'; // آیکون‌های خدمات // Service icons

function Service() {
  return (
    <section id="service" className="services-mf route"> {/* سکشن خدمات سایت // Services section */}
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            <div className="container section-title"> {/* عنوان بخش خدمات با انیمیشن // Section title with animation */}
              <h2>خدمات</h2>
              <p className="subtitle-a">
                به عنوان یک توسعه‌دهنده فرانت‌اند، تمرکز من بر ایجاد رابط‌های کاربری مدرن، بهینه‌سازی عملکرد و ارائه تجربه‌ای روان و تعاملی برای کاربران است.  
                با استفاده از فناوری‌های نوین و طراحی واکنش‌گرا، وب‌سایت‌هایی می‌سازم که نه‌تنها زیبا، بلکه سریع و کاربردی باشند.
              </p>
              <div className="line-mf"></div> {/* خط تزئینی زیر عنوان // Decorative line below title */}
            </div>
          </div>
        </div>

        <div className="row">
          {/* آیتم اول: طراحی وب | Web Design */}
          <div className="col-md-4">
            <div className="service-box">
              <div className="service-ico">
                <div className="ico-circle-wrapper">
                  <span className="ico-circle">
                    <FontAwesomeIcon icon={faDesktop} />
                    <div className="icon-pulse"></div> {/* افکت پالس آیکون // Icon pulse effect */}
                  </span>
                </div>
              </div>
              <div className="service-content">
                <h2 className="s-title">طراحی وب</h2>
                <p className="s-description text-center">
                  به ایجاد تجربه‌های بصری منحصر‌به‌فرد و کاربرپسند علاقه دارم.
                  با استفاده از اصول طراحی مدرن، تایپوگرافی و رنگ‌بندی حرفه‌ای، وب‌سایت‌هایی زیبا و کاربردی طراحی می‌کنم. 
                  هدف من خلق رابط‌هایی است که نه تنها چشم‌نواز باشند، بلکه باعث تعامل بهتر کاربران با وب‌سایت شوند.
                </p>
              </div>
            </div>
          </div>

          {/* آیتم دوم: توسعه وب | Web Development */}
          <div className="col-md-4">
            <div className="service-box">
              <div className="service-ico">
                <div className="ico-circle-wrapper">
                  <span className="ico-circle">
                    <FontAwesomeIcon icon={faLaptopCode} />
                    <div className="icon-pulse"></div>
                  </span>
                </div>
              </div>
              <div className="service-content">
                <h2 className="s-title">توسعه وب</h2>
                <p className="s-description text-center">
                  توسعه‌دهنده فرانت‌اند با تجربه در ایجاد رابط‌های کاربری مدرن، واکنش‌گرا و کارآمد هستم. 
                  با استفاده از HTML، CSS، JavaScript و فریم‌ورک‌های مطرح، می‌توانم تجربه‌ای روان و جذاب برای کاربران ایجاد کنم. 
                  علاقه‌مند به حل مسائل پیچیده، بهینه‌سازی عملکرد و طراحی خلاقانه هستم. 
                </p>
              </div>
            </div>
          </div>

          {/* آیتم سوم: توسعه با عملکرد بالا | High Performance Web */}
          <div className="col-md-4">
            <div className="service-box">
              <div className="service-ico">
                <div className="ico-circle-wrapper">
                  <span className="ico-circle">
                    <FontAwesomeIcon icon={faCode} />
                    <div className="icon-pulse"></div>
                  </span>
                </div>
              </div>
              <div className="service-content">
                <h2 className="s-title">توسعه وب با عملکرد بالا</h2>
                <p className="s-description text-center">
                  ایجاد وب‌سایت‌های سریع، بهینه و کارآمد با استفاده از فناوری‌های مدرن و تکنیک‌های حرفه‌ای کدنویسی.  
                  افزایش سرعت بارگذاری صفحات، بهینه‌سازی درخواست‌ها و ارائه تجربه‌ای روان و تعاملی برای کاربران، از اهداف اصلی من در توسعه وب است.
                </p>
              </div>
            </div>
          </div>

          {/* آیتم چهارم: طراحی واکنش‌گرا | Responsive Design */}
          <div className="col-md-4">
            <div className="service-box">
              <div className="service-ico">
                <div className="ico-circle-wrapper">
                  <span className="ico-circle">
                    <FontAwesomeIcon icon={faMobileAlt} />
                    <div className="icon-pulse"></div>
                  </span>
                </div>
              </div>
              <div className="service-content">
                <h2 className="s-title">طراحی واکنش‌گرا</h2>
                <p className="s-description text-center">
                  در طراحی واکنش‌گرا  که تجربه‌ای روان و بهینه را برای کاربران در تمامی دستگاه‌ها فراهم می‌کنم.
                  با استفاده از تکنیک‌های مدرن مانند فریم‌ورک‌هاو... هدف من ایجاد تجربه‌ای یکپارچه و کاربرپسند است که به افزایش تعامل و رضایت کاربران کمک کند.
                </p>
              </div>
            </div>
          </div>

          {/* آیتم پنجم: بهینه‌سازی زمان | Performance Optimization */}
          <div className="col-md-4">
            <div className="service-box">
              <div className="service-ico">
                <div className="ico-circle-wrapper">
                  <span className="ico-circle">
                    <FontAwesomeIcon icon={faClock} />
                    <div className="icon-pulse"></div>
                  </span>
                </div>
              </div>
              <div className="service-content">
                <h2 className="s-title">بهینه‌سازی زمان و عملکرد</h2>
                <p className="s-description text-center">
                  بهینه‌سازی عملکرد و کاهش زمان بارگذاری صفحات را به عنوان بخشی از توسعه فرانت‌اند در نظر می‌گیرم.
                  و تجربه‌ای سریع‌تر و روان‌تر برای کاربران فراهم می‌کنم. هدف من ایجاد وب‌سایت‌هایی است که در کمترین زمان ممکن اجرا شوند 
                  و تعامل کاربری را بهبود ببخشند.
                </p>
              </div>
            </div>
          </div>

          {/* آیتم ششم: طراحی گرافیک | Graphic Design */}
          <div className="col-md-4">
            <div className="service-box">
              <div className="service-ico">
                <div className="ico-circle-wrapper">
                  <span className="ico-circle">
                    <FontAwesomeIcon icon={faPaintBrush} />
                    <div className="icon-pulse"></div>
                  </span>
                </div>
              </div>
              <div className="service-content">
                <h2 className="s-title">طراحی گرافیک</h2>
                <p className="s-description text-center">
                  طراح گرافیک هستم که به خلق تصاویر و هویت‌های بصری منحصر‌به‌فرد علاقه دارم.
                  می‌توانم طرح‌هایی جذاب و حرفه‌ای برای برندها، تبلیغات و رسانه‌های دیجیتال ایجاد کنم.
                  هدف من ترکیب هنر و فناوری برای ارائه‌ی طراحی‌هایی است که تأثیرگذار و به‌یادماندنی باشند.
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Service;
