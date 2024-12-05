import React from 'react';
import { ArrowPathIcon } from '@heroicons/react/24/outline';
import './style.css';

export const Loading = () => {
    return (
        <div className='my-[100px] w-full flex items-center justify-center'>
            <ArrowPathIcon className='text-black w-10 h-7 loading-icon mx-auto'/>
        </div>
    )
}
