import React from 'react';
import "./style.css";

import { GrCar } from 'react-icons/gr'
import { Link } from 'react-router-dom';
import Bruschetta from "./images/bruschetta.jpg";
import Salad from "./images/salad.jpeg";
import lemon from "./images/Lemon.jpg";
import Spaghetti from "./images/Spaghetti.jpg";
import pizza from "./images/Pizza.png";


function Main() {

    return (
        <>
            <main>
                <section className="section1">
                    <div className="container Mainpara">
                        <div className="justify-content-center">
                            <h1>Little Star</h1>
                            <h3>Mirpurkhas</h3>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officia, error. Voluptatem, at? Iste
                                nisi beatae officiLinkquae, ducimus nam  <br /> fugLinkvitae autem illo adipiscisapiente minimLinknatus
                                laudantium voluptas facere accusamus eligendi magni hic?</p>

                            <button type="button" className="btn ">Reserve a table</button>

                        </div>
                    </div>
                </section>
                <div className="container my-4">
                    <div className="underlines"></div>
                    <div className="row featurette d-flex justify-content-center align-items-center team-goals">
                        <div className="col-md-7 order-md-2">
                            <h2 className="featurette-heading fw-normal lh-1">About Our Story</h2>
                            <p className="lead">Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                            Ipsam delectus voluptate quod consectetur ipsum dignissimos possimus maiores
                             quae adipisci sunt perferendis id quam et blanditiis, totam ut laudantium.
                              Est dicta officiis quas necessitatibus voluptates minus numquam explicabo
                               mollitia eos veritatis. Fuga nisi saepe fugiat a vitae adipisci, alias
                                quaerat eaque!
                            </p>
                        </div>
                        <div className="col-md-5">
                            <img className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" width="600"
                                height="600" src={pizza} alt="" />

                        </div>
                    </div>
                </div>

                <section>
                    <div className="container">
                        <div>
                            <h1 className="heading">This Week Specials!</h1>
                        </div>
                    </div>
                </section>
            </main >
            <div className="container my-4">
                <div className="row mb-2">
                    <div className="col-md-6">
                        <div className="Card row g-0 rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                            <div className="col-auto d-none d-lg-block">
                                <img className="bd-placeholder-img" width="240" height="260" src={Salad} alt="" />
                            </div>
                            <div className="col p-4 d-flex flex-column position-static">
                                <h2 className="mb-0">Greek Salad</h2>
                                <div className="mb-1 text-muted">$12.99</div>
                                <p className="card-text mb-auto">Greek salad is a popular salad in Greek cuisine generally made with pieces of tomatoes,
                                    cucumbers, onion, feta cheese, Greek oregano.</p>
                                <div>
                                    <Link to='/' className='stretched-link'> <GrCar className='Carlogo' />  Order for delivery</Link>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className="col-md-6">
                        <div
                            className=" Card row g-0 rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                            <div className="col-auto d-none d-lg-block">
                                <img className="bd-placeholder-img" width="240" height="260" src={Bruschetta} alt="" />

                            </div>
                            <div className="col p-4 d-flex flex-column position-static">
                                <h2 className="mb-0">Bruchetta</h2>
                                <div className="mb-1 text-muted">$5.99</div>
                                <p className="mb-auto">Bruschetta is an antipasto from Italy consisting of grilled bread rubbed with garlic and topped
                                    with olive oil and salt.</p>
                                <div>
                                    <Link to='/' className='stretched-link'> <GrCar className='Carlogo' />  Order for delivery</Link>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
            <div className="container my-4">
                <div className="row mb-2">
                    <div className="col-md-6">
                        <div
                            className="Card row g-0 rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                            <div className="col-auto d-none d-lg-block">
                                <img className="bd-placeholder-img" width="240" height="260" src={lemon} alt="" />

                            </div>
                            <div className="col p-4 d-flex flex-column position-static">
                                <h2 className="mb-0">Lemon Dessert</h2>
                                <div className="mb-1 text-muted">$5.00</div>
                                <p className="card-text mb-auto">Dessert is a course that concludes a meal. The course consists of sweet foods, such as confections, and possibly a beverage such as liqueur.</p>
                                <div>
                                    <Link to='/' className='stretched-link'> <GrCar className='Carlogo' />  Order for delivery</Link>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className="col-md-6">
                        <div
                            className="Card row g-0 rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                            <div className="col-auto d-none d-lg-block">
                                <img className="bd-placeholder-img" width="240" height="260" src={Spaghetti} alt="" />

                            </div>
                            <div className="col p-4 d-flex flex-column position-static">
                                <h2 className="mb-0">Spaghetti</h2>
                                <div className="mb-1 text-muted">$6.80</div>
                                <p className="mb-auto">Spaghetti is a long, thin, solid, cylindrical pasta. It is a staple food of traditional Italian cuisine.</p>
                                <div>
                                    <Link to='/' className='stretched-link'> <GrCar className='Carlogo' />  Order for delivery</Link>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
            {/* <div className="flex items-center gap-8">
                <Card title='Greek Salad' price='$12.99' image={Menu} />
                <Card title='Bruchetta' price='$5.99' image={Book} />
                <Card title='Lemon Dessert' price='$5.00' image={Hour} />
            </div>
             */}

        </>
    )
}

export default Main
