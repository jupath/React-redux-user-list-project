import React, { Component } from 'react';
import { connect } from 'react-redux';
import moment from 'moment';
import { Button } from 'reactstrap';
import UserSinglePageField from './UserSinglePageField';

export class UserSinglePage extends Component {

  render() {

    const dob = moment(this.props.user.dob).format('Do MMMM, YYYY');

    return (
      <div className="container">
        <div className="px-lg-6 mt-6 mb-4">
          <div className="row user-single p-3">
            <div className="pr-3">
              <img src={this.props.user.image} />
            </div>
            <div className="user-single__details">
              <h2 className="text-capitalize font-weight-bold">{this.props.user.firstName} {this.props.user.lastName}</h2>
              <div className="user-single__details__field">
                <div className="font-weight-bold pr-2">Email:</div>
                <UserSinglePageField data={this.props.user.email} field={'email'} username={this.props.user.username} isEditable={true} />
              </div>
              <div className="user-single__details__field">
                <div className="font-weight-bold pr-2">Cell:</div>
                <UserSinglePageField data={this.props.user.cell} field={'cell'} username={this.props.user.username} isEditable={true}/>
              </div>
              <div className="user-single__details__field text-capitalize">
                <div className="font-weight-bold pr-2">Address:</div>
                <UserSinglePageField data={this.props.user.address} field={'address'} username={this.props.user.username} isEditable={true} />
              </div>
              <div className="user-single__details__field">
                <div className="font-weight-bold pr-2">Day of birth:</div>
                <UserSinglePageField data={dob} field={'dob'} username={this.props.user.username} isEditable={false} />
              </div>
              <Button color="success" className="mt-3" onClick={() => this.props.history.push('/')}>Back to dashboard</Button>
            </div>
          </div>
        </div>
      </div>
    );
  };
}

const mapStateToProps = (state, props) => ({
  user: state.users.find((user) => user.username === props.match.params.username)
});

export default connect(mapStateToProps)(UserSinglePage);