import React from 'react';
import Link from "next/link";
import { HomeIcon } from '@heroicons/react/20/solid';
import { ArrowLongLeftIcon } from '@heroicons/react/24/outline';


export const Breathcumb = (props) => {
    return (
        <section className='relative overflow-hidden '>
            <div className='xl:container mx-auto'>
                <div className='py-3 px-5 bg-primary flex items-center justify-between text-left rounded-xl mt-4'>
                    <div className='breathcumb-details'>
                        {/* <h3 className='text-white text-xl md:text-2xl font-semibold '>{props.title}</h3> */}
                        <p className='flex items-center justify-start text-left text-1xl text-white'>
                            <Link href='/' className='text-white'>
                                <HomeIcon className='w-5 h-2 text-white'/>
                            </Link>
                            <span className="mx-1"> / </span>
                            <span className='font-medium text-white'>{props.title}</span>
                        </p>
                        <p>{props.description}</p>
                    </div>
                    <div>
                        <button className='flex items-center bg-white text-primary rounded-lg p-2 py-1 font-medium'>
                            <ArrowLongLeftIcon className='w-7 h-2 mr-2'/>
                            Go Back
                        </button>
                    </div>
                </div>
            </div>
        </section>
    )
}
