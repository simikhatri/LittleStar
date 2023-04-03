import React from 'react';
import "./css/About.css";
import about1 from "./images/About.jpg";
import cutlet from "./images/cutlet.jpg";
import sandwich from "./images/sandwich.jpg";
import VSpaghetti from "./images/VSpaghetti.jpg";
import Testimonial from './Testimonial';
import { Link } from 'react-router-dom';
import Specials from './Specials';






function About() {
    return (
        <>
            <section className="section">
                <div className="container aboutback">
                    <div className="justify-content-center">
                        <h1> About Us</h1>
                    </div>
                </div>
            </section>
            <div className="container my-4">
                <div className="row featurette d-flex justify-content-center align-items-center team-goals">
                    <div className="about-content col-md-5">
                        <img className="About1 bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" width="600"
                            height="600" src={about1} alt="" />

                    </div>
                    <div className="col-md-7 order-md-2">
                        <h1 className="about-Heading featurette-heading fw-normal lh-1">About Our Story</h1>
                        <p className="lead">Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Ipsam delectus voluptate quod consectetur ipsum dignissimos possimus maiores
                            quae adipisci sunt perferendis id quam et blanditiis, totam ut laudantium.
                            Est dicta officiis quas necessitatibus voluptates minus numquam explicabo
                            mollitia eos veritatis. Fuga nisi saepe fugiat a vitae adipisci, alias
                            quaerat eaque!
                        </p>
                        <Link to="/Menu" ><button type="button" className="aboutbtn btn btn-dark">See Our Menu</button></Link>

                    </div>

                </div>
            </div>
            <div className="container">

                <div className="row d-flex justify-content-center">
                    <div className="menu-content pb-70 col-lg-8">
                        <div className="title text-center">
                            <h1 className="about-H heading mb-10">What Kind of Services we Offer</h1>
                            <p className='about-para'>Who are in extremely love with eco friendly system.</p>
                        </div>
                    </div>
                    <div className="services row">
                     <Specials imageName={sandwich} heading= "Cheese Sandwich" ></Specials>
                     <Specials imageName={cutlet} heading= "Beef Cutlet" ></Specials>
                     <Specials imageName={VSpaghetti} heading= "Veggie Spaghetti" ></Specials>
                    </div></div>
            </div>

           <Testimonial></Testimonial>
        </>
    )
}

export default About
