import React from 'react';

import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class Question extends React.Component {
  render() {
    let JSX = (
      <ul>
        <li>
          <Link to="/"> Home </Link>
        </li>
        <li>
          <Link to="/login"> Login </Link>
        </li>
        <li>
          <Link to="/signup"> Signup </Link>
        </li>
      </ul>
    );

    // let JSXLoggedIn = (
    //   <ul>
    //     <li>
    //       <Link to="/dashboard"> dashboard </Link>
    //     </li>
    //     <li>
    //       <Link to="/transform"> transform a wave </Link>
    //     </li>
    //     <li>
    //       <Link to="/favorite"> favorites </Link>
    //     </li>
    //   </ul>
    // );
    return (
      <header className="question">
        <h1> Survey </h1>
        <nav>{JSX}</nav>
      </header>
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
