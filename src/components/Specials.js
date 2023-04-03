import React from 'react';

function Specials(props) {
    return (
        <>
            <div className="service col-lg-4">
                <div className="single-service">
                    <div className="thumb">
                        <img src={props.imageName} alt="" />
                    </div>
                    <h4>{props.heading}</h4>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Veniam magnam eos dolor maiores? Rerum.
                    </p>
                </div>
            </div>
        </>
    )
}

export default Specials
