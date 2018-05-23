import React from 'react';

import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import questions from '../../data/questions';


class Question extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      questionIndex: 0,
    };
    let memberFunctions = Object.getOwnPropertyNames(Question.prototype);
    for (let functionName of memberFunctions) {
      if (functionName.startsWith('handle')) {
        this[functionName] = this[functionName].bind(this);
      }
    }
  }

  render() {
    return <div className="question">
      <h1> {questions[this.state.questionIndex].question} </h1>
      <button> {questions[this.state.questionIndex].data[0].description}</button>
      <button> {questions[this.state.questionIndex].data[1].description}</button>
      <button> {questions[this.state.questionIndex].data[2].description}</button>
      <button> {questions[this.state.questionIndex].data[3].description}</button>
    </div>;
  }
}

// const mapStateToProps = state => ({
//   loggedIn: !!state.token,
// });

// const mapDispatchToProps = dispatch => ({
//   doLogout: () => dispatch(authActions.logoutAction()),
// });

export default Question;
