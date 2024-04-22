import React from 'react';
import Image from 'next/image';
import NextJsSVG from '../../../public/next-js-svgrepo-com.svg';
import reactSvg from '../../../public/react-javascript-js-framework-facebook-svgrepo-com.svg';
import { Button } from '../ui/button';
import tailwindSVG from '../../../public/tailwind-svgrepo-com (1).svg'
import shadcnUISVG from '../../../public/shadcnUI.svg'
import JavascriptSVG from '../../../public/javascript-svgrepo-com.svg'
import { Separator } from "@/components/ui/separator"









const About = () => {
    const items: any[] = [
        {
            images: {
                src1:  JavascriptSVG,
                src3: reactSvg, // Path to the second image (e.g., '../../../public/react-svgrepo.svg')
                src2: NextJsSVG, // Path to the first image (e.g., '../../../public/next-js-svgrepo-com.svg')


              },
            title: 'Front-End Development',
            paragraph:
                "Maitrise des bases de React permettant de créer un site d'ecommerce fonctionnel (useState, useEffect, useRef, useContext, props, ...), ",
        },
        {
            images: {

                src3: tailwindSVG,
                src4: shadcnUISVG,
              },
            title: 'Design',
            paragraph:
                "Maitrise de Tailwind et ShadcnUI permettant de créer un style récent de manière efficace.  ",
        },
        {
            images: {
                src1: NextJsSVG, // Path to the first image (e.g., '../../../public/next-js-svgrepo-com.svg')
                src2: reactSvg, // Path to the second image (e.g., '../../../public/react-svgrepo.svg')
              },
            title: 'Back-End Development',
            paragraph:
                "Utilisation de Next JS 13 avec son systeme de server components permettant au site d'être plus performant en terme de vitesse, de sécuriter et de référencement",
        },

        {
            images: {
                src1: NextJsSVG, // Path to the first image (e.g., '../../../public/next-js-svgrepo-com.svg')
                src2: reactSvg, // Path to the second image (e.g., '../../../public/react-svgrepo.svg')
            },
            title: 'Headless CMS Development',
            paragraph:
                "Utilisation de Headless CMS tel que Swell pour la partie e-commerce permettant aux clients de possèder un store de produits et un dashboard administrateur complet, intuitif et simple d'utilisation.",
        },
    ];

    return (
        <div className='lg:rounded-2xl bg-slate-800 text-slate-300 hover:brightness-125 hover:ring-2 hover:ring-emerald-500 shadow-lg shadow-slate-900'>
            <div className='pt-12 md:py-12 px-2 sm:px-5 md:px-10 lg:px-14 '>
                <div className=' flex items-center space-x-4'>
                <h2 className='after-effect after:left-52 text-5xl text-white'>
                    About Me
                </h2> 
                <Separator className=" w-1/3 bg-gradient-to-r from-sky-300 to-blue-800" />
                </div>

                <div className=' pt-4 md:pt-[30px] items-center '>
                    <div className='col-span-12 space-y-2.5'>
                        <div className='lg:mr-16'>
                            <p className=' leading-7'>
                                I'm a French Web Developper from Rennes. I enjoy creating simple and
                                functionnal website for start-ups..
                            </p>
                            <p className='text-gray-lite leading-7 mt-2.5 dark:text-color-910'>
                                Mon objectif est de vous créer un site
                                d'e-commerce minimaliste le plus
                                rapidement et efficacement possible en
                                utilisant les dernières technologies 
                                <span className=' font-bold px-1 text-cyan-500 '>
                                 React et Next Js .
                                </span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <section className='pb-12 px-2 sm:px-5 md:px-10 lg:px-14 '>
                <h3 className='text-[35px] dark:text-white font-medium pb-5 text-white'>
                    What I do!
                </h3>

                <div className='grid gap-8 grid-cols-1 md:grid-cols-2 xl:grid-cols-2 '>
                    {items.map((item, index) => (
                        <div
                            key={index}
                            className='about-box dark:bg-transparent border rounded-xl p-4 bg-slate-700 hover:brightness-125 hover:ring-blue-700 hover:ring-2 shadow-lg shadow-slate-500'
                        >
                            
                            <div className='flex justify-around py-4'>
                            {/* Render images using map */}
                            {Object.keys(item.images).map(
                                (key, imageIndex) => (
                                    <Button 
                                    key={key}
                                    className=' group bg-slate-700 hover:bg-gradient-to-r from-sky-600 to-blue-600'>

                                    <Image
                                        key={`${imageIndex}`} // Add a unique key for each image
                                        src={item.images[key]} // Access image using the key
                                        alt={`Image ${
                                            imageIndex + 1
                                        }`}
                                        width='40'
                                        height='40'
                                        className='w-10 h-10 object-contain block ' // Add margin for spacing
                                    />
                                    </Button>
                                )
                            )}
                            </div>
                            <div className='space-y-2 break-all'>
                                <h3 className='text-white text-xl font-semibold'>
                                    {item.title}
                                </h3>
                                <p className=' leading-8 text-gray-lite dark:text-[#A6A6A6]'>
                                    {item.paragraph}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default About;
