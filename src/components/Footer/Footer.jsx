import React, { useState } from 'react';
import { FaTwitter } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaDribbble } from "react-icons/fa";
import CustomButton from '../common/CustomButton';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { toast } from 'react-toastify';
import { ToastContainer } from 'react-toastify';


const innerStyle = {
    margin: "0",
    lineHeight: "28px",
    fontWeight: "400",
    fontSize: "16px",
    marginBottom: "28px",
}
const Footer = () => {
    const [emailId, setEmailId] = useState('');
    const [error, setError] = useState('');
    const handleSubmit = (e) => {
        e.preventDefault();
        if (!emailId) {
            toast.error("Email is required");
            return;
        }
        const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        if (!emailPattern.test(emailId)) {
            toast.error("Please enter a valid email address");
            return;
        }
        toast.success("Email Submitted Successfully");

        // console.log("Email Submitted: ", emailId);

        setEmailId("");
    };

    return (
        <>
            <section className='bg-[#f5f5f5] relative'>
                <div className='absolute md:hidden lg:block xl:block top-[450px] lg:bottom-[100px] xl:top-[400px] right-0'>
                    <img src='/images/footer/footer-1/shape-3.svg' />
                </div>
                <div className='absolute hidden  lg:block xl:block top-[450px] lg:bottom-[100px] xl:top-[400px] left-0'>
                    <img src='/images/footer/footer-1/shape-1.svg' />
                </div>
                <motion.div style={{
                    transformOrigin: 'center',
                }}
                    initial={{ rotate: 0, }}
                    animate={{ rotate: [0, 10, 0], }}
                    transition={{ duration: 4, ease: 'easeInOut', repeat: Infinity, delay: 1 }}
                    whileInView={{ rotate: [0, 180, -180, 0] }} className='absolute  bottom-0 left-10 select-none'>
                    <img src="/images/call-action/call-action-1/shape-2.svg" />
                </motion.div>
                <div>
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 py-[110px] px-[20px] md:px-[40px] lg:px-[80px] gap-6'>
                        <div>
                            <div className=''>
                                <img src='/images/logo.svg' style={{ maxWidth: "140px", height: "34px", objectFit: "contain" }} className='mb-6' />
                                <p className='text-[#5d5f5f]' style={innerStyle}>Excepteur sint occaecat cupidatat non proident sunt in culpa qui officia deserunt mollit.</p>
                            </div>
                            <div className="flex cursor-pointer gap-[44px] mt-6 ">
                                <Link href="https://www.facebook.com "><FaFacebookF /></Link>
                                <Link href="https://x.com "><FaTwitter /></Link>
                                <Link href="https://dribbble.com "><FaDribbble /></Link>
                                <Link href="https://www.instagram.com/ "><FaInstagram /></Link>
                            </div>
                        </div>
                        <div>
                            <div className='flex items-start flex-col'>
                                <h4 className='medium-header'>Links</h4>
                                <Link href="/about" style={innerStyle} className='text-gray'>About</Link>
                                <Link href="/" style={innerStyle} className='text-gray'>Our Courses</Link>
                                <Link href="/" style={innerStyle} className='text-gray'>Pricing Plan</Link>
                                <Link href="contact" style={innerStyle} className='text-gray'>Contact Us</Link>
                                <Link href="/news" style={innerStyle} className='text-gray'>Our News</Link>
                                <Link href="/contact" style={innerStyle} className='text-gray'>FAQ&apos;s</Link>
                            </div>
                        </div>
                        <div>
                            <div className='flex items-start flex-col'>
                                <h4 className='medium-header'>Contact</h4>
                                <div className='flex space-x-4 items-center justify-center mb-7'>
                                    <img src="/images/icons/icon-phone-blue.svg" className='w-[28px] h-[28px]' />
                                    <div className=''>
                                        <p className='text-[#5d5f5f] ' >24/7 support</p>
                                        <p className='text-black ' >+1234 45678 0987</p>
                                    </div>
                                </div>
                                <div className='flex space-x-4 items-center justify-center mb-7'>
                                    <img src="/images/icons/icon-envelope-blue.svg" className='w-[28px] h-[28px]' />
                                    <div className=''>
                                        <p className='text-[#5d5f5f] ' >send message</p>
                                        <p className='text-black ' >eduna@gmail.com</p>
                                    </div>
                                </div>
                                <div className='flex space-x-4 items-center justify-center mb-7'>
                                    <img src="/images/icons/icon-location-blue.svg" className='w-[28px] h-[28px]' />
                                    <div className=''>
                                        <p className='text-[#5d5f5f] ' >Our location</p>
                                        <p className='text-black ' >32/jenin, london</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className=' flex items-start flex-col'>
                                <h4 className='medium-header'  >Subscribe</h4>
                                <p className='mb-7'>
                                    Enter your email address to register to our newsletter subscription
                                </p>
                                <form className='cursor-pointer' onSubmit={handleSubmit}>
                                    <input type='email' required name='email' value={emailId} onChange={(e) => setEmailId(e.target.value)} placeholder='Enter  Email' className='mb-5 cursor-pointer' style={{ width: "100%", borderRadius: "52px", padding: "14px  28px", fontSize: "14px", border: "1px solid #ebebeb" }} />
                                    <CustomButton
                                        
                                        className="cursor-pointer"
                                        url="/"
                                        buttonText="Subscribe Now"
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
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='py-6 bg-slate-200'>
                    <p className='text-center font-semibold'> Copyright 2024 Eduna | Developed By <span> <Link href='https://codebrahma.in'>CodeBrahma</Link> </span>  All Rights Reserved </p>
                </div>
            </section>
            <ToastContainer autoClose={2000} position="top-center" />
        </>
    )
}

export default Footer


// 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