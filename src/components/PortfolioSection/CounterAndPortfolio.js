import React, { useEffect, useState, useRef } from "react"; 
import Isotope from "isotope-layout"; // ایمپورت کتابخانه Isotope برای فیلتر و چیدمان // Import Isotope for filtering and layout
import { projects } from "./projectsData"; // داده‌های پروژه‌ها // Project data
import './PortfolioStyles.css'; // استایل‌های بخش پورتفولیو // Portfolio section styles

const PortfolioSection = () => {
  const [isotope, setIsotope] = useState(null); // وضعیت ایزوتوپ // Isotope instance state
  const [activeFilter, setActiveFilter] = useState("*"); // فیلتر فعال // Active filter state
  const sectionRef = useRef(null); // رفرنس به سکشن پورتفولیو // Ref to portfolio section
  const [hoveredCard, setHoveredCard] = useState(null); // کارت در حالت هاور // Hovered card index

  useEffect(() => {
    const iso = new Isotope(".isotope-container", { // مقداردهی اولیه ایزوتوپ // Initialize Isotope
      itemSelector: ".portfolio-item", // انتخاب آیتم‌ها // Item selector
      layoutMode: "masonry", // حالت چیدمان // Masonry layout
      transitionDuration: "0.8s", // مدت زمان انتقال // Transition duration
      stagger: 3, // فاصله انیمیشن‌ها // Animation stagger
      resize: true,
      initLayout: true,
      masonry: {
        columnWidth: ".portfolio-item", // عرض ستون‌ها // Column width
        gutter: 0, // فاصله بین آیتم‌ها // Gutter spacing
      },
      sortBy: "original-order", // ترتیب اصلی آیتم‌ها // Original order sorting
      getSortData: {
        "original-order": (itemElem) =>
          itemElem.getAttribute("data-original-order"), // گرفتن ترتیب اصلی از ویژگی داده // Get original order from data attribute
      },
    });

    setIsotope(iso); // ذخیره ایزوتوپ در state // Save isotope instance

    const items = document.querySelectorAll(".portfolio-item"); // گرفتن آیتم‌های پروژه // Get portfolio items
    items.forEach((item, index) => {
      item.setAttribute("data-original-order", index); // تنظیم ترتیب اصلی // Set original order
      setTimeout(() => {
        item.classList.add("animate-in"); // افزودن کلاس انیمیشن // Add animation class
      }, index * 100);
    });

    return () => {
      iso.destroy(); // پاک‌سازی ایزوتوپ هنگام خروج // Destroy isotope on unmount
    };
  }, []);

  const handleFilterClick = (filterValue) => {
    setActiveFilter(filterValue); // تنظیم فیلتر انتخاب‌شده // Set selected filter

    document.querySelectorAll(".portfolio-filters li").forEach((btn) => {
      btn.classList.remove("filter-active"); // حذف کلاس فعال از همه دکمه‌ها // Remove active class
      if (btn.getAttribute("data-filter") === filterValue) {
        btn.classList.add("filter-active"); // افزودن کلاس فعال به دکمه انتخاب‌شده // Add active class to selected button
      }
    });

    if (isotope) {
      isotope.arrange({
        filter: filterValue, // اعمال فیلتر به ایزوتوپ // Apply filter
        sortBy: "original-order",
      });

      setTimeout(() => {
        document.querySelectorAll(".portfolio-item").forEach((item, index) => {
          item.classList.remove("animate-in"); // حذف انیمیشن قبلی // Remove previous animation
          setTimeout(() => {
            if (item.style.display !== "none") {
              item.classList.add("animate-in"); // افزودن انیمیشن به آیتم‌های قابل نمایش // Animate visible items
            }
          }, index * 80);
        });
      }, 400);
    }
  };

  return (
    <section id="portfolio" className="portfolio section" ref={sectionRef}> {/* سکشن پورتفولیو // Portfolio section */}
      <div className="container section-title" data-aos="fade-up"> {/* عنوان بخش با انیمیشن AOS // Section title with AOS animation */}
        <h2 className="gradient-text">گالری پروژه‌ها</h2>
        <p>نمایشگاهی از بهترین آثار و دستاوردهای من در زمینه طراحی و توسعه وب</p>
      </div>

      <div className="container">
        <div className="isotope-layout"> {/* لایه ایزوتوپ برای فیلتر و چیدمان // Isotope layout wrapper */}
          <ul className="portfolio-filters isotope-filters"> {/* دکمه‌های فیلتر پروژه‌ها // Project filter buttons */}
            <li
              className={activeFilter === ".filter-product" ? "filter-active" : ""}
              onClick={() => handleFilterClick(".filter-product")}
              data-filter=".filter-product"
            >
              آموزشی
            </li>
            <li
              className={activeFilter === ".filter-app" ? "filter-active" : ""}
              onClick={() => handleFilterClick(".filter-app")}
              data-filter=".filter-app"
            >
              فروشگاهی
            </li>
            <li
              className={activeFilter === ".filter-sh" ? "filter-active" : ""}
              onClick={() => handleFilterClick(".filter-sh")}
              data-filter=".filter-sh"
            >
              شرکتی
            </li>
            <li
              className={activeFilter === "*" ? "filter-active" : ""}
              onClick={() => handleFilterClick("*")}
              data-filter="*"
            >
              همه پروژه‌ها
            </li>
          </ul>

          <div className="isotope-container-wrapper"> {/* کانتینر آیتم‌ها // Items container */}
            <div className="row g-5 isotope-container"> {/* ردیف آیتم‌های پروژه // Project items row */}
              {projects.map((project, index) => (
                <div
                  key={index}
                  className={`col-lg-4 col-md-6 portfolio-item isotope-item filter-${project.category}`} // آیتم پروژه با کلاس فیلتر // Project item with filter class
                  data-original-order={index}
                  onMouseEnter={() => setHoveredCard(index)} // هاور برای افکت // Hover effect
                  onMouseLeave={() => setHoveredCard(null)}
                >
                  <div className="portfolio-card-wrapper"> {/* کارت پروژه // Project card wrapper */}
                    <div className="card h-100 shadow-sm portfolio-card">
                      <div className="portfolio-image-container position-relative"> {/* تصویر پروژه با موقعیت نسبی // Project image container */}
                        <img
                          src={project.image}
                          className="card-img-top"
                          alt={project.title}
                        />

                        <div className="portfolio-overlay"> {/* لایه روی تصویر با دکمه‌ها و توضیحات // Overlay with buttons and description */}
                          <div className="image-buttons position-absolute bottom-0 start-50 translate-middle-x mb-2 d-flex gap-2">
                            <a
                              href={project.liveUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              onClick={(e) => e.stopPropagation()}
                              className="btn btn-sm shadow-sm"
                            >
                              <i className="bi bi-box-arrow-up-right"></i> Live {/* لینک اجرای پروژه // Live project link */}
                            </a>

                            <a
                              href={project.demoUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              onClick={(e) => e.stopPropagation()}
                              className="btn btn-sm shadow-sm"
                            >
                              <i className="bi bi-play-circle"></i> Code {/* لینک کد پروژه // Project code link */}
                            </a>
                          </div>

                          <div className="portfolio-icons"> {/* عنوان و توضیح پروژه // Project title and description */}
                            <span>{project.title}</span>
                            <p className="card-text text-muted text-right mb-3">
                              {project.description}
                            </p>
                          </div>
                        </div>

                        <div className="portfolio-category-badge"> {/* نشان دسته‌بندی پروژه // Project category badge */}
                          {project.category === "app" && "فروشگاهی"}
                          {project.category === "product" && "آموزشی"}
                          {project.category === "sh" && "شرکتی"}
                        </div>
                      </div>
                    </div>
                    {hoveredCard === index && <div className="card-hover-effect"></div>} {/* افکت هاور کارت // Card hover effect */}
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

export default PortfolioSection; 
