import { useState, useEffect } from "react";
import { ScrollToTop } from "react-scroll-to-top"; // Assuming you are using this component.

function ScrollToTopButton() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPosition = window.scrollY;
      const scrollProgress = (scrollPosition / scrollHeight) * 100;
      setProgress(scrollProgress);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <ScrollToTop
      width="0"
      height="0"
      smooth
      component={
        <div className="relative flex items-center justify-center rounded-full w-16 h-16 bg-transparent">
          {/* Outer Ring as Progress Bar */}
          <div
            className="absolute w-full h-full rounded-full border-4 border-gray-200"
            style={{
              background: `conic-gradient(from 90deg, #4CAF50 ${progress}%, transparent ${progress}%)`,
            }}
          />

          {/* Arrow Icon in Center */}
          <div className="z-10 bg-transparent text-white flex items-center justify-center rounded-full w-10 h-10 shadow-md hover:text-yellow-500 transition duration-300">
            ↑
          </div>
        </div>
      }
    />
  );
}

export default ScrollToTopButton;
