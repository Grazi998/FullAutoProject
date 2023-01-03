import React from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Homepage from "./components/Homepage"
import AboutUs from "./components/AboutUsPage";
import Services from "./components/Services";
import HowWeDoIt from './components/HowWeDoIt';
import Financing from './components/Financing';
import Contact from './components/Contact';


// import Palletization from './components/OurServicesElements/Palletization'
// import Bending from './components/OurServicesElements/Bending'
// import CustomGrippers from './components/OurServicesElements/CustomGrippers'
// import CustomCells from './components/OurServicesElements/CustomCells'
// import Packing from './components/OurServicesElements/Packing'
// import Milling from './components/OurServicesElements/Milling'
// import Consulting from './components/OurServicesElements/Consulting'
// import Education from './components/OurServicesElements/Education'
// import Maintenance from './components/OurServicesElements/Maintenance'

import TermsOfUse from './components/TermsOfUse';
import PrivacyPolicy from './components/PrivacyPolicy';

function Router() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<Homepage />} />
            <Route path='/about-us' element={<AboutUs />} />
            <Route path='/financing' element={<Financing />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/how-we-do-it' element={<HowWeDoIt />} />
            <Route path='/services' element={<Services />} />

            {/* <Route path='/services/palletization' element={<Palletization />} />
            <Route path='/services/bending' element={<Bending />} />
            <Route path='/services/custom-grippers' element={<CustomGrippers />} />
            <Route path='/services/custom-cells' element={<CustomCells />} />
            <Route path='/services/packing' element={<Packing />} />
            <Route path='/services/milling' element={<Milling />} />
            <Route path='/services/consulting' element={<Consulting />} />
            <Route path='/services/education' element={<Education />} />
            <Route path='/services/maintenance' element={<Maintenance />} /> */}

            <Route path='/terms-of-use' element={<TermsOfUse />} />
            <Route path='/privacy-policy' element={<PrivacyPolicy />} />

        </Routes>
    </BrowserRouter>
  )
}

export default Router