import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import Navbar from './Navbar';
import Homepage from './Homepage';
import Samples from './Samples';
import Pricing from './Pricing';
import Clientsresults from './Clientsresults';
import Testimonials from './Testimonials'
import Footer from "./Footer";
import Contact from "./Contact";
import PrivacyPolicy from "./PrivacyPolicy"
import TermsOfService from "./TermsOfService"
import Success from './Success'
import { Routes, Route } from 'react-router-dom';
import { Helmet } from 'react-helmet'


const App = () => {
  return (
    <>
      <Helmet>
        <title>Professional Resume, Cover Letter and LinkedIn Profile Writing Company | Attract Interviews</title>
        <meta
          name="description"
          content="Attract Interviews is the one of the best Professional Resume Writing Company that offers customized, 
                  result-oriented, interview-winning resume, cover letter and LinkedIn profile." />
      </Helmet>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Homepage />} />
        <Route exact path="/samples" element={<Samples />} />
        <Route exact path="/pricing" element={<Pricing />} />
        <Route exact path="/clientsresults" element={<Clientsresults />} />
        <Route exact path="/testimonials" element={<Testimonials />} />
        <Route exact path="/contact" element={<Contact />} />
        <Route exact path="/privacypolicy" element={<PrivacyPolicy />} />
        <Route exact path="/serviceterms" element={<TermsOfService />} />
        <Route exact path="/success" element={<Success />} />
        <Route path="*" element={<Homepage />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App