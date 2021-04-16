import React from 'react';
import '../styles/availableItem.css';

const AvailableItem = ({user, position, day, getUser, getDay, clicked, updateSelectedUser}) => {

    const handleClick = () => {
        updateSelectedUser(user, day, position)
        getUser(user?.name);
        getDay(`${day.getDate()} / ${day.getMonth() + 1} / ${day.getFullYear()}`);
    }

    return ( 
        <div key={position} className="content" onClick={() => handleClick()} >
                <div className="image">
                    <img src="https://randomuser.me/api/portraits/lego/1.jpg" alt={position} />
                </div>
                <div className="data">
                    <div>
                        <h6>
                            {'10' > day.getDate() ? '0' + day.getDate() : day.getDate()} 
                            / {day.getMonth() + 1} / {day.getFullYear()}
                        </h6>
                        <div className="availables__lineOne">
                            {user?.name} is available
                        </div>
                        
                        <hr/>
                    </div>
                        <span className={clicked? 'check-color' : 'd-none'}>✓</span> 
                </div>
        </div>
    );
}
 
export default AvailableItem;