import React, { useState } from 'react';
import  Dropdown  from 'react-bootstrap/Dropdown';

const SingleDropdown = ({setHour, hours}) => {

    const [selected, setSelected] = useState(hours[0]);

    const handleClick = (hour) => {
        setSelected(hour);
        setHour(hour);
    }

    const renderedHours = hours.map((hour, i) => {

        return (
            <Dropdown.Item key={i}>
                {hour === selected 
                ? null 
                : <div  
                    onClick={() => handleClick(hour)} 
                >
                    {hour}
                </div>
                }
            </Dropdown.Item>    
        );   
    });

    return ( 
        <Dropdown>
            <Dropdown.Toggle 
                variant="white" 
                id="dropdown-basic" 
                size="md">
                {selected}
            </Dropdown.Toggle>

            <Dropdown.Menu>
                {renderedHours}
            </Dropdown.Menu>
        </Dropdown>
    );
}
 
export default SingleDropdown;