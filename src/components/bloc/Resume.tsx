import React from 'react';
import { Button } from '../ui/button';
import { Progress } from '@/components/ui/progress';
import { Separator } from '@/components/ui/separator';
import { MotionConfig, backInOut, motion } from 'framer-motion';

const Resume = () => {
    const skills = [
        {
            title: 'Front-End',
            pourcentage: 80,
            barre: 'Barre à afficher',
        },
        {
            title: 'Tailwind CSS',
            pourcentage: 90,
            barre: 'Barre à afficher',
        },
        {
            title: 'Headless CMS',
            pourcentage: 90,
            barre: 'Barre à afficher',
        },
        {
            title: 'Back-End',
            pourcentage: 75,
            barre: 'Barre à afficher',
        },
    ];

    const knowledges = [
        {
            bouton: 'React',
        },
        {
            bouton: 'Next JS',
        },
        {
            bouton: 'Tailwind CSS',
        },
        {
            bouton: 'ShadCN UI',
        },
        {
            bouton: 'MySql',
        },
        {
            bouton: 'Mongodb',
        },
        {
            bouton: 'WordPress',
        },
        {
            bouton: 'Hygraph',
        },
        {
            bouton: 'Swell',
        },
        {
            bouton: 'GitHub',
        },
        {
            bouton: 'Vercel',
        },
    ];

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.5, x:1000 }}
            animate={{ opacity: 1, scale: 1, x:0 }}
            exit={{ scale: 0.5 }}
            transition={{ duration: 1, ease: 'backInOut', type:"spring" }}
            className='mx-8 md:mx-0 rounded-2xl bg-slate-800 text-slate-300 hover:brightness-125 hover:ring-2 hover:ring-emerald-500 shadow-lg shadow-slate-900 pb-8'
        >
            <div className='pt-12 md:py-12 px-2 sm:px-5 md:px-10 lg:px-14 flex items-center space-x-4'>
                <h2 className=' text-2xl after-effect after:left-52 md:text-5xl text-white'>
                    Resume
                </h2>
                <Separator className=' w-1/3 bg-gradient-to-r from-sky-300 to-blue-800' />
            </div>
            <div className='container bg-color-810 dark:bg-[#0D0D0D] py-12 px-4 sm:px-5 md:px-10 lg:px-20'>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
                    <motion.div 
                    initial={{opacity: 0, scale:0, x:-100, y:100}}
                    whileInView={{opacity: 1, scale:1, x:0, y:0}}
                    transition={{ duration: 1, type:"spring"}}
                    className='col-span-1 border-[2px] border-[#212425] rounded-lg p-6 hover:ring-2 hover:ring-sky-500 shadow-lg shadow-slate-900'>
                        <h4 className='text-2xl w-1/2 mx-auto md:w-auto md:text-4xl dark:text-white font-medium mb-6'>
                            Working Skills
                        </h4>
                        {skills.map((skill, index) => (
                            <div
                                key={index}
                                className=' mx-auto w-1/2 md:w-full mb-7 space-y-4'
                            >
                                <div className='flex flex-col justify-between '>
                                    <div className='flex justify-around'>
                                        <span className='text-base text-gray-lite font-semibold dark:text-[#A6A6A6] text-center'>
                                            {skill.title}
                                        </span>
                                        <span>
                                            {skill.pourcentage} %
                                        </span>
                                    </div>
                                    <Progress
                                        value={skill.pourcentage}
                                    />
                                </div>
                            </div>
                        ))}
                    </motion.div>
                    <motion.div 
                    initial={{opacity: 0, scale:0, x:200, y:200}}
                    whileInView={{opacity: 1, scale:1, x:0, y:0}}
                    transition={{ duration: 1, type:"spring"}}
                    
                    className='col-span-1 border-[2px] border-[#212425] rounded-lg p-6 hover:ring-2 hover:ring-sky-500 shadow-lg shadow-slate-900 '>
                        <h4 className='text-2xl w-1/2 mx-auto md:w-auto md:text-4xl dark:text-white font-medium mb-8'>
                            Knowledges
                        </h4>
                        <div className=' w-1/2 mx-auto md:w-auto flex gap-4 flex-wrap'>
                            {knowledges.map((knowledge, index) => (
                                <MotionConfig
                                key={index}
                                    transition={{
                                        duration: 0.1,
                                        ease: 'easeInOut',
                                        type:"spring"
                                    }}
                                >
                                    <motion.div
                                        
                                        whileHover={{
                                            scale: 1.2,
                                            rotate: '5deg',
                                        }}
                                        whileTap={{
                                            scale: 0.8,
                                            rotate: '10deg',
                                        }}
                                        drag='x'
                                        dragConstraints={{
                                            left: 0,
                                            right: 0,
                                        }}
                                    >
                                        <Button
                                            key={index}
                                            className='text-[10px] md:text-[15px]'
                                        >
                                            {knowledge.bouton}
                                        </Button>
                                    </motion.div>
                                </MotionConfig>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </motion.div>
    );
};

export default Resume;
