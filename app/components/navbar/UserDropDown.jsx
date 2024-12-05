import React from 'react';
import { Fragment, useEffect, useRef, useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { Menu, Transition } from '@headlessui/react'
import { ArrowRightEndOnRectangleIcon, Bars3Icon, BriefcaseIcon, EnvelopeIcon, UserCircleIcon } from '@heroicons/react/24/outline';
import { handleLogout } from '@/utils/handleLogout';

export const UserDropDown = () => {
    const router = useRouter();
    
    return (
        <div className="text-right h-full">
            <Menu as="div" className="relative inline-block text-left h-full">
                <div className='h-full'>
                    <Menu.Button className="h-full flex items-center text-white py-2 px-4 font-semibold bg-primary h-full">
                        <UserCircleIcon className='mr-3' style={{ width: '35px', height: '35px' }} /> My Account
                    </Menu.Button>
                </div>
                <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                >
                    <Menu.Items className="absolute right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black/5 focus:outline-none">
                        <div className="px-1 py-1 ">
                        <Menu.Item>
                                {({ active }) => (
                                    <Link href='/enterprises'>
                                        <button
                                            className={`${active ? 'bg-violet-500 text-white' : 'text-gray-900'
                                                } group flex w-full items-center rounded-md px-2 py-2 text-sm hover:text-blue hover:font-semibold`}
                                        >
                                            {active ? (
                                                <BriefcaseIcon
                                                    className="mr-2 w-5"
                                                    aria-hidden="true"
                                                />
                                            ) : (
                                                <BriefcaseIcon
                                                    className="mr-2 w-5"
                                                    aria-hidden="true"
                                                />
                                            )}
                                            Enterprises
                                        </button>
                                    </Link>
                                )}
                            </Menu.Item>
                            <Menu.Item>
                                {({ active }) => (
                                    <Link href='/profile'>
                                        <button
                                            className={`${active ? 'bg-violet-500 text-white' : 'text-gray-900'
                                                } group flex w-full items-center rounded-md px-2 py-2 text-sm hover:text-blue hover:font-semibold`}
                                        >
                                            {active ? (
                                                <UserCircleIcon
                                                    className="mr-2 w-5"
                                                    aria-hidden="true"
                                                />
                                            ) : (
                                                <UserCircleIcon
                                                    className="mr-2 w-5"
                                                    aria-hidden="true"
                                                />
                                            )}
                                            Profile
                                        </button>
                                    </Link>
                                )}
                            </Menu.Item>
                            <Menu.Item>
                                {({ active }) => (
                                    <Link href='/contact'>
                                        <button
                                            className={`${active ? 'bg-violet-500 text-white' : 'text-gray-900'
                                                } group flex w-full items-center rounded-md px-2 py-2 text-sm hover:text-blue hover:font-semibold`}
                                        >
                                            {active ? (
                                                <Bars3Icon
                                                    className="mr-2 w-5"
                                                    aria-hidden="true"
                                                />
                                            ) : (
                                                <Bars3Icon
                                                    className="mr-2 w-5"
                                                    aria-hidden="true"
                                                />
                                            )}
                                            Contact us
                                        </button>
                                    </Link>

                                )}
                            </Menu.Item>

                            <Menu.Item>
                                <button
                                    className={`text-gray-900 group flex w-full items-center rounded-md px-2 py-2 text-sm hover:text-blue hover:font-semibold`}
                                    onClick={handleLogout}
                                >
                                    <ArrowRightEndOnRectangleIcon
                                        className="mr-2 w-5"
                                        aria-hidden="true"
                                    />
                                    Logout
                                </button>
                            </Menu.Item>

                        </div>

                    </Menu.Items>
                </Transition>
            </Menu>
        </div>
    )
}
