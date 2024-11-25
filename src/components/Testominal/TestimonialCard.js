import { motion } from "framer-motion";
import { useState } from "react";
import { FaStar } from "react-icons/fa";
import { HiArrowLongLeft, HiArrowLongRight } from "react-icons/hi2";

const testimonials = [
  {
    id: 1,
    stars: 5,
    text: "Attending EduVibe School of Business was one of the best decisions I've ever made. The curriculum was practical and industry-focused, and I was able to apply what I learned in the classroom.",
    name: "Subham",
    role: "Fullstack",
    image: "/images/testimonial/testimonial-1/author-1.png",
  },
  {
    id: 2,
    stars: 4,
    text: "The instructors were highly knowledgeable and always ready to help. The projects gave me real-world experience, and I feel confident stepping into the industry.",
    name: "Joo ",
    role: "Fronted ",
    image: "/images/testimonial/testimonial-1/author-2.png",
  },
  {
    id: 3,
    stars: 5,
    text: "The support from the community and the quality of the courses exceeded my expectations. I highly recommend this platform to anyone wanting to advance their career.",
    name: "Ayush",
    role: "BDE",
    image: "/images/testimonial/testimonial-1/author-3.png",
  },
  {
    id: 4,
    stars: 5,
    text: "The support from the community and the quality of the courses exceeded my expectations. I highly recommend this platform to anyone wanting to advance their career.",
    name: "MR 360",
    role: "Intern",
    image: "/images/testimonial/testimonial-1/author-4.png",
  },
];

const TestimonialCard = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [moveOnLeft, setMoveOnLeft] = useState(null);

  const handleLeftClick = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
    setMoveOnLeft(true)
  };

  const handleRightClick = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
    setMoveOnLeft(false)
  };

  return (
    <div className="mt-10 overflow-hidden relative">
      <motion.div
        className="bg-white px-[10px] py-[24px] w-full rounded-3xl"
        key={testimonials[currentIndex].id}
        animate={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: moveOnLeft ? -100 : 100 }}
        exit={{ opacity: 0, x: moveOnLeft ? 100 : -100 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
      >
        <div className="flex space-x-1">
          {Array.from({ length: testimonials[currentIndex].stars }).map(
            (_, index) => (
              <FaStar key={index} className="text-yellow-400" />
            )
          )}
        </div>
        <div className="pt-6 pb-8">
          <p>{testimonials[currentIndex].text}</p>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex justify-between items-start gap-4">
            <img
              src={testimonials[currentIndex].image}
              alt={testimonials[currentIndex].name}
              className="rounded-full"
            />
            <div>
              <p
                style={{
                  fontSize: "20px",
                  fontWeight: 700,
                  lineHeight: "20px",
                  marginBottom: "8px",
                }}
              >
                {testimonials[currentIndex].name}
              </p>
              <p
                className="text-gray"
                style={{ fontSize: "14px", fontWeight: 400, lineHeight: "16px" }}
              >
                {testimonials[currentIndex].role}
              </p>
            </div>
          </div>

        </div>
      </motion.div>
      <HiArrowLongLeft
        className="absolute right-[60px] bottom-[10px] transform -translate-y-1/2 text-blue-400 w-8 h-8 cursor-pointer"
        onClick={handleLeftClick}
      />
      <HiArrowLongRight
        className="absolute right-4 bottom-[10px] transform -translate-y-1/2 text-blue-400 w-8 h-8 cursor-pointer"
        onClick={handleRightClick}
      />
    </div>
  );
};

export default TestimonialCard;
