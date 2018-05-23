import React from 'react';

import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import questions from '../../data/questions';


class Question extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      questionIndex: 0,
      firstClicked: false,
    };
    let memberFunctions = Object.getOwnPropertyNames(Question.prototype);
    for (let functionName of memberFunctions) {
      if (functionName.startsWith('handle')) {
        this[functionName] = this[functionName].bind(this);
      }
    }
  }
  handleFirstClick(event) {
    event.preventDefault();
    this.setState({firstClicked: true});
  
  }
  handleSecondClick(event) {
    event.preventDefault();
    console.log('before', this.state.questionIndex);
    this.setState({ questionIndex: this.state.questionIndex + 1 });
    console.log('after', this.state.questionIndex);
  }
  render() {
    let modifiers = (
      <button onClick={this.handleSecondClick}> Thumbs Up</button>
    );
    let renderedModifiers = this.state.firstClicked === true ? modifiers : undefined;
    return <div className="question">
      <h1> {questions[this.state.questionIndex].question} </h1>
      <button onClick={this.handleFirstClick} > {questions[this.state.questionIndex].data[0].description}</button>
      <button> {questions[this.state.questionIndex].data[1].description}</button>
      <button> {questions[this.state.questionIndex].data[2].description}</button>
      <button> {questions[this.state.questionIndex].data[3].description}</button>
      <div> {renderedModifiers}</div>
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
