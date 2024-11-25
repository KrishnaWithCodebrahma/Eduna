import React, { useState } from "react";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { FaArrowRight } from "react-icons/fa6";
import { motion } from "framer-motion";
import { FaTwitter } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaDribbble } from "react-icons/fa";
import Image from "next/image";

const headerStyle = {
    fontSize: "20px",
    lineHeight: "23px",
    marginBottom: "44px",
    fontWeight: 700
}

const innerStyle = {
    margin: "0",
    lineHeight: "28px",
    fontWeight: "400",
    fontSize: "16px",
    marginBottom: "28px",
}

const page = ({ isOpen, setIsOpen }) => {
    const [openItem, setOpenItem] = useState(null);

    const closeSidebar = () => {
        setIsOpen(false);
    };

    const toggleSubItems = (item) => {
        setOpenItem((prev) => (prev === item ? null : item));
    };



    return (
        <Drawer anchor="right" open={isOpen} onClose={closeSidebar}>
            <motion.div
                style={{ width: "350px", backgroundColor: "#f5f5f5", height: "100%" }}
                initial={{ y: "-100%" }}
                animate={{ y: 0 }}
                transition={{ type: "spring", stiffness: 50 }}
            >
                <div
                    style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        padding: "16px",
                        borderBottom: "1px solid #ddd",
                    }}
                >
                    <img
                        src="/images/logo.svg"
                        alt="Logo"
                        style={{ height: "34px", objectFit: "contain" }}
                    />
                    <IconButton
                        onClick={closeSidebar}
                        style={{
                            backgroundColor: "#d73b3b",
                            color: "white",
                            fontSize: "16px",
                            width: "40px",
                            height: "40px",
                            borderRadius: "50%",
                        }}
                    >
                        <CloseIcon style={{ fontSize: "20px" }} />
                    </IconButton>
                </div>

                <motion.div style={{ padding: "16px" }}>
                    <div>
                        <div className='flex items-start flex-col'>
                            <h4 style={headerStyle}>Contact</h4>
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
                </motion.div>
                <motion.div
                    initial={{ x: "-100%", }}
                    animate={{ x: 0 }}
                    transition={{ type: "spring", stiffness: 50 }} style={{ padding: "16px" }}>
                    <h2>Follow US</h2>
                    <div className="flex cursor-pointer gap-[44px] mt-6 ">
                        <FaFacebookF />
                        <FaTwitter />
                        <FaDribbble />
                        <FaInstagram />
                    </div>
                </motion.div>
                <motion.div style={{ padding: "16px" }} initial={{ x: "-100%" }}
                    animate={{ x: 0 }}
                    transition={{ type: "spring", stiffness: 50 }}
                >
                    <div className=' flex items-start flex-col'>
                        <h4 style={headerStyle}>Subscribe</h4>
                        <p className='mb-7'>
                            Enter your email address to register to our newsletter subscription
                        </p>
                        <input placeholder='Enter  Email' className='mb-5' style={{ width: "100%", borderRadius: "52px", padding: "14px  28px", fontSize: "14px", border: "1px solid #ebebeb" }} />
                        <button className='flex bg-violet pl-[20px]  pr-[4px] py-[5px] gap-[20px] items-center rounded-full '>
                            <p className='text-white font-semibold'>Subscribe Now</p>
                            <div className='bg-white px-[20px] py-[18px] rounded-full' >
                                <FaArrowRight className='text-violet text-sm' />
                            </div>
                        </button>

                    </div>
                </motion.div>
            </motion.div>
        </Drawer>
    );
};

export default page;
