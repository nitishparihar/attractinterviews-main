import React from "react";
import { Helmet} from 'react-helmet'

function Contact() {
    return (
        <>
        <Helmet>
                <title>Contact Us | Attract Interviews</title>
                <meta
                    name="description"
                    content="Have questions? Contact us by sending email at contact@attractinterviews.com." />
            </Helmet>
            <div className="contactcontainer">
                <h1 className="contacttheading">How To Get In Touch With Us</h1>
                <div className="contact_cards">
                    <p className="contact_content">
                        For general enquiries, billing support, issues with failed payments, refunds requests,
                        payment options, etc... please reach out to <a href="mailto:contact@attractinterviews.com">
                        contact@attractinterviews.com</a> Our office hours are Monday-Friday 9am-5pm.
                        We respond to customers first, so please allow 24-72 hours for a response.
                    </p>
                </div>
            </div>
        </>
    )
}

export default Contact