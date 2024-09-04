import React from "react";
import { NavLink } from 'react-router-dom'
import Jobinterview from './images/job-interview.png'
import Jobinterview2 from './images/job-interview2.png'
import TestimonialCarousel from './TestimonialCarousel'
import Form from './Form'

const Homepage = () => {
    return (
        <>
            <div id="homepage_top">
                <section id="header" className="homepage d-flex align-items-center">
                    <div className="container-fluid nav_bg">
                        <div className="row">
                            <div className="col-lg-10 mx-auto">
                                <div className="row">
                                    <div className="col-md-6  pt-5 pt-lg-5 order-2 order-lg-1 d-flex flex-column justify-content-center" id="homepage-initial-tablet">
                                        <h1>
                                            Struggling With Resume, Not Getting Interviews,
                                            <strong className="brand-name"> Want To Make An Impact </strong>
                                            With Our Professional Resume Services.
                                        </h1>
                                        <h2 className="my-3">
                                        Then click on the below button and get a job-ready professional resume.
                                        </h2>
                                        <div>
                                            <NavLink to="/pricing" className="btn-get-started" >
                                                Get Started
                                            </NavLink>
                                        </div>
                                    </div>

                                    <div className="col-lg-6 pt-4 pt-lg-5 order-1 order-lg-2">
                                        <img src={Jobinterview} alt="resumeimage" className="homepage-img" />
                                    </div>
                                </div>
                                <div className="ats-container">
                                    <h1>
                                        Receiving Interview Calls In This Era Requires ATS(Applicant Tracking System)
                                        Approved Professional Resume
                                    </h1>

                                    <h2>
                                        And Because Of ATS:
                                    </h2>
                                    <p>
                                        Only 2% Of Resumes Receive Interview Call in Today's Job Market According To
                                        The Data From Indeed, Glassdoor, Workopolis etc. Rest Resumes Land Into Black
                                        Hole And Never Heard Anything Back From Companies.
                                    </p>
                                    <h3>
                                        Don't Want Your Resume Land Into Black Hole As Soon As You Hit Submit Your Job Application THEN:
                                    </h3>
                                    <p>
                                        Order Premium Plan Today and Start Applying To Your Dream Job Tomorrow.
                                    </p>
                                    <NavLink to="/pricing" className="btn-get-started" >
                                        Get Premium Plan
                                    </NavLink>
                                </div>
                                <div className="row mx-auto">
                                    <div className="col-lg-6 pt-4 pt-lg-5 order-1 order-lg-2">
                                        <img src={Jobinterview2} alt="interviewimage" className="homepage-img2" />
                                    </div>
                                    <div className="homepage-services col-md-6 order-1 order-lg-2" id="homepage-services-tablet">
                                        <h1>Our Services</h1>
                                        <div className="homepage-list">
                                            <ul>Professionally Written ATS Approved Resume</ul>
                                            <ul>Eye-Catching Cover Letter</ul>
                                            <ul>Recruiter Approved LinkedIn Profile</ul>
                                        </div>
                                        <p>
                                            Attract Interviews has been known for quality services, exceptional efficiency
                                            and the highest rate of professionalism (Check our
                                            <NavLink to="/testimonials" className="text-white"> Testimonials</NavLink>).
                                            No matter what service you choose, we guarantee to meet and exceed your
                                            expectations and ensure your complete satisfaction.
                                        </p>
                                        <h6>
                                            Click Below to View Samples of Actual Resumes That Delivered RESULTS.
                                        </h6>
                                        <NavLink to="/samples" className="homepage-sample-btn" >
                                            See Samples
                                        </NavLink>
                                    </div>
                                </div>
                                <div className="carousel-container">
                                    <h1 id="carousel-heading">
                                        Testimonials
                                    </h1>
                                    <TestimonialCarousel />
                                    <NavLink to="/testimonials" className="btn-get-started">
                                        See All Testimonials
                                    </NavLink>
                                </div>
                                <div className="form-container">
                                 <Form />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}

export default Homepage