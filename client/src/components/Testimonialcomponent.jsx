import React from "react";

function Testimonialcomponent(props) {
    return (
            <div className="col-lg-10 mx-auto mb-4">
                <p className="testimonial-comment">
                    {props.item.comment}
                </p>
                <h6 className="testimonial-author">
                    {props.item.author}
                </h6>
                <hr />
            </div>
    )
}

export default Testimonialcomponent