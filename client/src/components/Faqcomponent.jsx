import React from 'react'
import { FaPaperPlane } from "react-icons/fa";

function Faqcomponent(props) {
    return (
        <div class="col-md-6 col-lg-4 mb-4">
            <h6 class="mb-3 text-primary fw-bold">
                <FaPaperPlane /> {props.item.question}
            </h6>
            <p>
                {props.item.answer}
            </p>
        </div>
    )
}

export default Faqcomponent