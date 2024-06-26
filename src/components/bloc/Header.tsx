'use client';

import React, { useState } from 'react';
import { MotionConfig, motion } from 'framer-motion';

interface HeaderProps {
    onSectionChange: (section: string) => void;
}

const Header: React.FC<HeaderProps> = ({ onSectionChange }) => {
    const [section, setSection] = useState('/');
    const [active, setActive] = useState('/');

    const handleLinkClick = (link: string) => {
        setSection(link);
        onSectionChange(link); // Appel de la fonction de rappel avec la nouvelle section
    };

    const handleActiveClick = (link: string) => {
        setActive(link);
    };

    return (
        <motion.header
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.2 }}
            drag
  dragConstraints={{ left: -300, right: 0, top:-100, bottom:0 }}
  
            className='lg:w-[526px] h-[144px] hidden lg:block p-[30px] ml-auto mb-10 rounded-[16px] bg-slate-800 hover:brightness-125 hover:ring-2 hover:ring-emerald-500 dark:bg-[#111111] shadow-lg shadow-slate-900 '
        >
            <nav className='hidden lg:block'>
                <ul className='flex '>
                    <MotionConfig
                        transition={{
                            duration: 0.5,
                            ease: 'easeInOut',
                        }}
                    >
                        <motion.li
                            whileHover={{ scale: 1.2, rotate: '5deg' }}
                            whileTap={{ scale: 0.8, rotate: '10deg' }}
                            className={`w-full h-20 rounded-[10px]  cursor-pointer  font-poppins    font-medium mx-2.5  text-xtiny  text-[#A6A6A6]    justify-center flex flex-col items-center   transition-all duration-300 ease-in-out hover:text-white  lg:text-white  ${
                                active === '/'
                                    ? '  lg:bg-gradient-to-r from-sky-950 to-blue-950 '
                                    : ' bg-slate-600 hover:lg:bg-gradient-to-r from-sky-700 to-blue-700'
                            }`}
                            onClick={() => {
                                handleLinkClick('/');
                                handleActiveClick('/');
                            }}
                        >
                            <span className='text-xl mb-1'>
                                <svg
                                    stroke='currentColor'
                                    fill='currentColor'
                                    strokeWidth='0'
                                    viewBox='0 0 1024 1024'
                                    height='1em'
                                    width='1em'
                                    xmlns='http://www.w3.org/2000/svg'
                                >
                                    <path d='M946.5 505L560.1 118.8l-25.9-25.9a31.5 31.5 0 0 0-44.4 0L77.5 505a63.9 63.9 0 0 0-18.8 46c.4 35.2 29.7 63.3 64.9 63.3h42.5V940h691.8V614.3h43.4c17.1 0 33.2-6.7 45.3-18.8a63.6 63.6 0 0 0 18.7-45.3c0-17-6.7-33.1-18.8-45.2zM568 868H456V664h112v204zm217.9-325.7V868H632V640c0-22.1-17.9-40-40-40H432c-22.1 0-40 17.9-40 40v228H238.1V542.3h-96l370-369.7 23.1 23.1L882 542.3h-96.1z'></path>
                                </svg>
                            </span>
                            Home
                        </motion.li>
                        <motion.li
                            whileHover={{ scale: 1.2,  rotate: '2.5deg' }}
                            whileTap={{ scale: 0.8, rotate: '5deg' }}
                            className={`w-full h-20 rounded-[10px]  cursor-pointer  font-poppins    font-medium mx-2.5  text-xtiny  text-[#A6A6A6]    justify-center flex flex-col items-center   transition-all duration-300 ease-in-out hover:text-white  lg:text-white  ${
                                active === '/resume'
                                    ? '  lg:bg-gradient-to-r from-sky-950 to-blue-950 '
                                    : ' bg-slate-600 hover:lg:bg-gradient-to-r from-sky-700 to-blue-700'
                            }`}
                            onClick={() => {
                                handleLinkClick('/resume');
                                handleActiveClick('/resume');
                            }}
                        >
                            <span className='text-xl mb-1'>
                                <svg
                                    stroke='currentColor'
                                    fill='none'
                                    strokeWidth='0'
                                    viewBox='0 0 24 24'
                                    height='1em'
                                    width='1em'
                                    xmlns='http://www.w3.org/2000/svg'
                                >
                                    <path
                                        d='M6 6C6 5.44772 6.44772 5 7 5H17C17.5523 5 18 5.44772 18 6C18 6.55228 17.5523 7 17 7H7C6.44771 7 6 6.55228 6 6Z'
                                        fill='currentColor'
                                    ></path>
                                    <path
                                        d='M6 10C6 9.44771 6.44772 9 7 9H17C17.5523 9 18 9.44771 18 10C18 10.5523 17.5523 11 17 11H7C6.44771 11 6 10.5523 6 10Z'
                                        fill='currentColor'
                                    ></path>
                                    <path
                                        d='M7 13C6.44772 13 6 13.4477 6 14C6 14.5523 6.44771 15 7 15H17C17.5523 15 18 14.5523 18 14C18 13.4477 17.5523 13 17 13H7Z'
                                        fill='currentColor'
                                    ></path>
                                    <path
                                        d='M6 18C6 17.4477 6.44772 17 7 17H11C11.5523 17 12 17.4477 12 18C12 18.5523 11.5523 19 11 19H7C6.44772 19 6 18.5523 6 18Z'
                                        fill='currentColor'
                                    ></path>
                                    <path
                                        fillRule='evenodd'
                                        clipRule='evenodd'
                                        d='M2 4C2 2.34315 3.34315 1 5 1H19C20.6569 1 22 2.34315 22 4V20C22 21.6569 20.6569 23 19 23H5C3.34315 23 2 21.6569 2 20V4ZM5 3H19C19.5523 3 20 3.44771 20 4V20C20 20.5523 19.5523 21 19 21H5C4.44772 21 4 20.5523 4 20V4C4 3.44772 4.44771 3 5 3Z'
                                        fill='currentColor'
                                    ></path>
                                </svg>
                            </span>
                            Resume
                        </motion.li>
                        <motion.li
                            whileHover={{ scale: 1.2, rotate: '-2.5deg' }}
                            whileTap={{ scale: 0.8, rotate: '-5deg' }}
                            className={`w-full h-20 rounded-[10px]  cursor-pointer  font-poppins    font-medium mx-2.5  text-xtiny  text-[#A6A6A6]    justify-center flex flex-col items-center   transition-all duration-300 ease-in-out hover:text-white  lg:text-white  ${
                                active === '/works'
                                    ? '  lg:bg-gradient-to-r from-sky-950 to-blue-950 '
                                    : ' bg-slate-600 hover:lg:bg-gradient-to-r from-sky-700 to-blue-700'
                            }`}
                            onClick={() => {
                                handleLinkClick('/works');
                                handleActiveClick('/works');
                            }}
                        >
                            <span className='text-xl mb-1'>
                                <svg
                                    stroke='currentColor'
                                    fill='none'
                                    strokeWidth='2'
                                    viewBox='0 0 24 24'
                                    strokeLinecap='round'
                                    strokeLinejoin='round'
                                    height='1em'
                                    width='1em'
                                    xmlns='http://www.w3.org/2000/svg'
                                >
                                    <path d='M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z'></path>
                                    <polyline points='7.5 4.21 12 6.81 16.5 4.21'></polyline>
                                    <polyline points='7.5 19.79 7.5 14.6 3 12'></polyline>
                                    <polyline points='21 12 16.5 14.6 16.5 19.79'></polyline>
                                    <polyline points='3.27 6.96 12 12.01 20.73 6.96'></polyline>
                                    <line
                                        x1='12'
                                        y1='22.08'
                                        x2='12'
                                        y2='12'
                                    ></line>
                                </svg>
                            </span>
                            Works
                        </motion.li>

                        <motion.li
                            whileHover={{ scale: 1.2,  rotate: '-5deg' }}
                            whileTap={{
                                scale: 0.8,
                                rotate: '-10deg',
                            }}
                            className={`w-full h-20 rounded-[10px]  cursor-pointer  font-poppins    font-medium mx-2.5  text-xtiny  text-[#A6A6A6]    justify-center flex flex-col items-center   transition-all duration-300 ease-in-out hover:text-white  lg:text-white   ${
                                active === '/contact'
                                    ? '  lg:bg-gradient-to-r from-sky-950 to-blue-950 '
                                    : ' bg-slate-600 hover:lg:bg-gradient-to-r from-sky-700 to-blue-700'
                            }`}
                            onClick={() => {
                                handleLinkClick('/contact');
                                handleActiveClick('/contact');
                            }}
                        >
                            <span className='text-xl mb-1'>
                                <svg
                                    stroke='currentColor'
                                    fill='currentColor'
                                    strokeWidth='0'
                                    viewBox='0 0 24 24'
                                    height='1em'
                                    width='1em'
                                    xmlns='http://www.w3.org/2000/svg'
                                >
                                    <g>
                                        <path
                                            fill='none'
                                            d='M0 0h24v24H0z'
                                        ></path>
                                        <path d='M3 2h16.005C20.107 2 21 2.898 21 3.99v16.02c0 1.099-.893 1.99-1.995 1.99H3V2zm4 2H5v16h2V4zm2 16h10V4H9v16zm2-4a3 3 0 0 1 6 0h-6zm3-4a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm8-6h2v4h-2V6zm0 6h2v4h-2v-4z'></path>
                                    </g>
                                </svg>
                            </span>
                            Contact
                        </motion.li>
                    </MotionConfig>
                </ul>
            </nav>
        </motion.header>
    );
};

export default Header;
