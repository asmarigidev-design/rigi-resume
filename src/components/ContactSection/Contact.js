import React, { useState } from 'react'; 
import Swal from 'sweetalert2';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('loading');

    try {
      const response = await fetch('https://formspree.io/f/mqayjlww', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        // نمایش پیام موفقیت با SweetAlert2
        // Display success message with SweetAlert2
        Swal.fire({
          title: 'ارسال موفق',
          text: 'پیام شما با موفقیت ارسال شد.',
          icon: 'success',
          confirmButtonText: 'باشه',
          confirmButtonColor: '#3085d6',
          customClass: {
            title: 'swal-title',
            content: 'swal-text'
          }
        });
        
        setSubmitStatus('');
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: ''
        });
      } else {
        setSubmitStatus('error');
        // نمایش خطا با SweetAlert2
        // Display error with SweetAlert2
        Swal.fire({
          title: 'خطا!',
          text: 'متأسفانه خطایی در ارسال پیام رخ داد. لطفاً دوباره تلاش کنید.',
          icon: 'error',
          confirmButtonText: 'تلاش مجدد',
          confirmButtonColor: '#d33'
        });
      }
    } catch (error) {
      setSubmitStatus('error');
      // نمایش خطا با SweetAlert2
      // Display error with SweetAlert2
      Swal.fire({
        title: 'خطای ارتباط!',
        text: 'اتصال اینترنت خود را بررسی کنید و دوباره تلاش نمایید.',
        icon: 'error',
        confirmButtonText: 'تلاش مجدد',
        confirmButtonColor: '#d33'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="contact section">
      
      {/* عنوان بخش تماس  Contact section title */}
      <div className="container section-title" data-aos="fade-up">
        <h2>تماس با ما</h2>
        <p>نیازهای شما را برآورده می‌کنیم، با ارائه راهکارهای عالی تا ارتباط مؤثر</p>
      </div>

      <div className="container" data-aos="fade-up" data-aos-delay="100">
        <div className="info-wrap rtl" data-aos="fade-up" data-aos-delay="200">
          <div className="row gy-5">
            
            {/* آیتم آدرس  Address item */}
            <div className="col-lg-4">
              <div className="info-item d-flex align-items-center">
                <i className="bi bi-geo-alt flex-shrink-0"></i>
                <div className='px-3'>
                  <h3>آدرس</h3>
                  <p>......................</p>
                </div>
              </div>
            </div>

            {/* آیتم تماس تلفنیPhone call item*/}
            <div className="col-lg-4">
              <div className="info-item d-flex align-items-center">
                <i className="bi bi-telephone flex-shrink-0"></i>
                <div className='px-3'>
                  <h3>تماس با ما</h3>
                  <p>0933099999</p>
                </div>
              </div>
            </div>

            {/* آیتم ایمیل Email item*/}
            <div className="col-lg-4">
              <div className="info-item d-flex align-items-center">
                <i className="bi bi-envelope flex-shrink-0"></i>
                <div className='px-3'>
                  <h3>ایمیل ما</h3>
                  <p>
                    <a 
                      href="mailto:asmarigi.dev@gmail.com" 
                      style={{color: 'inherit', textDecoration: 'none'}}
                    >
                      asmarigi.dev@gmail.com
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* فرم تماس  Contact form*/}
        <form 
          onSubmit={handleSubmit} 
          className="php-email-form" 
          data-aos="fade-up" 
          data-aos-delay="300"
        >
          <div className="row gy-4">
            
            {/* فیلد نام  Name field*/}
            <div className="col-md-6">
              <input 
                type="text" 
                name="name" 
                className="form-control" 
                placeholder="نام شما" 
                required 
                value={formData.name}
                onChange={handleChange}
                disabled={isSubmitting}
              />
            </div>

            {/* فیلد ایمیل  Email field*/}
            <div className="col-md-6">
              <input 
                type="email" 
                className="form-control" 
                name="email" 
                placeholder="ایمیل شما" 
                required 
                value={formData.email}
                onChange={handleChange}
                disabled={isSubmitting}
              />
            </div>

            {/* فیلد موضوع  Subject field*/}
            <div className="col-md-12">
              <input 
                type="text" 
                className="form-control" 
                name="subject" 
                placeholder="موضوع" 
                required 
                value={formData.subject}
                onChange={handleChange}
                disabled={isSubmitting}
              />
            </div>

            {/* فیلد پیام Message field*/}
            <div className="col-md-12">
              <textarea 
                className="form-control" 
                name="message" 
                rows="6" 
                placeholder="پیام شما" 
                required 
                value={formData.message}
                onChange={handleChange}
                disabled={isSubmitting}
              ></textarea>
            </div>

            {/* دکمه ارسال و پیام‌های وضعیتSubmit button and status messages*/}
            <div className="col-md-12 text-center">
              {submitStatus === 'loading' && (
                <div className="loading">در حال بارگذاری...</div>
              )}
              
              {submitStatus === 'error' && (
                <div className="error-message">
                  متأسفانه خطایی در ارسال پیام رخ داد. لطفاً دوباره تلاش کنید.
                </div>
              )}
              
              <button 
                type="submit" 
                disabled={isSubmitting}
                style={{ 
                  opacity: isSubmitting ? 0.6 : 1,
                  cursor: isSubmitting ? 'not-allowed' : 'pointer'
                }}
              >
                {isSubmitting ? 'در حال ارسال...' : 'ارسال پیام'}
              </button>
            </div>
          </div>
        </form>
        {/* پایان فرم تماسEnd of contact form*/}
      </div>
    </section>
  );
};

export default Contact;