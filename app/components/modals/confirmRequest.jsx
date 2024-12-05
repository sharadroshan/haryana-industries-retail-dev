"use client"
import React from 'react';
import { CheckBadgeIcon, XMarkIcon } from '@heroicons/react/24/outline';
import { PrimaryButton } from '../buttons';

export const ConfirmRequestModal = ({ handleClose }) => {

    return (
        <div>
            <section className='coponies-section py-5' >
                <div className='xl:container mx-auto px-5'>
                    <div className='' >
                        <div className='text-center'>

                            <CheckBadgeIcon className='w-[100px] h-[100px] mx-auto text-primary' />
                            <div className='mt-7 mb-6'>
                                <h3 className='font-semibold text-2xl '>Your Request is confirmed</h3>
                                <p>Our experts is connect you in sometime, Please stay in touch with us. </p>
                            </div>

                            <PrimaryButton name="Ok" onClick={handleClose} className="px-8 mt-6 text-lg" />

                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
