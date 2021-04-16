import React, { useEffect, useState} from 'react';
import '../styles/availables.css';
import jsonplaceholder from '../utils/jsonplaceholder';
import history from '../history';
import AvailableItem from './AvailableItem';

const Availables = ({getConfirmation}) => {

    const RANGE = `${history.location.state.selectedStartHour} - ${history.location.state.selectedEndHour}`;

    const [user, setUser] = useState('');
    const [userSelected, setUserSelected] = useState('');
    const [daySelected, setDaySelected] = useState('');
    const [userPosition, setUserPosition] = useState('');

    useEffect(() => {
        const getName = async () => {
            const response = await jsonplaceholder.get('/users');
            const {data} = response;
            setUser(data);
        }

        getName();
    }, []);

    const updateSelectedUser = (user, day, userPosition) => {
        setUserSelected(user);
        setDaySelected(day);
        setUserPosition(userPosition);
    }
    
    getConfirmation(`${userSelected} on ${daySelected} in the ${RANGE}`)
    
    return ( 
        <div className="availables">
            <h5>{RANGE}</h5>
            <hr/>
            {history && history.location.state.selectedDays.map((day, i) => (
                <AvailableItem 
                    key={i} 
                    user={user[i]} 
                    position={i} 
                    day={day} 
                    getUser={(user)=> setUserSelected(user)}
                    getDay={(day)=> setDaySelected(day)}
                    updateSelectedUser={(user, day, userPosition)=> updateSelectedUser(user, day, userPosition)}
                    clicked={userPosition === i}
                />
            ))}
        </div>
    );
}
 
export default Availables;