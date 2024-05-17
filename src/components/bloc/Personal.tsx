import React from 'react';
import Image from 'next/image';
import lol from '../../../public/next-js-svgrepo-com.svg';
import { Button } from '../ui/button';
import { motion } from 'framer-motion';
import photo from '../../../public/2016.png';
import Link from 'next/link';



const personal = () => {
    return (
        <motion.div 
        initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            drag="y"
  dragConstraints={{ top: 0, bottom: 400 }}
            className='col-span-12 mx-8 md:mx-0 lg:col-span-4 lg:h-screen lg:sticky  top-44'>
            <div className='w-full mb-6 lg:mb-0 mx-auto relative bg-slate-800 hover:brightness-125 hover:ring-2 hover:ring-emerald-500 text-center px-6 rounded-[20px] mt-[180px] md:mt-[220px] lg:mt-0 shadow-lg shadow-cyan-900 '>
                <Image
                    src={photo}
                    priority
                    alt='Image'
                    className='w-[240px] absolute left-[50%] transform -translate-x-[50%] h-[240px] drop-shadow-xl mx-auto rounded-[20px] -mt-[180px] object-cover'
                />

                <div className='pt-[100px] pb-8'>
                    <h1 className=' mt-6 mb-1 text-5xl font-semibold text-white '>
                        {' '}
                        Catto Francois
                    </h1>
                    <h3 className='mb-4  inline-block  px-5 py-1.5 rounded-lg text-white '>
                        {' '}
                        Web Developer
                    </h3>
                    <div className='flex justify-center space-x-3'>
                        <Link
                            href='https://www.facebook.com/francois.catto'
                            target='_blank'
                            rel='noopener noreferrer'
                        >
                            <Button className=' group bg-slate-900 hover:lg:bg-gradient-to-r from-sky-700 to-blue-700'>
                                <span className='socialbtn text-[#1773EA] group-hover:text-white'>
                                    <svg
                                        stroke='currentColor'
                                        fill='currentColor'
                                        strokeWidth='0'
                                        viewBox='0 0 320 512'
                                        height='1em'
                                        width='1em'
                                        xmlns='http://www.w3.org/2000/svg'
                                    >
                                        <path d='M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z'></path>
                                    </svg>
                                </span>
                            </Button>
                        </Link>
                       
                        <Link
                            href='https://www.malt.fr/profile/francoiscatto?modifyAvailability=true&source=ON_LOGIN'
                            target='_blank'
                            rel='noopener noreferrer'
                        >
                            <Button className=' group bg-slate-900 hover:lg:bg-gradient-to-r from-sky-700 to-blue-700'>
                                <span className='socialbtn text-[#e14a84] group-hover:text-white'>
                                    <svg
                                        stroke='currentColor'
                                        fill='currentColor'
                                        strokeWidth='0'
                                        viewBox='0 0 512 512'
                                        height='1em'
                                        width='1em'
                                        xmlns='http://www.w3.org/2000/svg'
                                    >
                                        <path d="m408.4 103.8c-32.5-32.4-67.1-11.4-88.8 10.2L114.8 318.8c-21.7 21.7-44.4 54.7-10.2 88.8c34.1 34.1 67 11.4 88.7-10.3l204.8-204.8c21.7-21.6 42.7-56.3 10.3-88.7zm-195.7-8.4 43.4 43.4 44.1-44.2c3-3 6-5.8 9.1-8.4c-4.6-23.3-17.9-44.4-53.3-44.4c-35.4 0-48.7 21.2-53.2 44.5c3.3 2.9 6.6 5.8 9.9 9.1zm87.5 322.1-44.1-44.1-43.4 43.3c-3.3 3.3-6.5 6.4-9.8 9.2c5 23.8 19 45.5 53.1 45.5c34.2 0 48.3-21.9 53.2-45.7c-3-2.6-6-5.2-9-8.2zm-105.9-217h-83.6c-30.7 0-70 9.7-70 55.5c0 34.3 21.9 48.3 45.8 53.2c2.8-3.2 107.8-108.7 107.8-108.7zm231.5 2.3c-2.6 3-107.9 108.8-107.9 108.8h82.4c30.7 0 70-7.3 70-55.6c0-35.3-21.1-48.6-44.5-53.2zm-204.1-29.7 14.9-14.9-43.3-43.4c-21.7-21.7-54.6-44.4-88.8-10.2c-25 25-19.4 49.4-6.2 69.1c4.1-.3 123.4-.6 123.4-.6zm68.7 165.9-15 15 44.2 44.1c21.7 21.7 56.3 42.7 88.7 10.3c24.2-24.2 18.7-49.7 5.3-70c-4.3.3-123.2.6-123.2.6z"></path>
                                    </svg>
                                </span>
                            </Button>
                        </Link>
                        
                    </div>

                    <div className=' p-7 rounded-2xl mt-7 bg-slate-600 text-white hover:ring-2 hover:ring-sky-500'>
                        <div className='flex py-2.5 border-b'>
                            <Button className=' group bg-slate-900 hover:lg:bg-gradient-to-r from-sky-700 to-blue-700'>
                                <span className='flex-shrink-0   text-[#E93B81] shadow-md group-hover:text-white'>
                                    <svg
                                        stroke='currentColor'
                                        fill='currentColor'
                                        strokeWidth='0'
                                        viewBox='0 0 320 512'
                                        height='1em'
                                        width='1em'
                                        xmlns='http://www.w3.org/2000/svg'
                                    >
                                        <path d='M272 0H48C21.5 0 0 21.5 0 48v416c0 26.5 21.5 48 48 48h224c26.5 0 48-21.5 48-48V48c0-26.5-21.5-48-48-48zM160 480c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32zm112-108c0 6.6-5.4 12-12 12H60c-6.6 0-12-5.4-12-12V60c0-6.6 5.4-12 12-12h200c6.6 0 12 5.4 12 12v312z'></path>
                                    </svg>
                                </span>
                            </Button>

                            <div className='text-left ml-2.5'>
                                <p className='text-xs text-gray-300 '>
                                    Phone
                                </p>
                                <p className='hover:text-cyan-700 duration-300 transition'>
                                    {' '}
                                    +33 6 60 28 96 42
                                </p>
                            </div>
                        </div>
                        <div className='flex py-2.5 border-b border-[#E3E3E3] dark:border-[#3D3A3A]'>
                            <Button className=' group bg-slate-900 hover:lg:bg-gradient-to-r from-sky-700 to-blue-700'>
                                <span className='flex-shrink-0  text-[#6AB5B9]  shadow-md group-hover:text-white'>
                                    <svg
                                        stroke='currentColor'
                                        fill='currentColor'
                                        strokeWidth='0'
                                        viewBox='0 0 384 512'
                                        height='1em'
                                        width='1em'
                                        xmlns='http://www.w3.org/2000/svg'
                                    >
                                        <path d='M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0zM192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z'></path>
                                    </svg>
                                </span>
                            </Button>
                            <div className='text-left ml-2.5'>
                                <p className='text-xs text-gray-300'>
                                    Location
                                </p>
                                <p className=' break-all'>
                                    Rennes France
                                </p>
                            </div>
                        </div>
                        <div className='flex py-2.5 border-b border-[#E3E3E3] dark:border-[#3D3A3A]'>
                            <Button className=' group bg-slate-900 hover:lg:bg-gradient-to-r from-sky-700 to-blue-700'>
                                <span className='flex-shrink-0  group-hover:text-white text-[#FD7590] shadow-md'>
                                    <svg
                                        stroke='currentColor'
                                        fill='currentColor'
                                        strokeWidth='0'
                                        viewBox='0 0 512 512'
                                        height='1em'
                                        width='1em'
                                        xmlns='http://www.w3.org/2000/svg'
                                    >
                                        <path d='M176 216h160c8.84 0 16-7.16 16-16v-16c0-8.84-7.16-16-16-16H176c-8.84 0-16 7.16-16 16v16c0 8.84 7.16 16 16 16zm-16 80c0 8.84 7.16 16 16 16h160c8.84 0 16-7.16 16-16v-16c0-8.84-7.16-16-16-16H176c-8.84 0-16 7.16-16 16v16zm96 121.13c-16.42 0-32.84-5.06-46.86-15.19L0 250.86V464c0 26.51 21.49 48 48 48h416c26.51 0 48-21.49 48-48V250.86L302.86 401.94c-14.02 10.12-30.44 15.19-46.86 15.19zm237.61-254.18c-8.85-6.94-17.24-13.47-29.61-22.81V96c0-26.51-21.49-48-48-48h-77.55c-3.04-2.2-5.87-4.26-9.04-6.56C312.6 29.17 279.2-.35 256 0c-23.2-.35-56.59 29.17-73.41 41.44-3.17 2.3-6 4.36-9.04 6.56H96c-26.51 0-48 21.49-48 48v44.14c-12.37 9.33-20.76 15.87-29.61 22.81A47.995 47.995 0 0 0 0 200.72v10.65l96 69.35V96h320v184.72l96-69.35v-10.65c0-14.74-6.78-28.67-18.39-37.77z'></path>
                                    </svg>
                                </span>
                            </Button>
                            <div className='text-left ml-2.5'>
                                <p className='text-xs text-gray-300'>
                                    Email
                                </p>
                                <p className=' break-all'>
                                    {' '}
                                    <a
                                        className='hover:text-[#FA5252] duration-300 transition'
                                        href='mailto:ibthemes21@gmail.com'
                                    >
                                        catto.francois@hotmail.fr
                                    </a>
                                </p>
                            </div>
                        </div>

                        <div className='flex py-2.5 undefined'>
                            <Button className=' group bg-slate-900 hover:lg:bg-gradient-to-r from-sky-700 to-blue-700'>
                                <span className='flex-shrink-0 text-[#C17CEB] shadow-md group-hover:text-white'>
                                    <svg
                                        stroke='currentColor'
                                        fill='currentColor'
                                        strokeWidth='0'
                                        viewBox='0 0 448 512'
                                        height='1em'
                                        width='1em'
                                        xmlns='http://www.w3.org/2000/svg'
                                    >
                                        <path d='M0 464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V192H0v272zm320-196c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40zm0 128c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40zM192 268c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40zm0 128c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40zM64 268c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12H76c-6.6 0-12-5.4-12-12v-40zm0 128c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12H76c-6.6 0-12-5.4-12-12v-40zM400 64h-48V16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v48H160V16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v48H48C21.5 64 0 85.5 0 112v48h448v-48c0-26.5-21.5-48-48-48z'></path>
                                    </svg>
                                </span>
                            </Button>
                            <div className='text-left ml-2.5'>
                                <p className='text-xs text-gray-300'>
                                    Birthday
                                </p>
                                <p className=' break-all'>
                                    July 10, 1996
                                </p>
                            </div>
                        </div>
                    </div>
                    <a
                        href='/'
                        className='inline-flex items-center mx-auto bg-gradient-to-r from-sky-950 to-blue-950 hover:bg-gradient-to-l from-blue-950 to-sky-950 px-8 py-3 text-lg text-white rounded-[35px] mt-6'
                    >
                        <span className='mr-2'>Donwload CV</span>
                    </a>
                </div>
            </div>
        </motion.div>
    );
};

export default personal;
