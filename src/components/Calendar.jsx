import {CalendarComponent} from '@syncfusion/ej2-react-calendars';
import '../styles/calendar.css';

const Calendar = ({setSelectedDays}) => {

    const startDate = new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate());

    return ( 
        <div className="calendario">
            <CalendarComponent 
                min={startDate} 
                isMultiSelection
                onChange={(date)=> setSelectedDays(date.target.values)}
            />
        </div>
    );
}
 
export default Calendar;