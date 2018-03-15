import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { startSetUsers } from '../actions/users';
import Dashboard from '../components/Dashboard';
import UserSinglePage from '../components/UserSinglePage';
import PageNotFound from '../components/PageNotFound';
import Footer from '../components/Footer';

class AppRouter extends Component {

  componentDidMount() {
    this.props.fetchData('https://randomuser.me/api/?results=30&nat=us');
  }

  render() {
    return (
      <BrowserRouter>
        <div>
          <Switch>
            <Route path='/' component={Dashboard} exact={true} />
            <Route path='/user/:username' component={UserSinglePage} />
            <Route component={PageNotFound} />
          </Switch>
          <Footer />
        </div>
    </BrowserRouter>
    )
  }
};

const mapDispatchToProps = dispatch => ({
  fetchData: (url) => dispatch(startSetUsers(url))
});

export default connect(null, mapDispatchToProps)(AppRouter);