import React from "react";

function Samplescomponent(props) {
    return (
        <>
            <div className="col-md-6 col-lg-10 mx-auto mb-4 sampleresume_card_container" id="samples-img-tablet">
                <img className="samples_img" src={props.item.image} alt="resumesamples"/>
                <img className="samples_img" src={props.item.image1} alt="resumesamples"/>
            </div>
        </>
    )
}

export default Samplescomponent