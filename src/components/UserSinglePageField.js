import React, { Component } from 'react';
import { connect } from 'react-redux';
import FaPencil from 'react-icons/lib/fa/pencil';
import UserSinglePageForm from './UserSinglePageForm';
import { updateUser } from '../actions/users'

export   class UserSinglePageField extends Component {

  state = {
    isUpdate: false
  }

  onUpdateButton = () => {
    this.setState({
      isUpdate: true
    })
  }

  handleUpdateUser = updatedData => {
    this.props.updateUser(this.props.username, {[this.props.field]: updatedData});
    this.setState({
      isUpdate: false
    })
  }

  render() {

    let renderField;
    if(this.state.isUpdate) {
      renderField = <UserSinglePageForm data={this.props.data} handleUpdateUser={this.handleUpdateUser} />;
    } else {
      renderField = <span className="user-single__text">
                      {this.props.data}
                      {this.props.isEditable && <a className="ml-2" onClick={this.onUpdateButton}><FaPencil /></a>}
                    </span>;
    }

    return (
      <div>
        { renderField }
      </div>
    )
  }
};

const mapDispatchToProps = dispatch => ({
  updateUser: (username, user) => dispatch(updateUser(username, user))
});

export default connect(null, mapDispatchToProps)(UserSinglePageField);