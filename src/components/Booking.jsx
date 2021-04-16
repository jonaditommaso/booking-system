import React, {useEffect, useState} from 'react';
import Button from 'react-bootstrap/Button';
import OwnDropdown from './OwnDropdown';
import NavBar from './Navbar';
import Calendar from './Calendar'
import '../styles/booking.css';
import history from '../history';
import SingleDropdown from './SingleDropdown';
import Swal from 'sweetalert2';
import axios from 'axios';

const HOURS = [
    '9:00', '9:30', '10:00', '10:30', '11:00', '11:30', '12:00', '12:30', '13:00', '13:30',
    '14:00', '14:30', '15:00', '15:30', '16:00', '17:30', '18:00'
];

const Booking = () => {

    const [selectedStartHour, setSelectedStartHour] = useState(HOURS[0]);
    const [selectedEndHour, setSelectedEndHour] = useState(HOURS[HOURS.length - 1]);
    const [selectedDays, setSelectedDays] = useState([]);

    useEffect(() => {
         const getGrades = async () => {
            const response = await axios.get('https://static.healthforcego.com/grades.json');
             console.log('grades', response);
         }
         getGrades();
    }, []);


    const goConfirm = () => {
        if (selectedDays.length === 0) {
            Swal.fire({
                icon: 'error',
                text: 'You must choose a date',
                showConfirmButton: true,
                confirmButtonText: "Ok",
                confirmButtonColor: '#2754d5',
                backdrop: true
            })
                .then((result) => {
                    if (result.value) {
                        history.replace('/');
                    }
                }); 
        }
        else {
            history.push('/confirm', {selectedStartHour, selectedEndHour, selectedDays});
        }    
    }

    return ( 
        <div>
            <NavBar>
                <div className="icon">
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-list" viewBox="0 0 16 16">
                            <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
                        </svg>
                    </div>   
                </div>
                <h5>Make a Booking</h5>
                
            </NavBar>
            <h3>Book from Scratch</h3>
            
            <div className="hours">
                <OwnDropdown />
                
                <div className="hours__inline">
                    <SingleDropdown setHour={setSelectedStartHour} hours={HOURS} />
                    
                    <svg xmlns="http://www.w3.org/2000/svg" width="50" height="30" fill="currentColor"  viewBox="0 0 16 16">
                        <path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
                    </svg>

                    <SingleDropdown setHour={setSelectedEndHour} hours={HOURS} />
                </div>
            </div>

            <div className="checkbox">
                <input type="checkbox"></input>
                <label><h6>Been Before</h6></label>
            </div>

            <Calendar 
                setSelectedDays={setSelectedDays}
            />
            
            <div className="boton">
                <Button variant="primary" size="lg" block onClick={()=> goConfirm()} >
                    CREATE BOOKINGS
                </Button> 
            </div>
        </div>
    );
}
 
export default Booking;