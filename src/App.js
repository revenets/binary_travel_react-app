import './App.css';
import React from 'react';
import {useState, useEffect} from 'react';
import {Routes, Route} from 'react-router-dom';

import Layout from './components/base/Layout';
import Trips from './components/Trip/Trips';
import SignIn from './components/login/SignIn';
import SignUp from './components/login/SignUp';
import Bookings from './components/Booking/Bookings';
import TripDetail from './components/Trip/TripDetail';
import {
  MAIN_ROUTE,
  SIGN_IN_ROUTE,
  SIGN_UP_ROUTE,
  TRIP_ROUTE,
  BOOKINGS_ROUTE,
} from './utils/consts';

import {trips} from './data/trips';

function App () {
  const [allTrips, setAllTrips] = useState ([]);
  useEffect (() => {
    setAllTrips ([...trips]);
    return () => {
      setAllTrips ([]);
    };
  }, []);

  return (
    <div className="wrapper">
      <Routes>
        <Route
          path={MAIN_ROUTE}
          element={<Layout />}
        >
          <Route index element={<Trips allTrips={allTrips} />} />
          <Route path={SIGN_IN_ROUTE} element={<SignIn />} />
          <Route path={SIGN_UP_ROUTE} element={<SignUp />} />
          <Route path={BOOKINGS_ROUTE} element={<Bookings />} />
          <Route
            path={`${TRIP_ROUTE}:tripId`}
            element={<TripDetail allTrips={allTrips} />}
          />
          <Route path="*" element={<Trips allTrips={allTrips}/>} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
