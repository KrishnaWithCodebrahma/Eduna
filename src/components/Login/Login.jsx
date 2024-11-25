"use client";
import * as React from 'react';
import Dialog from '@mui/material/Dialog';
import { IconButton, TextField } from '@mui/material';
import CloseIcon from "@mui/icons-material/Close";
import CustomButton from '@/components/common/CustomButton';
import UseInLoginSignup from '@/components/common/UseInLoginSignup';
import Checkboxes from '@/components/common/Checkboxes';
// import { motion, AnimatePresence } from 'framer-motion';


export default function Login({ open, setOpen, handleRegister }) {
    const handleClose = () => {
        setOpen(false);
    };

    const closeSidebar = () => {
        setOpen(false);
    };

    return (
        <>
            <div >
                <Dialog
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="draggable-dialog-title"
                    PaperProps={{
                        sx: {
                            width: {
                                lg: "50%",
                                md: "70%",
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
                    <div className="px-[0px] md:p-[20px] pt-[20px] flex items-end justify-end" >
                        <IconButton onClick={closeSidebar} style={{ backgroundColor: "#d73b3b", color: "white", fontSize: "16px", width: "40px", height: "40px", borderRadius: "50%", }}>
                            <CloseIcon style={{ fontSize: "20px" }} />
                        </IconButton>
                    </div>
                    <div className='lg:px-[75px] px-[20px]'>
                        <div className="text-center">
                            <div className="flex items-center justify-center">
                                <img src="/images/logo.svg" className="w-[116px] h-[28px] sm:w-[96px] sm:h-[24px] xs:w-[80px] xs:h-[20px]" alt="Logo" />
                            </div>
                            <p className='my-3 text-7xl' style={{ lineHeight: "42px", fontSize: "36px", letterSpacing: "-0.36px", fontWeight: 900 }}><strong>Sign In</strong></p>
                            <p className="text-sm sm:text-base">
                                Didn&apos;t create an account? <span className="text-violet cursor-pointer" onClick={handleRegister}>Sign Up</span>
                            </p>
                        </div>
                        <div className='my-4'>
                            <div className='py-2'>
                                <TextField id="filled-basic" label="Enter Username" variant="outlined" className='w-full ' />
                            </div>
                            <div className='py-2'>
                                <TextField id="filled-basic" label="Enter Password" variant="outlined" className='w-full ' />
                            </div>
                        </div>
                        <Checkboxes />
                        <CustomButton
                            buttonText="Sign In"
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
