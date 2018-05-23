import React from 'react';

import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class About extends React.Component {
  render() {
   
    return (
      <div className="question">
        <h1> About this page </h1>
        <p>This app was written by Jeff Kusowski for Bannerman Wealth Management</p>
      </div>
    );
  }
}


export default About;
