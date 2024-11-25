"use client"
import React, { useEffect, useState } from 'react';
import Footer from "@/components/Footer/page";
import { IoIosSearch } from 'react-icons/io';
import GetStartedSection from "@/components/GetStartedSection/page";
import { Pagination, Stack } from '@mui/material';
import CourseList from './CourseList';
import Navbar from "@/components/Navbar/page";
import Navbar2 from "@/components/Navbar2/Navbar2";


const page = () => {
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
        <>
            <div className="overflow-x-hidden">
                <Navbar />
                <Navbar2 />
                <div className="pt-[50px] pb-[20px] lg:pb-[60px]" style={{ backgroundImage: "url('/images/breadcrumbs-bg.png')" }}>
                    <h3 className="text-center" style={{ fontSize: "36px", marginBottom: "24px", lineHeight: "30px" }}>Our Courses</h3>
                    <p className="text-center">
                        <span className="text-red">HOME</span> <span className="text-[#5d5f5f]"> / COURSES</span>
                    </p>
                </div>
                <div className="px-[20px] lg:px-[80px]">
                    <div className="pt-[20px] xl:pt-[110px] pb-[20px] lg:pb-[110px]">
                        <div className="flex justify-between flex-col md:flex-row space-y-4 md:space-y-0 items-center">
                            <div>
                                <p className="text-gray" style={{ fontSize: "16px", fontWeight: 400, lineHeight: "28px" }}>Showing 1-6 Of 15 Results</p>
                            </div>
                            <div className="relative">
                                <input type="text" placeholder="Search your courses ..." className="hidden xl:block p-[12px] text-sm rounded-r-full w-[350px] text-gray-700 pl-6 pr-14 md:pr-28 focus:outline-none shadow-md" />
                                <input type="text" placeholder="Search your courses ..." className="block xl:hidden p-[12px] text-sm rounded-full w-80 text-gray-700 pl-6 pr-14 md:pr-28 focus:outline-none shadow-md" />
                                <div className="absolute top-1/2 right-[2px] transform -translate-y-1/2 flex items-center space-x-2 bg-[#543EE8] p-2 rounded-full">
                                    <p className="text-white">Search</p>
                                    <IoIosSearch className="text-white text-2xl" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="relative">
                    <div>
                        <CourseList />
                    </div>
                </div>
                <Stack alignItems={"center"} spacing={2} className="mb-4">
                    <Pagination count={2} variant="text" color="secondary" />
                </Stack>
                <div className="lg:px-[100px] px-[20px]">
                    <GetStartedSection />
                </div>
                <Footer />
            </div>
        </>
    );
};

export default page;
