import React from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';

import Login from './Component/Main/Login'
import SignUp from './Component/Main/SignUp'
import Dashboard from './Component/Main/Dashboard'

import {Provider} from 'react-redux';
import store from './Redux/store';

const AppRouter = () => (
  <Provider store={store}>
  <Router>
    <div>
      <Routes>
        {/* <Route exact path="/" component={Login} />
        <Route path="/signup" component={SignUp} />
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/test" component={SignUpNew} /> */}
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/dashboard/*" element={<Dashboard />} />
      </Routes>
    </div>
  </Router>
  </Provider>
)

export default AppRouter;

