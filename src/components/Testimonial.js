import React from 'react';
import testimonial from "./images/testimonial.jpg"
// import phot1 from "./images/phot1.jpg";
import phot2 from "./images/phot2.jpg";
import phot4 from "./images/phot4.jpg";
import phot3 from "./images/phot3.jpg";
import { AiFillStar } from "react-icons/ai";
import { AiOutlineStar } from "react-icons/ai";

function Testimonial() {
  return (
    <>
      <div id="carouselExampleCaptions" className="Testimonial carousel slide" data-bs-ride="false">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src={testimonial} className="d-block w-100" alt="..." />
                        <div className="test1 carousel-caption d-md-block">
                            <img src={phot4} alt="" />
                            <div className='Star'>
                            <AiFillStar className='starIcon'></AiFillStar>
                            <AiFillStar className='starIcon'></AiFillStar>
                            <AiFillStar className='starIcon'></AiFillStar>
                            <AiFillStar className='starIcon'></AiFillStar>
                            <AiOutlineStar className='starIcon'></AiOutlineStar>
                            </div>
                          <h3 className='testi-heading'>Sheryl Sandberg</h3>
                            <p className='testi-para'>Lorem ipsum dolor sit amet consectetur adipisicing elit.  <br />
                            Exercitationem reiciendis ipsa ad obcaecati, optio corrupti quidem <br /> sint magni est 
                            voluptatibus enim animi, praesentium consectetur iste.</p>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src={testimonial} className="d-block w-100" alt="..." />
                        <div className="test1 carousel-caption d-md-block">
                            <img src={phot3} alt="" />
                            <div className='Star'>
                            <AiFillStar className='starIcon'></AiFillStar>
                            <AiFillStar className='starIcon'></AiFillStar>
                            <AiFillStar className='starIcon'></AiFillStar>
                            <AiFillStar className='starIcon'></AiFillStar>
                            <AiOutlineStar className='starIcon'></AiOutlineStar>
                            </div>
                            <h3 className='testi-heading'>	Mark Zuckerberg</h3>
                            <p className='testi-para'>Lorem ipsum dolor sit amet consectetur adipisicing elit. <br /> 
                            Exercitationem reiciendis ipsa ad obcaecati, optio corrupti quidem <br /> sint magni est 
                            voluptatibus enim animi, praesentium consectetur iste.</p>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src={testimonial} className="d-block w-100" alt="..." />
                        <div className="test1 carousel-caption d-md-block">
                            <img src={phot2} alt="" />
                            <div className='Star'>
                            <AiFillStar className='starIcon'></AiFillStar>
                            <AiFillStar className='starIcon'></AiFillStar>
                            <AiFillStar className='starIcon'></AiFillStar>
                            <AiFillStar className='starIcon'></AiFillStar>
                            <AiOutlineStar className='starIcon'></AiOutlineStar>
                            </div>
                            <h3 className='testi-heading'>Bernard Arnault</h3>
                            <p className='testi-para'>Lorem ipsum dolor sit amet consectetur adipisicing elit. <br /> 
                            Exercitationem reiciendis ipsa ad obcaecati, optio corrupti quidem <br />  sint magni est 
                            voluptatibus enim animi, praesentium consectetur iste.</p>
                        </div>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
    </>
  )
}

export default Testimonial
