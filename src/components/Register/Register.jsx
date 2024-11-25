"use client"
import Dialog from '@mui/material/Dialog';
import { IconButton, TextField } from '@mui/material';
import CloseIcon from "@mui/icons-material/Close";
// import Link from 'next/link';
import CustomButton from '@/components/common/CustomButton';
import UseInLoginSignup from '@/components/common/UseInLoginSignup';
import Checkboxes from '@/components/common/Checkboxes';
// import motion from "framer-motion"



export default function Register({ open, setOpen, handleLogin }) {

    const handleClose = () => {
        setOpen(false);
    };

    const closeSidebar = () => {
        setOpen(false);
    };
    return (
        <>
            <div>
                <Dialog
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="draggable-dialog-title"
                    PaperProps={{
                        sx: {
                            width: {
                                lg: "50%",
                                md:"70%",
                                sm: "85%",
                                xs: "95%"
                            },
                            margin: {
                                xs: "5px",
                                sm: "80px",
                                md: "125px",
                                lg: "250px",
                            },
                            padding: "10px"
                        }
                    }}
                >
                    <div className='px-[0px] md:p-[20px] pt-[20px] flex items-end justify-end'>
                        <IconButton onClick={closeSidebar} style={{ backgroundColor: "#d73b3b", color: "white", fontSize: "16px", width: "40px", height: "40px", borderRadius: "50%", }}>
                            <CloseIcon style={{ fontSize: "20px" }} />
                        </IconButton>
                    </div>
                    <div className='lg:px-[75px] px-[20px] '>
                        <div className='text-center'>
                            <div className='flex items-center justify-center'>
                                <img src='/images/logo.svg' className='w-[116px] h-[28px]' />
                            </div>
                            <p className='my-3 ' style={{ lineHeight: "42px", fontSize: "36px", letterSpacing: "-0.36px", fontWeight: 700 }}><strong>Sign Up</strong></p>
                            <p>Already have an account? <span className='text-violet cursor-pointer' onClick={handleLogin}>Sign In</span></p>
                        </div>
                        <div className='my-4'>
                            <div className='py-2'>
                                <TextField id="filled-basic" label="Enter Name" variant="outlined" className='w-full ' />
                            </div>
                            <div className='py-2'>
                                <TextField id="filled-basic" label="Enter Username" variant="outlined" className='w-full ' />
                            </div>
                            <div className='py-2'>
                                <TextField id="filled-basic" label="Enter Email" variant="outlined" className='w-full ' />
                            </div>
                            <div className='py-2'>
                                <TextField id="filled-basic" label="Enter Password" variant="outlined" className='w-full ' />
                            </div>
                        </div>
                        <Checkboxes />
                        <CustomButton
                            buttonText="Register Now"
                            buttonBgColor="#543ee8"
                            iconBgColor="#ffffff"
                            textColor="#ffffff"
                            iconColor="#543ee8"
                            textSize="normal"
                            textTracking="normal"
                            paddingX="15px"
                            paddingY="2px"
                        />
                        <UseInLoginSignup />
                    </div>
                </Dialog>
            </div>
        </>
    );
}
