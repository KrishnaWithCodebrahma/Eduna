import React, { useState } from 'react';
import { IoIosSearch } from 'react-icons/io';
import { RiArrowDropDownLine } from "react-icons/ri";
import ShowCategory from './ShowCategory';
import { FaAngleUp } from "react-icons/fa";
import { FaAngleDown } from "react-icons/fa";



const SearchComponent = () => {
    const [isOpen, setIsOpen] = useState(false);
    const handleOpen = () => {
        setIsOpen(!isOpen)
    }
    return (
        <div className="hidden sm:block z-50">
            <div className="flex items-center space-x-0 ">
                <div className='  hidden xl:block  bg-white p-[12px] cursor-pointer py-[10px] rounded-l-full drop-shadow' >
                    <div className='flex items-center justify-center space-x-6 relative' onClick={handleOpen} >
                        <p className='select-none'>
                            All Categories
                        </p>
                        {
                            isOpen ? ( <FaAngleUp /> ) : (<FaAngleDown />)
                        }
                        {
                            isOpen && (<div className='absolute top-[35px] left-[-20px] border-t-4 border-violet  '>
                                <ShowCategory isOpen={isOpen} setIsOpen={setIsOpen} />
                            </div>)
                        }
                    </div>
                </div>
                <div className="relative">
                    <input
                        type="text"
                        placeholder="Search your ..."
                        className="hidden xl:block p-[12px] text-sm  rounded-r-full  w-[350px] text-gray-700 pl-6 pr-14 md:pr-28 focus:outline-none shadow-md"
                    />
                    <input
                        type="text"
                        placeholder="Search your ..."
                        className="block xl:hidden p-[12px] text-sm rounded-full w-48 md:w-[200px] lg:w-[250px]  text-gray-700 pl-6 pr-14 md:pr-28 focus:outline-none shadow-md"
                    />
                    <div className="absolute top-1/2 right-[2px] transform -translate-y-1/2 flex items-center space-x-2 bg-[#543EE8] p-2 rounded-full">
                        <p className="hidden md:block text-white cursor-pointer">Search</p>
                        <IoIosSearch className="text-white text-2xl" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SearchComponent;
