'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

import { Button } from '@/components/ui/button';
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Separator } from '../ui/separator';

const contactSchema = z.object({
    username: z.string().min(2, {
        message: 'Username must be at least 2 characters.',
    }),
    email: z.string().email( {
        message: 'email must have an @.',
    }),
    message: z.string().min(10, {
        message: 'message must be at least 10 characters.',
    }),
});

export function Contact() {
    // 1. Define your form.
    const form = useForm<z.infer<typeof contactSchema>>({
        resolver: zodResolver(contactSchema),
        defaultValues: {
            username: '',
            email: '',
            message: '',
        },
    });

    // 2. Define a submit handler.
    function onSubmit(values: z.infer<typeof contactSchema>) {
        // Do something with the form values.
        // ✅ This will be type-safe and validated.
        console.log(values);
    }

    return (
        <div className='lg:rounded-2xl bg-slate-800 text-slate-300 hover:brightness-125 hover:ring-2 hover:ring-emerald-500 shadow-lg shadow-slate-900 '>
            <div className='container mb-8 px-4 sm:px-5 md:px-10 lg:px-[60px]'>
                <div className='py-12'>
                    <div className=' flex items-center space-x-4 pb-10'>
                    <h2 className='after-effect after:left-52 text-5xl text-white '>
                        Contact
                    </h2>
                    <Separator className=" w-1/3 bg-gradient-to-r from-sky-300 to-blue-800" />

                    </div>
                    <div className='border-[#212425] border-2 md:p-[48px] p-4 bg-color-810 rounded-xl  bg-slate-800 mb-[30px] md:mb-[60px] hover:ring-2 hover:ring-sky-500'>
                        <h3 className='text-4xl pb-10'>
                            <span className='text-gray-lite text-[#A6A6A6] '>
                                Feel free to contact me for any
                            </span>
                            <br />
                            <span className='font-semibold text-white '>
                                React and Next JS projects 
                            </span>
                        </h3>
                        <Form {...form}>
                        <form
                            onSubmit={form.handleSubmit(onSubmit)}
                            className='space-y-8'
                        >
                            <FormField
                                control={form.control}
                                name='username'
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>
                                            Username
                                        </FormLabel>
                                        <FormControl>
                                            <Input
                                                placeholder='shadcn'
                                                {...field}
                                            />
                                        </FormControl>
                                        <FormDescription>
                                            This is your public
                                            display name.
                                        </FormDescription>
                                        <FormMessage />
                                    </FormItem>
                                    

                                    
                                    
                                )}
                            />
                            <FormField
                                control={form.control}
                                name='email'
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>
                                            Email
                                        </FormLabel>
                                        <FormControl>
                                            <Input
                                                placeholder='shadcn@hotmail.fr'
                                                type='email'
                                                {...field}
                                            />
                                        </FormControl>
                                        <FormDescription>
                                            This is your public
                                            email.
                                        </FormDescription>
                                        <FormMessage />
                                    </FormItem>
                                    

                                    
                                    
                                )}
                            />
                            <FormField
                                control={form.control}
                                name='message'
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>
                                            Message
                                        </FormLabel>
                                        <FormControl>
                                            <Input
                                                placeholder='shadcn'
                                                {...field}
                                            />
                                        </FormControl>
                                        <FormDescription>
                                            This is your Message.
                                        </FormDescription>
                                        <FormMessage />
                                    </FormItem>
                                    

                                    
                                    
                                )}
                            />
                            <Button type='submit'>Submit</Button>
                        </form>
                    </Form>
                    </div>

                   
                </div>
            </div>
        </div>
    );
}
