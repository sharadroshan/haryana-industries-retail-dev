"use client"
import React, { Fragment, useState, useEffect } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { Dialog, Transition } from '@headlessui/react';
import OtpInput from 'react-otp-input';
import Link from 'next/link';
import { LockClosedIcon, EyeIcon, EyeSlashIcon } from '@heroicons/react/20/solid';
import { XCircleIcon } from '@heroicons/react/20/solid';
import { ToastContainer, toast } from 'react-toastify';

import { apiCall } from "../../utils/apiHelper";


const Page = () => {
    const router = useRouter();
    const [otp, setOtp] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [isPasswordValid, setIsPasswordValid] = useState(false);
    const [isPasswordView, setIsPasswordView] = useState(true);
    const [userData, setData] = useState(
        {
            mobile: "",
            password: "",
        }
    )
    let [isOpen, setIsOpen] = useState(false)

    useEffect(() => {
        // Check for the token in cookies
        const token = document.cookie.includes('token=');
        if (token) {
          router.push('/');
        }
      }, [router]);


    function closeModal() {
        setIsOpen(false)
    }

    function openModal() {
        setIsOpen(true)
    }

    const handlePasswordView = () => {
        setIsPasswordView(!isPasswordView);
    }

    const onChangeMobile = (e) => {
        setData(prevState => ({
            ...prevState,
            mobile: e.target.value
        }));
    }

    const onChangePassword = (e) => {
        setData(prevState => ({
            ...prevState,
            password: e.target.value
        }));
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!userData.mobile) {
            toast.warn("Mobile Number is required.")
        } else if (userData.mobile.length > 10 || userData.mobile.length < 10) {
            toast.warn("Incorrect Mobile Number.")
        } else {
            handleLogin()
        }
    }

    const handleLogin = async () => {
        setIsLoading(true);
        await apiCall(
            `oauth/token?grant_type=password&username=${userData.mobile}&password=${userData.password}`,
            "POST",
            "",
        )
            .then(async (response) => {
                setIsLoading(false);
                if (response.status === 409) {
                    toast.error("Invalid");
                } else if (response.status === 400) {
                    const errorResponse = await response.json();
                    if (errorResponse && errorResponse.error_description) {
                        toast.error(errorResponse.error_description);
                    } else {
                        toast.error("Bad request");
                    }
                } else if (response.status === 500) {
                    toast.error("Bad credentials");
                } else if (response.status === 200) {
                    toast.success("Success");
                    const data = await response.json();
                    // Extract the token from the response data
                    const token = data.access_token;
                    // Set a cookie for authentication
                    document.cookie = `token=${token}; path=/;`;
                    // Store the token in local storage
                    localStorage.setItem('token', token);
                    setTimeout(() => {
                        router.push('/enterprises');
                    }, 500);
                } else {
                    toast.error("Unexpected error");
                }
            })
            .catch((error) => {
                setIsLoading(false);
                console.error("Error during login:", error);
                toast.error("An error occurred during login");
            });
    }

    return (
        <>
            <section >
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-4 h-[100vh]'>
                    <div className='flex items-center justify-center bg-primary'>
                        <div className='w-full lg:w-[85%] px-5 lg:px-10 py-10'>
                            <Image
                                src="/svgIcons/offer-white.svg"
                                width={120}
                                height={120}
                                className='w-[70px] lg:w-[120px]'
                                alt="Picture of the author dd"
                            />
                            <div className='mt-10'>
                                <div style={{ lineHeight: '1.2' }}>
                                    <h2 className='text-white text-[20px] lg:text-[40px] font-bold mb-0'>Welcome To,</h2>
                                    <h2 className='text-white text-[30px] lg:text-[55px] font-bold'>Haryana Industries</h2>
                                </div>
                                <p className='text-white mt-5'>Based in Sirsa, Weat, Haryana Industries works with clients in taking right decision to get Subsidies, Clearances, NOC, Licenses, CLU and Finance etc.</p>
                            </div>

                        </div>
                    </div>
                    <div className='flex items-center justify-center bg-gray'>
                        <div className='w-full lg:w-[65%] px-5 lg:px-10'>
                            <div className="py-10 max-w-xl space-y-3 lg:space-y-8">
                                <div className='text-left '>
                                    <h2 className="lg:mt-6 text-3xl lg:text-5xl font-bold tracking-tight text-primary">
                                        Sign In
                                    </h2>
                                    <p className="mt-5 lg:mt-10 text-sm ">
                                        You don't have an account with us ?{' '}
                                        <Link href='/signup' className='font-medium hover:text-primary text-primary'>
                                            Signup Here
                                        </Link>
                                    </p>
                                </div>
                                <form className="space-y-3 lg:space-y-6  " action="#" method="POST" onSubmit={handleSubmit}>
                                    <input type="hidden" name="remember" defaultValue="true" />
                                    <div className="rounded-md ">
                                        <div className="group relative">
                                            <label htmlFor="mobileInput" className=" pb-1 text-sm font-medium  transition-all duration-200 ease-in-out ">Username</label>
                                            <input id="mobileInput"
                                                type="text"
                                                className="peer h-15 w-full rounded-md bg-gray-50 px-4 py-3 font-medium outline-none  transition-all duration-200 ease-in-out border text-blue text-[14px]"
                                                onChange={onChangeMobile}
                                                placeholder='Enter your username'
                                                autoComplete='username'
                                            />
                                            {/* {
                                                isMobileValid &&
                                                <span className=" pt-1 text-xs text-red">Invalid mobile number.</span>
                                            } */}
                                        </div>
                                    </div>

                                    <div className=" rounded-md ">
                                        <div className="group relative relative">
                                            <label htmlFor="passwordInput" className="block w-full pb-1 text-sm font-medium text-gray-400 transition-all duration-200 ease-in-out">Password</label>
                                            <input
                                                id="passwordInput"
                                                type={isPasswordView ? "password" : "text"}
                                                className="peer h-15 w-full rounded-md bg-gray-50 px-4 py-3 font-medium outline-none  transition-all duration-200 ease-in-out border text-blue text-[14px]"
                                                onChange={onChangePassword}
                                                placeholder='Enter your password'
                                                autoComplete='current-password'
                                            />
                                            <span className="absolute inset-y-0 right-3 top-5 flex items-center pl-3 cursor-pointer">
                                                {
                                                    isPasswordView ?
                                                        <EyeSlashIcon className="h-5 w-5 text-primary" aria-hidden="true" onClick={handlePasswordView} />
                                                        :
                                                        <EyeIcon className="h-5 w-5 text-primary" aria-hidden="true" onClick={handlePasswordView} />
                                                }
                                            </span>
                                        </div>
                                        {
                                            isPasswordValid &&
                                            <span className="pt-1 text-xs text-red">Invalid password type , Format - Xyz!@#$%^&*_+</span>
                                        }
                                        {/* <p className='text-[13px] mt-5'>Hint - username: kminchelle And password: 0lelplR</p> */}
                                    </div>

                                    {/* <div className=" rounded-md ">
                                        <div className="group relative relative">
                                            <label htmlFor="regNumberInput" className="block w-full pb-1 text-sm font-medium text-gray-400 transition-all duration-200 ease-in-out">Udyam registration no.</label>
                                            <input
                                                id="regNumberInput"
                                                type='text'
                                                placeholder='Enter your Udyam registration number'
                                                className="peer h-15 w-full rounded-md bg-gray-50 px-4 py-3 font-medium outline-none  transition-all duration-200 ease-in-out border text-blue text-[14px]"
                                            />
                                        </div>
                                    </div>
                                    <div>
                                        <p>If you don't have MSME / UDYAM Registeration Number ? <a href='#' className='text-primary'>Register Now</a></p>
                                    </div> */}

                                    <div>
                                        {
                                            isLoading ?
                                                <button
                                                    className="group relative flex w-full justify-center rounded-md border border-transparent py-3 px-4 text-sm font-medium text-primary hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 bg-gray btn-disabled"
                                                >
                                                    <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                                                        <XCircleIcon className="h-5 w-5 " aria-hidden="true" />
                                                    </span>
                                                    Please wait ...
                                                </button>
                                                :
                                                <button
                                                    type="submit"
                                                    className="group relative flex w-full justify-center rounded-md border border-transparent py-3 px-4 text-lg font-medium text-white bg-blue"
                                                >
                                                    <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                                                        <LockClosedIcon className="h-5 w-5 " aria-hidden="true" />
                                                    </span>
                                                    Login
                                                </button>
                                        }
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            <Transition appear show={isOpen} as={Fragment}>
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
                                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white lg:p-6 text-left align-middle shadow-xl transition-all">
                                    <div className="relative flex  flex-col justify-center overflow-hidden bg-gray-50 lg:py-12">
                                        <div className="relative bg-white px-6 pt-10 pb-9 mx-auto w-full max-w-lg rounded-2xl">
                                            <div className="mx-auto flex w-full max-w-md flex-col space-y-16">
                                                <div className="flex flex-col items-center justify-center text-center space-y-2">
                                                    <div className="font-semibold text-2xl lg:text-3xl">
                                                        <h3 className='text-blue'>Mobile OTP Verification</h3>
                                                    </div>
                                                    <div className="flex flex-row text-sm font-medium text-gray-400">
                                                        <p>We have sent a code to your mobile number.</p>
                                                    </div>
                                                </div>

                                                <div>
                                                    <div className="flex flex-col space-y-10">
                                                        <div className='flex justify-center mb-3'>
                                                            <OtpInput
                                                                value={otp}
                                                                onChange={setOtp}
                                                                numInputs={4}
                                                                renderSeparator={<span>-</span>}
                                                                renderInput={(props) => <input {...props} />}
                                                                inputStyle={{ width: '70px', height: '70px', border: '2px solid #2563eb', borderRadius: '13px', fontSize: '23px', fontWeight: '800' }}
                                                            />
                                                        </div>

                                                        <div className="flex flex-col space-y-5">
                                                            <div>
                                                                <Link href='/onboarding'>
                                                                    <button
                                                                        className="flex flex-row items-center justify-center text-center w-full border rounded-xl outline-none py-5 bg-blue border-none text-white text-sm shadow-sm"
                                                                    >
                                                                        Verify Account
                                                                    </button>
                                                                </Link>
                                                            </div>

                                                            <div className="flex flex-row items-center justify-center text-center text-sm font-medium space-x-1 ">
                                                                <p>Didn't recieve code?</p> <a className="flex flex-row items-center text-blue" href="#" target="_blank" rel="noopener noreferrer">Resend</a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

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
