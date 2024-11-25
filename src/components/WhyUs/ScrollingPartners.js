"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const ScrollingPartners = () => {
  const images = [
    "/images/partner/partner-1/1.svg",
    "/images/partner/partner-1/2.svg",
    "/images/partner/partner-1/3.svg",
    "/images/partner/partner-1/4.svg",
    "/images/partner/partner-1/5.svg",
    "/images/partner/partner-1/6.svg",
  ];

  const [imageIndex, setImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (

    <div className="pt-20  overflow-hidden ">
      <h2 className="text-gray text-center pb-12">Get in touch with the <span className="font-bold text-xl text-black">250+</span> companies who Collaboration us</h2>
      <div className="relative ">
        <motion.div
          className="flex gap-4  "
          style={{ width: "100%", display: "flex" }}
          initial={{ x: 0 }}
          animate={{ x: "-100%" }}
          transition={{
            repeat: Infinity,
            ease: "linear",
            duration: 12,
            repeatType: "loop",
          }}
        >
          {[...images, ...images].map((image, index) => (
            <motion.div
              key={index}
              className="flex-shrink-0 w-full sm:w-1/2 lg:w-1/4"
              initial={{ opacity: 1 }}
              animate={{ opacity: 1 }}
              transition={{ delay: index * 0.1 }}
            >
              <img
                src={image}
                alt={`partner-${index}`}
                className=" object-contain"
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default ScrollingPartners;
