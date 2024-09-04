import React from "react";
import Clientsresultscomponent from './components/Clientsresultscomponent'
import clientsresultsdata from "./data/clientsresultsdata.js";
import { Link } from 'react-scroll'
import { NavLink } from 'react-router-dom'
import { Helmet } from "react-helmet";

const Clientsresults = () => {
    const clientsresultscards = clientsresultsdata.map(function (item) {
        return (
            <Clientsresultscomponent
                key={item.id}
                item={item}
            />
        )
    })
    return (
        <>
            <Helmet>
                <title>Our Real Client's Results | Attract Interviews</title>
                <meta
                    name="description"
                    content="See our client's actual interview invitation email recieved from HR and recruiters." />
            </Helmet>
            <div className="clientresultcontainer">
                <h1 className="clientresultheading">Our Client's Results</h1>
                <div className="clientresult_cards">
                    {clientsresultscards}
                </div>
                <div className="bottom-div">
                    <NavLink to="/pricing" className="bottom-btn">Cant Wait, I Need Same Results</NavLink>
                </div>
                <Link className="anchor_btn" id="anchor-btn-extra-margin" to="navbar_top" smooth={true} offset={0} duration={700}>^</Link>
            </div>
        </>
    )
}

export default Clientsresults


