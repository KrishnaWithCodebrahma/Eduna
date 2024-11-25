"use client"
import React from 'react'
import { RiGraduationCapLine } from "react-icons/ri";
import { motion } from "framer-motion";
import NumberTicker from '@/components/ui/number-ticker';
import GradualSpacing from '@/components/ui/gradual-spacing';
import CustomButton from '@/components/common/CustomButton';



const categories = [
  {
    title: "Business",
    courses: "04 courses",
    bgColor: "#fcebfe",
    icon: "/images/category/category-1/1.svg"
  },
  {
    title: "Marketing",
    courses: "88 courses",
    bgColor: "#eef7f6",
    icon: "/images/category/category-1/2.svg"
  }, {
    title: "Design",
    courses: "23 courses",
    bgColor: "#fceeee",
    icon: "/images/category/category-1/3.svg"
  },
  {
    title: "Finance",
    courses: "02 courses",
    bgColor: "#f0eefd",
    icon: "/images/category/category-1/4.svg"
  }, {
    title: "Lifestyle",
    courses: "29 courses",
    bgColor: "#fceeee",
    icon: "/images/category/category-1/5.svg"
  },
  {
    title: "Cyber",
    courses: "45 courses",
    bgColor: "#f0ffed",
    icon: "/images/category/category-1/6.svg"
  },
  {
    title: "Development",
    courses: "28 courses",
    bgColor: "#fcebfe",
    icon: "/images/category/category-1/7.svg"
  }, {
    title: "Photography",
    courses: "03 courses",
    bgColor: "#eef7f6",
    icon: "/images/category/category-1/8.svg"
  },
];

const page = () => {
  return (
    <section style={{
      backgroundImage: "url('images/section-bg-1.png')",
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      height: '100%',
    }} className=''>
      <div className=" px-4 py-12 pt-[80px]">
        <div className="grid grid-cols-1  lg:grid-cols-2  gap-0">
          <motion.div initial={{ x: -200, y: 3, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{
              duration: 1.5,
              delay: 0.5,
              ease: 'easeInOut',
            }} className="flex justify-center  pl-10 relative ">

            <img
              src="images/about/about-1/about-img.png"
              alt="About Image"
              className="rounded-br-[80px] object-cover max-w-full h-auto mb-10 z-0"
            />
            <div className='absolute top-[120px] left-[84px] '>
              <img src='/images/testimonial/testimonial-1/shape-2.svg' />
            </div>
            <motion.div className="absolute top-[220px] left-[74px] bg-white p-4 rounded-lg shadow-lg flex items-center space-x-4"
              animate={{
                y: ["0%", "5%", "-5%", "0%"],
              }}
              transition={{
                repeat: Infinity,
                duration: 3,
                ease: "easeInOut",
              }}>
              <div className="flex items-center justify-center w-16 h-16 bg-[#fceeee] rounded-full">
                <RiGraduationCapLine className="w-8 h-8 text-red" />
              </div>
              <div className="flex flex-col">
                <p className="text-red text-3xl font-semibold"> <NumberTicker value={9396} />+</p>
                <p className="text-gray text-sm font-medium">Enrolled Learners</p>
              </div>

            </motion.div>
            <motion.div
              className="absolute bottom-3 right-[140px] hidden md:block"
              style={{
                transformOrigin: 'center',
              }}
              initial={{ rotate: 0 , opacity : 0.5 }}
              animate={{ rotate: [0, 15, 0] , opacity: [0.5] }}
              transition={{ duration: 4, ease: 'easeInOut'  , repeat: Infinity , delay: 1 }}
              whileHover={{ rotate: [0, 180 , -180, 0] }} 
            >
              <img src="/images/about/about-1/shape-3.svg" alt="Rotating shape" />
            </motion.div>
          </motion.div>
          <motion.div initial={{ x: 200, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{
              duration: 1.5,
              delay: 0.5,
              ease: 'easeInOut',
            }} className="flex items-center justify-center px-[25px]">
            <div className="font-poppins">
              <div>
                <h6 className="text-xl font-[16px] text-gray mb-[16px]">
                  WELCOME TO EDUNA
                </h6>
                <h3 className="font-[36px] text-4xl mb-4 font-aeonik">
                  Digital Online Academy: Your <br />
                  Path to Creative Excellence
                </h3>
                <p className="font-[16px] text-gray ">
                  Excedteur sint occaecat cupidatat non proident sunt in culpa qui officia deserunt mollit.
                </p>
              </div>
              <div className="mt-[18px] relative ">
                <div className='hidden md:block absolute top-[40px] right-[40px]'>
                  <img src='/images/abstracts/abstract-element-regular.svg' className='' />
                </div>
                <ul className="mb-6 space-y-4 flex flex-col items-start justify-start">
                  <li className="flex items-start space-x-3 ">
                    <img src="/images/icons/icon-check-blue.svg" alt="icon-check-blue" className="w-4 h-4" />
                    <span className="text-lg font-semibold text-gray">Our Expert Trainers</span>
                  </li>
                  <li className="flex items-start space-x-3 ">
                    <img src="/images/icons/icon-check-blue.svg" alt="icon-check-blue" className="w-4 h-4" />
                    <span className="text-lg font-semibold text-gray">Online Remote Learning</span>
                  </li>
                  <li className="flex items-start space-x-3 ">
                    <img src="/images/icons/icon-check-blue.svg" alt="icon-check-blue" className="w-4 h-4" />
                    <span className="text-lg font-semibold text-gray">Easy to follow curriculum</span>
                  </li>
                  <li className="flex items-start space-x-3 ">
                    <img src="/images/icons/icon-check-blue.svg" alt="icon-check-blue" className="w-4 h-4" />
                    <span className="text-lg font-semibold text-gray">Lifetime Access</span>
                  </li>
                </ul>
              </div>

            </div>
          </motion.div>
        </div>
      </div>
      <div className='mt-[35px] p-[36px] px-[16px] font-poppins'>
        <div className='px-[25px]'>
          <h2 className='font-light text-gray pb-2'>COURSE CATEGORIES</h2>
          <div className='flex items-center justify-between flex-col md:flex-row'>
            <div style={{ letterSpacing: "-0.24px" }} className="font-semibold md:font-extrabold tracking-tighter  p-[10px] text-2xl sm:text-3xl md:text-4xl lg:text-4xl pb-[20px] lg:pb-[4px]">
              <div className='block lg:hidden font-aeonik'>
                <GradualSpacing text="Top Categories You " />
                <GradualSpacing text="Want to Learn" />
              </div>
              <div className='lg:block hidden'>
                <GradualSpacing text="Top Categories You Want to Learn" />
              </div>
            </div>

            <div className="w-full md:w-auto flex justify-start md:justify-end">
              <CustomButton
                url='/courses'
                buttonText="Find Courses"
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
            </div>
          </div>
          <div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-[28px] pt-[60px] px-[10px] lg:px-[50px] font-poppins'>
              {categories.map((category, index) => (
                <motion.div
                  key={index}
                  initial={{ y: 100, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{
                    duration: 0.4 + index * 0.1,
                    delay: index * 0.1,
                    ease: 'easeInOut',
                  }}
                  className="bg-white px-[8px] py-[10px] lg:py-[16px] rounded-full shadow-lg flex items-center space-x-6"
                >
                  <div
                    className="flex items-center justify-center w-16 h-16 rounded-full"
                    style={{ backgroundColor: category.bgColor }}
                  >
                    <img src={category.icon} className="w-8 h-8" alt={`${category.title} icon`} />
                  </div>
                  <div className="flex flex-col">
                    <p className="text-2xl font-medium">{category.title}</p>
                    <p className="text-gray text-sm font-medium">{category.courses}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className='bg-black px-[10px] lg:px-[110px] relative'>
        <div
          className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 ' style={{ padding: "20px 0px 80px 0px" }}>
          <motion.div initial={{ x: 110, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.6 }} className='flex justify-center items-start gap-5 mt-10 '>
            <div className='bg-[#ffcd2017] px-[18px] py-[14px] rounded-full'>
              <img src='/images/features/features-1/1.svg' className='w-[40px] h-[35px] object-contain ' />
            </div>
            <div>
              <h2 className='text-white  mb-[20px]  ' style={{ fontSize: "20px", lineHeight: "26px", fontWeight: 700 }} >Educator Support</h2>
              <p className='text-[#ffffffcc] ' style={{ fontSize: "16px", lineHeight: "29px", fontWeight: 400 }} >
                Excedteur sint occaecat cupidatat non the  proident sunt in culpa
              </p>
            </div>
          </motion.div>
          <motion.div initial={{ x: 110, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.6 }} className='flex justify-center items-start gap-5 mt-10 '>
            <div className='bg-[#6fc08117] px-[18px] py-[14px] rounded-full'>
              <img src='/images/features/features-1/2.svg' className='w-[40px] h-[35px] object-contain ' />
            </div>
            <div>
              <h2 className='text-white  mb-[20px]  ' style={{ fontSize: "20px", lineHeight: "26px", fontWeight: 700 }} >Top Instructor</h2>
              <p className='text-[#ffffffcc] ' style={{ fontSize: "16px", lineHeight: "29px", fontWeight: 400 }} >
                Excedteur sint occaecat  cupidatat non the proident sunt in culpa
              </p>
            </div>
          </motion.div>
          <motion.div initial={{ x: 110, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.9, duration: 0.6 }} className='flex justify-center items-start gap-5 mt-10'>
            <div className='bg-[#df434317] px-[18px] py-[14px] rounded-full'>
              <img src='/images/features/features-1/3.svg' className='w-[40px] h-[35px] object-contain ' />
            </div>
            <div>
              <h2 className='text-white  mb-[20px]  ' style={{ fontSize: "20px", lineHeight: "26px", fontWeight: 700 }} >Award Wining</h2>
              <p className='text-[#ffffffcc] ' style={{ fontSize: "16px", lineHeight: "29px", fontWeight: 400 }} >
                Excedteur sint occaecat  cupidatat non the  proident sunt in culpa
              </p>
            </div>
          </motion.div>
        </div>
        <motion.div
          initial={{ y: 0, opacity: 0.3 }}
          animate={{ y: [0, -15, 0], opacity: 0.5 }}
          transition={{
            duration: 4,
            repeat: Infinity,
            repeatType: "loop",
            ease: "easeInOut",
          }}
          className="absolute top-[40px] left-[100px]"
        >
          <img src="/images/hero/home-1/shape-3.svg" />
        </motion.div>
        <motion.div
          initial={{ y: 0, opacity: [0.1, 0.2, 0.3, 0.4, 0.6, 0.7, 0.8, 0.9, 1, 0.9, 0.8, 0.7, 0.6, 0.5, 0.4, 0.3, 0.2, 0.1] }}
          animate={{ y: [0, 5, 10, 15, -15, -10, -5, 0], opacity: [0.1, 0.2, 0.3, 0.4, 0.6, 0.7, 0.8, 0.9, 1, 0.9, 0.8, 0.7, 0.6, 0.5, 0.4, 0.3, 0.2, 0.1] }} // Moves top and bottom with fading
          transition={{
            duration: 7,
            repeat: Infinity,
            repeatType: "loop",
            ease: "easeInOut",
          }}
          className="absolute bottom-[100px] right-[20px] transform -translate-x-1/2 -translate-y-1/2"
        >
          <img src="/images/about/about-1/shape-3.svg" />
        </motion.div>
      </div>
    </section>
  )
}

export default page
