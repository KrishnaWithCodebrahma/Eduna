import React, { useState } from "react";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

const First_Sidebar = ({ isOpen, setIsOpen }) => {
    const [openItem, setOpenItem] = useState(null);

    const closeSidebar = () => {
        setIsOpen(false);
    };

    const toggleSubItems = (item) => {
        setOpenItem((prev) => (prev === item ? null : item));
    };

    const menuItems = [
        { text: "Home", link: "/", hasSubItems: true },
        { text: "Courses", link: "/courses", hasSubItems: true },
        { text: "Pages", link: "/products", hasSubItems: true },
        { text: "News", link: "/news", hasSubItems: true },
        { text: "About", link: "/about", hasSubItems: true },
        { text: "Contact", link: "/contact", hasSubItems: false },
    ];

    return (
        <Drawer anchor="left" open={isOpen} onClose={closeSidebar}>
            <motion.div
                style={{ width: "350px", backgroundColor: "#f5f5f5", height: "100%" }}
                initial={{ x: "-100%" }}
                animate={{ x: 0 }}
                transition={{ type: "spring", stiffness: 50 }}
            >
                <div
                    style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        padding: "16px",
                        borderBottom: "1px solid #ddd",
                    }}
                >
                    <img
                        src="/images/logo.svg"
                        alt="Logo"
                        style={{ height: "34px", objectFit: "contain" }}
                    />
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

                <motion.div style={{ padding: "16px" }}>
                    {menuItems.map((item, index) => (
                        <motion.div
                            key={item.text}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: index * 0.1, duration: 0.3 }}
                        >
                            <div
                                style={{
                                    display: "flex",
                                    justifyContent: "space-between",
                                    alignItems: "center",
                                    padding: "10px 0",
                                    borderBottom: "1px solid #ddd",
                                }}
                            >
                                <Link
                                    href={item.link}
                                    style={{
                                        textDecoration: "none",
                                        color: "#333",
                                        fontSize: "16px",
                                        fontWeight: "500",
                                    }}
                                >
                                    {item.text}
                                </Link>
                                {item.hasSubItems && (
                                    <IconButton
                                        onClick={() => toggleSubItems(item.text)}
                                        style={{
                                            color: "#333",
                                            cursor: "pointer",
                                            padding: "4px",
                                            borderBottom: "1px solid #ddd",
                                        }}
                                    >
                                        {openItem === item.text ? (
                                            <RemoveIcon className="text-violet" />
                                        ) : (
                                            <AddIcon className="text-violet" />
                                        )}
                                    </IconButton>
                                )}
                            </div>

                            {item.hasSubItems && openItem === item.text && (
                                <motion.div
                                    style={{ paddingLeft: "16px", marginTop: "5px" }}
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ delay: 0.3, duration: 0.3 }}
                                >
                                    {[1, 2, 3].map((sub, index) => (
                                        <div
                                            key={index}
                                            style={{
                                                display: "flex",
                                                justifyContent: "space-between",
                                                alignItems: "center",
                                                padding: "10px 0",
                                                borderBottom: "1px solid #ddd",
                                            }}
                                        >
                                            <Link href={item.link}>{item.text} {sub}</Link>
                                        </div>
                                    ))}
                                </motion.div>
                            )}
                        </motion.div>
                    ))}
                </motion.div>
            </motion.div>
        </Drawer>
    );
};

export default First_Sidebar;
