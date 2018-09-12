import React from 'react';

import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class Landing extends React.Component {
  render() {

    return (
      <div className="landing">
        <h1> Welcome to the Risk/Reward Survey </h1>
        <p>Click the button below to get started</p>
      </div>
    );
  }
}


export default Landing;
