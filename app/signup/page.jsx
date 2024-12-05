"use client"
import React, { Fragment, useState } from 'react';
import { useRouter } from 'next/navigation';
import { Dialog, Transition } from '@headlessui/react';
import { ToastContainer, toast } from 'react-toastify';
import { LockClosedIcon } from '@heroicons/react/20/solid';
import { XCircleIcon } from '@heroicons/react/20/solid';
import { validEmail } from '../components/regex';
import Image from 'next/image';
import Link from 'next/link';

import { SetPassword } from './components/setPassword';
import { MobileOtpVerification } from '../components/modals/mobileOtpVerification';
import { apiCall } from "../../utils/apiCall";


const Page = () => {
    const router = useRouter();

    const [isSetPasswordOpen, setIsSetPasswordOpen] = useState(false);
    const [isEmailValid, setIsEmailValid] = useState(false);
    const [isButtonLoading, setIsButtonLoading] = useState(false);
    const [isOpenOtpModal, setIsOpenOtpModal] = useState(false);
    const [userData, setData] = useState(
        {
            name: "",
            email: "",
            mobile: "",
        }
    );
    const [userConfirmPassword, setUserConfirmPassword] = useState("");

    function closeModal() {
        setIsOpenOtpModal(false)
    }

    function openModal() {
        setIsOpenOtpModal(true)
    }

    const onChangeName = (e) => {
        setData(prevState => ({
            ...prevState,
            name: e.target.value
        }));
    }

    const onChangeEmail = (e) => {
        setData(prevState => ({
            ...prevState,
            email: e.target.value
        }));
        if (e.target.value?.length > 3) {
            if (!validEmail.test(userData.email)) {
                setIsEmailValid(true);
            } else {
                setIsEmailValid(false)
            }
        } else {
            setIsEmailValid(false)
        }
    }

    const onChangeMobile = (e) => {
        setData(prevState => ({
            ...prevState,
            mobile: e.target.value
        }));
    }

    const createAccount = async () => {
        await apiCall(
            `user-profile/retail/signup`,
            "POST",
            userData,
        )
            .then(response => {
                if (response.status === 409) {
                    setIsButtonLoading(false);
                    toast.error("Invalid");
                    return;
                } else if (response.status === 400) {
                    toast.error("A user already exists.")
                    setIsButtonLoading(false);
                } else if (response.status === 500) {
                    setIsButtonLoading(false);
                    toast.error("Internal Server Error")
                } else if (response.status === 200) {
                    setIsButtonLoading(false);
                    toast.success("Signup Successfully.");
                    setTimeout(() => {
                        setIsSetPasswordOpen(true);
                    }, 500);
                }
                if (response.ok) {
                    return response.json()
                }
                setIsButtonLoading(false);
            })
            .then(data => {
                console.log('signup data==>', data)
                setIsButtonLoading(false);
            })

    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsButtonLoading(true);

        if (!userData.name) {
            toast.warn("Name is required.");
            setIsButtonLoading(false);
        } else if (!userData.mobile) {
            toast.warn("Mobile number is required.");
            setIsButtonLoading(false);
        } else if (!userData.email) {
            toast.warn("Email address is required.");
            setIsButtonLoading(false);
        } else {
            createAccount();
        }
    }

    const handleCloseOtpModal = () => {
        setIsOpenOtpModal(false);
    };

    return (
        <>
            <section >
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-4 h-[100vh]'>
                    <div className='flex items-center justify-center bg-primary'>
                        <div className='w-full lg:w-[85%] px-5 lg:px-10 py-10'>
                            <Image
                                src="/svgIcons/hand-white.svg"
                                width={120}
                                height={120}
                                className='w-[70px] lg:w-[120px]'
                                alt="Picture of the author dd"
                            />
                            <div className='mt-10'>
                                <div style={{ lineHeight: '1.2' }}>
                                    <h2 className='text-white text-[20px] lg:text-[40px] font-bold mb-0'>Let's Start With,</h2>
                                    <h2 className='text-white text-[30px] lg:text-[55px] font-bold'>Haryana Industries</h2>
                                </div>
                                <p className='text-white mt-5'>Based in Sirsa, Weat, Haryana Industries works with clients in taking right decision to get Subsidies, Clearances, NOC, Licenses, CLU and Finance etc.</p>
                            </div>

                        </div>
                    </div>
                    <div className='flex items-center justify-center bg-gray'>
                        <div className='w-full lg:w-[80%] px-5 lg:px-10'>
                            <section className='py-10'>
                                <div className="flex min-h-full items-center justify-center lg:py-8 w-full">
                                    {
                                        isSetPasswordOpen ?
                                            <SetPassword setUserConfirmPassword={setUserConfirmPassword} data={userData} setIsOpenOtpModal={setIsOpenOtpModal} />
                                            :
                                            <div className="w-full relative">
                                                <div className='border-b pb-5'>
                                                    <h2 className="lg:mt-6 text-3xl lg:text-5xl font-bold text-primary">
                                                        Sign Up
                                                    </h2>
                                                    <p className="mt-5 lg:mt-10 text-sm ">
                                                        Or You have already account ? {' '}
                                                        <Link href='/login' className='font-medium text-indigo-600 hover:text-indigo-500 text-blue'>
                                                            Sign In Here
                                                        </Link>
                                                    </p>
                                                </div>
                                                <div className="mt-8 space-y-3 lg:space-y-5">
                                                    <div className="-space-y-px rounded-md ">
                                                        <div className="group relative">
                                                            <label htmlFor="0" className="block w-full pb-1 text-sm font-medium text-gray-400 transition-all duration-200 ease-in-out group-focus-within:text-blue-400">Full Name*</label>
                                                            <div className='relative'>
                                                                <input
                                                                    id="0"
                                                                    type="text"
                                                                    className="peer h-12 w-full rounded-md bg-gray-50 px-4 font-500 outline-none drop- transition-all duration-200 ease-in-out border text-blue text-[14px]"
                                                                    onChange={onChangeName}
                                                                    placeholder="Enter Full Name"
                                                                />
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div className="-space-y-px rounded-md ">
                                                        <div className="group relative">
                                                            <label htmlFor="2" className="block w-full pb-1 text-sm font-medium text-gray-400 transition-all duration-200 ease-in-out group-focus-within:text-blue-400">Mobile</label>
                                                            <input
                                                                id="2"
                                                                type={"number"}
                                                                className="peer h-12 w-full rounded-md bg-gray-50 px-4 font-500 outline-none drop- transition-all duration-200 ease-in-out border text-blue text-[14px]"
                                                                onChange={onChangeMobile}
                                                                placeholder="Enter Mobile Number"
                                                            />
                                                        </div>
                                                    </div>

                                                    <div className="-space-y-px rounded-md ">
                                                        <div className="group relative">
                                                            <label htmlFor="2" className=" pb-1 text-sm font-medium text-gray-500 transition-all duration-200 ease-in-out group-focus-within:text-blue-400">Email Address</label>
                                                            <input id="2"
                                                                type="email"
                                                                className="peer h-12 w-full rounded-md bg-gray-50 px-4 font-500 outline-none  transition-all duration-200 ease-in-out border text-blue text-[14px]"
                                                                onChange={onChangeEmail}
                                                                placeholder="Enter Email Address"
                                                            />
                                                        </div>
                                                        {
                                                            isEmailValid &&
                                                            <span className="pt-1 text-xs text-red">Invalid email type , Format - example@gmail.com</span>
                                                        }
                                                    </div>
                                                </div>
                                                <div className='flex items-center justify-center mt-[50px]'>
                                                    {
                                                        isButtonLoading ?
                                                            <button disabled
                                                                className="relative bg-primary hover:bg-primary text-white text-[16px] rounded-[40px] px-3 py-3 w-full btn-disabled"
                                                            >
                                                                <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                                                                    <XCircleIcon className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400" aria-hidden="true" />
                                                                </span>
                                                                Please wait ...
                                                            </button>
                                                            :
                                                            <button
                                                                onClick={handleSubmit}
                                                                className='relative bg-primary hover:bg-secondary text-white text-[16px] rounded-[40px] px-3 py-3 w-full'
                                                            >
                                                                <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                                                                    <LockClosedIcon className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400" aria-hidden="true" />
                                                                </span>
                                                                Sign Up
                                                            </button>
                                                    }
                                                </div>
                                            </div>
                                    }
                                </div>
                            </section>
                        </div>
                    </div>
                </div>
            </section>
            <Transition appear show={isOpenOtpModal} as={Fragment}>
                <Dialog as="div" className="relative z-10" onClose={openModal}>
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-black/25" />
                    </Transition.Child>

                    <div className="fixed inset-0 overflow-y-auto " style={{ background: '#f2f2f2' }}>
                        <div className="flex min-h-full items-center justify-center p-4 text-center">
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 scale-95"
                                enterTo="opacity-100 scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 scale-100"
                                leaveTo="opacity-0 scale-95"
                            >
                                <Dialog.Panel className="w-full max-w-xl transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                                    <MobileOtpVerification
                                        type='mobile'
                                        handleClose={handleCloseOtpModal}
                                        data={userData}
                                        userConfirmPassword={userConfirmPassword}
                                    />
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition>
            <ToastContainer />
        </>
    )
}

export default Page
