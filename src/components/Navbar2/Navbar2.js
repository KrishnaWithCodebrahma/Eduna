"use client"
import React, { useState } from 'react';
import { RiArrowDropDownLine } from "react-icons/ri";
import Second_Sidebar from "@/components/Second_Sidebar/Second_Sidebar";
import Third_Navbar from "@/components/Third_Navbar/Third_Navbar";
import { motion } from "framer-motion";
import Link from 'next/link';
import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import FormatAlignRightIcon from '@mui/icons-material/FormatAlignRight';

const StyledBadge = styled(Badge)(({ theme }) => ({
    '& .MuiBadge-badge': {
        right: -3,
        top: 13,
        border: `2px solid ${theme.palette.background.paper}`,
        padding: '0 4px',
    },
}));

const Navbar2 = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isOpen2, setIsOpen2] = useState(false);
    const [isOpenHome, setIsOpenHome] = useState(false);
    const [isOpenCourses, setIsOpenCourses] = useState(false);
    const [isOpenPages, setIsOpenPages] = useState(false);
    const [isOpenNews, setIsOpenNews] = useState(false);
    const [isOpenAbout, setIsOpenAbout] = useState(false);

    const handleOpen = () => {
        setIsOpen(!isOpen);
    };

    const handleOpen2 = () => {
        setIsOpen2(!isOpen2);
    };

    return (
        <section className=''>
            <div className='bg-white-200 p-0 hidden lg:block z-10 relative'>
                <div className='flex items-center justify-between px-6 '>
                    <div>
                        <ul className='flex items-center space-x-2 '>
                            {/* Home Dropdown */}
                            <li
                                className='nav-link'
                                onMouseEnter={() => setIsOpenHome(true)}
                                onMouseLeave={() => setIsOpenHome(false)}
                            >
                                <span className='hover:text-violet py-4 '>Home</span>
                                <RiArrowDropDownLine className='text-2xl hover:text-violet' />
                                {isOpenHome && (
                                    <motion.ul
                                        initial={{ scaleY: 0, transformOrigin: 'top center' }}
                                        animate={{ scaleY: 1 }}
                                        transition={{ duration: 0.3, ease: 'easeOut' }}
                                        className='absolute left-10 top-[99%] sub-nav-bg'
                                        style={{ overflow: 'hidden' }}
                                    >
                                        <li className='sub-nav-link'>
                                            <Link href="/">Home 2</Link>
                                        </li>
                                        <hr className='w-[80%] mx-auto ' />
                                        <li className='sub-nav-link'>
                                            <Link href="/">Home 2</Link>
                                        </li>
                                        <hr className='w-[80%] mx-auto ' />
                                        <li className='sub-nav-link'>
                                            <Link href="/">Home 3</Link>
                                        </li>
                                        <hr className='w-[80%] mx-auto ' />
                                    </motion.ul>
                                )}
                            </li>

                            {/* Courses Dropdown */}
                            <li
                                className='nav-link'
                                onMouseEnter={() => setIsOpenCourses(true)}
                                onMouseLeave={() => setIsOpenCourses(false)}
                            >
                                <span className='hover:text-violet py-4'>Courses</span>
                                <RiArrowDropDownLine className='text-2xl hover:text-violet' />
                                {isOpenCourses && (
                                    <motion.ul
                                        initial={{ scaleY: 0, transformOrigin: 'top center' }}
                                        animate={{ scaleY: 1 }}
                                        transition={{ duration: 0.3, ease: 'easeOut' }}
                                        className='absolute left-[125px] top-[99%] sub-nav-bg'
                                        style={{ overflow: 'hidden' }}
                                    >
                                        <li className='sub-nav-link'>
                                            <Link href="/courses">Course 1</Link>
                                        </li>
                                        <hr className='w-[80%] mx-auto ' />
                                        <li className='sub-nav-link'>
                                            <Link href="/courses">Course 2</Link>
                                        </li>
                                        <hr className='w-[80%] mx-auto ' />
                                        <li className='sub-nav-link'>
                                            <Link href="/courses">Course 3</Link>
                                        </li>
                                        <hr className='w-[80%] mx-auto ' />
                                    </motion.ul>
                                )}
                            </li>

                            {/* News Dropdown */}
                            <li
                                className='nav-link'
                                onMouseEnter={() => setIsOpenNews(true)}
                                onMouseLeave={() => setIsOpenNews(false)}
                            >
                                <span className='hover:text-violet py-4'>News</span>
                                <RiArrowDropDownLine className='text-2xl hover:text-violet' />
                                {isOpenNews && (
                                    <motion.ul
                                        initial={{ scaleY: 0, transformOrigin: 'top center' }}
                                        animate={{ scaleY: 1 }}
                                        transition={{ duration: 0.3, ease: 'easeOut' }}
                                        className='absolute left-[240px] top-[99%] sub-nav-bg'
                                        style={{ overflow: 'hidden' }}
                                    >
                                        <li className='sub-nav-link'>
                                            <Link href="/news">Latest News</Link>
                                        </li>
                                        <hr className='w-[80%] mx-auto ' />
                                        <li className='sub-nav-link'>
                                            <Link href="/news">Trending News</Link>
                                        </li>
                                        <hr className='w-[80%] mx-auto ' />
                                    </motion.ul>
                                )}
                            </li>

                            {/* About Dropdown */}
                            <li
                                className='nav-link'
                                onMouseEnter={() => setIsOpenAbout(true)}
                                onMouseLeave={() => setIsOpenAbout(false)}
                            >
                                <span className='hover:text-violet py-4'>About</span>
                                <RiArrowDropDownLine className='text-2xl hover:text-violet' />
                                {isOpenAbout && (
                                    <motion.ul
                                        initial={{ scaleY: 0, transformOrigin: 'top center' }}
                                        animate={{ scaleY: 1 }}
                                        transition={{ duration: 0.3, ease: 'easeOut' }}
                                        className='absolute left-[320px] top-[99%] sub-nav-bg'
                                        style={{ overflow: 'hidden' }}
                                    >
                                        <li className='sub-nav-link'>
                                            <Link href="/about">Our Story</Link>
                                        </li>
                                        <hr className='w-[80%] mx-auto ' />
                                        <li className='sub-nav-link'>
                                            <Link href="/about">Our Team</Link>
                                        </li>
                                    </motion.ul>
                                )}
                            </li>

                            {/* Page Dropdown */}
                            <li
                                className='nav-link'
                                onMouseEnter={() => setIsOpenPages(true)}
                                onMouseLeave={() => setIsOpenPages(false)}
                            >
                                <span className='hover:text-violet py-4'>Page</span>
                                <RiArrowDropDownLine className='text-2xl hover:text-violet' />
                                {isOpenPages && (
                                    <motion.ul
                                        initial={{ scaleY: 0, transformOrigin: 'top center' }}
                                        animate={{ scaleY: 1 }}
                                        transition={{ duration: 0.3, ease: 'easeOut' }}
                                        className='absolute left-[420px] top-[99%] sub-nav-bg'
                                        style={{ overflow: 'hidden' }}
                                    >
                                        <li className='sub-nav-link'>
                                            <Link href="/products">Page 1</Link>
                                        </li>
                                        <hr className='w-[80%] mx-auto ' />
                                        <li className='sub-nav-link'>
                                            <Link href="/products">Page 2</Link>
                                        </li>
                                        <hr className='w-[80%] mx-auto ' />
                                        <li className='sub-nav-link'>
                                            <Link href="/products">Page 3</Link>
                                        </li>
                                        <hr className='w-[80%] mx-auto ' />
                                    </motion.ul>
                                )}
                            </li>
                            <li className='nav-link'>
                                <Link href="/contact" className='hover:text-violet'>Contact</Link>
                            </li>
                        </ul>
                    </div>

                    <div className='flex justify-center items-center space-x-6'>
                        <div className='hover:text-violet'>
                            <p className=' cursor-pointer'>+532 321 33 33</p>
                        </div>
                        <div className='hover:text-violet'>
                            <p className=' cursor-pointer'>helloeduna@gmail.com</p>
                        </div>
                        <div className='flex items-center justify-center space-x-8 pr-4'>
                            <IconButton aria-label="cart" onClick={handleOpen2}>
                                <StyledBadge badgeContent={1} color="secondary">
                                    <ShoppingCartIcon />
                                </StyledBadge>
                            </IconButton>
                            <FormatAlignRightIcon onClick={handleOpen} className=' cursor-pointer' />
                        </div>
                    </div>
                </div>
            </div>

            <div className='block lg:hidden px-[20px] py-[20px]'>
                <div className='flex justify-between'>
                    <div className='space-x-4 sm:space-x-8 md:space-x-12 flex flex-col md:flex-row'>
                        <p className='hover:text-violet pl-[15px] sm:pl-[27px] cursor-pointer'>+532 321 33 33</p>
                        <p className='hover:text-violet cursor-pointer'>helloeduna@gmail.com</p>
                    </div>
                    <div className='flex items-center justify-end md:space-x-20 space-x-4 pr-4'>
                        <IconButton aria-label="cart" onClick={handleOpen2}>
                            <StyledBadge badgeContent={1} color="secondary">
                                <ShoppingCartIcon className=' cursor-pointer' />
                            </StyledBadge>
                        </IconButton>
                        <FormatAlignRightIcon onClick={handleOpen} className=' cursor-pointer' />
                    </div>
                </div>
            </div>
            {isOpen && <Second_Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />}
            {isOpen2 && <Third_Navbar isOpen={isOpen2} setIsOpen={setIsOpen2} />}
        </section>
    );
};

export default Navbar2;
