import React from "react";
import testimonialdata from "./data/testimonialdata.js";
import Testimonialcomponent from "./components/Testimonialcomponent";
import { Link } from "react-scroll";
import { NavLink } from 'react-router-dom'
import { Helmet } from "react-helmet";

const Testimonials = (props) => {
    const testimonialcards = testimonialdata.map(function (item) {
        return (
            <Testimonialcomponent
                key={item.id}
                item={item}
            />
        )
    })
    return (
        <>
            <Helmet>
                <title>Testimonials | Attract Interviews</title>
                <meta
                    name="description"
                    content="See our client's want to say about our service and how satisfy they are in our testimonials." />
            </Helmet>
            <div className="testimonial-container">
                <h1 className="testimonial-heading">Testimonials</h1>
                <div className="testimonial-cards">
                    {testimonialcards}
                </div>
                <div className="bottom-div">
                    <NavLink to="/pricing" className="bottom-btn">Convinced, I Need a Resume Now</NavLink>
                </div>
                <Link className="anchor_btn" id="anchor-btn-extra-margin" to="navbar_top" smooth={true} offset={0} duration={700}>^</Link>
            </div>
        </>
    )
}

export default Testimonials
