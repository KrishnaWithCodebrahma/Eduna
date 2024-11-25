import React from 'react'

const ShowCategory = ({ isOpen, setIsOpen }) => {
    
    return (
        <div className="z-[100]" >
            <div className="flex flex-col space-y-2 bg-[#fdfdfd] p-10 pt-[2px]">
                {/* Category items with hover effect */}
                <p className="space-y-1 hover:text-violet w-40 cursor-pointer pl-[5px] pr-[5px] pt-2" >All Categories</p>
                <p className="space-y-1 hover:text-violet w-40 cursor-pointer pl-[5px] pr-[5px] pt-2" >Business</p>
                <p className="space-y-1 hover:text-violet w-40 cursor-pointer pl-[5px] pr-[5px] pt-2" >Marketing</p>
                <p className="space-y-1 hover:text-violet w-40 cursor-pointer pl-[5px] pr-[5px] pt-2" >Design</p>
                <p className="space-y-1 hover:text-violet w-40 cursor-pointer pl-[5px] pr-[5px] pt-2" >Finance</p>
                <p className="space-y-1 hover:text-violet w-40 cursor-pointer pl-[5px] pr-[5px] pt-2" >Lifestyle</p>
                <p className="space-y-1 hover:text-violet w-40 cursor-pointer pl-[5px] pr-[5px] pt-2" >Development</p>
                <p className="space-y-1 hover:text-violet w-40 cursor-pointer pl-[5px] pr-[5px] pt-2" >Photography</p>
            </div>
        </div>
    )
}

export default ShowCategory
