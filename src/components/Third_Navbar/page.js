import React, { useState } from "react";
import Drawer from "@mui/material/Drawer";
import { motion } from "framer-motion";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";

const page = ({ isOpen, setIsOpen }) => {

    const closeSidebar = () => {
        setIsOpen(false);
    };

    return (
        <Drawer anchor="right" open={isOpen} onClose={closeSidebar}>
            <motion.div
                style={{ width: "350px", backgroundColor: "#f5f5f5", height: "100%" }}
                initial={{ x: "-100%"  , opacity:0}}
                animate={{ x: 0  , opacity:1 }}
                transition={{ type: "spring", stiffness: 50 , delay:0.5 }}
                exit={{ y: "-100" , opacity:0 }}
            >
                <div
                    className="bg-[#f5f5f5]"
                    style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        padding: "16px",
                        borderBottom: "1px solid #ddd",
                    }}
                >
                    <motion.h2 initial={{ x: -100, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ type: "spring" }}>
                        Add to cart
                    </motion.h2>
                    <IconButton
                        onClick={closeSidebar}
                        style={{
                            backgroundColor: "#d73b3b",
                            color: "white",
                            fontSize: "16px",
                            width: "40px",
                            height: "40px",
                            borderRadius: "50%",
                        }}
                    >
                        <CloseIcon style={{ fontSize: "20px" }} />
                    </IconButton>
                </div>

            </motion.div>

        </Drawer>
    );
};

export default page;
