"use client"
import React from 'react';
import { TopHeader } from "./components/topheader";
import { Navbar } from "./components/navbar";
import { Banner } from './home/banner';
import { Process } from "./home/process";
import { Services } from "./home/services";
import { Footer } from "./components/footer";
import { OtherServices } from './home/otherservices';
import { Testimonial } from './home/testimonial';
import { Highlight } from './home/highlight';

export default function Home() {
  
  return (
    <main >
      <TopHeader />
      <Navbar />
      <Banner />
      <Process />
      <Highlight />
      <Services />
      <OtherServices />
      <Testimonial />
      <Footer />
    </main>
  );
}
