import { motion } from "framer-motion";

const categories = [
    {
        title: "Lifestyle",
        count: "29 Courses",
        img: "/images/category/category-2/img-1.png",
        icon: "/images/category/category-1/1.svg",
    },
    {
        title: "Cyber",
        count: "45 Courses",
        img: "/images/category/category-2/img-2.png",
        icon: "/images/category/category-1/2.svg",
    },
    {
        title: "Development",
        count: "28 Courses",
        img: "/images/category/category-2/img-3.png",
        icon: "/images/category/category-1/3.svg",
    },
    {
        title: "Photography",
        count: "03 Courses",
        img: "/images/category/category-2/img-4.png",
        icon: "/images/category/category-1/4.svg",
    },
    {
        title: "Finance",
        count: "22 Courses",
        img: "/images/category/category-2/img-5.png",
        icon: "/images/category/category-1/5.svg",
    },
    {
        title: "Management",
        count: "20 Courses",
        img: "/images/category/category-2/img-6.jpg",
        icon: "/images/category/category-1/6.svg",
    },
    {
        title: "Design",
        count: "18 Courses",
        img: "/images/category/category-2/img-8.png",
        icon: "/images/category/category-1/8.svg",
    },
];

const MovingImages = () => {
    return (
        <div className="text-center py-10 overflow-hidden">
            <h2 className="text-4xl font-bold mb-4">Top Categories You Want to Learn</h2>
            <p className="text-gray-600 mb-8 text-sm uppercase">Course Categories</p>

            <motion.div
                className="flex gap-6 w-full"
                animate={{
                    x: ["0%", "-100%"], 
                }}
                transition={{
                    repeat: Infinity, 
                    duration: 10, 
                    ease: "linear", 
                }}
            >
                {[...categories, ...categories].map((category, index) => (
                    <motion.div
                        key={index}
                        className="group flex-none w-[290px]"
                    >
                        <div className="overflow-hidden flex justify-center">
                            <img
                                src={category.img}
                                alt={category.title}
                                className="w-[290px] h-[250px] object-cover rounded-2xl transition-transform duration-300 group-hover:scale-110"
                            />
                        </div>
                        <div className="text-center py-4 px-6">
                            <div className="flex justify-center mb-4 items-center space-x-4">
                                <img
                                    src={category.icon}
                                    alt={`${category.title} Icon`}
                                    className="w-7 h-7 object-contain transition-transform duration-300 group-hover:scale-110"
                                />
                                <div className="flex items-center flex-col">
                                    <h3 className="text-lg font-bold text-gray-800 group-hover:text-purple-700 transition-colors">
                                        {category.title}
                                    </h3>
                                    <p className="text-sm text-gray-500 mt-1">{category.count}</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </motion.div>
        </div>
    );
};

export default MovingImages;
