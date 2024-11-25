"use client"
import React from 'react';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import dynamic from 'next/dynamic';
import { LuGraduationCap } from "react-icons/lu";
import { motion } from "framer-motion";
import TestimonialCard from '@/components/Testominal/TestimonialCard';



const MotionDiv = dynamic(
    () => import('framer-motion').then((mod) => mod.motion.div),
    { ssr: false }
);

const page = () => {
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.5,
    });
    return (
        <div className=''>
            <section className=' pt-[4px] px-5  xl:h-[700px] bg-[#faf9f6]   '>
                <div className='grid gir-cols-1 lg:grid-cols-2  pt-[110px]  lg:px-[44px] relative pb-[100px] lg:pb-[300px]'>
                    <motion.div initial={{ x: 100, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }} transition={{ duration: 1.6, delay: .6 }} className=' pb-[12px] relative'>
                        <div>
                            <h4 className='text-gray'>Our Testominal</h4>
                            <h2 className='pt-[10px] mb-3' style={{ fontSize: "38px", lineHeight: "50px", fontWeight: 700, letterSpacing: "-1px" }}>What Student Say About Our <br />
                                Online Education Course</h2>
                            <span className=' text-gray' style={{ fontSize: "16px" }}>Excepteur sint occaecat cupidatat non proident sunt in culpa qui officia deserunt mollit. Excepteur sint occaecat.</span>
                        </div>
                        <div className='mt-10'>
                            <TestimonialCard />
                        </div>
                        <motion.div className='absolute top-3 right-24' animate={{ y: ["0%", "5%", "-5%", "0%"] }}
                            transition={{
                                repeat: Infinity,
                                duration: 3,
                                ease: "easeInOut",
                            }}>
                            <img src='/images/call-action/call-action-1/shape-2.svg' />
                        </motion.div>

                    </motion.div>
                    <motion.div initial={{ x: -100, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }} transition={{ duration: 1.6, delay: .6 }} className='flex items-center justify-center  relative ' ref={ref}>
                        <img src="/images/testimonial/testimonial-1/testimonial-img.png" alt="hero-img" className='xl:h-[527px] xl:w-[430px] relative' style={{ borderRadius: "8px 8px 140px 8px" }} />
                        <motion.div className='absolute hidden lg:block right-14 bottom-0' style={{
                            transformOrigin: 'center',
                        }}
                            initial={{ rotate: 0, }}
                            animate={{ rotate: [0, 10, 0], }}
                            transition={{ duration: 4, ease: 'easeInOut', repeat: Infinity, delay: 1 }}
                            whileHover={{ rotate: [0, 180, -180, 0] }} >
                            <img src='/images/testimonial/testimonial-1/shape-3.svg' />
                        </motion.div>
                        <MotionDiv className="absolute top-[320px] left-[100px] bg-white p-4 rounded-xl shadow-lg flex items-center space-x-4"
                            animate={{
                                y: ["0%", "5%", "-5%", "0%"],
                            }}
                            transition={{
                                repeat: Infinity,
                                duration: 3,
                                ease: "easeInOut",
                            }}>
                            <div className="flex items-center justify-center w-16 h-16 bg-[#fceeee] rounded-full">
                                <LuGraduationCap className="w-8 h-8 text-red" />
                            </div>
                            <div className="flex flex-col">
                                {inView && (
                                    <p className="text-red text-3xl font-semibold">
                                        <CountUp start={0} end={667} duration={3} separator="," />
                                        k+
                                    </p>
                                )}
                                <p className="text-gray text-sm font-medium">Statisfied Student</p>
                            </div>
                        </MotionDiv>
                        <motion.div className='absolute top-3 right-24' animate={{ x: ["0%", "5%", "10%", "10%", "-5%", "0%"], opacity: 1 }}
                            transition={{
                                repeat: Infinity,
                                duration: 1,
                            }}>
                            <img src='/images/features/features-1/shape-1.svg' />
                        </motion.div>
                    </motion.div>

                </div>

            </section>
        </div>
    )
}

export default page
