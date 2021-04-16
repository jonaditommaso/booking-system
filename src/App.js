import Booking from './components/Booking';
import ConfirmBooking from './components/ConfirmBooking';
import history from './history';
import { Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <div>
      <Router history={history}>
        <Switch>
          <Route path='/' exact component={Booking} />
          <Route path='/confirm' exact component={ConfirmBooking} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
