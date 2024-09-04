import React from "react";
import Samplescomponent from './components/Samplescomponent'
import samplesdata from "./data/samplesdata.js";
import { Link } from "react-scroll";
import { NavLink } from 'react-router-dom'
import { Helmet } from "react-helmet";

const Samples = () => {
    const samplescards = samplesdata.map(function (item) {
        return (
            <Samplescomponent
                key={item.id}
                item={item}
            />
        )
    })
    return (
        <>
            <Helmet>
                <title>Our Professional Resume Samples | Attract Interviews</title>
                <meta
                    name="description"
                    content="Real resume samples that gave our clients invertiew email." />
            </Helmet>
            <div className="samplescontainer">
                <h1 className="samplesheading">Resume Samples</h1>
                <div className="samplescard">
                    {samplescards}
                </div>
                <div className="bottom-div">
                    <NavLink to="/pricing" className="bottom-btn">I need a Professional Resume</NavLink>

                </div>
                <Link className="anchor_btn" id="anchor-btn-extra-margin" to="navbar_top" smooth={true} offset={0} duration={700}>^</Link>
            </div>
        </>
    )
}

export default Samples