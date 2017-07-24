//wraps single page components

import React from 'react';
import PropTypes from 'prop-types';
import { Route } from 'react-router-dom';
import Header from './partials/Header';
import HomePage from './home/HomePage';
import AboutPage from './about/AboutPage';
import '../styles/app.css';

export default function App(){
    return (
      <div className="container-fluid">
        <Header />
        <Route exact path="/" component={HomePage} />
        <Route path="/about" component={AboutPage} />
      </div>
    );
}

// App.propTypes = {
//   children: PropTypes.object.isRequired
// };
