import React, { useState } from 'react';
import Navbar from './Navbar';
import Button from 'react-bootstrap/Button';
import '../styles/confirm.css';
import Availables from './Availables';
import history from '../history';
import Swal from 'sweetalert2';

const ConfirmBooking = () => {

    const [bookingSelected, setBookingSelected] = useState('');

    const [bookingConfirmed, setBookingConfirmed] = useState('');
    const [bookingWith, setBookingWith] = useState('');

    const goBack = () => {
        history.push('/');
    }

    const handleConfirm = () => {
        if (!bookingSelected) {
            Swal.fire({
                icon: 'error',
                text: 'You must choose an option',
                showConfirmButton: true,
                confirmButtonText: "Ok",
                confirmButtonColor: '#2754d5',
                backdrop: true
            })

        }
        else {
            setBookingWith(`You have a booking with ${bookingConfirmed}`)
        }    
    }

    return ( 
        <div className="confirm">
            <Navbar>
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
                 
                <h5>Accept Bookings</h5>
            </Navbar>

            <h3>Bookings to be Confirmed</h3>

            <Availables getConfirmation={setBookingConfirmed} bookingSelected={setBookingSelected}/>

            <div className="boton">
                <Button variant="primary" size="lg" onClick={() => handleConfirm() }>
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