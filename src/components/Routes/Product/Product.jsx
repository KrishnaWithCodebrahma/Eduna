"use client"
import React, { useEffect, useState } from 'react';
import Footer from "@/components/Footer/Footer";
import { motion } from "framer-motion"
import { FaCartShopping } from "react-icons/fa6";
import { FaStar } from "react-icons/fa6";
import ScrollToTop from 'react-scroll-to-top';
import GetStartedSection from "@/components/GetStartedSection/GetStartedSection"
import { Pagination, Stack } from '@mui/material';
import Navbar from "@/components/Navbar/Navbar";
import Navbar2 from "@/components/Navbar2/Navbar2";


const products = [
    {
        id: 1,
        name: "Secret Demo Files",
        price: 642,
        oldPrice: 848,
        reviews: 48,
        image: "/images/product/1.png",
    },
    {
        id: 2,
        name: "Digital Demo Chronicles",
        price: 742,
        oldPrice: 948,
        reviews: 48,
        image: "/images/product/2.png",
    }, {
        id: 3,
        name: "Mystic Demo Magic",
        price: 555,
        oldPrice: 777,
        reviews: 48,
        image: "/images/product/3.png",
    },
    {
        id: 4,
        name: "Demo of Truth",
        price: 852,
        oldPrice: 1072,
        reviews: 48,
        image: "/images/product/4.png",
    }, {
        id: 5,
        name: "Final Demo Night",
        price: 152,
        oldPrice: 272,
        reviews: 48,
        image: "/images/product/5.png",
    },
    {
        id: 6,
        name: "Haunted Demo Quest",
        price: 712,
        oldPrice: 812,
        reviews: 48,
        image: "/images/product/6.png",
    },
];

const Product = () => {
    const [loading, setLoading] = useState(true)
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
                <h3 className=' text-center' style={{ fontSize: "36px", marginBottom: "24px", lineHeight: "30px" }}>Our Product</h3>
                <p className=' text-center'><span className='text-red'>HOME</span> <span className='text-[#5d5f5f]'> / OUR PRODUCTS</span></p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2 xl:grid-cols-3 gap-8 px-[20px] lg:px-[110px] py-[89px]">
                {products.map((product, index) => (
                    <motion.div key={product.id} initial={{ y: -200, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} transition={{ delay: 0.2 * (index + 1), duration: 1.5 }} className="relative group">
                        <div className="overflow-hidden relative">
                            <img src={product.image} className="object-cover w-full h-[388px] rounded-lg transition-transform duration-300 ease-in-out group-hover:scale-110" alt={product.name} />
                            <div className="absolute bottom-[-50px] left-0 w-full flex justify-center opacity-0 group-hover:opacity-100 group-hover:bottom-10 transition-all duration-300">
                                <button className="flex bg-violet pl-[40px] px-[60px] pr-[4px] py-[5px] gap-[24px] items-center rounded-full">
                                    <p className="text-white font-bold">
                                        <span className="hidden md:block text-white">Add to cart</span>
                                        <span className="block md:hidden">Start</span>
                                    </p>
                                    <div className="bg-white px-[20px] py-[18px] rounded-full">
                                        <FaCartShopping className="text-violet text-sm" />
                                    </div>
                                </button>
                            </div>
                        </div>
                        <div className="text-center mt-[30px]">
                            <h1 className="mb-[14px] text-center inline-block font-extrabold text-xl hover:text-violet">
                                {product.name}
                            </h1>
                            <div className="flex flex-row items-center justify-center space-x-2">
                                {Array.from({ length: 5 }).map((_, i) => (
                                    <FaStar key={i} className="text-yellow" />
                                ))}
                                <div>
                                    <p className="text-[#5d5f5f]">({product.reviews} Reviews)</p>
                                </div>
                            </div>
                            <p className="mt-2 flex items-center space-x-3 justify-center">
                                <span className="font-bold" style={{ fontSize: "20px", fontWeight: 700, color: "#543ee8" }}> ${product.price}</span>
                                <span className="text-[#5d5f5f] line-through"> ${product.oldPrice}</span>
                            </p>
                        </div>
                    </motion.div>
                ))}
            </div>

            <div>
                <Stack alignItems={"center"} spacing={2} className='mb-4' >
                    <Pagination count={2} variant="text" color="secondary" />
                </Stack>
            </div>
            <div className='px-[20px] lg:px-[110px]'>
                <GetStartedSection />
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

export default Product
