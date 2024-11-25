"use client"
import React, { useEffect, useState } from 'react'
import Footer from "@/components/Footer/Footer"
import { motion } from 'framer-motion';
import { RiGraduationCapLine } from "react-icons/ri";
import MovingImages from './MovingImages';
import AboutForm from './AboutForm';
import ScrollToTop from "react-scroll-to-top";
import { GiBlackBook } from 'react-icons/gi'
import { FaRegBookmark, FaStar, FaUser } from 'react-icons/fa'
import { PiGraduationCapThin } from 'react-icons/pi'
import Navbar from "@/components/Navbar/Navbar";
import Navbar2 from "@/components/Navbar2/Navbar2";


const About = () => {
    const [loading, setLoading] = useState(true)

    const images = [
        "/images/partner/partner-1/1.svg",
        "/images/partner/partner-1/2.svg",
        "/images/partner/partner-1/3.svg",
        "/images/partner/partner-1/4.svg",
        "/images/partner/partner-1/5.svg",
        "/images/partner/partner-1/6.svg",
    ];
    const [imageIndex, setImageIndex] = useState(0);
    useEffect(() => {
        const interval = setInterval(() => {
            setImageIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 3000);

        return () => clearInterval(interval);
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
        <section className='overflow-x-hidden'>
            <Navbar />
            <Navbar2 />
            <div className='pt-[90px] pb-[90px] ' style={{ backgroundImage: "url('/images/breadcrumbs-bg.png')" }}>
                <h3 className=' text-center' style={{ fontSize: "36px", marginBottom: "24px", lineHeight: "30px" }}>Latest Blog & News</h3>
                <p className=' text-center'><span className='text-red'>HOME</span> <span className='text-[#5d5f5f]'> / Latest Blog</span></p>
            </div>
            <div style={{
                backgroundImage: "url('images/section-bg-1.png')",
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                height: '100%',
            }} className=''>
                <div className=" px-4 py-12 pt-[80px]">
                    <div className="grid grid-cols-1  lg:grid-cols-2  gap-0">
                        <motion.div initial={{ x: -200, y: 3, opacity: 0 }}
                            whileInView={{ x: 0, opacity: 1 }}
                            transition={{
                                duration: 1.5,
                                delay: 0.5,
                                ease: 'easeInOut',
                            }} className="flex justify-center  pl-10 relative ">
                            <img
                                src="images/about/about-1/about-img.png"
                                alt="About Image"
                                className="rounded-br-[80px] object-cover max-w-full h-auto mb-10"
                            />
                            <div className='absolute top-[120px] left-[84px] '>
                                <img src='/images/testimonial/testimonial-1/shape-2.svg' />
                            </div>
                            <motion.div className="absolute top-[220px] left-[74px] bg-white p-4 rounded-lg shadow-lg flex items-center space-x-4"
                                animate={{
                                    y: ["0%", "5%", "-5%", "0%"],
                                }}
                                transition={{
                                    repeat: Infinity,
                                    duration: 3,
                                    ease: "easeInOut",
                                }}>
                                <div className="flex items-center justify-center w-16 h-16 bg-[#fceeee] rounded-full">
                                    <RiGraduationCapLine className="w-8 h-8 text-red" />
                                </div>
                                <div className="flex flex-col">
                                    <p className="text-red text-3xl font-semibold">9396+</p>
                                    <p className="text-gray text-sm font-medium">Enrolled Learners</p>
                                </div>
                            </motion.div>
                        </motion.div>
                        <motion.div initial={{ x: 200, opacity: 0 }}
                            whileInView={{ x: 0, opacity: 1 }}
                            transition={{
                                duration: 1.5,
                                delay: 0.5,
                                ease: 'easeInOut',
                            }} className="flex items-center justify-center px-[25px]">
                            <div className="">
                                <div>
                                    <h6 className="text-xl font-[16px] text-gray mb-[16px]">
                                        WELCOME TO EDUNA
                                    </h6>
                                    <h3 className="font-[36px] text-4xl mb-4">
                                        Digital Online Academy: Your <br />
                                        Path to Creative Excellence
                                    </h3>
                                    <p className="font-[16px] text-gray ">
                                        Excedteur sint occaecat cupidatat non proident sunt in culpa qui officia deserunt mollit.
                                    </p>
                                </div>
                                <div className="mt-[18px]">
                                    <ul className="mb-6 space-y-4 flex flex-col items-start justify-start">
                                        <li className="flex items-start space-x-3 ">
                                            <img src="/images/icons/icon-check-blue.svg" alt="icon-check-blue" className="w-4 h-4" />
                                            <span className="text-lg font-semibold text-gray">Our Expert Trainers</span>
                                        </li>
                                        <li className="flex items-start space-x-3 ">
                                            <img src="/images/icons/icon-check-blue.svg" alt="icon-check-blue" className="w-4 h-4" />
                                            <span className="text-lg font-semibold text-gray">Online Remote Learning</span>
                                        </li>
                                        <li className="flex items-start space-x-3 ">
                                            <img src="/images/icons/icon-check-blue.svg" alt="icon-check-blue" className="w-4 h-4" />
                                            <span className="text-lg font-semibold text-gray">Easy to follow curriculum</span>
                                        </li>
                                        <li className="flex items-start space-x-3 ">
                                            <img src="/images/icons/icon-check-blue.svg" alt="icon-check-blue" className="w-4 h-4" />
                                            <span className="text-lg font-semibold text-gray">Lifetime Access</span>
                                        </li>
                                    </ul>
                                </div>

                            </div>
                        </motion.div>
                    </div>
                </div>
                <div className='bg-black px-[10px] lg:px-[110px] relative'>
                    <div
                        className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 ' style={{ padding: "20px 0px 80px 0px" }}>
                        <motion.div initial={{ x: 110, opacity: 0 }}
                            whileInView={{ x: 0, opacity: 1 }}
                            transition={{ delay: 0.5, duration: 0.6 }} className='flex justify-center items-start gap-5 mt-10 '>
                            <div className='bg-[#ffcd2017] px-[18px] py-[14px] rounded-full'>
                                <img src='/images/features/features-1/1.svg' className='w-[40px] h-[35px] object-contain ' />
                            </div>
                            <div>
                                <h2 className='text-white  mb-[20px]  ' style={{ fontSize: "20px", lineHeight: "26px", fontWeight: 700 }} >Educator Support</h2>
                                <p className='text-[#ffffffcc] ' style={{ fontSize: "16px", lineHeight: "29px", fontWeight: 400 }} >
                                    Excedteur sint occaecat cupidatat non the  proident sunt in culpa
                                </p>
                            </div>
                        </motion.div>
                        <motion.div initial={{ x: 110, opacity: 0 }}
                            whileInView={{ x: 0, opacity: 1 }}
                            transition={{ delay: 0.7, duration: 0.6 }} className='flex justify-center items-start gap-5 mt-10 '>
                            <div className='bg-[#6fc08117] px-[18px] py-[14px] rounded-full'>
                                <img src='/images/features/features-1/2.svg' className='w-[40px] h-[35px] object-contain ' />
                            </div>
                            <div>
                                <h2 className='text-white  mb-[20px]  ' style={{ fontSize: "20px", lineHeight: "26px", fontWeight: 700 }} >Top Instructor</h2>
                                <p className='text-[#ffffffcc] ' style={{ fontSize: "16px", lineHeight: "29px", fontWeight: 400 }} >
                                    Excedteur sint occaecat  cupidatat non the proident sunt in culpa
                                </p>
                            </div>
                        </motion.div>
                        <motion.div initial={{ x: 110, opacity: 0 }}
                            whileInView={{ x: 0, opacity: 1 }}
                            transition={{ delay: 0.9, duration: 0.6 }} className='flex justify-center items-start gap-5 mt-10'>
                            <div className='bg-[#df434317] px-[18px] py-[14px] rounded-full'>
                                <img src='/images/features/features-1/3.svg' className='w-[40px] h-[35px] object-contain ' />
                            </div>
                            <div>
                                <h2 className='text-white  mb-[20px]  ' style={{ fontSize: "20px", lineHeight: "26px", fontWeight: 700 }} >Award Wining</h2>
                                <p className='text-[#ffffffcc] ' style={{ fontSize: "16px", lineHeight: "29px", fontWeight: 400 }} >
                                    Excedteur sint occaecat  cupidatat non the  proident sunt in culpa
                                </p>
                            </div>
                        </motion.div>
                    </div>
                    <motion.div
                        initial={{ y: 0, opacity: 0.3 }}
                        animate={{ y: [0, -15, 0], opacity: 0.5 }}
                        transition={{
                            duration: 4,
                            repeat: Infinity,
                            repeatType: "loop",
                            ease: "easeInOut",
                        }}
                        className="absolute top-[40px] left-[100px]"
                    >
                        <img src="/images/hero/home-1/shape-3.svg" />
                    </motion.div>
                    <motion.div
                        initial={{ y: 0, opacity: [0.1, 0.2, 0.3, 0.4, 0.6, 0.7, 0.8, 0.9, 1, 0.9, 0.8, 0.7, 0.6, 0.5, 0.4, 0.3, 0.2, 0.1] }}
                        animate={{ y: [0, 5, 10, 15, -15, -10, -5, 0], opacity: [0.1, 0.2, 0.3, 0.4, 0.6, 0.7, 0.8, 0.9, 1, 0.9, 0.8, 0.7, 0.6, 0.5, 0.4, 0.3, 0.2, 0.1] }} // Moves top and bottom with fading
                        transition={{
                            duration: 7,
                            repeat: Infinity,
                            repeatType: "loop",
                            ease: "easeInOut",
                        }}
                        className="absolute bottom-[100px] right-[20px] transform -translate-x-1/2 -translate-y-1/2"
                    >
                        <img src="/images/about/about-1/shape-3.svg" />
                    </motion.div>
                </div>
            </div>
            <div className='bg-[#f5f5f5] pt-[110px] pb-[110px]'>
                <div>
                    <MovingImages />
                </div>
            </div>
            <div className='pb-14' style={{ backgroundImage: "url('/images/section-bg-7.png')" }}>
                <div className='text-center py-28 lg:py-10'>
                    <p className='text-gray text-lg font-medium tracking-wide'>
                        BEST SELLER
                    </p>
                    <p className='font-extrabold text-3xl text-gray-800 mt-2'>
                        Our Best Selling Courses
                    </p>
                </div>
                <div className='flex items-center justify-evenly flex-col lg:flex-row  pt-[10px] px-[20px] lg:pt-[50px]'>
                    <div className="bg-[#f4f4f4] rounded-xl lg:pt-[120px] xl:pt-[44px] xl:pr-[20px] xl:pb-[44px] xl:pl-[140px] relative lg:w-[400px] xl:h-[100%] xl:w-[446px] p-[10px] pt-[150px] mb-[100px]">
                        <div className="flex items-center justify-between mb-3">
                            <div className="flex items-center justify-between">
                                <GiBlackBook />
                                <p>04 Lessons</p>
                            </div>
                            <div className="flex items-center justify-between">
                                <FaUser />
                                <p>Lukas Broke</p>
                            </div>
                        </div>
                        <div className="mb-[16px]">
                            <h5
                                className="lg:w-[261px]"
                                style={{
                                    fontWeight: 600,
                                    lineHeight: "29px",
                                    fontSize: "18px",
                                    marginBottom: "16px",
                                }}
                            >
                                Grow Personal Financial Security Thinking & Principles
                            </h5>
                        </div>
                        <div className="flex items-center text-sm gap-[4px]">
                            {[...Array(5)].map((_, i) => (
                                <FaStar key={i} className="text-yellow" />
                            ))}
                            <span className="text-gray-500">(94 Reviews)</span>
                        </div>
                        <div className="flex items-center justify-between">
                            <p className="text-lg font-bold text-violet">$383.00</p>
                            <div className="flex items-center text-sm text-gray-600 justify-between">
                                <PiGraduationCapThin />
                                <p>356 Students</p>
                            </div>
                        </div>
                        <div className="absolute top-[-80px] md:right-[70px] sm:right-[110px] right-[28px] xl:top-[28px] xl:left-[-138px]">
                            <div className="relative overflow-hidden rounded-xl">
                                <img
                                    src="/images/course/course-2/1.png"
                                    className="object-cover lg:w-[260px] lg:h-[190px] md:w-[350px] w-[280px] h-[220px] transition-transform duration-300 ease-in-out hover:scale-110"
                                />
                            </div>
                            <div className="absolute top-2 flex items-center justify-evenly md:space-x-[180px] space-x-8 xl:space-x-[86px] sm:space-x-[120px] lg:space-x-[70px] md:px-[20px] px-[4px]">
                                <div className="p-[6px] bg-yellow-400 rounded-full flex items-start">
                                    Marketing
                                </div>
                                <div className="p-2 bg-white rounded-full flex items-end">
                                    <FaRegBookmark className="text-gray-600" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="bg-[#f4f4f4] rounded-xl lg:pt-[120px] xl:pt-[44px] xl:pr-[20px] xl:pb-[44px] xl:pl-[140px] relative lg:w-[400px] xl:h-[100%] xl:w-[446px] p-[10px] pt-[150px] mb-[100px]">
                        <div className="flex items-center justify-between mb-3">
                            <div className="flex items-center justify-between">
                                <GiBlackBook />
                                <p>04 Lessons</p>
                            </div>
                            <div className="flex items-center justify-between">
                                <FaUser />
                                <p>Lukas Broke</p>
                            </div>
                        </div>
                        <div className="mb-[16px]">
                            <h5
                                className="lg:w-[261px]"
                                style={{
                                    fontWeight: 600,
                                    lineHeight: "29px",
                                    fontSize: "18px",
                                    marginBottom: "16px",
                                }}
                            >
                                Grow Personal Financial Security Thinking & Principles
                            </h5>
                        </div>
                        <div className="flex items-center text-sm gap-[4px]">
                            {[...Array(5)].map((_, i) => (
                                <FaStar key={i} className="text-yellow" />
                            ))}
                            <span className="text-gray-500">(94 Reviews)</span>
                        </div>
                        <div className="flex items-center justify-between">
                            <p className="text-lg font-bold text-violet">$383.00</p>
                            <div className="flex items-center text-sm text-gray-600 justify-between">
                                <PiGraduationCapThin />
                                <p>356 Students</p>
                            </div>
                        </div>
                        <div className="absolute top-[-80px] md:right-[70px] sm:right-[110px] right-[28px] xl:top-[28px] xl:left-[-138px]">
                            <div className="relative overflow-hidden rounded-xl">
                                <img
                                    src="/images/course/course-2/1.png"
                                    className="object-cover lg:w-[260px] lg:h-[190px] md:w-[350px] w-[280px] h-[220px] transition-transform duration-300 ease-in-out hover:scale-110"
                                />
                            </div>
                            <div className="absolute top-2 flex items-center justify-evenly md:space-x-[180px] space-x-8 xl:space-x-[86px] sm:space-x-[120px] lg:space-x-[70px] md:px-[20px] px-[4px]">
                                <div className="p-[6px] bg-yellow-400 rounded-full flex items-start">
                                    Marketing
                                </div>
                                <div className="p-2 bg-white rounded-full flex items-end">
                                    <FaRegBookmark className="text-gray-600" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div >
                <div className='relative'>
                    <img src="/images/contact/contact-bg.png" />
                    <div>
                        <div className='absolute lg:top-[240px] md:[180px] md:top-[180px] '>
                            <AboutForm />
                        </div>
                    </div>
                </div>
            </div>
            <div className='pt-[940px]  md:pt-[720px] xl:pt-[500px]'>
                <Footer />
            </div>
            <div className="fixed  z-50">
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
        </section>
    )
}

export default About
