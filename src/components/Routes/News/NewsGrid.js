
"use client"
import { FaRegCalendarDays } from "react-icons/fa6";
import { FaRegCommentDots } from "react-icons/fa6";
import { motion } from "framer-motion"
import Image from "next/image";
const courses = [
  {
    id: 1,
    imgSrc: "/images/course/course-1/1.png",
    category: "Data Science",
    date: "03 June, 2024",
    comments: "04 comments",
    title: "Voices from the Learning Education Hub For Your Children",
  },
  {
    id: 2,
    imgSrc: "/images/course/course-1/2.png",
    category: "Learning",
    date: "11 May, 2024",
    comments: "08 comments",
    title: "Digital Business Is So Amazing For Every People For Improve",
  },
  {
    id: 3,
    imgSrc: "/images/course/course-1/3.png",
    category: "FullStack",
    date: "21 Dec, 2024",
    comments: "08 comments",
    title: "Stories from the Educational Front at Classroom Is Allow",
  },
  {
    id: 4,
    imgSrc: "/images/course/course-1/4.png",
    category: "Security",
    date: "05 Nov, 2024",
    comments: "08 comments",
    title: "Connecting the Dots in Education with Learning Nexus",
  },
  {
    id: 5,
    imgSrc: "/images/course/course-1/5.png",
    category: "Business",
    date: "07 Jun, 2024",
    comments: "98 comments",
    title: "Exploring Learning Landscapes in All Academic Calendar For Season",
  },
  {
    id: 6,
    imgSrc: "/images/course/course-1/6.png",
    category: "Marketing",
    date: "28 Aug, 2024",
    comments: "11 comments",
    title: "Connecting the Dots in Education with Learning Nexus",
  },
  {
    id: 7,
    imgSrc: "/images/course/course-1/7.png",
    category: "Development",
    date: "28 Feb, 2024",
    comments: "11 comments",
    title: "Connecting the Dots in Education with Learning Nexus",
  },
  {
    id: 8,
    imgSrc: "/images/course/course-1/8.png",
    category: "Social",
    date: "01 Jan, 2024",
    comments: "101 comments",
    title: "Boost Your Well-being Through Smart Food Choices",
  },
  {
    id: 9,
    imgSrc: "/images/course/course-1/9.png",
    category: "Academy",
    date: "17 Jun, 2024",
    comments: "08 comments",
    title: "Boost Your Well-being Through Smart Food Choices",
  },
];
const NewsGrid = () => {


  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2 xl:grid-cols-3 gap-8 px-[20px] lg:px-[110px] py-[89px]">
      {courses.map((course, index) => (
        <motion.div
          key={course.id}
          initial={{ y: -200, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: index * 0.2, duration: 1.5 }}
          className="relative group"
        >
          <div className="overflow-hidden relative">
            <img
              src={course.imgSrc}
              className="object-cover w-full h-[334px] rounded-lg transition-transform duration-300 ease-in-out group-hover:scale-110"
              alt={`Course Image ${course.id}`}
            />
            <div className="absolute bottom-4 left-4 bg-violet hover:bg-black rounded-tr-lg rounded-bl-lg p-2 cursor-pointer">
              <p className="text-white text-sm font-semibold hover:text-white">
                {course.category}
              </p>
            </div>
          </div>
          <div className="flex flex-row space-x-4 pt-4">
            <div className="flex flex-row items-center text-gray gap-[6px]">
              <FaRegCalendarDays style={{ fontSize: "14px" }} />
              <p>{course.date}</p>
            </div>
            <div className="flex flex-row items-center text-gray gap-[6px]">
              <FaRegCommentDots style={{ fontSize: "14px" }} />
              <p>{course.comments}</p>
            </div>
          </div>
          <div>
            <h4
              style={{
                marginTop: "24px",
                fontSize: "20px",
                fontWeight: 700,
                lineHeight: "30px",
              }}
            >
              {course.title}
            </h4>
          </div>
        </motion.div>
      ))}
    </div>
  )
}

export default NewsGrid