import React from 'react';
import CustomButton from '@/components/common/CustomButton';


const headerStyle = {
    fontSize: "20px",
    lineHeight: "23px",
    marginBottom: "44px",
    fontWeight: 700
}

const AboutForm = () => {
    return (
        <div className='px-[40px] '>
            <div className='flex lg:flex-row flex-col-reverse items-start justify-between content-end'>
                <div className='lg:p-[60px] px-[10px] pt-0  lg:pt-[480px] hidden lg:block'>
                    <div className='flex items-start flex-col'>
                        <h4 style={headerStyle}>Contact</h4>
                        <div className='flex space-x-4 items-center justify-center mb-7'>
                            <img src="/images/icons/icon-phone-blue.svg" className='w-[28px] h-[28px]' />
                            <div className=''>
                                <p className='text-[#5d5f5f] ' >24/7 support</p>
                                <p className='text-black ' >+1234 45678 0987</p>
                            </div>
                        </div>
                        <div className='flex space-x-4 items-center justify-center mb-7'>
                            <img src="/images/icons/icon-envelope-blue.svg" className='w-[28px] h-[28px]' />
                            <div className=''>
                                <p className='text-[#5d5f5f] ' >send message</p>
                                <p className='text-black ' >eduna@gmail.com</p>
                            </div>
                        </div>
                        <div className='flex space-x-4 items-center justify-center mb-7'>
                            <img src="/images/icons/icon-location-blue.svg" className='w-[28px] h-[28px]' />
                            <div className=''>
                                <p className='text-[#5d5f5f] ' >Our location</p>
                                <p className='text-black ' >32/jenin, london</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='lg:p-[60px] p-[20px] drop-shadow-2xl bg-[#fff] rounded-md'>
                    <p className='text-[#5d5f5f] mb-[32px]'>Get In Touch</p>
                    <p style={{ fontSize: "36px", fontWeight: 700, lineHeight: "50px" }}>Have Any Questions About Eduna? Contact With Us Today</p>
                    <div className='pt-10'>
                        <div className='flex flex-col md:flex-row gap-10 gap-x-20 items-center justify-between p-4'>
                            <input
                                placeholder='Full Name'
                                className='placeholder:text-sm  placeholder:text-[#5d5f5f] border-b-2 border-[#5d5f5f] w-full p-4 focus:outline-none focus:border-blue-500 bg-transparent'
                            />
                            <input
                                placeholder='Phone Number'
                                className='placeholder:text-sm  placeholder:text-[#5d5f5f] border-b-2 border-[#5d5f5f] w-full p-4  focus:outline-none focus:border-blue-500 bg-transparent'
                            />
                        </div>
                        <div className='p-[10px]'>
                            <input
                                placeholder='Your Website'
                                className='placeholder:text-sm  placeholder:text-[#5d5f5f] border-b-2 border-[#5d5f5f] w-full p-4 focus:outline-none focus:border-blue-500 bg-transparent'
                            />
                        </div>
                        <div className='p-[10px]'>
                            <input
                                placeholder='Enter Your Email'
                                className='placeholder:text-sm  placeholder:text-[#5d5f5f] border-b-2 border-[#5d5f5f] w-full p-4 focus:outline-none focus:border-blue-500 bg-transparent'
                            />
                        </div>
                        <div className='p-[10px]'>
                            <input
                                placeholder='How can I help you ? Feel free to get in touch!'
                                className='placeholder:text-sm  placeholder:text-[#5d5f5f] border-b-2 border-[#5d5f5f] w-full p-4 focus:outline-none focus:border-blue-500 bg-transparent'
                            />
                        </div>
                        <div className='p-[10px]'>
                            <div className="flex items-center space-x-3">
                                <input
                                    style={{ borderRadius: "200%" }}
                                    type="checkbox"
                                    id="checkbox"
                                    className="w-4 h-4  border-2 border-[#5d5f5f] checked:bg-blue-500 focus:outline-none"
                                />
                                <label htmlFor="checkbox" className="text-[#5d5f5f]">I agree to the privacy policy </label>
                            </div>
                        </div>
                        <div className='p-[10px]'>
                            <CustomButton
                                buttonText="Send Your Message"
                                buttonBgColor="#543ee8"
                                iconBgColor="#ffffff"
                                textColor="#ffffff"
                                iconColor="#543ee8"
                                textSize="normal"
                                textTracking="normal"
                                paddingX="20px"
                                paddingY="5px"
                                hoverBgColor="#000000"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutForm
