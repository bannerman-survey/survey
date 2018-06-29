import React from 'react';

import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import questions from '../../data/questions';


class EmailForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      questionIndex: 0,
      firstClicked: false,
      answerArray: [],
    };
    let memberFunctions = Object.getOwnPropertyNames(EmailForm.prototype);
    for (let functionName of memberFunctions) {
      if (functionName.startsWith('handle')) {
        this[functionName] = this[functionName].bind(this);
      }
    }
  }
  handleFirstClick(event) {
    event.preventDefault();
    console.log(event.target.id);
    console.log(typeof event.target.id);
    let updatedAnswerArray = this.state.answerArray;
    updatedAnswerArray[this.state.questionIndex] = parseInt(event.target.id);

    this.setState({ firstClicked: true, answerArray: updatedAnswerArray });
    console.log(this.state);

  }
  handleSecondClick(event) {
    event.preventDefault();
    console.log('before', this.state.questionIndex);
    this.setState({ questionIndex: this.state.questionIndex + 1, firstClicked: false });
    console.log('after', this.state.questionIndex);
  }
  render() {
    let modifiers = (
      <div>
        <button onClick={this.handleSecondClick}> Less than</button>
        <button onClick={this.handleSecondClick}> Same</button>
        <button onClick={this.handleSecondClick}> Greater than</button>
      </div>
    );
    let renderedModifiers = this.state.firstClicked === true ? modifiers : undefined;
    return <div className="question">
      <h1> {questions[this.state.questionIndex].question} </h1>
      <button onClick={this.handleFirstClick} id={questions[this.state.questionIndex].data[0].value}>
        {questions[this.state.questionIndex].data[0].description}
      </button>
      <button onClick={this.handleFirstClick} id={questions[this.state.questionIndex].data[1].value}>
        {questions[this.state.questionIndex].data[1].description}
      </button>
      <button onClick={this.handleFirstClick} id={questions[this.state.questionIndex].data[2].value}>
        {questions[this.state.questionIndex].data[2].description}
      </button>
      <button onClick={this.handleFirstClick} id={questions[this.state.questionIndex].data[3].value}>
        {questions[this.state.questionIndex].data[3].description}
      </button>
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

export default EmailForm;
