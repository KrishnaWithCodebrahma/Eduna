import React from 'react';
import { motion } from "framer-motion";
import CustomButton from '@/components/common/CustomButton';



const page = () => {
    return (
        <section style={{
            backgroundImage: "url('/images/hero/home-1/hero-bg.png')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            height: '100%',
        }} className=' pt-[4px] px-5  xl:h-[600px] select-none '>
            <div className='grid grid-cols-1 lg:grid-cols-2 '>
                <div className='p-[10px] pb-[120px] lg:pb-0 pt-[50px] font-aeonik'>
                    <motion.h2
                        initial={{ x: -200, y: 3, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ duration: 2, ease: 'easeInOut', delay: 0.3 }}
                        className="font-semibold md:font-extrabold tracking-wide p-[6px] text-4xl sm:text-5xl md:text-6xl lg:text-7xl lg:pb-[10px]"
                    >
                        <span>Best</span> <span className='bg-yellow pr-[14px] pl-[14px] md:p-[10px] rounded-xl '>Online</span>
                    </motion.h2>
                    <motion.h2
                        initial={{ x: -200, y: 3, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ duration: 2, ease: 'easeInOut', delay: 0.6 }}
                        className="font-semibold md:font-extrabold tracking-wide p-[6px] md:p-[10px] text-4xl sm:text-5xl md:text-6xl lg:text-7xl lg:pb-[10px]"
                    >
                        Platform To Learn
                    </motion.h2>
                    <motion.h2
                        initial={{ x: -200, y: 3, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ duration: 2, ease: 'easeInOut', delay: .9 }}
                        className="font-semibold md:font-extrabold tracking-wide p-[6px] md:p-[10px] text-4xl sm:text-5xl md:text-6xl lg:text-7xl lg:pb-[10px]"
                    >
                        Everything
                    </motion.h2>
                    <div className="pt-8 px-[6px] md:pt-15">
                        <p className="text-gray font-poppins ">
                            <span className="block md:inline">Excedteur sint occaecat cupidatat non proident sunt</span>
                            <span className="block md:inline">in culpa qui officia deserunt mollit.</span>
                        </p>
                    </div>
                    <motion.div initial={{ x: -200, y: 3, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{
                            duration: .5,
                            delay: .3,
                            ease: 'easeInOut',
                        }} className=" absolute pt-[30px] pl-[5px]">
                        <CustomButton
                            url='/courses'
                            buttonText="Find Course"
                            buttonBgColor="#543ee8"
                            iconBgColor="#ffffff"
                            textColor="#ffffff"
                            iconColor="#543ee8"
                            textSize="normal"
                            textTracking="normal"
                            paddingX="20px"
                            paddingY="5px"
                            hoverBgColor='#000000'
                        />
                    </motion.div>
                </div>

                <div className='flex items-center justify-center  relative '>
                    <motion.div initial={{ x: -50, opacity: 0.4 }} whileInView={{ x: 0, opacity: 1 }} transition={{ delay: 0.5, duration: 1 }}>
                        <img src="images/hero/home-1/hero-img.png" alt="hero-img" className='xl:h-[740px] xl:w-[653px]' />
                    </motion.div>
                    <motion.div
                        initial={{ x: -20, y: 40, scale: 0.9, opacity: 0.8, rotate: 0, skewX: 5 }}
                        animate={{
                            x: [30, -10, 20],
                            y: [-30, 20, -10],
                            scale: [1, 1.3, 0.9],
                            opacity: [0.9, 1, 0.7],
                            rotate: [0, 180, 360],
                            skewX: [5, -5, 5],
                            skewY: [0, 10, -10],
                        }}
                        transition={{
                            duration: 6,
                            repeat: Infinity,
                            ease: 'easeInOut',
                        }}
                        className="absolute top-20 right-10"
                    >
                        <img src="/images/hero/home-1/shape-3.svg" />
                    </motion.div>

                    <motion.div
                        initial={{ x: 10, y: -20, scale: 0.8, opacity: 0.7, rotate: 0, skewX: -10 }}
                        animate={{
                            x: [-30, 10, -20],
                            y: [20, -10, 30],
                            scale: [0.8, 1.2, 1],
                            opacity: [0.8, 1, 0.6],
                            rotate: [0, -180, 360],
                            skewX: [-10, 15, -10],
                            skewY: [0, 15, -5],
                        }}
                        transition={{
                            duration: 7,
                            repeat: Infinity,
                            ease: 'easeInOut',
                        }}
                        className="absolute bottom-20 left-0"
                    >
                        <img src="/images/hero/home-1/shape-5.png" />
                    </motion.div>
                </div>
            </div>
        </section>
    )
}

export default page
