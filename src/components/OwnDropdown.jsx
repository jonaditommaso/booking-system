import React, { useState } from 'react';
import Dropdown from 'react-bootstrap/Dropdown';

const OwnDropdown = () => {
  
  const OPTIONS = [
    'HCA (Care assistant)',
    'RGN (Nurse)',
    'SW (Support Worker)'
  ];

  const [selected, setSelected] = useState(OPTIONS[0]);

  const handleClick = (option) => {
    setSelected(option);
  }

  const renderedOptions = OPTIONS.map((option, i) => {

    return (
      <Dropdown.Item key={i}>
          {
            option === selected 
            ? null 
            : <div  
              onClick={()=> handleClick(option)} 
              >
              {option}
              </div>
          }
        </Dropdown.Item> 
    );   
  });

  return ( 
    <div>
      <Dropdown>
        <Dropdown.Toggle 
          variant="white" 
          id="dropdown-basic" 
          size="md">
            {selected}
        </Dropdown.Toggle>

        <Dropdown.Menu>
            {renderedOptions}
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
}
 
export default OwnDropdown;