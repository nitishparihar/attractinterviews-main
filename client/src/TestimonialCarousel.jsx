import React, { useState } from "react";
import CarouselData from "./data/carouseldata";
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa'

function TestimonialCarousel() {
    const [current, setCurrent] = useState(0)
    const length = CarouselData.length

    function nextSlide() {
        setCurrent(current === length - 1 ? 0 : current + 1)
    }

    function prevSlide() {
        setCurrent(current === 0 ? length - 1 : current - 1)
    }

    return (
        <section className="slider">
            <FaArrowAltCircleLeft className="left-arrow" onClick={prevSlide} />
            <FaArrowAltCircleRight className="right-arrow" onClick={nextSlide} />
            {CarouselData.map(function (item, index) {
                return (
                    <div className={index === current ? 'slide active' : 'slide'} key={index}>
                        {index === current && (
                            <>
                                <p>{item.comment}</p>
                                <h5>{item.author}</h5>
                            </>
                        )}
                    </div>
                )

            })}
        </section>
    )

}

export default TestimonialCarousel