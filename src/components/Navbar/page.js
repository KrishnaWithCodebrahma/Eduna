"use client"
import React, { useState } from 'react';
import SearchComponent from "./SearchComponent";
import { FaFacebookF, FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaDribbble } from "react-icons/fa";
import { IoMdMenu } from "react-icons/io";
import Nav_First_Sidebar from "@/components/First_Sidebar/page";
import Link from 'next/link';
import Register from "@/components/Register/page"
import Login from "@/components/Login/page"




const page = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isRegisterOpen, setIsRegisterOpen] = useState(false)
    const [isLoginOpen, setIsLoginOpen] = useState(false)

    const handleOpen = () => {
        setIsOpen(!isOpen)
    }
    const handleRegister = () => {
        setIsRegisterOpen(true)
        setIsLoginOpen(false)
    }
    const handleLogin = () => {
        setIsLoginOpen(true)
        setIsRegisterOpen(false)
    }
    return (
        <nav className="flex items-center justify-between p-[8px] xl:px-[90px] md:px-[60px] px-[40px] font-poppins  " style={{ backgroundImage: "url('images/hero/home-1/hero-bg.png')", }}>
            <div className="flex items-center text-5xl text-black  font-semibold tracking-tighter">
                <Link href='/'> <img src='/images/logo.svg' /></Link>
            </div>
            <SearchComponent />


            <div className="space-x-4 flex items-center justify-center p-[13px] ">
                <div className='hidden xl:block '>
                    <div className="flex cursor-pointer gap-[24px]  ">
                        <Link href="https://www.facebook.com "><FaFacebookF /></Link>
                        <Link href="https://x.com "><FaTwitter /></Link>
                        <Link href="https://dribbble.com "><FaDribbble /></Link>
                        <Link href="https://www.instagram.com/ "><FaInstagram /></Link>
                    </div>
                </div>
                <button className='px-[20px] py-3 bg-yellow rounded-full hidden md:block hover:bg-black hover:text-white' onClick={handleRegister}>Register</button>
                <button onClick={handleLogin} className=" bg-gradient-to-b from-white to-[#d7e1d8]  pr-6 text-gray-800 font-semibold  px-[20px] py-3 rounded-full shadow-md  hover:opacity-9 hover:bg-black hover:text-white"
                >
                    Login
                </button>

                <Register open={isRegisterOpen} setOpen={setIsRegisterOpen} handleLogin={handleLogin} />
                <Login open={isLoginOpen} setOpen={setIsLoginOpen} handleRegister={handleRegister} />

                <button className='block lg:hidden' >
                    <IoMdMenu className='text-6xl' onClick={handleOpen} />
                </button>

            </div>
            {
                isOpen ? < Nav_First_Sidebar isOpen={isOpen} setIsOpen={setIsOpen} /> : ""
            }
        </nav>
    )
}

export default page
