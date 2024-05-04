import React from 'react';
import lol from '../../../public/next-js-svgrepo-com.svg';
import Image from 'next/image';
import { Separator } from '../ui/separator';
import { backInOut, motion } from 'framer-motion';

const premiereGrille = [
    {
        image: lol,
        title: 'Papaleontologie',
        paragraph: 'E-Commerce and Blog WebSite',
    },
    {
        image: lol,
        title: 'UI/UX',
        paragraph: 'Chul urina ',
    },
    {
        image: lol,
        title: 'UI/UX',
        paragraph: 'Chul urina ',
    },
    {
        image: lol,
        title: 'UI/UX',
        paragraph: 'Chul urina ',
    },
    {
        image: lol,
        title: 'UI/UX',
        paragraph: 'Chul urina ',
    },
    {
        image: lol,
        title: 'UI/UX',
        paragraph: 'Chul urina ',
    },
];

const deuxiemeGrille = [
    {
        image: lol,
        title: 'Maison-Kerogan',
        paragraph: 'Showcase Site for a Restaurant',
    },
    {
        image: lol,
        title: 'UI/UX',
        paragraph: 'Chul urina ',
    },
    {
        image: lol,
        title: 'UI/UX',
        paragraph: 'Chul urina ',
    },
    {
        image: lol,
        title: 'UI/UX',
        paragraph: 'Chul urina ',
    },
    {
        image: lol,
        title: 'UI/UX',
        paragraph: 'Chul urina ',
    },
    {
        image: lol,
        title: 'UI/UX',
        paragraph: 'Chul urina ',
    },
];

const Works = () => {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.5, x:1000 }}
            animate={{ opacity: 1, scale: 1, x:0 }}
            exit={{ scale: 0.5 }}
            transition={{ duration: 0.5, ease: 'backInOut', type:"spring" }}
            className='mx-8 md:mx-0 rounded-2xl bg-slate-800 text-slate-300 hover:brightness-125 hover:ring-2 hover:ring-emerald-500 shadow-lg shadow-slate-900'
        >
            <div className='pt-12 md:py-12 px-2 sm:px-5 md:px-10 lg:px-14'>
                <div className=' flex items-center space-x-4'>
                    <h2 className='text-2xl after-effect after:left-52 md:text-5xl text-white'>
                        Portfolio
                    </h2>
                    <Separator className=' w-1/3 bg-gradient-to-r from-sky-300 to-blue-800' />
                </div>
                <ul className='mt-[40px] flex w-full justify-center md:justify-end flex-wrap font-medium pb-12'>
                    <li className='fillter-btn  mr-4 md:mx-4'>All</li>
                    <li className='text-[#FA5252] mr-4 md:mx-4'>
                        WebSite
                    </li>
                    <li className='fillter-btn mr-4 md:mx-4'>
                        Personal Project
                    </li>
                </ul>
                <div className='grid grid-cols-2 gap-8 px-4 md:px-0'>
                    <div className='space-y-8'>
                        {premiereGrille.map((item, index) => (
                            <motion.div
                                initial={{ opacity: 0, scale: 0.5, x:-200, y:200 }}
                                animate={{ opacity: 1, scale: 1, x:0, y:0 }}
                                transition={{ duration: 1, type:"spring" }}
                                key={index}
                            >
                                <div className='rounded-lg p-6 border-[2px] border-[#212425] hover:ring-2 hover:ring-sky-500'>
                                    <div className='overflow-hidden rounded-lg'>
                                        <Image
                                            alt='portfolio Image'
                                            src={item.image}
                                            width='200'
                                            height='200'
                                            className=' mx-auto cursor-pointer transition duration-200 ease-in-out transform hover:scale-110 rounded-lg h-auto '
                                        />
                                    </div>
                                    <span className='pt-5 text-sm md:text-base font-normal text-gray-lite block '>
                                    {item.paragraph}
                                    </span>
                                    <h2 className='font-medium cursor-pointer text-base sm:text-xl duration-300 transition  hover:text-[#FA5252] text-white mt-2'>
                                        {item.title}
                                    </h2>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    <div className='space-y-8'>
                        {deuxiemeGrille.map((item, index) => (
                            <motion.div 
                            initial={{ opacity: 0, scale: 0.5, x:200, y:200 }}
                                animate={{ opacity: 1, scale: 1, x:0, y:0 }}
                                transition={{ duration: 1, type:"spring" }}
                            key={index}>
                                <div className='rounded-lg p-6 border-[2px] border-[#212425] hover:ring-2 hover:ring-sky-500'>
                                    <div className='overflow-hidden rounded-lg'>
                                        <Image
                                            alt='portfolio Image'
                                            src={item.image}
                                            width='300'
                                            height='300'
                                            className=' mx-auto cursor-pointer transition duration-200 ease-in-out transform hover:scale-110 rounded-lg h-auto '
                                        />
                                    </div>
                                    <span className='pt-5 text-sm md:text-base font-normal text-gray-lite block '>
                                    {item.paragraph}
                                    </span>
                                    <h2 className='font-medium cursor-pointer text-base sm:text-xl duration-300 transition  hover:text-[#FA5252] text-white mt-2'>
                                         {item.title}
                                    </h2>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default Works;
