import React from "react";
import {NavLink} from "react-router-dom"
import logo from './images/Verticallogo.png';

const Navbar = () => {
    return (
        <>
            <div className="container-fluid nav_bg" id="navbar_top">
                <div className="row">
                    <div className="col-10 mx-auto p-0">
                        <nav className="navbar navbar-expand-lg">
                            <div className="container-fluid" id="navbar-mobile-flex">
                                <NavLink className="navbar-brand" to="/">
                                    <img alt="Attract Interviews" className="logo" src={logo} />
                                </NavLink>
                                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" 
                                    data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" 
                                    aria-expanded="false" aria-label="Toggle navigation">
                                    <span className="navbar-toggler-icon"></span>
                                </button>
                                <div className="collapse navbar-collapse navbar_mobile" id="navbarSupportedContent">
                                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                                        {/* <li className="nav-item pe-3">
                                            <NavLink className="nav-link active" 
                                            aria-current="page" to="/">Home
                                            </NavLink>
                                        </li> */}
                                        <li className="nav-item">
                                            <NavLink className="nav-link" 
                                            to="/samples">Samples
                                            </NavLink>
                                        </li>
                                        <li className="nav-item">
                                            <NavLink className="nav-link" 
                                            to="/pricing">Pricing
                                            </NavLink>
                                        </li>
                                        <li className="nav-item">
                                            <NavLink className="nav-link" 
                                            to="/clientsresults">Client's Results
                                            </NavLink>
                                        </li>
                                        <li className="nav-item">
                                            <NavLink className="nav-link" 
                                            to="/testimonials">Testimonials
                                            </NavLink>
                                        </li>

                                    </ul>
                                </div>
                            </div>
                        </nav>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar