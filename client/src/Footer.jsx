import React from "react";
import { NavLink } from "react-router-dom"
import logo from './images/Verticallogo.png'
import PaymentIcons from './images/payment-icons.png'
import { BsFacebook } from "react-icons/bs"
import { BsInstagram } from "react-icons/bs"
import { BsLinkedin } from "react-icons/bs"

function Footer() {
    return (
        <footer className="text-center text-lg-start bg-light text-muted">
            {/* Section: Social media */}
            <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
                {/* Left */}
                <div className="me-5 d-none d-lg-block">
                    <span>Get connected with us on social networks:</span>
                </div>
                {/* Left */}

                {/* Right */}
                <div>
                    <a href="https://www.facebook.com/attractinterviews"
                        className="mx-4 px-1 text-reset footer_icon" rel="noreferrer" target="_blank">
                        <BsFacebook />
                    </a>
                    <a href="https://www.instagram.com/attractinterviews"
                        className="mx-4 px-1 text-reset footer_icon" rel="noreferrer" target="_blank">
                        <BsInstagram />
                    </a>
                    <a href="https://www.linkedin.com/company/attractinterviews"
                        className="mx-4 px-1 text-reset footer_icon" rel="noreferrer" target="_blank">
                        <BsLinkedin />
                    </a>
                </div>
                {/* Right */}
            </section>
            {/* Section: Social media */}

            {/* Section: Links  */}
            <section className="">
                <div className="container text-center text-md-center mt-5">
                    {/* Grid row */}
                    <div className="row mt-3">
                        {/* Grid column */}
                        <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                            {/* Content */}
                            <NavLink to="/" className="navbar-brand">
                                <img className="footer_logo" src={logo} alt="attractinterviews" />
                            </NavLink>



                            <p className="pt-2">
                                Helping people get desired job by ATS approved profession resume.
                            </p>
                        </div>
                        {/* Grid column */}

                        {/* Grid column */}
                        <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                            {/* Links */}
                            <h6 className="text-uppercase fw-bold mb-4">
                                Products
                            </h6>
                            <p>
                                <NavLink to="/pricing" className="footer_links" rel="noreferrer" target="_blank">
                                    Professional Resume
                                </NavLink>
                            </p>
                            <p>
                                <NavLink to="/pricing" className="footer_links" rel="noreferrer" target="_blank">
                                    Cover Letter
                                </NavLink>
                            </p>
                            <p>
                                <NavLink to="/pricing" className="footer_links" rel="noreferrer" target="_blank">
                                    LinkedIn Profile Makeover
                                </NavLink>
                            </p>

                        </div>
                        {/* Grid column */}

                        {/* Grid column */}
                        <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                            {/* Links */}
                            <h6 className="text-uppercase fw-bold mb-4">
                                Links
                            </h6>
                            <p>
                                <NavLink to="/clientsresults" className="footer_links">Client's Interview Email</NavLink>
                            </p>
                            <p>
                                <NavLink to="/samples" className="footer_links">Resume Samples</NavLink>
                            </p>
                            <p>
                                <NavLink to="/testimonials" className="footer_links">Customer Success Stories</NavLink>
                            </p>
                        </div>
                        {/* Grid column */}

                        {/* Grid column */}
                        <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                            {/* Links */}
                            <h6 className="text-uppercase fw-bold mb-4">Company</h6>
                            <p>
                                <NavLink to="/contact" className="footer_links">Contact Us</NavLink>
                            </p>
                            <p>
                                <NavLink to="/privacypolicy" className="footer_links">Privacy Policy</NavLink>
                            </p>
                            <p>
                                <NavLink to="/serviceterms" className="footer_links">Terms of Service</NavLink>
                            </p>
                        </div>
                        {/* Grid column */}
                    </div>
                    {/* Grid row */}
                </div>
            </section>
            {/* Section: Links */}

            {/* Copyright */}
            <div className="text-center p-4" style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}>
                © 2024 Attract Interviews
                <br />
                <img className="payment-icon" src={PaymentIcons} alt="paymenticons" />
            </div>
            {/* Copyright */}
        </footer>
    )
}

export default Footer