"use client"
import React from 'react';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import { LuGraduationCap } from "react-icons/lu";
import ScrollingPartners from '@/components/WhyUs/ScrollingPartners';
import { motion } from 'framer-motion';
import NumberTicker from '@/components/ui/number-ticker';


const page = () => {
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.5,
    });
    return (
        <div className='pb-20 '>
            <section style={{
                backgroundImage: "url('/images/hero/home-1/hero-bg.png')",
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                height: '100%',
            }} className=' pt-[4px] px-5  xl:h-[600px]  '>
                <div className='grid gir-cols-1 lg:grid-cols-2  pt-[110px]  relative pb-[100px] lg:pb-[40]px] xl:pl-[40px]'>
                    <motion.div initial={{ x: -200, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }} transition={{ duration: 1.6, delay: .6 }} className=' pb-[30px] '>
                        <div>
                            <h4 className='text-gray'>WHY CHOOSE US</h4>
                            <h2 className='pt-[10px] mb-3' style={{ fontSize: "38px", lineHeight: "50px", fontWeight: 700, letterSpacing: "-1px" }}>Transform Your Best Practice <br />
                                with Our Online Course</h2>
                            <span className=' text-gray' style={{ fontSize: "16px" }}>Excepteur sint occaecat cupidatat non proident sunt in culpa qui officia deserunt mollit. Excepteur sint occaecat.</span>
                        </div>
                        <div className='mt-8'>
                            <div className='flex gap-[22px] items-center'>
                                <div className='p-[22px] bg-[#42ac9817] rounded-full'>
                                    <img src='/images/why-choose/why-choose-1/icon-1.svg' />
                                </div>
                                <p className='' style={{ fontSize: "20px", lineHeight: "32px", fontWeight: 700, }}>
                                    Face To Face Teaching
                                </p>
                            </div>
                            <div className='mt-4'>
                                <span className='text-gray' style={{ fontSize: "16px", lineHeight: "28px", fontWeight: 400, }}>
                                    Excepteur sint occaecat cupidatat non proident sunt in culpa qui officia for this is a for that an deserunt mollit.
                                </span>
                            </div>
                        </div>
                        <div className='mt-8 relative'>
                            <div className='flex gap-[22px] items-center'>
                                <div className='p-[22px] bg-[#42ac9817] rounded-full'>
                                    <img src='/images/why-choose/why-choose-1/icon-2.svg' />
                                </div>
                                <p className='' style={{ fontSize: "20px", lineHeight: "32px", fontWeight: 700, }}>
                                    24/7 Support Available
                                </p>
                            </div>
                            <div className='mt-4'>
                                <span className='text-gray' style={{ fontSize: "16px", lineHeight: "28px", fontWeight: 400, }}>
                                    Excepteur sint occaecat cupidatat non proident sunt in culpa qui officia for this is a for that an deserunt mollit.
                                </span>
                            </div>
                        </div>
                        <motion.div className='absolute top-[240px] left-24' animate={{ y: ["0%", "5%", "-5%", "0%"] , opacity:1 }}
                            transition={{
                                repeat: Infinity,
                                duration: 3,
                                ease: "easeInOut",
                            }}>
                            <img src="/images/call-action/call-action-1/shape-2.svg" />
                        </motion.div>
                        <motion.div className='absolute top-[540px] left-24' animate={{ x: ["0%", "5%", "-5%", "0%"] , opacity:1 }}
                            transition={{
                                repeat: Infinity,
                                duration: 3,
                                ease: "easeInOut",
                            }}>
                            <img src="/images/call-action/call-action-1/shape-3.svg" />
                        </motion.div>
                    </motion.div>
                    <motion.div initial={{ x: 200, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }} transition={{ duration: 1.6, delay: .6 }} className='flex items-center justify-center  relative ' ref={ref}>
                        <img src="/images/why-choose/why-choose-1/why-choose-img.png" alt="hero-img" className='xl:h-[561px] xl:w-[585px]' />
                        <div className="absolute top-28 left-10 lg:top-[320px] lg:left-[100px] bg-white p-4 rounded-lg shadow-lg flex items-center space-x-4"
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
                                <p className='text-red text-3xl font-semibold'><NumberTicker value={69} />k </p>
                                <p className="text-gray text-sm font-medium">Enrolled Learners</p>
                            </div>

                        </div>
                        <div className='absolute top-[-10px] right-[30px]'>
                            <motion.img initial={{ x: 0, y: 0, opacity: 0.2 }}
                                whileInView={{ x: [-10, -5, 0, -5, -10], y: [0, -5, -10, 10, 5, 0], opacity: 0.2 }} transition={{ duration: 1.6, delay: .6, repeat: Infinity, }} src="/images/why-choose/why-choose-1/shape-1.svg" />
                        </div>
                        <div className='absolute bottom-[-10px] left-[30px]'>
                            <motion.img initial={{ x: [-10, - 5, 0, 5, 10], y: [0, -5, -10, 10, 5, 0], opacity: 0.2 }}
                                whileInView={{ x: [-10, -5, 0, -5, -10], y: [0, -5, -10, 10, 5, 0], opacity: 0.2 }} transition={{ duration: 1.6, delay: .6, repeat: Infinity, }} src="/images/funfact/funfact-1/shape-1.svg" />
                        </div>
                    </motion.div>
                    <div className='bg-violet'>
                    </div>
                </div>

            </section>
            <section className='px-[20px] lg:px-[110px] drop-shadow-lg rounded-full '>
                <ScrollingPartners />
            </section>
        </div>
    )
}

export default page
