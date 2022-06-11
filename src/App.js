import './App.css';
import React from 'react';
import {Routes, Route} from 'react-router-dom';

import {Layout} from './components/base/Layout';

import Trips from './components/Trips';
import SignIn from './components/login/SignIn';
import SignUp from './components/login/SignUp';
import Bookings from './components/Booking/Bookings';
import TripDetail from './components/Trip/TripDetail';
import NotFoundPage from './components/base/NotFoundPage'

function App () {
  const [isLoggedIn, setIsLoggedIn] = React.useState (true);

  const handleLogIn = () => setIsLoggedIn (!isLoggedIn);

  return (
    <div className="wrapper">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Trips />} />
          <Route path="sign-in" element={<SignIn />} />
          <Route path="sign-up" element={<SignUp />} />
          <Route path="bookings" element={<Bookings />} />
          <Route path="trip/:tripId" element={<TripDetail />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
