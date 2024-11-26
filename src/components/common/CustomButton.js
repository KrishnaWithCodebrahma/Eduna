import Link from 'next/link';
import React from 'react';
import { FaArrowRight } from 'react-icons/fa';

const CustomButton = ({
    onClick = () => { },
    url = "/",
    buttonText = 'Start Learning Today',
    buttonBgColor = '#ffcd20',
    iconBgColor = '#011c1a',
    textColor = '#ffffff',
    iconColor = '#ffffff',
    textSize = 'normal',
    textTracking = 'normal',
    paddingX = '20px',
    paddingY = '5px',
    hoverBgColor = '#ffffff',
}) => {
    const buttonStyle = {
        backgroundColor: buttonBgColor,
        paddingLeft: paddingX,
        paddingRight: '4px',
        paddingTop: paddingY,
        paddingBottom: paddingY,

    };

    const textStyle = {
        color: textColor,
        letterSpacing: textTracking === 'tight' ? '-0.05em' : 'normal',
        fontWeight: textSize === 'bold' ? 'bold' : 'normal',
    };

    const iconStyle = {
        backgroundColor: iconBgColor,
        padding: '18px 20px',
        borderRadius: '9999px',
    };

    return (
        <Link href={url} className='cursor-pointer'>
            <button style={buttonStyle} className="flex gap-[24px] items-center rounded-full "
                onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = hoverBgColor;
                }}
                onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = buttonBgColor;
                }}
            >
                <p style={textStyle}>
                    <span>{buttonText}</span>
                </p>
                <div style={iconStyle}>
                    <FaArrowRight style={{ color: iconColor }} className="text-sm" />
                </div>
            </button>
        </Link>
    );
};

export default CustomButton;
