import React from 'react';
// import * as authActions from '../../action/auth';
// import * as util from '../../lib/util';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import bannermanHorizonal from '../../assets/bannerman-wealth-horizontal.png';

class Header extends React.Component {
  render() {
    let JSX = (
      
      <ul>
        <li>
          <Link to="/"> Home2 </Link>
        </li>
        <li>
          <Link to="/about"> About </Link>
        </li>
        <li>
          <Link to="/quiz"> Quiz </Link>
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
      <header className="header">
        <img src={bannermanHorizonal} />
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

export default Header;
