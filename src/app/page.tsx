'use client';

import Image from 'next/image';
import React, { useState } from 'react';
import bgImage from '../../public/bg.png';
import lol from '../../public/next-js-svgrepo-com.svg';
import Personal from '@/components/bloc/Personal';
import About from '@/components/bloc/About';
import Header from '@/components/bloc/Header';

import { Button } from '@/components/ui/button';
import Resume from '@/components/bloc/Resume';
import Works from '@/components/bloc/Works';
import { Contact } from '@/components/bloc/Contact';
import Header2 from '@/components/bloc/Header2';

const Page = () => {
    const [currentSection, setCurrentSection] = useState('/');

    const handleSectionChange = (section: string) => {
        setCurrentSection(section);
    };
    return (
        <>
            <div className='relative isolate h-full overflow-hidden pt-14'>
                <Image
                    alt=''
                    src={bgImage}
                    className='fixed inset-0 -z-10 h-full w-full object-cover'
                />
                <section className='md:pb-16 w-full min-h-screen'>
                    <Header2 onSectionChange={handleSectionChange}/>

                    <div className='lg:container grid grid-cols-12 md:gap-10 justify-between lg:mt-[100px]'>
                        <Personal />
                        <div className='col-span-12 lg:col-span-8 '>
                            <Header
                                onSectionChange={handleSectionChange}
                            />
                            {currentSection === '/' && <About />}
                            {currentSection === '/resume' && (
                                <Resume />
                            )}
                            {currentSection === '/works' && <Works />}
                            {currentSection === '/contact' && (
                                <Contact />
                            )}
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
};

export default Page;

                        //Ajouter le Header 2 après <section>
