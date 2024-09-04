import React from "react";
import faqdata from './data/faqdata.js'
import Faqcomponent from './components/Faqcomponent';
import { Link } from "react-scroll";
import Stripe from './images/stripe.png'
import { Helmet } from "react-helmet";

const Pricing = () => {
    const faqcards = faqdata.map(function (item) {
        return (
            <Faqcomponent
                key={item.id}
                item={item}
            />
        )
    })

    return (
        <>
            <Helmet>
                <title>Pricing and FAQ's | Attract Interviews</title>
                <meta
                    name="description"
                    content="$79 for Basic Plan. You only get a professional resume if you choose this option.
                    $129 for Standard Plan. With this, you get a professional resume and modern style customizable cover letter if you choose this option.
                    $199 for Premium Plan. With this option, you get an ATS optimized professional resume and cover letter plus get Jaw-Dropping LinkedIn Profile if you choose this option.
                    You have questions about our services? We have answers in the form of FAQ's" />
            </Helmet>
            <section className="pricing py-4" id="pricing-top">
                <div className="container">
                    <div className="row">
                        <h1 className="price-heading">Choose Your Pricing Plan</h1>
                        {/* Basic Tier */}
                        <div className="col-lg-4">
                            <div className="card mb-5 mb-lg-0">
                                <div className="card-body">
                                    <h5 className="card-title text-muted text-uppercase text-center">Basic</h5>
                                    <h6 className="card-price text-center">$79<span className="period">USD</span></h6>
                                    <hr />
                                    <ul className="fa-ul">
                                        <li><span className="fa-li"><i className="fas fa-check"></i></span>Strategically Written Keyword Optimized Resume</li>
                                        <li><span className="fa-li"><i className="fas fa-check"></i></span>Competent Formatting For Minimizing Automatic Rejections</li>
                                        <li><span className="fa-li"><i className="fas fa-check"></i></span>Eye Catching Language For Better Interview Chances</li>
                                        <li><span className="fa-li"><i className="fas fa-check"></i></span>Two Revisions Included For Your Satisfaction</li>
                                        <li className="text-muted"><span className="fa-li"><i className="fas fa-times"></i></span>Mordern Style Customisable Cover Letter For More Interviews</li>
                                        <li className="text-muted"><span className="fa-li"><i className="fas fa-times"></i></span>Get Jaw Dropping LinkedIn Profile and Standout in a Crowd</li>
                                        <li className="text-muted"><span className="fa-li"><i className="fas fa-times"></i></span>ATS Optimized Content</li>
                                    </ul>
                                    <div className="d-grid">
                                        <a target="_blank" rel="noopener noreferrer" href="https://buy.stripe.com/test_8wM9CT2121KV5fW6oo" className="btn btn-primary text-uppercase">Select</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Standard Tier */}
                        <div className="col-lg-4">
                            <div className="card mb-5 mb-lg-0">
                                <div className="card-body">
                                    <p className="plan-tagline">Popular</p>
                                    <h5 className="card-title text-muted text-uppercase text-center">Standard</h5>
                                    <h6 className="card-price text-center">$129<span class="period">USD</span></h6>
                                    <hr />
                                    <ul className="fa-ul">
                                        <li><span className="fa-li"><i className="fas fa-check"></i></span>Strategically Written Keyword Optimized Resume</li>
                                        <li><span className="fa-li"><i className="fas fa-check"></i></span>Competent Formatting For Minimizing Automatic Rejections</li>
                                        <li><span className="fa-li"><i className="fas fa-check"></i></span>Eye Catching Language For Better Interview Chances</li>
                                        <li><span className="fa-li"><i className="fas fa-check"></i></span>Three Revisions Included For Your Satisfaction</li>
                                        <li><span className="fa-li"><i className="fas fa-check"></i></span>Mordern Style Customisable Cover Letter For More Interviews</li>
                                        <li className="text-muted"><span className="fa-li"><i className="fas fa-times"></i></span>Get Jaw Dropping LinkedIn Profile and Standout in a Crowd</li>
                                        <li className="text-muted"><span className="fa-li"><i className="fas fa-times"></i></span>ATS Optimized Content</li>

                                    </ul>
                                    <div className="d-grid">
                                        <a target="_blank" rel="noopener noreferrer" href="https://buy.stripe.com/5kA3fIaC440O8ZW6ot" className="btn btn-primary text-uppercase">Select</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Premium Tier */}
                        <div className="col-lg-4">
                            <div className="card">
                                <div className="card-body">
                                    <h5 className="card-title text-muted text-uppercase text-center">Premium</h5>
                                    <h6 className="card-price text-center">$199<span className="period">USD</span></h6>
                                    <hr />
                                    <ul className="fa-ul">
                                        <li><span className="fa-li"><i className="fas fa-check"></i></span>Strategically Written Keyword Optimized Resume</li>
                                        <li><span className="fa-li"><i className="fas fa-check"></i></span>Competent Formatting For Minimizing Automatic Rejections</li>
                                        <li><span className="fa-li"><i className="fas fa-check"></i></span>Eye Catching Language For Better Interview Chances</li>
                                        <li><span className="fa-li"><i className="fas fa-check"></i></span>Three Revisions Included For Your Satisfaction</li>
                                        <li><span className="fa-li"><i className="fas fa-check"></i></span>Mordern Style Customisable Cover Letter For More Interviews</li>
                                        <li><span className="fa-li"><i className="fas fa-check"></i></span><strong>Get Jaw Dropping LinkedIn Profile and Standout in a Crowd</strong></li>
                                        <li><span className="fa-li"><i className="fas fa-check"></i></span><strong>ATS Optimized Content</strong></li>
                                    </ul>
                                    <div className="d-grid">
                                        <a target="_blank" rel="noopener noreferrer" href="https://buy.stripe.com/aEU6rUdOg7d07VSdQT" className="btn btn-primary text-uppercase">Select</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="stripe-container">
                    <img className="stripe-img" src={Stripe} alt="stripecheckout" />
                </div>
                <div className="faq-container">
                    <div className="faq">

                        {/* Section: FAQ */}
                        <section>
                            <h1 className="text-center mb-4 pb-2 text-primary fw-bold">FAQ's</h1>
                            <p class="text-center mb-5 fw-bold">
                                Find the answers for the most frequently asked questions below
                            </p>

                            <div className="row">
                                {faqcards}
                            </div>
                        </section>
                        {/* Section: FAQ */}

                    </div>
                </div>
                <div className="bottom-div">
                    <Link className="bottom-btn" to="pricing-top" smooth={true} offset={0} duration={700}>
                        Pick a Plan
                    </Link>
                </div>
                <Link className="anchor_btn" id="anchor-btn-extra-margin" to="navbar_top" smooth={true} offset={0} duration={700}>^</Link>
            </section>
        </>
    )
}

export default Pricing