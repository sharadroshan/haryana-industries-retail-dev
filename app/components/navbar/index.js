"use client";
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { usePathname } from 'next/navigation';
import { Dialog } from '@headlessui/react';
import Link from 'next/link'
import { ToastContainer } from 'react-toastify';
import { Bars3BottomRightIcon, XMarkIcon } from '@heroicons/react/24/outline';
import { UserDropDown } from './UserDropDown';

export const Navbar = () => {
  const router = useRouter();
  const activePathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Check if the user is authenticated
  useEffect(() => {
    const token = document.cookie.includes('token=');
    setIsAuthenticated(token);
  }, [router]);

  const handleOpenMobileMenu = () => {
    setMobileMenuOpen(true)
  }

  const navigation = [
    {
      name: 'Home',
      href: '/',
      access: 'public'
    },
    {
      name: 'Profile',
      href: '/profile',
      access: 'private'
    },
    {
      name: 'Contact Us',
      href: '/contact',
      access: 'public',
    }
  ];

  return (
    <>
      <div className='isolate bg-white sticky top-[-1px]' style={{ zIndex: '9' }}>
        <div className="xl:xl:container mx-auto ">
          <div className='bti-main-menus py-4 lg:py-5 px-5'>
            <nav className="flex items-center justify-between lg:justify-center bti-main-nav rounded-2xl lg:block " aria-label="Global">
              <div className=" lg:flex lg:min-w-0 lg:flex-1 lg:justify-between justify-start items-center">
                <div>
                  <div className="flex lg:min-w-0 lg:flex-1" aria-label="Global">
                    <Link href="/" className="-m-1.5 p-1.5" style={{ lineHeight: '0.6' }}>
                      <h2 className=' text-blue font-bold text-[20px] lg:text-[30px] text-blue'>Haryana Industries<span className='text-black lg:font-bold font-semibold text-[14px] lg:text-[20px]'></span></h2>
                    </Link>
                  </div>
                </div>
                {
                  isAuthenticated ?
                    <div className='hidden lg:block'>
                      <div className='flex h-full '>
                        <UserDropDown />
                      </div>
                    </div>
                    :
                    <div className='hidden lg:block'>
                      <div className='flex h-full '>
                        <Link href='/contact' className='mr-3 h-[50px] text-white text-[18px] px-4 bg-primary hover:bg-secondary text-secondary flex items-center justify-center'>
                          Contact Us
                        </Link>
                        <Link href='/login' className='h-[50px] text-white text-[18px] px-4 bg-primary hover:bg-secondary text-secondary flex items-center justify-center'>
                          Login/Signup
                        </Link>
                      </div>
                    </div>
                }

              </div>
              <div className='block lg:hidden'>
                <Bars3BottomRightIcon className='w-9 h-2 ' onClick={handleOpenMobileMenu} />
              </div>
            </nav>
            <Dialog as="div" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
              <Dialog.Panel focus="true" className="fixed inset-0 z-10 overflow-y-auto  px-3 lg:hidden bg-primary">
                <div className="flex items-center justify-between mt-5 border-b border-white pb-3">
                  <div className="flex">
                    <Link href="/home" className="">
                      <h2 className=' text-white font-bold text-[22px]'>Haryana Industries<span className='text-white font-bold text-[20px] mt-[-20px]'></span></h2>
                    </Link>
                  </div>
                  <div className="flex">
                    <button
                      type="button"
                      className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-secondary"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      <span className="sr-only">Close menu</span>
                      <XMarkIcon className="h-2 w-7 text-white" aria-hidden="true" />
                    </button>
                  </div>
                </div>
                <div className="mt-10 flow-root">
                  <div className="-my-6 divide-y divide-gray-500/10 text-secondary">
                    <div className="space-y-2 py-6">
                      {navigation?.map((item) => (
                        <Link
                          key={item.name}
                          href={item.href}
                          className="block rounded-lg py-1 px-2 text-base font-semibold text-white main-nav"
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
                        className="bg-white w-full mr-2 py-2 rounded-md font-semibold text-center"
                      >
                        Login
                      </button>
                    </Link>

                    <Link href='/signup' className='w-full'>
                      <button
                        type="button"
                        className="bg-white  w-full py-2 rounded-md font-semibold  text-center"
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
    </>
  )
}

