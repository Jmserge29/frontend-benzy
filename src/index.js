import React from 'react';
import ReactDOM from 'react-dom/client';
import './style.css';
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Dashboard from './Templates/Dashboard';
import Estadistics from './Templates/Estadistics';
import Courses from './Templates/Courses';
import Admin from './Templates/Admin';
import Signup from './Templates/Signup';
import Search from './Templates/Search';
import Profile from './Templates/Profile';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <Router>
        <Routes>
          <Route exact path="/" element={<Dashboard />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/estadistics" element={<Estadistics />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/search" element={<Search />} />
          <Route path="/profile" element={<Profile />} />

        </Routes>
      </Router>
  </React.StrictMode>
);