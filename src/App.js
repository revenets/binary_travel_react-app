import './App.css';
import React from 'react';
import {Routes, Route} from 'react-router-dom';

import Layout from './components/base/Layout';
import Trips from './components/Trip/Trips';
import SignIn from './components/login/SignIn';
import SignUp from './components/login/SignUp';
import Bookings from './components/Booking/Bookings';
import TripDetail from './components/Trip/TripDetail';
import NotFoundPage from './components/base/NotFoundPage'
import { MAIN_ROUTE, SIGN_IN_ROUTE, SIGN_UP_ROUTE, TRIP_ROUTE, BOOKINGS_ROUTE } from './utils/consts';

function App () {
  const [isLoggedIn, setIsLoggedIn] = React.useState (true);

  const handleLogIn = () => setIsLoggedIn (!isLoggedIn);

  return (
    <div className="wrapper">
      <Routes>
        <Route path={MAIN_ROUTE} element={<Layout isLoggedIn={isLoggedIn} handleLogIn={handleLogIn}/>}>
          <Route index element={<Trips />} />
          <Route path={SIGN_IN_ROUTE} element={<SignIn />} />
          <Route path={SIGN_UP_ROUTE} element={<SignUp />} />
          <Route path={BOOKINGS_ROUTE} element={<Bookings />} />
          <Route path={`${TRIP_ROUTE}:tripId`} element={<TripDetail />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
