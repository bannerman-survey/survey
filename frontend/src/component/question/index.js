import React from 'react';

import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class Question extends React.Component {
  render() {
   

    
    return (
      <div className="question">
        <h1> Questions go here </h1>
        <p>Questions</p>
      </div>
    );
  }
}

// const mapStateToProps = state => ({
//   loggedIn: !!state.token,
// });

// const mapDispatchToProps = dispatch => ({
//   doLogout: () => dispatch(authActions.logoutAction()),
// });

export default Question;
