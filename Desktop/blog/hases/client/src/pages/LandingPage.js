// src/components/LandingPage.js
import React from 'react';
import './LandingPage.css'
import Header from '../components/Header';
import Hero from '../components/Hero';
import JobCatagory from '../components/JobCatagory';
import HowWorks from '../components/HowWorks';
import Testimony from '../components/Testimony';
import Footer from '../components/Footer';
const LandingPage = () => {
    return (
        <div className='landingPage'>
           <Header />
           <Hero />
           <JobCatagory />
           <HowWorks />
           <Testimony />
           <Footer />
        </div>
    );
};

export default LandingPage;
