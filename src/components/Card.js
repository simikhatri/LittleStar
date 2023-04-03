import React from 'react';
import { Link } from 'react-router-dom';
import { GrCar } from 'react-icons/gr';

function card(props) {
    return (
        // <div className='rounded-t-xl overflow-hidden max-w-sm'>
        //         <img src={props.image} alt="Food" className='w-80 h-40 object-cover brightness-90' />
        //         <div className='bg-[#EDEFEE] p-4'>
        //             <div className='flex justify-between'>
        //                 <h1 className='font-bold text-xl'>{props.title}</h1>
        //                 <h3 className='font-medium text-base text-[#EE9972]'>{props.price}</h3>
        //             </div>
        //             <p className='my-6 text-base'>
        //                 The famous greek salad of crispy lettuce, peppers, olives, and our Chicago
        //                 style feta cheese, garnished with crunchy garlic and rosemary croutons.
        //             </p>
        //             <div className='flex items-center'>
        //                 <Link to='/' className='font-semibold text-sm'>Order for delivery</Link>
        //                 <GrCar className='text-sm ml-2' />
        //             </div>
        //         </div>
        //     </div>
        <>
            <div className="container my-4">
                <div className="row mb-2">
                    <div className="col-md-6">
                        <div
                            className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                            <div className="col p-4 d-flex flex-column position-static">
                                <h3 className="mb-0">Global Conferences</h3>
                                <div className="mb-1 text-muted">Nov 12</div>
                                <p className="card-text mb-auto">This is a wider card with supporting text below as a natural
                                    lead-in to additional content.</p>
                                <a href="#" className="stretched-link">Continue reading</a>
                            </div>
                            <div className="col-auto d-none d-lg-block">
                                <img className="bd-placeholder-img" width="200" height="250" src="thumb3.jpg" alt="" />

                            </div>
                        </div>
                    </div>
                    {/* <div className="col-md-6">
                        <div
                            className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                            <div className="col p-4 d-flex flex-column position-static">
                                <h3 className="mb-0">learn Designing</h3>
                                <div className="mb-1 text-muted">Nov 11</div>
                                <p className="mb-auto">This is a wider card with supporting text below as a natural lead-in to
                                    additional content.</p>
                                <a href="#" className="stretched-link">Continue reading</a>
                            </div>
                            <div className="col-auto d-none d-lg-block">
                                <img className="bd-placeholder-img" width="200" height="250" src="thumb4.jpg" alt="" />

                            </div>
                        </div>
                    </div> */}
                </div>
            </div>
            {/* <div className="container my-4">
                <div className="row mb-2">
                    <div className="col-md-6">
                        <div
                            className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                            <div className="col p-4 d-flex flex-column position-static">

                                <h3 className="mb-0">Bootstrap templates</h3>
                                <div className="mb-1 text-muted">Nov 12</div>
                                <p className="card-text mb-auto">This is a wider card with supporting text below as a natural
                                    lead-in to additional content.</p>
                                <a href="#" className="stretched-link">Continue reading</a>
                            </div>
                            <div className="col-auto d-none d-lg-block">
                                <img className="bd-placeholder-img" width="200" height="250" src="thumb5.jpg" alt="" />

                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div
                            className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                            <div className="col p-4 d-flex flex-column position-static">
                                <h3 className="mb-0">learn Python</h3>
                                <div className="mb-1 text-muted">Nov 11</div>
                                <p className="mb-auto">This is a wider card with supporting text below as a natural lead-in to
                                    additional content.</p>
                                <a href="#" className="stretched-link">Continue reading</a>
                            </div>
                            <div className="col-auto d-none d-lg-block">
                                <img className="bd-placeholder-img" width="200" height="250" src="thumb6.jpg" alt="" />

                            </div>
                        </div>
                    </div>
                </div>
            </div> */}
        </>
    )
}

export default card
