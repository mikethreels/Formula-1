import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import DriverOverview from './containers/driver-overview';
import DriverDetails from './components/driver-details';

function MyRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" Component={DriverOverview} />
        <Route exact path="/details/:driver" Component={DriverDetails} />
      </Routes>
    </BrowserRouter>
  );
}

export default MyRoutes;