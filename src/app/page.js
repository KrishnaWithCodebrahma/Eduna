"use client";

import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar/page";
import Navbar2 from "@/components/Navbar2/Navbar2";
import Hero from "@/components/Hero/page";
import Hero2 from "@/components/Hero2/page";
import Courses from "@/components/Courses/page";
import WhyUs from "@/components/WhyUs/page";
import Testominal from "@/components/Testominal/page";
import News from "@/components/News/page";
import Footer from "@/components/Footer/page";
import ScrollToTop from "react-scroll-to-top";
// import ScrollToTopButton from "@/components/common/ScrollToTopButton";

export default function Home() {

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const handleLoad = () => {
      setLoading(false);
    };

    window.onload = handleLoad;

    const timeout = setTimeout(() => setLoading(false), 1000);

    return () => clearTimeout(timeout);
  }, []);
  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="relative flex items-center justify-center">
          <div className="animate-spin rounded-full h-28 w-28 border-t-4 border-violet border-solid"></div>
          <img src="/images/favicon.svg" className="absolute h-16 w-16" />
        </div>
      </div>
    );
  }

  return (
    <div className="overflow-x-hidden select-none ">
      <Navbar />
      <Navbar2 />
      <Hero />
      <Hero2 />
      <Courses />
      <WhyUs />
      <Testominal />
      <News />
      <Footer />
      <div className="fixed z-50">
        <ScrollToTop
          width="0"
          height="0"
          smooth
          component={
            <div className="bg-blue-500 text-white flex items-center justify-center rounded-full w-16 h-16 shadow-3xl hover:bg-yellow-600 transition duration-300">
              ↑
            </div>
          }
        />
        {/* <ScrollToTopButton /> */}
      </div>
    </div>
  );
}
