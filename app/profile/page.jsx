"use client"
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

import { Navbar } from "../components/navbar";
import { Footer } from '../components/footer';
import { apiCall } from '@/utils/apiCall';
import { handleLogout } from '@/utils/handleLogout';

const Page = () => {
  const router = useRouter();
  const [data, setData] = useState(null);
  const [isLoadingData, setIsLoadingData] = useState(true);

  const fetchData = async () => {
    try {
      const response = await apiCall(`user-onboarding`, 'GET', null);
      if (response.ok) {
        const result = await response.json();
        setData(result);
        setTimeout(() => {
          setIsLoadingData(false);
        }, 1000);
      } else {
        setIsLoadingData(false);
      }
    } catch (error) {
      setIsLoadingData(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const dummyData = {
    name: 'Lorem Ipsum',
    email: 'lorem@gmail.com',
    mobile: '0987654321',
    address: 'Lorem Ipsum town , cityname',
    profile: 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf',
  }


  return (
    <div>
      <Navbar />
      <section className='coponies-section pt-10 xl:pt-10 xl:pb-40 pb-20 px-5 bg-light' >
        <div className='container mx-auto'>
          <div className='section-title text-center py-1 lg:py-5
          '>
            <h6 className='font-semibold  text-sm xl:text-xl'>Profile</h6>
            <h4 className='font-bold text-primary text-3xl xl:text-5xl mt-2'>Your<span className=' text-blue'> Profile</span></h4>
          </div>
          {
            isLoadingData ?
              <p>Loading...</p>
              :
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mt-[20px]">
                <div >
                  <div className='bg-white p-5 py-10 rounded-[20px] '>
                    <div className='flex justify-center'>
                      <Image
                        src="/profile/user.jpg"
                        width={150}
                        height={150}
                        alt="Picture of the author"
                        className='rounded-[100px]'
                      />
                    </div>
                    <div className='text-center mt-5'>
                      <h3 className='font-bold text-xl text-primary'>Hello, {dummyData.name}</h3>
                    </div>
                    <div className='flex justify-center items-center mt-6'>
                      <button onClick={handleLogout} className='flex justify-center items-center mr-2 w-full bg-secondary hover:bg-primary font-semibold text-white rounded px-5 py-3  text-center'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="text-white mr-2" style={{ width: '30px' }}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="m12.75 15 3-3m0 0-3-3m3 3h-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                        </svg>
                        Logout
                      </button>
                    </div>
                  </div>
                </div>
                <div className='col-span-2'>
                  <div className='bg-white px-5 py-10 rounded-[20px] '>
                    <div>
                      <div>
                        <label>Full Name</label>
                        <input
                          type='text'
                          value={dummyData.name}
                          className='mb-5 mt-2 bg-gray border border-gray text-primary text-md rounded-lg focus:ring-secondary focus:border-secondary block w-full p-4 cursor-not-allowed ' disabled />
                      </div>
                      <div>
                        <label>Email Address</label>
                        <input
                          type='email'
                          value={dummyData.email}
                          className='mb-5 mt-2 bg-gray border border-gray text-primary text-md rounded-lg focus:ring-secondary focus:border-secondary block w-full p-4 cursor-not-allowed ' disabled />
                      </div>
                      <div>
                        <label>Mobile Number</label>
                        <input
                          type='text'
                          value={dummyData.mobile}
                          className='mb-5 mt-2 bg-gray border border-gray text-primary text-md rounded-lg focus:ring-secondary focus:border-secondary block w-full p-4 cursor-not-allowed ' disabled />
                      </div>
                      <div>
                        <label>Address</label>
                        <textarea
                          value={dummyData.address}
                          rows={5}
                          className='mb-5 mt-2 bg-gray border border-gray text-primary text-md rounded-lg focus:ring-secondary focus:border-secondary block w-full p-4 cursor-not-allowed ' disabled>
                        </textarea>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
          }
        </div>
      </section>
      <Footer />
    </div>
  )
}

export default Page