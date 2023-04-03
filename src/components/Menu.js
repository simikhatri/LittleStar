import React from 'react';
import "./css/Menu.css";
import imag1 from "./images/imag1.jpg";
import imag2 from "./images/imag2.jpg";
import imag3 from "./images/imag3.jpg";
import pizz from "./images/pizz.jpg";
import pasta from "./images/Pasta.jpg";
import brusch from "./images/piizza.jpg";
import Specials from './Specials';
import Rolls from "./images/Rolls.jpg";
import Eggplant from "./images/Eggplant.webp";
import FriedEgg from "./images/FriedEgg.jpg";
import delish from "./images/delish.jpg";
import sausagepasta from "./images/sausage-pasta.jpg";
import ChickenPizza from "./images/ChickenPizza.jpg";


function Menu() {
    return (
        <>
            <div id="carouselExampleDark" className="carousel carousel-dark slide" data-bs-ride="carousel">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active" data-bs-interval="10000">
                        <img src={imag1} className="d-block w-100" alt="..." />
                        <div className="carousel-caption d-md-block">
                            <h1>Little Star Menu</h1>
                        </div>
                    </div>
                    <div className="carousel-item" data-bs-interval="2000">
                        <img src={imag2} className="d-block w-100" alt="..." />
                        <div className="carousel-caption d-md-block">
                            <h1>Little Star Menu</h1>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src={imag3} className="d-block w-100" alt="..." />
                        <div className="carousel-caption d-md-block">
                            <h1>Little Star Menu</h1>
                        </div>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>

            <div className="container">
                <div className="section-title">
                    <h1 className='Menu-heading' >Our Menu</h1>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Exercitationem, odio.</p>
                </div>
                <div className="menus">
                    <div className="menus-column">
                        <div className="single-menu">
                            <img src={pizz} alt="" />
                            <div className="menu-content">
                                <h5>Food title <span>$50</span></h5>
                                <p>Lorem ipsum dolor sit amet.</p>
                            </div>
                        </div>
                        <div className="single-menu">
                            <img src={pizz} alt="" />
                            <div className="menu-content">
                                <h5>Food title <span>$50</span></h5>
                                <p>Lorem ipsum dolor sit amet.</p>
                            </div>
                        </div>
                        <div className="single-menu">
                            <img src={pizz} alt="" />
                            <div className="menu-content">
                                <h5>Food title <span>$50</span></h5>
                                <p>Lorem ipsum dolor sit amet.</p>
                            </div>
                        </div>
                    </div>
                    <div className="menus-column">
                        <div className="single-menu">
                            <img src={brusch} alt="" />
                            <div className="menu-content">
                                <h5>Food title <span>$50</span></h5>
                                <p>Lorem ipsum dolor sit amet.</p>
                            </div>
                        </div>
                        <div className="single-menu">
                            <img src={brusch} alt="" />
                            <div className="menu-content">
                                <h5>Food title <span>$50</span></h5>
                                <p>Lorem ipsum dolor sit amet.</p>
                            </div>
                        </div>
                        <div className="single-menu">
                            <img src={brusch} alt="" />
                            <div className="menu-content">
                                <h5>Food title <span>$50</span></h5>
                                <p>Lorem ipsum dolor sit amet.</p>
                            </div>
                        </div>
                    </div>
                    <div className="menus-column">
                        <div className="single-menu">
                            <img src={pasta} alt="" />
                            <div className="menu-content">
                                <h5>Food title <span>$50</span></h5>
                                <p>Lorem ipsum dolor sit amet.</p>
                            </div>
                        </div>
                        <div className="single-menu">
                            <img src={pasta} alt="" />
                            <div className="menu-content">
                                <h5>Food title <span>$50</span></h5>
                                <p>Lorem ipsum dolor sit amet.</p>
                            </div>
                        </div>
                        <div className="single-menu">
                            <img src={pasta} alt="" />
                            <div className="menu-content">
                                <h5>Food title <span>$50</span></h5>
                                <p>Lorem ipsum dolor sit amet.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">

                <div className="row d-flex justify-content-center">
                    <div className="menu-content pb-70 col-lg-8">
                        <div className="title text-center">
                            <h1 className="about-H heading mb-10">Our Specialties</h1>
                            <p className='about-para'>Who are in extremely love with eco friendly system.</p>
                        </div>
                    </div>
                    <div className="services row">
                     <Specials imageName={Rolls} heading= "Veggie Spring Rolls" ></Specials>
                     <Specials imageName={Eggplant} heading= "Eggplant Parmigiana" ></Specials>
                     <Specials imageName={FriedEgg} heading= "Fried Egg Taco" ></Specials>
                     </div>
                     <div className="services row">
                     <Specials imageName={delish} heading= "Chicken Fried Steak" ></Specials>
                     <Specials imageName={sausagepasta} heading= "Sausage Pasta" ></Specials>
                     <Specials imageName={ChickenPizza} heading= "Chicken Pizza" ></Specials>
                     </div>
                </div>
            </div>

        </>
    )
}

export default Menu
