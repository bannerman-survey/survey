import React from 'react';
import { connect } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';

import Header from '../header';
import About from '../about';
import Landing from '../landing';
import Question from '../question';
// import Favorite from '../favorite';
// import WaveForm from '../wave-form';
// import Dashboard from '../dashboard';
// import AuthRedirect from '../auth-redirect';

// import * as favoriteAction from '../../action/favorite';
// import * as waveAction from '../../action/wave';
// import { FAVORITE_ROUTE, WAVE_ROUTE } from '../../routes';

class App extends React.Component {

  render() {
    return (
      <div className="app">
        <BrowserRouter>
          <div>
            <Header />
            <Route exact path="/" component={Landing} />
            <Route exact path="/about" component={About} />
            <Route exact path="/quiz" component={Question} />
            {/* <Route path="*" component={AuthRedirect} />
            <Route exact path="/" component={Landing} />
            <Route exact path="/signup" component={Landing} />
            <Route exact path="/login" component={Landing} />
            <Route exact path="/dashboard" component={Dashboard} />
            <Route exact path="/favorite" component={Favorite} />
            <Route exact path="/transform" component={WaveForm} />  */}
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

// let mapStateToProps = state => ({
//   loggedIn: !!state.token,
// });

// const mapDispatchToProps = dispatch => ({
//   fetchFavorite: () => dispatch(favoriteAction.fetchAction()),
//   fetchWave: () => dispatch(waveAction.fetchAction()),
// });

export default App;
