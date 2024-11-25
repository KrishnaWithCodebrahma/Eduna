import React from "react";
import { motion } from "framer-motion";
import { GiBlackBook } from "react-icons/gi";
import { FiUser } from "react-icons/fi";
import { FaStar } from "react-icons/fa";
import { PiGraduationCapThin } from "react-icons/pi";

const CourseCard = ({ course, delay }) => {
  return (
    <motion.div
      initial={{ y: -200, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ delay, duration: 1.5 }}
      className="relative group"
    >
      <div className="overflow-hidden relative">
        <img
          src={course.image}
          className="object-cover w-full h-[250px] rounded-t-lg transition-transform duration-300 ease-in-out group-hover:scale-110"
          alt="Course Image"
        />
        <div className="absolute top-4 left-4 bg-yellow rounded-tr-lg rounded-bl-lg p-2">
          <p className="text-black text-sm font-semibold">{course.category}</p>
        </div>
      </div>
      <div className="bg-[#f5f5f5] px-[20px] py-[29px] rounded-b-lg">
        <div className="flex space-x-8 items-center">
          <div className="flex space-x-2 text-gray">
            <GiBlackBook /> <span>{course.lessons} lessons</span>
          </div>
          <div className="flex space-x-2 text-gray">
            <FiUser /> <span>{course.instructor}</span>
          </div>
        </div>
        <div>
          <h2 className="font-bold mt-6">{course.title}</h2>
        </div>
        <div className="pt-4 pb-4">
          <div className="flex items-center space-x-1">
            {Array(5)
              .fill(0)
              .map((_, index) => (
                <FaStar key={index} className="text-yellow" />
              ))}
            <span className="text-gray px-[20px]">({course.reviews} Reviews)</span>
          </div>
        </div>
        <hr className="w-full text-gray mx-auto my-4" />
        <div className="flex justify-between items-center">
          <h2 className="text-violet font-bold text-3xl ">{course.price}</h2>
          <div className="text-gray flex space-x-2">
            <PiGraduationCapThin className="text-2xl font-bold" />{" "}
            <span>{course.students} students</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default CourseCard;
