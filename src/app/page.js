"use client";

import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar/Navbar";
import Navbar2 from "@/components/Navbar2/Navbar2";
import Hero from "@/components/Hero/Hero";
import Hero2 from "@/components/Hero2/Hero2";
import Courses from "@/components/Courses/Courses";
import WhyUs from "@/components/WhyUs/WhyUs";
import Testominal from "@/components/Testominal/Testominal";
import News from "@/components/News/News";
import Footer from "@/components/Footer/Footer";
import ScrollToTop from "react-scroll-to-top";

export default function Home() {
  const [loading, setLoading] = useState(true);
  const [isNavbarFixed, setIsNavbarFixed] = useState(false);

  useEffect(() => {
    // Handle page loading state
    const handleLoad = () => {
      setLoading(false);
    };
    window.onload = handleLoad;

    const timeout = setTimeout(() => setLoading(false), 1000);

    // Cleanup timeout
    return () => clearTimeout(timeout);
  }, []);

  useEffect(() => {
    // Handle scroll events to toggle Navbar2's fixed position
    const handleScroll = () => {
      if (window.scrollY > 170) {
        setIsNavbarFixed(true);
      } else {
        setIsNavbarFixed(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup event listener
    return () => window.removeEventListener("scroll", handleScroll);
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
    <div className="overflow-x-hidden">
      <Navbar />
      
      <div
        className={`${
          isNavbarFixed ? "fixed top-0 left-0 w-full z-20  drop-shadow-xl bg-white" : ""
        }`}
      >
        <Navbar2 />
      </div>
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
      </div>
    </div>
  );
}
