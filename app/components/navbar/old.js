"use client"; // This is a client component
import { Fragment, useEffect, useRef, useState } from 'react';
import { useRouter } from 'next/navigation';
import { usePathname } from 'next/navigation';
import { Dialog } from '@headlessui/react';
import { Menu, Transition } from '@headlessui/react'
import Link from 'next/link'
import { ToastContainer } from 'react-toastify';
import { XMarkIcon, ChevronDownIcon } from '@heroicons/react/24/outline';
import { UserDropDown } from './UserDropDown';
import { ChevronRightIcon } from '@heroicons/react/20/solid';

export const Navbar = () => {
  const router = useRouter();
  const activePathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isAccessToken, setIsAccessToken] = useState("");

  const navigation = [
    {
      name: 'Home',
      href: '/',
      type: '',
      access: 'public'
    },
    {
      name: 'Scheme / Incentives',
      href: '/scheme-incentives',
      type: '',
      access: 'public'
    },
    {
      name: 'MSME Classification',
      href: '/msme-classification',
      type: '',
      access: 'public'
    },
    {
      name: 'Compliance/Audit',
      href: '/compliance-audit',
      type: '',
      access: 'public'
    },
    {
      name: 'Others',
      access: 'public',
      type: 'dropdown',
      submenu: [
        {
          name: 'Add Company',
          href: '/onboarding',
          access: 'public'
        },
        {
          name: 'Services',
          href: '/services',
          access: 'public'
        },
      ]

    },
    {
      name: 'Contact Us',
      href: '/contact',
      access: 'public',
      type: '',
    },

  ];
  useEffect(() => {
    if (typeof window !== 'undefined') {
      let newObject = window?.localStorage.getItem("token");
      const accessToken = JSON.parse(newObject);
      setIsAccessToken(accessToken)
      if (!accessToken || accessToken == "") {
          router.push('/login');
      }
    }
  }, []);

  return (
    <div className='isolate bg-white sticky top-[-1px]' style={{ zIndex: '9' }}>
      <div className="xl:xl:container mx-auto ">
        <div className='bti-main-menus py-5'>
          <nav className="flex items-center justify-center bti-main-nav rounded-2xl lg:block hidden" aria-label="Global">
            <div className="hidden lg:flex lg:min-w-0 lg:flex-1 lg:justify-between items-center">
              <div>
                <div className="flex lg:min-w-0 lg:flex-1 mt-2" aria-label="Global">
                  <Link href="/" className="-m-1.5 p-1.5" style={{ lineHeight: '0.6' }}>
                    <h2 className=' text-blue font-bold text-[30px] lg:text-[40px] text-blue'>Haryana <span className='text-black lg:font-bold font-semibold text-[14px] lg:text-[20px]'>Industries</span></h2>
                  </Link>
                </div>
              </div>
              <div className=''>
                {navigation.map((item) => (
                  item.type == 'dropdown' ?
                    <Menu as="div" className="relative inline-block text-left h-full ml-3">
                      <Menu.Button className="py-1 font-semibold flex items-center">
                        {item.name}
                        <ChevronDownIcon
                          className="mr-2 w-5"
                          aria-hidden="true"
                        />
                      </Menu.Button>
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
                            {
                              item.submenu.map((subitem) => {
                                return (
                                  <Menu.Item>
                                    {({ active }) => (
                                      <Link key={subitem.name} href={subitem.href} className={`${active ? 'bg-violet-500 text-white' : 'text-gray-900'
                                        } group flex w-full items-center rounded-md px-2 py-1 my-2 text-sm font-semibold hover:text-secondary hover:pl-3 hover:font-semibold`}>
                                        <ChevronRightIcon
                                          className="mr-1 w-5"
                                          aria-hidden="true"
                                        />
                                        {subitem.name}
                                      </Link>
                                    )}
                                  </Menu.Item>
                                )
                              })
                            }

                          </div>
                        </Menu.Items>
                      </Transition>
                    </Menu>
                    :
                    <Link key={item.name} href={item.href} className={activePathname == item.href ? "main-nav px-3 font-semibold text-white bg-primary rounded py-2" : "px-3 font-semibold text-secondary  main-nav"} >
                      {item.name}
                    </Link>
                ))}
              </div>
              <div className='flex h-full'>
                {
                  isAccessToken ?
                    <>
                      <UserDropDown />
                    </>
                    :
                    <Link href='/login' className='h-[50px] text-white text-[18px] px-4 bg-primary hover:bg-secondary text-secondary flex items-center justify-center'>
                      Login/Signup
                    </Link>
                }
              </div>
            </div >
          </nav>
          <Dialog as="div" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
            <Dialog.Panel focus="true" className="fixed inset-0 z-10 overflow-y-auto  px-3 lg:hidden bg-primary">
              <div className="flex items-center justify-between mt-5 ">
                <div className="flex">
                  <Link href="/home" className="">
                    <h2 className=' text-blue font-bold text-[30px] text-blue'>Haryana <span className='text-white font-bold text-[20px] mt-[-20px]'>Industries</span></h2>
                  </Link>
                </div>
                <div className="flex">
                  <button
                    type="button"
                    className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-secondary"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <span className="sr-only">Close menu</span>
                    <XMarkIcon className="h-5 w-6" aria-hidden="true" />
                  </button>
                </div>
              </div>
              <div className='border text-secondary'></div>
              <div className="mt-6 flow-root">
                <div className="-my-6 divide-y divide-gray-500/10 text-secondary">
                  <div className="space-y-2 py-6">
                    {navigation?.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        className="block rounded-lg py-2 px-3 text-base font-semibold leading-7 text-secondary hover:bg-gray-400/10 main-nav"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>
                <div className="flex items-center mt-5">
                  <Link href='/login' className='w-full mr-2'>
                    <button
                      type="button"
                      className="bg-blue w-full mr-2 py-2 rounded-md font-semibold text-center"
                    >
                      Login
                    </button>
                  </Link>

                  <Link href='/signup' className='w-full'>
                    <button
                      type="button"
                      className="bg-blue  w-full py-2 rounded-md font-semibold  text-center"
                    >
                      Signup
                    </button>
                  </Link>
                </div>
              </div>
            </Dialog.Panel>
          </Dialog>
          <ToastContainer />
        </div>
      </div>
    </div>
  )
}
