"use client"
import React from 'react';
import Image from 'next/image';
import { TopHeader } from "../components/topheader";
import { Navbar } from "../components/navbar";
import { Footer } from '../components/footer';

const Page = () => {
  // const [isEmailValid, setIsEmailValid] = useState(false);
  // const [userData, setData] = useState(
  //   {
  //     email: "",
  //     mobile: "",
  //     subject: "",
  //     message: "",
  //   }
  // );

  // const onChangeEmail = (e) => {
  //   setData(prevState => ({
  //     ...prevState,
  //     email: e.target.value
  //   }));

  //   if (e.target.value?.length > 3) {
  //     if (!validEmail.test(userData.email)) {
  //       setIsEmailValid(true);
  //     } else {
  //       setIsEmailValid(false)
  //     }
  //   } else {
  //     setIsEmailValid(false)
  //   }
  // }

  // const onChangeMobile = (e) => {
  //   setData(prevState => ({
  //     ...prevState,
  //     mobile: e.target.value
  //   }));
  // }

  // const onChangeSubject = (e) => {
  //   setData(prevState => ({
  //     ...prevState,
  //     subject: e.target.value
  //   }));
  // }

  // const onChangeMessage = (e) => {
  //   setData(prevState => ({
  //     ...prevState,
  //     message: e.target.value
  //   }));
  // }

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   if (!userData.email) {
  //     toast.warn("Email address is required.")
  //   } else if (!userData.mobile) {
  //     toast.warn("Mobile number is required.")
  //   } else if (!userData.subject) {
  //     toast.warn("Subject is required.")
  //   } else if (!userData.message) {
  //     toast.warn("Message is required.")
  //   } else {
  //     toast.success("Success")
  //   }
  // }

  return (
    <div >
      <TopHeader />
      <Navbar />
     
      <section className='pb-5 lg:pb-20 pt-10' style={{ background: '#f2f2f2' }}>
        <div className='container mx-auto px-5'>
          <div className="overflow-hidden bg-white shadow rounded-lg p-5 py-10 lg:p-10">
            <div className='section-title text-center border-b pb-5'>
              <h6 className='font-semibold text-muted'>Contact</h6>
              <h4 className='font-bold text-primary text-2xl lg:text-4xl'>
                Get In Touch
                <span className=' text-blue'>  With Us! </span>
              </h4>
            </div>
            <div className='description lg:mt-10'>
              <div className='grid grid-cols-1 lg:grid-cols-2 gap-4'>
                <div className='order-2 lg:order-1'>
                  <div>
                    <div className='text-gray900 mb-4'>
                      <a href='mailto:info@haryanaindustries.com' className='text-gray900 hover:text-primary flex items-center'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className='w-8 h-3 text-primary'>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                        </svg>

                        <span className='ml-3'>info@haryanaindustries.com</span>
                      </a>
                    </div>
                    <div className='text-gray900 lg:flex mb-4'>
                      <a href='tel:+919416351167' className='text-gray900 hover:text-primary flex items-center'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className='w-8 h-3 text-primary'>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                        </svg>

                        <span className='ml-3'>
                          +91 94163 51167
                        </span>
                      </a>
                      <a href='tel:+919050902425' className='text-gray900 hover:text-primary flex items-center'>
                        <span className='ml-11'>
                          +91 90509 02425
                        </span>
                      </a>
                    </div>
                    <div className='text-gray900 flex items-center mb-4'>
                      <div>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className='w-8 h-3 text-primary'>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                        </svg>
                      </div>
                      <span className='ml-3'>
                        DGM TECHNOLOGIES PVT. LTD.
                        <br />
                        DGM Building, Old Court Road, Near Railway Crossing
                        Sirsa – 125055 (Haryana)
                      </span>
                    </div>
                    <div className='text-gray900 flex items-center mb-4'>
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className='w-8 h-3 text-primary'>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                      </svg>
                      <span className='ml-3'>
                        Morning –  10:00 AM To  2:00 PM
                      </span>
                    </div>
                    <div className='text-gray900 flex items-center mb-4'>
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className='w-8 h-3 text-primary'>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                      </svg>
                      <span className='ml-3'>
                        Evening – 04:00 PM To  8:00 PM
                      </span>
                    </div>
                  </div>

                  {/* <section className="">
                    <div className="mx-auto max-w-screen-md">
                      <p className="mb-5 lg:mb-5 font-light text-left text-gray-500 sm:text-xl">                    We’re here to help you. If you have any questions, comments, or concerns, feel free to reach out to us. Your feedback is valuable to us and we’re committed to providing you with the best support possible.
                      </p>
                      <div>
                        <label for="email" className="block mb-2 text-sm font-medium text-gray-900">Your email</label>
                        <input onChange={onChangeEmail} type="email" id="email" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 " placeholder="name@gmail.com" required />
                      </div>

                      {
                        isEmailValid &&
                        <span className="pt-1 text-xs text-red">Invalid email type , Format - example@gmail.com</span>
                      }
                      <div className='mt-2'>
                        <label for="mobile" className="block mb-2 text-sm font-medium text-gray-900">Your mobile number</label>
                        <input onChange={onChangeMobile} type="number" id="mobile" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 " placeholder="name@gmail.com" required />
                      </div>
                      <div className='mt-2'>
                        <label for="subject" className="block mb-2 text-sm font-medium text-gray-900">Subject</label>
                        <input onChange={onChangeSubject} type="text" id="subject" className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 " placeholder="Let us know how we can help you" required />
                      </div>
                      <div className="sm:col-span-2 mt-2">
                        <label for="message" className="block mb-2 text-sm font-medium text-gray-900 ">Your message</label>
                        <textarea onChange={onChangeMessage} id="message" rows="6" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 " placeholder="Leave a comment..."></textarea>
                      </div>
                      <div className='mt-4'>
                        <button
                          onClick={handleSubmit}
                          className="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-blue sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300">Send message</button>
                      </div>

                    </div>
                  </section> */}
                </div>
                <div className='order-1 lg:order-2'>
                  <div className="mt-4">
                    <Image
                      src="/contact/girl.jpg"
                      alt="Picture of the author"
                      width={500}
                      height={100}
                      className='mx-auto'
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  )
}

export default Page