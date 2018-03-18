import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import filterUsers from '../selectors/users';
import Header from './Header';
import User from './User';
import Loading from './Loading';

export class Dashboard extends Component {
  renderUsers = () => {
    if (this.props.isLoading) {
      return <Loading />;
    }
    const users = this.props.users.map((user) => {
      const firstName = user.firstName.replace(this.props.filterText, `<span class="hl">${this.props.filterText}</span>`);
      const lastName = user.lastName.replace(this.props.filterText, `<span class="hl">${this.props.filterText}</span>`);

      const userData = {
        firstName,
        lastName,
        image: user.image,
        username: user.username,
        cell: user.cell,
      };

      return <User key={user.username} userData={userData} />;
    });
    return users;
  }

  render() {
    return (
      <div>
        <Header />
        <div className="container">
          <div className="row users pt-5">
            { this.renderUsers() }
          </div>
        </div>
      </div>
    );
  }
}

Dashboard.propTypes = {
  isLoading: PropTypes.bool.isRequired,
};

const mapStateToProps = state => ({
  users: filterUsers(state.users, state.filters),
  filterText: state.filters.text,
  isLoading: state.usersAreLoading,
});

export default connect(mapStateToProps)(Dashboard);
