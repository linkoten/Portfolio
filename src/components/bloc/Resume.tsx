import React from 'react';
import { Button } from '../ui/button';
import { Progress } from "@/components/ui/progress"
import { Separator } from "@/components/ui/separator"



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
        <div className='lg:rounded-2xl bg-slate-800 text-slate-300 hover:brightness-125 hover:ring-2 hover:ring-emerald-500 shadow-lg shadow-slate-900 '>
            <div className='pt-12 md:py-12 px-2 sm:px-5 md:px-10 lg:px-14 flex items-center space-x-4'>
                <h2 className=' after-effect after:left-52 text-5xl text-white'>
                    Resume
                </h2>
                <Separator className=" w-1/3 bg-gradient-to-r from-sky-300 to-blue-800" />
            </div>
            <div className='container bg-color-810 dark:bg-[#0D0D0D] py-12 px-4 sm:px-5 md:px-10 lg:px-20'>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
                    <div className='col-span-1 border-[2px] border-[#212425] p-6 hover:ring-2 hover:ring-sky-500 shadow-lg shadow-slate-900'>
                        <h4 className=' w-1/2 mx-auto md:w-auto text-5xl dark:text-white font-medium mb-6'>
                            Working Skills
                        </h4>
                        {skills.map((skill, index) => (
                            <div key={index} className=' mx-auto w-1/2 md:w-full mb-7 space-y-4'>
                                <div className='flex flex-col justify-between '>
                                    <div className='flex justify-around'>
                                    <span className='text-base text-gray-lite font-semibold dark:text-[#A6A6A6] text-center'>
                                        {skill.title}
                                    </span>
                                    <span>
                                        {skill.pourcentage} %
                                    </span>
                                    </div>
                                    <Progress value={skill.pourcentage} />

                                </div>
                            </div>
                        ))}
                    </div>
                    <div className='col-span-1 border-[2px] border-[#212425] p-6 hover:ring-2 hover:ring-sky-500 shadow-lg shadow-slate-900'>
                        <h4 className=' w-1/2 mx-auto md:w-auto text-5xl dark:text-white font-medium mb-8'>
                            Knowledges
                        </h4>
                        <div className=' w-1/2 mx-auto md:w-auto flex gap-x-3 gap-y-3 md:gap-y-3 md:gap-x-3 flex-wrap'>
                            {knowledges.map((knowledge, index) => (
                                <Button
                                    key={index}
                                    className='text-[15px]'
                                >
                                    {knowledge.bouton}
                                </Button>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Resume;
