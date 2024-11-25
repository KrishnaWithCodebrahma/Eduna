"use client"
import React, { useEffect, useState } from 'react';
import Footer from "@/components/Footer/Footer";
import { motion } from 'framer-motion';
import { FaArrowRight } from 'react-icons/fa';
import ScrollToTop from 'react-scroll-to-top';
import CustomButton from '@/components/common/CustomButton';
import Navbar from "@/components/Navbar/Navbar";
import Navbar2 from "@/components/Navbar2/Navbar2";

const Contact = () => {
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
    <div className=' overflow-x-hidden'>
      <Navbar />
      <Navbar2 />
      <div className='pt-[90px] pb-[90px] ' style={{ backgroundImage: "url('/images/breadcrumbs-bg.png')" }}>
        <h2 className='text-center' style={{ fontSize: "36px", fontWeight: 700 }}>Contact With Us</h2>
        <p className='text-center'><span className='text-red'>Home</span> /  <span>Contact With Us</span></p>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mb-4 px-[20px] lg:px-[60px] gap-x-7 gap-y-10 mt-3'>
        <div className='px-[40px] py-[35px] bg-[#f5f5f5] rounded-3xl drop-shadow-lg'>
          <div className='w-[80px] h-[80px] rounded-lg mb-[30px] bg-violet flex items-center justify-center '>
            <img src="/images/icons/icon-white-phone.svg" className='h-[44px] w-[44px] ' />

          </div>
          <div>
            <p className='font-bold '>+543 678 876</p>
            <p className='font-bold '>+543 678 876 098</p>
          </div>
        </div>
        <div className='px-[40px] py-[35px] bg-[#f5f5f5] rounded-3xl drop-shadow-lg'>
          <div className='w-[80px] h-[80px] rounded-lg mb-[30px] bg-violet flex items-center justify-center '>
            <img src="/images/icons/icon-white-message.svg" className='h-[44px] w-[44px] ' />

          </div>
          <div>
            <p className='font-bold '>code@gmail.com</p>
            <p className='font-bold '>eduna@gmail.com</p>
          </div>
        </div>
        <div className='px-[40px] py-[35px] bg-[#f5f5f5] rounded-3xl drop-shadow-lg'>
          <div className='w-[80px] h-[80px] rounded-lg mb-[30px] bg-violet flex items-center justify-center '>
            <img src="/images/icons/icon-white-map.svg" className='h-[44px] w-[44px] ' />
          </div>
          <div>
            <p className='font-bold '>1234 northeast , </p>
            <p className='font-bold '>New York</p>
          </div>
        </div>
      </div>
      <div className='px-[10px] flex items-center justify-center flex-col lg:flex-row'>
        <div className='md:w-1/2'>
          <div className='px-[40px] pt-[20px] lg:pt-[60px] p-[20px] drop-shadow-2xl bg-[#fff] rounded-md'>
            <img src='/images/contact/contact-img.png' className='xl:w-full xl:h-[520px] rounded-md' />
          </div>
        </div>
        <div className='md:w-1/2'>
          <div className='px-[20px] pt-[20px] lg:pt-[60px] p-[20px] drop-shadow-2xl bg-transparent rounded-md'>
            <p className='text-[#5d5f5f] mb-[32px]'>Get In Touch</p>
            <p style={{ fontSize: "36px", fontWeight: 700, lineHeight: "50px" }}>Have Any Questions About Eduna? Contact With Us Today</p>
            <div className='pt-[10px]'>

              <div className='p-4'>
                <input
                  placeholder='Full Name'
                  className='placeholder:text-sm  placeholder:text-[#5d5f5f] border-b-2 w-full border-[#5d5f5f] p-4 focus:outline-none focus:border-blue-500 bg-transparent'
                />
              </div>
              <div className='p-4'>
                <input
                  placeholder='Enter Your Email'
                  className='placeholder:text-sm  placeholder:text-[#5d5f5f] border-b-2 w-full border-[#5d5f5f] p-4 focus:outline-none focus:border-blue-500 bg-transparent'
                />
              </div>
              <div className='p-4'>
                <input
                  placeholder='How can I help you ? Feel free to get in touch!'
                  className='placeholder:text-sm  placeholder:text-[#5d5f5f] border-b-2 w-full border-[#5d5f5f] p-4 focus:outline-none focus:border-blue-500 bg-transparent'
                />
              </div>
              <div className='p-4'>
                <div className="flex items-center space-x-3">
                  <input
                    style={{ borderRadius: "200%" }}
                    type="checkbox"
                    id="checkbox"
                    className="w-4 h-4  border-2 border-[#5d5f5f] checked:bg-blue-500 focus:outline-none"
                  />
                  <label htmlFor="checkbox" className="text-[#5d5f5f]">I agree to the privacy policy </label>
                </div>
              </div>
              <div className='p-4'>
                <CustomButton
                  buttonText="Send Message"
                  buttonBgColor="#543ee8"
                  iconBgColor="#ffffff"
                  textColor="#ffffff"
                  iconColor="#543ee8"
                  textSize="normal"
                  textTracking="normal"
                  paddingX="20px"
                  paddingY="5px"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='px-[20px] pt-[20px] drop-shadow-lg'>
        <div className='pt-10 px-[0px] lg:px-[40px] bg-violet rounded-2xl flex flex-col-reverse md:flex-row relative '>
          <motion.div initial={{ y: 200, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }} className='flex items-center w-full md:w-2/5'>
            <img
              src='/images/call-action/call-action-1/call-action-img.png'
              className='h-[420px] w-[305px]'
            />
          </motion.div>
          <div className='px-10 w-full md:w-3/5'>
            <motion.div initial={{ x: -200, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6 }} className=''>
              <span className='text-yellow mb-[18px]'>Get Started Now</span>
              <h3 className='text-white' style={{ fontSize: "36px", fontWeight: 700, lineHeight: "50px", letterSpacing: "-0.36px", marginBottom: "24px" }}>
                Affordable Your Online Courses & Learning Opportunities
              </h3>
              <p className='text-white' style={{ lineHeight: "28px", fontWeight: 400, fontSize: "16px" }}>
                Excepteur sint occaecat cupidatat non proident sunt in culpa qui officia deserunt mollit. Excepteur sint occaecat.
              </p>
            </motion.div>
            <motion.div initial={{ x: 200, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6 }} className="pt-[30px] pb-4">
              <button className='flex bg-yellow pl-[20px] md:pl-[40px]  pr-[4px] py-[5px] gap-[24px] items-center rounded-full'>
                <p className='text-white   tracking-tighter md:tracking-normal md:font-bold '><span className='' >Start Learning Today</span> </p>
                <div className='bg-black px-[20px] py-[18px] rounded-full'>
                  <FaArrowRight className='text-[#ffffff] text-sm' />
                </div>
              </button>
            </motion.div>
          </div>

          <motion.div initial={{ x: -10, y: 0, opacity: 1 }}
            whileInView={{ x: 0, y: -10, opacity: 1 }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              repeatType: 'reverse',
              ease: 'easeInOut',
            }}
            className='absolute top-[520px] left-10'>
            <img src="images/call-action/call-action-1/shape-2.svg" />

          </motion.div>
          <motion.div initial={{ x: 10, y: 20, opacity: 0.5 }}
            whileInView={{ x: -10, y: -10, opacity: 0.5 }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              repeatType: 'reverse',
              ease: 'easeInOut',
            }}
            className='absolute top-20 right-10'>
            <img src="images/call-action/call-action-1/shape-3.svg" />

          </motion.div>
          <motion.div initial={{ x: -10, y: 20, opacity: 0.5 }}
            whileInView={{ x: 1, y: -1, opacity: 0.5 }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              repeatType: 'reverse',
              ease: 'easeInOut',
            }}
            className='absolute bottom-20 right-10 '>
            <img src="/images/footer/footer-1/shape-2.svg" />

          </motion.div>
        </div>
      </div>
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

      <Footer />
    </div>
  )
}

export default Contact
