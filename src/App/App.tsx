
import React from 'react';
import { BrowserRouter as Router, Routes , Route } from 'react-router-dom';
import './App.scss';
import 'antd/dist/antd.min.css';
import * as ROUTES from '../constants/router';
import {HomePage, CountriesList} from '../components';

function App() {
  
  return (
    <div className="App">
        <Router>
          <Routes >
            <Route path={ROUTES.HOME} element={<HomePage />} /> 

            <Route
              path={ROUTES.COUNTRYIES_LIST}
              element={<CountriesList />}
            />

          </Routes >
        </Router>
    </div>
  );
}

export default App;
