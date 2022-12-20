import React from 'react';
import ReactDOM from 'react-dom/client';
import './soft-ui-dashboard.css';
import './nucleo-svg.css'
import './nucleo-icons.css'
import './soft-ui-dashboard.min.css'
import App from './App';
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Dashboard from './Templates/Dashboard';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <Router>
        <Routes>
          <Route exact path="/" element={<Dashboard />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </Router>
  </React.StrictMode>
);