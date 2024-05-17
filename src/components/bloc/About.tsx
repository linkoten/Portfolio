import React from 'react';
import Image from 'next/image';
import NextJsSVG from '../../../public/next-js-svgrepo-com.svg';
import reactSvg from '../../../public/react-javascript-js-framework-facebook-svgrepo-com.svg';
import { Button } from '../ui/button';
import tailwindSVG from '../../../public/tailwind-svgrepo-com (1).svg'
import shadcnUISVG from '../../../public/shadcnUI.svg'
import JavascriptSVG from '../../../public/javascript-svgrepo-com.svg'
import { Separator } from "@/components/ui/separator"
import { backInOut, motion } from 'framer-motion';










const About = () => {
    const items: any[] = [
        {
            images: {
                src1:  JavascriptSVG,
                src2: reactSvg, // Path to the second image (e.g., '../../../public/react-svgrepo.svg')
                src3: NextJsSVG, // Path to the first image (e.g., '../../../public/next-js-svgrepo-com.svg')


              },
            title: 'Front-End Development',
            paragraph:
                "Maitrise des bases de React permettant de créer un site d'ecommerce fonctionnel (useState, useEffect, useRef, useContext, props, ...), ",
        },
        {
            images: {

                src1: tailwindSVG,
                src2: shadcnUISVG,
                src3: "data:image/png;base64,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"
              },
            title: 'Design',
            paragraph:
                "Maitrise de Tailwind, ShadcnUI et FramerMotion permettant de créer un style récent de manière efficace.  ",
        },
        {
            images: {
                src1: NextJsSVG, // Path to the first image (e.g., '../../../public/next-js-svgrepo-com.svg')
                src2: 'data:image/png;base64,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',
                src3: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAolBMVEUAHisA7WQA8GUAHSsA8mYAACcAHCsAGioA9GYAGCoAACYADikAGSoAFyoADCkAFSoAESkA5GIABigAkEkAzlsA32AAt1QAqFAA1F0AJS0AMTAArFEAUjgA6mQANTEAok4Ax1kAaz4AnE0AXDoAOzIAQDMAKi4AiEcAdUEAzFsAv1cAgEQAYTsATDYAVzkAckAAACEAlksA/2oAf0YATjcARTQMLnchAAAHqklEQVR4nO2dWXuyPBCGIQQIoCzuG261q3b73vb//7WPgFRUYFDbiwlX7oMecZCnk0xmJpOoKBKJRCKRSCQSiUQikUgkEolEIpFIJBKJRCKRXIfma3UP4W/R3K7bbIl6979Hve5B/CXuTiXqnVP3MP6O1mREVDKatOoeyF+h6QOqqiod6E1divojFxhJbOpS9F8TgZHEV7/uwfwF1jxahAnRUrTqHs7vo7kDpqawgWPUPaBfx/6k6gHatese0G/TWanHrDp1D+l38TYBORJIgo1X96B+E9Po0RMb0p5h1j2s38Pwp0w9hQ0bFIPr3XOBkcRuYzZ+/YnkCIx4b4hE/y3IV0iCWSNiG9PsF5hQJf1WA7yN4S5P3WjGob644sc2+jrPy/x4m7XwmVTnvURf7G0Ej228+8JFmC7FTbvuQd6CoZcswv1SXAo9T/O3+pOlKHLG789AfdyK4u6K5sOofBHul2JvLOiuqOlDeI7G8/RT0HTYv6ukLyIUc54abqU5Gs/TkSdiaKN/QhvFAfopoD9tb6paMLbiXLh9X/MH1U3IQ3DhzhXdXTU/msJ2gp1IVdwKM9N0NBbL2VQJ146hYlVtWnMgpcgxYn8j0rGivrjEzSREyXDdw66ONb90jsYo4oSnnenlJoxW4lqYdN+aX7oIE8IHUYzYGV5jQp5jCGJE6z64SqCqBnMx3Onle+GPEcVwp+bkwnDmgCCBjfN03Srk0H8CRKeafrUJIyMuBZim3tvV+jgz/Gff+pVbRQIdojeipl+7VSSE6Cvg/oWZ7ylshbzsprkXFS/OoVPk/Qvm5LZJGsU1E9zBqb+6bZLin6b6VXlTFjpF7U0NuAAF/QeiyA3zNPXuwHimC1rxDfOm7z6Cy/Af9AF7dOuWUYL+Ai7DFfQBeUG8EDUDLiKCx8Kkb+DdEb23EBq/eg9+ESJeiO4W3ivG4Bd0izdJ1NewQh1WuMC7EO0lnPza4BeY0+AqmdMH/EmItnHBGIMmJP2PCmc2D1jrUd4MVjj6gMs45AvrkbcPV9nI88czrPAda3rhdmGFy48XUCHtYq3ud+BTQzr4gIsAdIFWIZwc0ulHhY+GSBVWqdHQhV3F0EhrNZoDZxZ0XUmhg1ShDzsR9ml/gikkwdo+pPlw0Ma6Npwkkxe0NuzBCh+rKHxGa0N4M2dbewsrXGJV6FTYzJ8Kr3llFOKdpbBCdaVDV0wwK6xyZrHTd2ClA+1+qLhwuBK+uXAth06x1hMr9NEEM3cGpsloozalA5dpgnsf7rbB2/7lwKW2/sab90GFaDsy4FML0n9oT8AyBkFbMG2B7fmkr7QUuFCD9pBUA2uhpG8ZPqwQb7eCDVWZyKhjuJBC0kNbTYR7acjIhv8NmHtqwONDbh4bykAo4gNED4rIeMFeh7LI8A6rK+XH+MAao4NIIRC9RjsK1pJ3BGQf3mgBLVayxOto4IXID86guxi4z/G9XbkNea96BypFoY1oOFA/Deu6ilveBk5GmJehArkRPgOBmcydEWa88uZL9uQozlP5J4j3Cg6wX7AnX/HfyxTi3isUXqsprWTwxsPy9kU6xZr9pniz0udodh4wkdk31vPfH+yyaRorLMuTeWiOnfKD4GivK72ugDnqTintgw5e20r7q+wDES7olbUJB6+WYn0XK8ScGh7wZoUpVHybuVXysFL4it7PcIrjGjKam4o5L4zs6KCDtkKTxfsqMiIZTQzFKL69R5DHMymaU2RE0htHCsdFZQxxHsdo3xfs6eTZjBQqRQrJtxgm5HXTAndKlp5WfNyP/KbFEdY8fyWSZeRJtE5RqUOk1+gLmoWTNvyCYo5Y7wwZSq6/LFMoyC3nH9xVnopkpeWvUrbCH5FmiXaMHH+a9KjnFtvY1BZkp0hpnz7gHcuID3fzim0kmAv30r6bU47hpbb8oqpoczTGPu9UZNtY4XlXFHvBn/ieY1hnOQQvtfF28FOFovnRFGd1Phd5i7p3VooKRXvKLEU/LWjwMg1vaDhRKO5PQZjWyVJk8ZGE93askL1YQs5RTuukK4HFKbz1faSQ9DsC1GaK8O7DrER2zzc96yi5inZCISoXRdhP2SyDxY/OtTZZhaHoD3rrjxkjhnM+H8151oRbkTKKPLTsq/PBhLsUc3KwK1uLFo6eYxwk7s+VMudTbK0L60YPGD/Z0j50Mcdp8kiHTRAYSWzva2+kp8Q2TEtRdOA3QmDkPK0kWSRLI1aoJUk+G1gCb4THmH78djnp+bEvTe5lsIXbGIF8LS5Y7FgiUaYbux620BskUOGyCOEd3G7b5XU4QtYN+P2VIwx9ywM4uvB50xcJt83wolk0fRdE2mjy5w5vG/ANOP5+HyQjRdCMFyItI2J++OI20hsneG+M3EpaKE2Kik3E2e7XIdo7MbfirfYpBfJH564n7dIIBXik9Dpam71CoV7QvwRNSXqFArNx8cye9PXWoJEBTUxyIQjzvaZbSZ7ko5gf1buR5DKJGO1519GJLyI0N6RJz0ZZY0MaZd+mz9A+dHU7ycuRmF9+vBXrO6CUBt/CtV1UxngYDgaDIfI7Izeh+Y7jNKXQnY/GqXsQEolEIpFIJBKJRCKRSCQSiUQikUgkEolE0lT+B4h2dnif2MTUAAAAAElFTkSuQmCC" // Path to the second image (e.g., '../../../public/react-svgrepo.svg')
              },
            title: 'Back-End Development',
            paragraph:
                "Utilisation de Next JS 13 avec son systeme de server components permettant au site d'être plus performant en terme de vitesse, de sécuriter et de référencement",
        },

        {
            images: {
                src1: "data:image/png;base64,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", // Path to the first image (e.g., '../../../public/next-js-svgrepo-com.svg')
                src2: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAMAAABF0y+mAAAAgVBMVEX////u6/XDt9ukk8iVgr7p5PL9/P6sm8xmSKNXNJtNJZZ+YrSIbrleOKFTLZljRKGaiMHx7vf49vyAZ7RJHpR4Xa9PKJdKIJXNxd/l4e9TLpllQ6VVMZrX0OWzptBzV6zg2uy8r9d3YKxyVKx+abBFFJPEutuOebrNwuGXgcGMdbp4svysAAAA00lEQVR4Ac1QVaLDIBCMw+Y1WJxu3HP/+z23Uv7bwVmdcZ4YrucHge+FFlNEKMQvl4RxIU2bSjOWh+9nUMSJGUxKYNXHpc51cTGMV4Sk+UzfMqYNY4HA2ujjFoqOGEaOgJR8FnN7dV8TEPJgqC1MVFcioNbAR89iJfTdiIg6m9x7s/TETBEBitywRDL6CK/8TgMsoSFesH71uFKEcr0x9ktMqy/5NwbZfmMMF2BC/hoNosei4dO/ubKldQy0FMrT844CptXCZBDzOM7CU44dUeQ8Gm8eIg3f9t1rXwAAAABJRU5ErkJggg=="
            },
            title: 'Headless CMS Development',
            paragraph:
                "Utilisation de Headless CMS tel que Swell pour la partie e-commerce permettant aux clients de possèder un store de produits et un dashboard administrateur complet, intuitif et simple d'utilisation.",
        },
    ];

    return (
        <motion.div  initial={{ opacity: 0, scale: 0.5, x:1000 }}
        animate={{ opacity: 1, scale: 1, x:0 }}
        exit={{scale: 0.5}}
        transition={{ duration: 1, ease:"backInOut", type:"spring" }}
         className='mx-8 md:mx-0 rounded-2xl bg-slate-800 text-slate-300 hover:brightness-125 hover:ring-2 hover:ring-emerald-500 shadow-lg shadow-slate-900 pb-8'>
            <div className='pt-12 md:py-12 px-2 sm:px-5 md:px-10 lg:px-14 '>
                <div className=' flex items-center space-x-4'>
                <h2 className='text-2xl after-effect after:left-52 md:text-5xl text-white'>
                    About Me
                </h2> 
                <Separator className=" w-1/3 bg-gradient-to-r from-sky-300 to-blue-800" />
                </div>

                <div className=' pt-4 md:pt-[30px] items-center text-sm md:text-base'>
                    <div className='col-span-12 space-y-2.5'>
                        <div className='lg:mr-16'>
                            <p className=" leading-7">
                                Im a French Web Developper from Rennes. I enjoy creating simple and
                                functionnal website for start-ups..
                            </p>
                            <p className="text-gray-lite leading-7 mt-2.5 dark:text-color-910">
                                Mon objectif est de vous créer un site
                                de e-commerce minimaliste le plus
                                rapidement et efficacement possible en
                                utilisant les dernières technologies 
                                <span className=" font-bold px-1 text-cyan-500 ">
                                 React et Next Js .
                                </span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <section className='pb-12 px-2 sm:px-5 md:px-10 lg:px-14 '>
                <h3 className='pl-8 pt-8 md:pt-0 md:pl-0 text-2xl md:text-4xl dark:text-white font-medium pb-5 text-white'>
                    What I do!
                </h3>

                <div className='grid gap-8 grid-cols-1 md:grid-cols-2 xl:grid-cols-2 '>
                    {items.map((item, index) => (
                        <motion.div
                            initial={{opacity: 0, scale:0, y:200}}
                            whileInView={{opacity: 1, scale:1, y:0}}
                            transition={{ duration: 1, type:"spring"}}
                            key={index}
                            className='mx-8 md:mx-0 about-box dark:bg-transparent border rounded-xl p-4 bg-slate-700 hover:brightness-125 hover:ring-blue-700 hover:ring-2 shadow-lg shadow-slate-500 mb-4'
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
                        </motion.div>
                    ))}
                </div>
            </section>
        </motion.div>
    );
};

export default About;
