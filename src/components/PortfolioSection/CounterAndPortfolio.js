import React, { useEffect, useState, useRef } from "react";
import Isotope from "isotope-layout"; // کتابخانه ایزوتوپ برای فیلتر و چیدمان پروژه‌ها // Isotope library for filtering and layout
import { projects } from "./projectsData"; // داده‌های پروژه‌ها // Project data
import './PortfolioStyles.css'; // استایل‌های بخش پورتفولیو // Portfolio styles

const PortfolioSection = () => {
  const [isotope, setIsotope] = useState(null); // وضعیت ایزوتوپ // Isotope instance
  const [activeFilter, setActiveFilter] = useState("*"); // فیلتر فعال فعلی // Current active filter
  const sectionRef = useRef(null); // رفرنس به سکشن پورتفولیو // Reference to portfolio section
  const [hoveredCard, setHoveredCard] = useState(null); // کارت در حالت هاور // Hovered card index

  useEffect(() => {
    const iso = new Isotope(".isotope-container", {
      itemSelector: ".portfolio-item", // انتخاب آیتم‌ها برای چیدمان // Item selector for layout
      layoutMode: "masonry", // حالت چیدمان آجری // Masonry layout
      transitionDuration: "0.8s", // مدت زمان انتقال بین فیلترها // Transition duration
      stagger: 3, // فاصله زمانی بین انیمیشن آیتم‌ها // Animation stagger
      resize: true,
      initLayout: true,
      masonry: {
        columnWidth: ".portfolio-item", // عرض ستون‌ها بر اساس آیتم‌ها // Column width based on items
        gutter: 0, // فاصله بین آیتم‌ها // Gutter spacing
      },
      sortBy: "id", // مرتب‌سازی بر اساس شناسه پروژه // Sort by project ID
      getSortData: {
        "original-order": (itemElem) =>
          itemElem.getAttribute("data-original-order"), // ترتیب اولیه از ویژگی داده // Original order from data attribute
        "id": (itemElem) =>
          parseInt(itemElem.getAttribute("data-id"), 10), // شناسه عددی پروژه // Numeric project ID
      },
    });

    setIsotope(iso); // ذخیره نمونه ایزوتوپ در state // Save isotope instance

    const items = document.querySelectorAll(".portfolio-item");
    items.forEach((item, index) => {
      item.setAttribute("data-original-order", index); // تنظیم ترتیب اولیه برای هر آیتم // Set initial order
      setTimeout(() => {
        item.classList.add("animate-in"); // افزودن کلاس انیمیشن به آیتم‌ها // Add animation class
      }, index * 100);
    });

    return () => {
      iso.destroy(); // پاک‌سازی ایزوتوپ هنگام خروج از کامپوننت // Destroy isotope on unmount
    };
  }, []);

  const handleFilterClick = (filterValue) => {
    setActiveFilter(filterValue); // تنظیم فیلتر انتخاب‌شده // Set selected filter

    document.querySelectorAll(".portfolio-filters li").forEach((btn) => {
      btn.classList.remove("filter-active"); // حذف کلاس فعال از همه دکمه‌ها // Remove active class from all buttons
      if (btn.getAttribute("data-filter") === filterValue) {
        btn.classList.add("filter-active"); // افزودن کلاس فعال به دکمه انتخاب‌شده // Add active class to selected button
      }
    });

    if (isotope) {
      isotope.arrange({
        filter: filterValue, // اعمال فیلتر به ایزوتوپ // Apply filter to isotope
        sortBy: "id", // مرتب‌سازی بر اساس شناسه پروژه // Sort by project ID
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
    <section id="portfolio" className="portfolio section" ref={sectionRef}> {/* سکشن اصلی پورتفولیو // Main portfolio section */}
      <div className="container section-title" data-aos="fade-up"> {/* عنوان بخش با انیمیشن AOS // Section title with AOS animation */}
        <h2 className="gradient-text">گالری پروژه‌ها</h2>
        <p>نمایشگاهی از بهترین آثار و دستاوردهای من در زمینه طراحی و توسعه وب</p>
      </div>

      <div className="container">
        <div className="isotope-layout"> {/* لایه ایزوتوپ برای فیلتر و چیدمان آیتم‌ها // Isotope layout wrapper */}
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
                  className={`col-lg-4 col-md-6 portfolio-item isotope-item filter-${project.category}`} // کلاس فیلتر بر اساس دسته‌بندی پروژه // Filter class based on project category
                  data-original-order={index}
                  data-id={project.id} // شناسه پروژه برای مرتب‌سازی // Project ID for sorting
                  onMouseEnter={() => setHoveredCard(index)} // افکت هاور هنگام ورود موس // Hover effect on mouse enter
                  onMouseLeave={() => setHoveredCard(null)} // حذف افکت هاور هنگام خروج موس // Remove hover effect on mouse leave
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
                              <i className="bi bi-box-arrow-up-right"></i> Live
                            </a>
                            <a
                              href={project.demoUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              onClick={(e) => e.stopPropagation()}
                              className="btn btn-sm shadow-sm"
                            >
                              <i className="bi bi-play-circle"></i> Code
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
                          {project.category === "product" && "آموزشی"}
                          {project.category === "sh" && "شرکتی"}
                          {project.category === "app" && "فروشگاهی"}

                        </div>
                      </div>
                    </div>
                    {hoveredCard === index && <div className="card-hover-effect"></div>}
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
