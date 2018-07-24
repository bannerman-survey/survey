import React from 'react';
import superagent from 'superagent';

import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import questions from '../../data/questions';


class EmailForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
    };
    let memberFunctions = Object.getOwnPropertyNames(EmailForm.prototype);
    for (let functionName of memberFunctions) {
      if (functionName.startsWith('handle')) {
        this[functionName] = this[functionName].bind(this);
      }
    }
  }
  handleSubmit(event) {
    event.preventDefault();
    let score = this.props.answers.reduce( (a, b) => a + b );
    const body = {
      'score': score,
      'email': this.state.email,
    };
    superagent.post('https://pj0gfbtyke.execute-api.us-east-1.amazonaws.com/dev/hello')
      .send(body)
      .then(response => console.log('response:', response));

    console.log('email', this.state.email);
    console.log('answers', this.props.answers);
    console.log('score', score);

  }

  handleChange(event) {
    let { name, value } = event.target;
    this.setState({ [name]: value });
  }
  render() {
    return <form id="email-form" onSubmit={this.handleSubmit}>
      <input name="email" placeholder="email" type="text" value={this.state.email} onChange={this.handleChange}/>
      <button> Submit </button>
    </form>;
  }
}
// const mapStateToProps = state => ({
//   loggedIn: !!state.token,
// });

// const mapDispatchToProps = dispatch => ({
//   doLogout: () => dispatch(authActions.logoutAction()),
// });

export default EmailForm;
