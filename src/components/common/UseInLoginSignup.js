import Image from 'next/image'
import React from 'react'

const UseInLoginSignup = () => {
    return (
        <div>
            <div className='my-3'>
                <div className='px-[20px] py-[15px]'>
                    <p className='text-[#5d5f5f] text-center'>Or Sign Up With</p>
                    <div className='flex items-center justify-center space-x-3 mt-2'>
                        <div className='bg-[#fdeded] w-[50px] h-[50px] rounded-full flex items-center justify-center'>
                            <img src='/images/icons/icon-color-google.svg' className='w-6 h-6' />
                        </div>
                        <div className='bg-[#e8f2fe] w-[50px] h-[50px] rounded-full flex items-center justify-center'>
                            <img src='/images/icons/icon-color-facebook.svg' className='w-6 h-6' />
                        </div>
                        <div className='bg-[#e6f2f8] w-[50px] h-[50px] rounded-full flex items-center justify-center'>
                            <img src='/images/icons/icon-color-linkedin.svg' className='w-6 h-6' />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}






export default UseInLoginSignup  
