import React from 'react';
import './Loader.css'; 
const Loader = () => {
  return (
    <div className="quantum-loader"> {/* کانتینر اصلی لودر // Main loader container */}
      <div className="quantum-sphere"> {/* کره مرکزی با حلقه‌ها و ذرات // Central sphere with rings and particles */}
        <div className="core"></div> {/* هسته مرکزی // Core of the loader */}
        <div className="orbit-ring ring-1"> {/* حلقه اول مدار // First orbit ring */}
          <div className="quantum-dot dot-1"></div> {/* نقطه اول کوانتومی // First quantum dot */}
        </div>
        <div className="orbit-ring ring-2"> {/* حلقه دوم مدار // Second orbit ring */}
          <div className="quantum-dot dot-2"></div> {/* نقطه دوم کوانتومی // Second quantum dot */}
        </div>
        <div className="orbit-ring ring-3"> {/* حلقه سوم مدار // Third orbit ring */}
          <div className="quantum-dot dot-3"></div> {/* نقطه سوم کوانتومی // Third quantum dot */}
        </div>
        <div className="energy-wave wave-1"></div> {/* موج انرژی اول // First energy wave */}
        <div className="energy-wave wave-2"></div> {/* موج انرژی دوم // Second energy wave */}
        <div className="energy-wave wave-3"></div> {/* موج انرژی سوم // Third energy wave */}
        <div className="floating-particles"> {/* ذرات شناور داخلی // Inner floating particles */}
          <div className="particle p1"></div> {/* ذره اول // Particle 1 */}
          <div className="particle p4"></div> {/* ذره چهارم // Particle 4 */}
        </div>
      </div>

      <div className="floating-particles"> {/* ذرات شناور خارجی // Outer floating particles */}
        <div className="particle p1"></div> {/* ذره اول // Particle 1 */}
        <div className="particle p2"></div> {/* ذره دوم // Particle 2 */}
        <div className="particle p3"></div> {/* ذره سوم // Particle 3 */}
        <div className="particle p4"></div> {/* ذره چهارم // Particle 4 */}
        <div className="particle p5"></div> {/* ذره پنجم // Particle 5 */}
        <div className="particle p6"></div> {/* ذره ششم // Particle 6 */}
      </div>

      <div className="loader-content"> {/* محتوای متنی و نوار پیشرفت // Text content and progress bar */}
        <h2 className="loader-title"> {/* عنوان لودینگ // Loading title */}
          <span className="letter">L</span> 
          <span className="letter">O</span> 
          <span className="letter">A</span> 
          <span className="letter">D</span> 
          <span className="letter">I</span> 
          <span className="letter">N</span> 
          <span className="letter">G</span> 
          <span className="letter">.</span> 
          <span className="letter">.</span> 
          <span className="letter">.</span> 
        </h2>
        <div className="progress-container"> {/* کانتینر نوار پیشرفت // Progress bar container */}
          <div className="progress-bar"> {/* نوار پیشرفت // Progress bar */}
            <div className="progress-fill"></div> {/* پرکننده نوار پیشرفت // Progress fill */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Loader; 
