import React from 'react';
import { FaRegCalendarDays } from "react-icons/fa6";
import { FaRegCommentDots } from "react-icons/fa6";
// import { FaArrowRight } from "react-icons/fa6";
import { motion } from 'framer-motion';
import GradualSpacing from '@/components/ui/gradual-spacing';
import GetStartedSection from "@/components/GetStartedSection/GetStartedSection";
// import News from '../Routes/News/News';


const News = () => {
    return (
        <section style={{ backgroundImage: "url('/images/section-bg-3.png')" }} className='relative'>
            <motion.div className='absolute top-[200px] left-[-10px]' animate={{ y: ["0%", "5%", "10%", "10%", "-5%", "0%"], opacity: 1 }}
                transition={{
                    repeat: Infinity,
                    duration: 10,
                    delay: 2
                }}>
                <img src='/images/footer/footer-1/shape-1.svg' />
            </motion.div>
            <div className='py-[110px] px-[20px] md:px-[80px]'>
                <div className='pb-16 relative' >
                    <p className='text-gray text-center mb-[20px]'>Our News</p>
                    <div className=' text-center tracking-tighter font-semibold md:font-extrabold' style={{ fontSize: "36px", lineHeight: "50px", letterSpacing: "-0.20px" }}>
                        <GradualSpacing text="Our New Articles" />
                    </div>
                </div>
                <div className='pb-10'>
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
                        <motion.div
                            className=''
                            initial={{ x: -200, opacity: 0 }}
                            whileInView={{ x: 0, opacity: 1 }}
                            transition={{ duration: 0.6 }}
                        >
                            <div className="relative group">
                                <div className="overflow-hidden relative">
                                    <img
                                        style={{ width: "100%" }}
                                        src='/images/blog/blog-1/1.png'
                                        className="object-cover h-[360px] w-[364px] rounded-lg transition-transform duration-300 ease-in-out group-hover:scale-110"
                                        alt="Course Image"
                                    />
                                    <div className="absolute bottom-4 left-4 bg-[#5f3ee8] rounded-tr-lg rounded-2xl p-2">
                                        <p className=" text-sm font-semibold text-white">Education</p>
                                    </div>
                                </div>
                            </div>
                            <div className='flex flex-row space-x-4 pt-4'>
                                <div className='flex flex-row items-center text-gray gap-[6px]'>
                                    <FaRegCalendarDays style={{ fontSize: "14px" }} />
                                    <p>09 may, 2024</p>
                                </div>
                                <div className='flex flex-row items-center text-gray gap-[6px]'>
                                    <FaRegCommentDots style={{ fontSize: "14px" }} />
                                    <p>32 comments</p>
                                </div>
                            </div>
                            <div>
                                <h4 style={{ marginTop: "24px", fontSize: "20px", fontWeight: 700, lineHeight: "30px" }}>
                                    Solutions Your All Problem With Online Courses For Your Thinking
                                </h4>
                            </div>
                        </motion.div>
                        <motion.div
                            className=''
                            initial={{ x: 200, opacity: 0 }}  // Right side comes from the right
                            whileInView={{ x: 0, opacity: 1 }}  // In view, animate to normal position
                            transition={{ duration: 0.6 }}
                        >
                            <div className="relative group">
                                <div className="overflow-hidden relative">
                                    <img
                                        style={{ width: "100%" }}
                                        src='/images/blog/blog-1/2.png'
                                        className="object-cover h-[360px] w-[364px] rounded-lg transition-transform duration-300 ease-in-out group-hover:scale-110"
                                        alt="Course Image"
                                    />
                                    <div className="absolute bottom-4 left-4 bg-[#5f3ee8] rounded-tr-lg rounded-2xl p-2">
                                        <p className=" text-sm font-semibold text-white">Business</p>
                                    </div>
                                </div>
                            </div>
                            <div className='flex flex-row space-x-4 pt-4'>
                                <div className='flex flex-row items-center text-gray gap-[6px]'>
                                    <FaRegCalendarDays style={{ fontSize: "14px" }} />
                                    <p>09 January, 2024</p>
                                </div>
                                <div className='flex flex-row items-center text-gray gap-[6px]'>
                                    <FaRegCommentDots style={{ fontSize: "14px" }} />
                                    <p>98 comments</p>
                                </div>
                            </div>
                            <div>
                                <h4 style={{ marginTop: "24px", fontSize: "20px", fontWeight: 700, lineHeight: "30px" }}>
                                    Exploring Learning Landscapes in All Academic Calendar For Season
                                </h4>
                            </div>
                        </motion.div>
                        <motion.div
                            className=''
                            initial={{ x: -200, opacity: 0 }}  // Left side comes from the left
                            whileInView={{ x: 0, opacity: 1 }}  // In view, animate to normal position
                            transition={{ duration: 0.6 }}
                        >
                            <div className="relative group">
                                <div className="overflow-hidden relative">
                                    <img
                                        style={{ width: "100%" }}
                                        src='/images/blog/blog-1/3.png'
                                        className="object-cover h-[360px] w-[364px] rounded-lg transition-transform duration-300 ease-in-out group-hover:scale-110"
                                        alt="Course Image"
                                    />
                                    <div className="absolute bottom-4 left-4 bg-[#5f3ee8] rounded-tr-lg rounded-2xl p-2">
                                        <p className=" text-sm font-semibold text-white">Marketing</p>
                                    </div>
                                </div>
                            </div>
                            <div className='flex flex-row space-x-4 pt-4'>
                                <div className='flex flex-row items-center text-gray gap-[6px]'>
                                    <FaRegCalendarDays style={{ fontSize: "14px" }} />
                                    <p>03 June, 2024</p>
                                </div>
                                <div className='flex flex-row items-center text-gray gap-[6px]'>
                                    <FaRegCommentDots style={{ fontSize: "14px" }} />
                                    <p>04 comments</p>
                                </div>
                            </div>
                            <div>
                                <h4 style={{ marginTop: "24px", fontSize: "20px", fontWeight: 700, lineHeight: "30px" }}>
                                    Voices from the Learning Education Hub For Your Children
                                </h4>
                            </div>
                        </motion.div>
                    </div>
                </div>
                <GetStartedSection />
            </div>
        </section>
    );
};

export default News;
