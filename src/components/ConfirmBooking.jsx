import React, { useState } from 'react';
import Navbar from './Navbar';
import Button from 'react-bootstrap/Button';
import '../styles/confirm.css';
import Availables from './Availables';
import history from '../history';

const ConfirmBooking = () => {

    const [bookingConfirmed, setBookingConfirmed] = useState('');
    const [bookingWith, setBookingWith] = useState('');

    const goBack = () => {
        history.push('/');
    }

    return ( 
        <div className="confirm">
            <Navbar>
                <div className="icon">
                    <div>
                        <svg 
                            onClick={()=> goBack()}
                            xmlns="http://www.w3.org/2000/svg" 
                            width="25" 
                            height="25" 
                            fill="currentColor" 
                            className="bi bi-chevron-left" 
                            viewBox="0 0 16 16" 
                        >
                            <path fillRule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"/>
                        </svg>
                    </div> 
                </div>
                 
                <h5>Accept Bookings</h5>
            </Navbar>

            <h3>Bookings to be Confirmed</h3>

            <Availables getConfirmation={setBookingConfirmed} />

            <div className="boton">
                <Button variant="primary" size="lg" onClick={() => setBookingWith(`You have a booking with ${bookingConfirmed}`)}>
                CONFIRM BOOKINGS
                </Button>
            </div>

            <div className="booking">
                <h6>{bookingWith}</h6>
            </div>
            
        </div>
    );
}
 
export default ConfirmBooking;