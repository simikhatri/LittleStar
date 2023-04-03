import React from 'react';
import "./bookingstyle.css";
import { Formik, Form } from 'formik';

function BookingForm() {
   return (
      <>
         <section className="Back-Booking">
            <div className="container">
               <div className='Booking-content '>
                  <h1 className='Booking-Heading'>Reservations</h1>
                  <Formik>
                     <Form>
                        
                     </Form>
                  </Formik>
               </div>
            </div>
         </section>
         {/* <div className="container">
            <div className="reservation">
               <form className="Booking">
                  <h1 className="Booktable">Table Reservation</h1>
                  <div className="item-input">
                  <label htmlFor="res-date">Choose date</label>
                  <input type="date" id="res-date" /></div>
                  <div className="item-input">
                  <label htmlFor="res-time">Choose time</label>
                  <select id="res-time ">
                     <option>17:00</option>
                     <option>18:00</option>
                     <option>19:00</option>
                     <option>20:00</option>
                     <option>21:00</option>
                     <option>22:00</option>
                  </select>
                  </div>
                  <div className="item-input">
                  <label htmlFor="guests">Number of guests</label>
                  <input type="number" placeholder="1" min="1" max="10" id="guests" />
                  </div>
                  <div className="item-input">
                  <label htmlFor="occasion">Occasion</label>
                  <select id="occasion">
                     <option>Birthday</option>
                     <option>Anniversary</option>
                  </select>
                  </div>
                  <div className="item-input">
                  <input type="submit" value="Make Your reservation" />
                  </div>
               </form>
            </div>
         </div> */}
      </>
   )
}

export default BookingForm
