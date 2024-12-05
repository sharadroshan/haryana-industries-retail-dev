import React from 'react';
import { TopHeader } from "../components/topheader";
import { Navbar } from "../components/navbar";
import { Breathcumb } from '../components/breathcumb';
import { Services } from '../components/services';
import { Footer } from '../components/footer';


const Page = () => {
  const dummyArray = [
    {
      name:'Important Definitions	',
      documemt:'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf',
      url:''
    },
    {
      name:'Block wise Categorisation	',
      documemt:'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf',
      url:''
    },
    {
      name:'List Of Restrictive Industries',
      documemt:'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf',
      url:''
    },
    {
      name:'Important Category',
      documemt:'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf',
      url:''
    },
    {
      name:'THRUST SECTOR',
      documemt:'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf',
      url:''
    },
    {
      name:'Fiscal Incentives',
      documemt:'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf',
      url:''
    },
    {
      name:'Submission Of CAF (Common Application Form) For Clearances',
      documemt:'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf',
      url:''
    },
    {
      name:'Preparation of Project Report',
      documemt:'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf',
      url:''
    },
    {
      name:'Registration Of Company-LLP- Partnership Firm-Trust-Socities-NGO-NPO',
      documemt:'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf',
      url:''
    },
    {
      name:'Document Required For Incentives',
      documemt:'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf',
      url:''
    },
    {
      name:'Documents Required For CLU',
      documemt:'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf',
      url:''
    },
    {
      name:'Document Required For CLU, NOCs, Clearances, Licenses, Registrations',
      documemt:'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf',
      url:''
    },
    {
      name:'List Of Industry For Which License Required',
      documemt:'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf',
      url:''
    },
    {
      name:'Haryana Estate Management Policy (HSIIDC)',
      documemt:'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf',
      url:''
    },
    {
      name:'Haryana Enterprises And Employment Policy, 2020',
      documemt:'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf',
      url:''
    },
  ];

  return (
    <div>
      <TopHeader />
      <Navbar />
      {/* <Breathcumb
        title='Single Window Services' description=''
      /> */}
      <section className='coponies-section pt-10 xl:pt-10 xl:pb-40 pb-20 px-5 bg-light' >
        <div className='container mx-auto'>
          <div className='section-title text-center py-1 lg:py-10'>
            <h6 className='font-semibold  text-sm xl:text-xl'>SERVICES</h6>
            <h4 className='font-bold text-primary text-3xl xl:text-5xl mt-2'>Single Window  <span className=' text-blue'>Services</span></h4>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mt-[20px]">
            {
              dummyArray?.map((item, index) => {
                return (
                  <div key={index} className=" p-6 bg-white rounded-lg shadow relative h-[250px] lg:h-[200px]">
                    <a href={item.url}>
                      <h5 className="mb-2 text-1xl font-bold tracking-tight">{item.name}</h5>
                    </a>
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                    <a href={item.documemt} target='_blank' className="absolute bottom-5 left-5 inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-primary hover:bg-secondary rounded-lg focus:ring-4 focus:outline-none focus:ring-blue ">
                      Download Now
                      <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                      </svg>
                    </a>
                  </div>
                )
              })
            }
          </div>
        </div>
      </section>
      <Footer />
    </div>
  )
}

export default Page