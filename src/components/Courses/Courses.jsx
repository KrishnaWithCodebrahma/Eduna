"use client";
import React from "react";
import { GiBlackBook } from "react-icons/gi";
import { FiUser } from "react-icons/fi";
import { FaStar } from "react-icons/fa";
import { PiGraduationCapThin } from "react-icons/pi";
import { motion } from "framer-motion";
import GradualSpacing from "@/components/ui/gradual-spacing";

const courses = [
  {
    id: 1,
    category: "Data Science",
    lessons: 23,
    instructor: "Harrison Stone",
    title: "Data Competitive Strategy Law and Organization Course",
    reviews: 94,
    price: 674,
    students: 352,
    image: "/images/course/course-1/1.png",
  },
  {
    id: 2,
    category: "Business",
    lessons: 4,
    instructor: "Alexander Wells",
    title: "Grow Personal Financial Security Thinking & Principles",
    reviews: 46,
    price: 633,
    students: 964,
    image: "/images/course/course-1/2.png",
  },
  {
    id: 3,
    category: "Design",
    lessons: 87,
    instructor: "Harrison Stone",
    title: "Data Competitive Strategy Law and Organization Course",
    reviews: 94,
    price: 383,
    students: 316,
    image: "/images/course/course-1/3.png",
  },
  {
    id: 4,
    category: "Development",
    lessons: 23,
    instructor: "Harrison Stone",
    title: "Data Competitive Strategy Law and Organization Course",
    reviews: 94,
    price: 356,
    students: 352,
    image: "/images/course/course-1/1.png",
  },
  {
    id: 5,
    category: "Marketing",
    lessons: 23,
    instructor: "Harrison Stone",
    title: "Data Competitive Strategy Law and Organization Course",
    reviews: 94,
    price: 643,
    students: 553,
    image: "/images/course/course-1/1.png",
  },
  {
    id: 6,
    category: "Cyber Security",
    lessons: 23,
    instructor: "Harrison Stone",
    title: "Data Competitive Strategy Law and Organization Course",
    reviews: 94,
    price: 275,
    students: 254,
    image: "/images/course/course-1/1.png",
  },
];

const Page = () => {
  return (
    <section>
      <div className="bg-white md:px-[110px] px-[20px]">
        <div className="pt-[50px]">
          <h3 className="text-center text-gray">ONLINE COURSES</h3>
          <h2 className="text-center font-extrabold text-xl pt-[20px] tracking-tighter">
            <GradualSpacing text="Get Your Course With Us" />
          </h2>
        </div>
        <div>
          <div className="grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2 xl:grid-cols-3 gap-8 py-[89px] relative">
            <motion.div style={{
              transformOrigin: 'center',
            }}
              initial={{ rotate: 0, opacity: 0.5 }}
              animate={{ rotate: [0, 15, 0], opacity: 0.5 }}
              transition={{ duration: 4, ease: 'easeInOut', repeat: Infinity, delay: 1  , }}
               className="absolute bottom-[550px] left-[-90px] hidden lg:block">
              <img src='/images/abstracts/abstract-element-regular.svg' className='' />
            </motion.div>
            <motion.div style={{
              transformOrigin: 'center',
            }}
              initial={{ rotate: 0, opacity: 0.5 }}
              animate={{ rotate: [0, 15 , 0, 15, 0], opacity: 0.5 , x: [0, 100, -100 , 0] }}
              transition={{ duration: 4, ease: 'easeInOut', repeat: Infinity, delay: 1  , }}
               className="absolute bottom-[50px] right-[-90px] hidden lg:block">
              <img src="/images/course/course-1/shape-3.svg" className='' />
            </motion.div>
            {courses.map((course, index) => (
              <motion.div
                key={course.id}
                initial={{ y: 100, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 * index, duration: 1 }}
                className="relative group"
              >
                <div className="overflow-hidden relative">
                  <img
                    src={course.image}
                    className="object-cover w-full h-[250px] rounded-t-lg transition-transform duration-300 ease-in-out group-hover:scale-110"
                    alt={course.category}
                  />
                  <div className="absolute top-4 left-4 bg-yellow rounded-tr-lg rounded-bl-lg p-2">
                    <p className="text-black text-sm font-semibold">{course.category}</p>
                  </div>
                </div>
                <div className="bg-[#f5f5f5] px-[20px] py-[29px] rounded-b-lg">
                  <div className="flex space-x-8 items-center">
                    <div className="flex space-x-2 items-center text-gray">
                      <GiBlackBook /> <span>{course.lessons} lessons</span>
                    </div>
                    <div className="flex space-x-2 items-center text-gray">
                      <FiUser /> <span>{course.instructor}</span>
                    </div>
                  </div>
                  <div>
                    <h2 className="font-bold mt-6">{course.title}</h2>
                  </div>
                  <div className="pt-4 pb-4">
                    <div className="flex items-center space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <FaStar key={i} className="text-yellow" />
                      ))}
                      <span className="text-gray px-[20px]">
                        ({course.reviews} Reviews)
                      </span>
                    </div>
                  </div>
                  <hr className="w-full text-gray mx-auto my-4" />
                  <div className="flex justify-between items-center">
                    <h2 className="text-violet font-bold text-3xl">${course.price.toFixed(2)}</h2>
                    <div className="text-gray flex space-x-2">
                      <PiGraduationCapThin className="text-2xl font-bold" />{" "}
                      <span>{course.students} students</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Page;
