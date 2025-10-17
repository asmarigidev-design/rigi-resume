import React from 'react'; 

const Contact = () => {
  return (
    <section id="" className="contact section"> {/* سکشن تماس با ما // Contact section */}
      
      {/* عنوان بخش تماس |  section title */}
      <div className="container section-title" data-aos="fade-up">
        <h2>تماس با ما</h2>
        <p>نیازهای شما را برآورده می‌کنیم، با ارائه راهکارهای عالی تا ارتباط مؤثر</p>
      </div>
      {/* پایان عنوان بخش | End of section title */}

      <div className="container" data-aos="fade-up" data-aos-delay="100">
        <div className="info-wrap rtl" data-aos="fade-up" data-aos-delay="200">
          <div className="row gy-5 ">
            
            {/* آیتم آدرس | Address item */}
            <div className="col-lg-4 ">
              <div className="info-item d-flex align-items-center ">
                <i className="bi bi-geo-alt flex-shrink-0 "></i>
                <div className='px-3'>
                  <h3>آدرس</h3>
                  <p> ...................... </p>
                </div>
              </div>
            </div>

            {/* آیتم تماس تلفنی | Phone item */}
            <div className="col-lg-4">
              <div className="info-item d-flex align-items-center">
                <i className="bi bi-telephone flex-shrink-0"></i>
                <div className='px-3'>
                  <h3>تماس با ما</h3>
                  <p>0933099999</p>
                </div>
              </div>
            </div>

            {/* آیتم ایمیل | Email item */}
            <div className="col-lg-4">
              <div className="info-item d-flex align-items-center">
                <i className="bi bi-envelope flex-shrink-0"></i>
                <div className='px-3'>
                  <h3>ایمیل ما</h3>
                  <p>asmarigi.dev@gmail.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* فرم تماس | Contact form */}
        <form action="forms/contact.php" method="post" className="php-email-form" data-aos="fade-up" data-aos-delay="300">
          <div className="row gy-4">
            
            {/* فیلد نام | Name field */}
            <div className="col-md-6">
              <input type="text" name="name" className="form-control" placeholder="نام شما" required />
            </div>

            {/* فیلد ایمیل | Email field */}
            <div className="col-md-6">
              <input type="email" className="form-control" name="email" placeholder="ایمیل شما" required />
            </div>

            {/* فیلد موضوع | Subject field */}
            <div className="col-md-12">
              <input type="text" className="form-control" name="subject" placeholder="موضوع" required />
            </div>

            {/* فیلد پیام | Message field */}
            <div className="col-md-12">
              <textarea className="form-control" name="message" rows="6" placeholder="پیام شما" required></textarea>
            </div>

            {/* دکمه ارسال و پیام‌های وضعیت | Submit button and status messages */}
            <div className="col-md-12 text-center">
              <div className="loading">در حال بارگذاری...</div> {/* پیام بارگذاری // Loading message */}
              <div className="error-message"></div> {/* پیام خطا // Error message */}
              <div className="sent-message">پیام شما ارسال شد. متشکریم!</div> {/* پیام موفقیت // Success message */}
              <button type="submit">ارسال پیام</button> {/* دکمه ارسال // Submit button */}
            </div>
          </div>
        </form>
        {/* پایان فرم تماس | End of contact form */}
      </div>
    </section>
  );
};

export default Contact; 
