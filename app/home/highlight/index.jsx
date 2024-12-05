import React from 'react';
import Image from 'next/image';
import Link from 'next/link';


export const Highlight = () => {
    return (
        <div className=''>

            <div className='bg-white py-20'>
                <div className='container mx-auto '>
                    <div className='grid grid-cols-1 xl:grid-cols-3 gap-4 '>
                        <div>
                            <Image
                                src="/home/ruppe-dollar.png"
                                width={500}
                                height={500}
                                alt="Picture of the author dd"
                            />
                        </div>
                        <div className='col-span-2 flex items-center'>
                            <div className='w-full'>
                                <div className='grid grid-cols-1 xl:grid-cols-3 gap-4'>
                                    <div className='text-center font'>
                                        <h4 className='text-[18px] text-black'> Total Schemes</h4>
                                        <h4 className='text-[45px] font-bold text-primary'>2030+</h4>
                                    </div>
                                    <div className='text-center font'>
                                        <h4 className='text-[18px] text-black'>No of visitors</h4>
                                        <h4 className='text-[45px] font-bold text-primary'>7600+</h4>
                                    </div>
                                    <div className='text-center font'>
                                        <h4 className='text-[18px] text-black'>No of MSME Benifited</h4>
                                        <h4 className='text-[45px] font-bold text-primary'>20,000+</h4>
                                    </div>
                                </div>
                                <div className='grid grid-cols-1 lg:grid-cols-3 gap-4 mt-10 px-5'>
                                    <div></div>
                                    <div className='text-center font bg-primary hover:bg-secondary cursor-pointer flex items-center justify-center text-white py-3  rounded-lg'>
                                        <Link href='/contact'>
                                            <button className='text-[18px] font-semibold flex items-center'>
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" style={{ width: '30px' }} className='mr-2'>
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                                                </svg>
                                                Connect To Expert
                                            </button>
                                        </Link>
                                    </div>
                                    <div></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}
