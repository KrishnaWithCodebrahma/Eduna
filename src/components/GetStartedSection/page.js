import React from 'react';
import { motion } from 'framer-motion';
import { FaArrowRight } from 'react-icons/fa';
import CustomButton from '@/components/common/CustomButton';


const page = () => {
    return (
        <div className='relative pt-10 px-[0px] lg:px-[40px] bg-violet rounded-2xl flex flex-col-reverse md:flex-row overflow-hidden'>
            {/* Image Section */}
            <motion.div
                initial={{ y: 200, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6 }}
                className="flex items-center justify-center w-full md:w-2/5"
            >
                <div className="absolute w-[536px] h-[537px] md:hidden xl:block -left-[0px] -bottom-[108px] z-0 rounded-full bg-gradient-to-b from-white to-[#c9d6cb]"></div>
                <img
                    src="/images/call-action/call-action-1/call-action-img.png"
                    alt="Call to Action"
                    className="relative h-[420px] w-[305px]"
                />
            </motion.div>

            {/* Text and Button Section */}
            <div className='px-10 w-full md:w-3/5'>
                <motion.div
                    initial={{ x: -200, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.6 }}
                >
                    <span className='text-yellow mb-[18px]'>Get Started Now</span>
                    <h3
                        className='text-white'
                        style={{
                            fontSize: "36px",
                            fontWeight: 700,
                            lineHeight: "50px",
                            letterSpacing: "-0.36px",
                            marginBottom: "24px"
                        }}
                    >
                        Affordable Your Online Courses & Learning Opportunities
                    </h3>
                    <p
                        className='text-white'
                        style={{ lineHeight: "28px", fontWeight: 400, fontSize: "16px" }}
                    >
                        Excepteur sint occaecat cupidatat non proident sunt in culpa qui officia deserunt mollit. Excepteur sint occaecat.
                    </p>
                </motion.div>
                <motion.div
                    initial={{ x: 200, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.6 }}
                    className="pt-[30px] pb-4"
                >

                    <CustomButton hoverBgColor='#470000' />
                </motion.div>
            </div>

            {/* Floating Shapes */}
            <motion.div
                className='absolute top-10 right-[200px]'
                animate={{ y: ["0%", "5%", "10%", "10%", "-5%", "0%"], opacity: 1 }}
                transition={{
                    repeat: Infinity,
                    duration: 10,
                    delay: 2
                }}
            >
                <img src='/images/call-action/call-action-1/shape-3.svg' alt="Decorative Shape" />
            </motion.div>
            <motion.div
                className='absolute bottom-[10px] left-[400px]'
                animate={{ y: ["0%", "5%", "10%", "10%", "-5%", "0%"], opacity: 1 }}
                transition={{
                    repeat: Infinity,
                    duration: 10,
                    delay: 2
                }}
            >
                <img src='/images/call-action/call-action-1/shape-2.svg' alt="Decorative Shape" />
            </motion.div>
        </div>
    );
};

export default page;
