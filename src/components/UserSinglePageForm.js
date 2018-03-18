import React, { Component } from 'react';
import AutosizeInput from 'react-input-autosize';
import { Button } from 'reactstrap';
import PropTypes from 'prop-types';

class UserSinglePageForm extends Component {
  state = {
    text: this.props.data,
  }

  updateState = (event) => {
    const text = event.target.value;
    this.setState({
      text,
    });
  }

  submitForm = (event) => {
    event.preventDefault();
    const { text } = this.state;
    this.props.handleUpdateUser(text);
  }

  render() {
    return (
      <form onSubmit={this.submitForm} className="user-single__form">
        <AutosizeInput
          type="text"
          value={this.state.text}
          onChange={this.updateState}
        />
        <Button color="success">save</Button>
      </form>
    );
  }
}

UserSinglePageForm.propTypes = {
  data: PropTypes.string.isRequired,
  handleUpdateUser: PropTypes.func.isRequired,
};

export default UserSinglePageForm;
