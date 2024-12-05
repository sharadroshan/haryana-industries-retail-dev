"use client"
import React from 'react';
import { CheckBadgeIcon, EnvelopeIcon, PhoneIcon } from '@heroicons/react/24/outline';
import { PrimaryButton } from '../buttons';

export const CallRequestModal = ({ handleClose }) => {

    return (
        <div>
            <section className='coponies-section py-5' >
                <div className='xl:container mx-auto px-5'>
                    <div className='' >
                        <div className='text-center'>

                            <CheckBadgeIcon className='w-[100px] h-[100px] mx-auto text-primary' />
                            <div className='mt-7 mb-6 text-center'>
                                <h3 className='font-semibold text-2xl mb-10'>Please Contact Us To Get Scheme</h3>
                                <div className='flex items-center justify-center mx-auto pt-5'>
                                    <div>
                                        <PhoneIcon className='size-9 text-primary' />
                                    </div>
                                    <div className='ml-5 text-left'>
                                        <p><a href='telto:+919416351167' className='text-dark font-medium text-xl hover:text-primary'>+91 94163 51167</a>, <a href='telto:+919050902425' className='text-dark font-medium text-xl hover:text-primary'>+91 90509 02425</a></p>
                                    </div>
                                </div>
                                <h5 className='py-3 text-lg text-primary'>OR</h5>
                                <div className='flex items-center justify-center mx-auto pb-5'>
                                    <div>
                                        <EnvelopeIcon className='size-9 text-primary' />
                                    </div>
                                    <div className='ml-5 text-left'>
                                        <p><a href='mailto:info@haryanaindustries.com' className='text-dark font-medium text-xl hover:text-primary'>info@haryanaindustries.com</a></p>
                                    </div>
                                </div>
                            </div>

                            <PrimaryButton name="Ok" onClick={handleClose} className="px-8 mt-6 text-lg" />

                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
