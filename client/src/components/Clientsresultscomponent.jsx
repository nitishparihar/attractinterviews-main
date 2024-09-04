import React from "react";

function Clientsresultscomponent(props) {
    return (
        <>
            <div className="col-md-6 col-lg-10 mx-auto mb-4" id="clientresult-img-tablet">
                <img className="clientresult_img" src={props.item.image} alt="clientsresults"/>
            </div>
            <hr className="clientresult_hr" />
        </>
    )
}

export default Clientsresultscomponent