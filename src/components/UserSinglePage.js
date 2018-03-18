import React from 'react';
import { connect } from 'react-redux';
import moment from 'moment';
import { Button } from 'reactstrap';
import PropTypes from 'prop-types';
import UserSinglePageField from './UserSinglePageField';

export const UserSinglePage = (props) => {
  const dob = moment(props.user.dob).format('Do MMMM, YYYY');

  return (
    <div className="container">
      <div className="px-lg-6 mt-6 mb-4">
        <div className="row user-single p-3">
          <div className="pr-3">
            <img src={props.user.image} alt="user" />
          </div>
          <div className="user-single__details">
            <h2 className="text-capitalize font-weight-bold">{props.user.firstName} {props.user.lastName}</h2>
            <div className="user-single__details__field">
              <div className="font-weight-bold pr-2">Email:</div>
              <UserSinglePageField data={props.user.email} field="email" username={props.user.username} isEditable />
            </div>
            <div className="user-single__details__field">
              <div className="font-weight-bold pr-2">Cell:</div>
              <UserSinglePageField data={props.user.cell} field="cell" username={props.user.username} isEditable />
            </div>
            <div className="user-single__details__field text-capitalize">
              <div className="font-weight-bold pr-2">Address:</div>
              <UserSinglePageField data={props.user.address} field="address" username={props.user.username} isEditable />
            </div>
            <div className="user-single__details__field">
              <div className="font-weight-bold pr-2">Day of birth:</div>
              <UserSinglePageField data={dob} field="dob" username={props.user.username} isEditable={false} />
            </div>
            <Button color="success" className="mt-3" onClick={() => props.history.push('/')}>Back to dashboard</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

UserSinglePage.propTypes = {
  user: PropTypes.objectOf(PropTypes.string).isRequired,
  history: PropTypes.object.isRequired,
};

const mapStateToProps = (state, props) => ({
  user: state.users.find(user => user.username === props.match.params.username),
});

export default connect(mapStateToProps)(UserSinglePage);
