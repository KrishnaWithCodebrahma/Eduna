"use client"
import React, { useEffect, useState } from 'react';
import Footer from "@/components/Footer/Footer";
import ScrollToTop from 'react-scroll-to-top';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import NewsGrid from './NewsGrid';
import GetStartedSection from "@/components/GetStartedSection/GetStartedSection"
import Navbar from "@/components/Navbar/Navbar";
import Navbar2 from "@/components/Navbar2/Navbar2";

const News = () => {
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(true)
    const [isNavbarFixed, setIsNavbarFixed] = useState(false);

    const handlePageChange = (event, value) => {
        setPage(value);
    };
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
        <div className=' overflow-x-hidden'>
            <Navbar />
            <div
                className={`${isNavbarFixed ? "fixed top-0 left-0 w-full z-20  drop-shadow-xl bg-white" : ""
                    }`}
            >
                <Navbar2 />
            </div>
            <div className='pt-[90px] pb-[90px] ' style={{ backgroundImage: "url('/images/breadcrumbs-bg.png')" }}>
                <h3 className=' text-center' style={{ fontSize: "36px", marginBottom: "24px", lineHeight: "30px" }}>Latest Blog & News</h3>
                <p className=' text-center'><span className='text-red'>HOME</span> <span className='text-[#5d5f5f]'> / Latest Blog</span></p>
            </div>

            <div className=''>
                <NewsGrid />
            </div>

            {/* Using MUI */}
            <Stack alignItems={"center"} spacing={2} className='mb-4' >
                <Pagination count={2} variant="text" color="secondary" />
            </Stack>

            <div className='px-[20px] lg:px-[110px]'>
                <GetStartedSection />
            </div>
            <ScrollToTop width="0" height="0" smooth component={
                <div className="bg-blue-500 text-white flex items-center justify-center rounded-full w-16 h-16 shadow-3xl hover:bg-yellow-600 transition duration-300">
                    ↑
                </div>}
            />
            <Footer />
        </div>
    )
}

export default News
