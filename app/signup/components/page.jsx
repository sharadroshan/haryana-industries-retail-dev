"use client"
import Link from 'next/link';
import React, { useState } from 'react';
import { ToastContainer } from 'react-toastify';
import UserRegister from './UserRegister';
import PartnerRegister from './PartnerRegister';

const Page = () => {

    const [isOpenRegisterAs, setIsOpenRegisterAs] = useState('nothing');

    function handleClickOpen(value) {
        setIsOpenRegisterAs(value);
    }
    console.log('isOpenRegisterAs', isOpenRegisterAs)
    return (
        <>
            <section className='pt-10 pb-10'>
                <div className='xl:container mx-auto'>
                    <div className='flex justify-center align-center'>
                        <div className="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8 bg-white md:w-1/2 rounded-2xl">
                            {
                                isOpenRegisterAs === 'user' ?
                                    <>
                                        <UserRegister handleBack={() => { handleClickOpen('nothing') }} />
                                    </>
                                    :
                                    isOpenRegisterAs === 'partner' ?
                                        <>
                                            <PartnerRegister handleBack={() => { handleClickOpen('nothing') }}/>
                                        </>
                                        :
                                        isOpenRegisterAs === 'nothing' ?
                                            <>

                                                <div className=" max-w-xl space-y-8">
                                                    <div className=''>
                                                        <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900 ">
                                                            Register Yourself As?
                                                        </h2>
                                                    </div>
                                                    <div className='flex items-center justify-center mt-[50px]'>
                                                        <button onClick={()=>{handleClickOpen('user')}} className='mr-5 bg-primary hover:bg-secondary text-white text-[18px] rounded-[40px] px-8 py-3 w-[150px]'>
                                                            User
                                                        </button>
                                                        <button onClick={()=>{handleClickOpen('partner')}} className='bg-secondary hover:bg-primary text-white text-[18px] rounded-[40px] px-8 py-3 w-[150px]'>
                                                            Partner
                                                        </button>
                                                    </div>
                                                    <div className='border-t pb-5'>
                                                        <h2 className="mt-6 text-center text-[16px] font-bold tracking-tight text-gray-900 ">
                                                            Already registered? <Link className='text-secondary ml-1' href='/login'>Login</Link>
                                                        </h2>
                                                    </div>
                                                </div>

                                            </>
                                            :
                                            <div className=" max-w-xl space-y-8">
                                                <div className=''>
                                                    <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900 ">
                                                        Register Yourself As?
                                                    </h2>
                                                </div>
                                                <div className='flex items-center justify-center mt-[50px]'>
                                                    <button onClick={handleClickOpen('user')} className='mr-5 bg-primary hover:bg-secondary text-white text-[18px] rounded-[40px] px-8 py-3 w-[150px]'>
                                                        User
                                                    </button>
                                                    <button onClick={handleClickOpen('partner')} className='bg-secondary hover:bg-primary text-white text-[18px] rounded-[40px] px-8 py-3 w-[150px]'>
                                                        Partner
                                                    </button>
                                                </div>
                                                <div className='border-t pb-5'>
                                                    <h2 className="mt-6 text-center text-[16px] font-bold tracking-tight text-gray-900 ">
                                                        Already registered? <Link className='text-secondary ml-1' href='/login'>Login</Link>
                                                    </h2>
                                                </div>
                                            </div>
                            }
                        </div>
                    </div>
                </div>
            </section>
            <ToastContainer />
        </>
    )
}

export default Page
