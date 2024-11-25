import React from "react";
import CourseCard from "./CourseCard";

const courses = [
    {
        id: 1,
        image: "/images/course/course-1/1.png",
        category: "Data Science",
        lessons: 23,
        instructor: "Harrison Stone",
        title: "Data Competitive Strategy Law and Organization Course",
        reviews: 94,
        price: "$674.00",
        students: 352,
    },
    {
        id: 2,
        image: "/images/course/course-1/2.png",
        category: "Business",
        lessons: 4,
        instructor: "Alexander Wells",
        title: "Grow Personal Financial Security Thinking & Principles",
        reviews: 46,
        price: "$633.00",
        students: 964,
    },
    {
        id: 3,
        image: "/images/course/course-1/3.png",
        category: "Design",
        lessons: 87,
        instructor: "Harrison Stone",
        title: "Data Competitive Strategy Law and Organization Course",
        reviews: 94,
        price: "$383.00",
        students: 316,
    },
    {
        id: 4,
        image: "/images/course/course-1/4.png",
        category: "Development",
        lessons: 23,
        instructor: "Harrison Stone",
        title: "Data Competitive Strategy Law and Organization Course",
        reviews: 94,
        price: "$356.00",
        students: 352,
    },

    {
        image: "/images/course/course-1/5.png",
        category: "Marketing",
        lessons: 23,
        instructor: "Harrison Stone",
        title: "Data Competitive Strategy Law and Organization Course",
        reviews: 94,
        price: "$643.00",
        students: 553,
    },
    {
        image: "/images/course/course-1/6.png",
        category: "Cyber Security",
        lessons: 23,
        instructor: "Harrison Stone",
        title: "Data Competitive Strategy Law and Organization Course",
        reviews: 94,
        price: "$275.00",
        students: 254,
    },
    {
        image: "/images/course/course-1/7.png",
        category: "Development",
        lessons: 7,
        instructor: "Harrison Stone",
        title: "Data Competitive Strategy Law and Organization Course",
        reviews: 94,
        price: "$275.00",
        students: 254,
    },
    {
        image: "/images/course/course-1/8.png",
        category: "English",
        lessons: 7,
        instructor: "Harrison Stone",
        title: "Data Competitive Strategy Law and Organization Course",
        reviews: 94,
        price: "$275.00",
        students: 254,
    },
    {
        image: "/images/course/course-1/9.png",
        category: "Photoshop",
        lessons: 7,
        instructor: "Harrison Stone",
        title: "Data Competitive Strategy Law and Organization Course",
        reviews: 94,
        price: "$275.00",
        students: 254,
    },
];

const CourseList = () => {
    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2 xl:grid-cols-3 gap-8 px-[20px] lg:px-[110px] py-[20px] lg:py-[89px]">
            {courses.map((course, index) => (
                <CourseCard key={index} course={course} delay={0.8 + index * 0.2} />
            ))}
        </div>
    );
};

export default CourseList;
