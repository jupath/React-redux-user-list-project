import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button, Input } from 'reactstrap';
import { setOrderBy, setText } from '../actions/filters';

export class Header extends Component {
  handleOrderByClick = (orderBy) => {
    this.props.setOrderBy(orderBy);
  }

  handleSetText = (event) => {
    const text = event.target.value;
    this.props.setText(text);
  }

  render() {
    return (
      <header className="header">
        <div className="container text-center py-4">
          <h1>User list built with React and Redux</h1>
          <p>This app uses async-await to fetch users from <a href="https://randomuser.me/" target="_blank">randomuser.me</a> API</p>
          <div className="px-lg-7 pb-4">
            <Input type="text" placeholder="Search by name..." className="header__searchform" onChange={this.handleSetText} />
          </div>
          <div>
            <span>Order list by name: </span>
            <Button id="ascButton" color="success" className="mr-1" disabled={this.props.orderBy === 'asc'} onClick={() => this.handleOrderByClick('asc')}>Asc</Button>
            <Button id="descButton" color="success" className="mr-1" disabled={this.props.orderBy === 'desc'} onClick={() => this.handleOrderByClick('desc')}>Desc</Button>
            <Button id="defaultButton" color="success" disabled={this.props.orderBy === undefined} onClick={() => this.handleOrderByClick()}>Default</Button>
          </div>
        </div>
      </header>
    );
  }
}

const mapStateToProps = state => ({
  orderBy: state.filters.orderBy,
});

const mapDispatchToProps = dispatch => ({
  setOrderBy: orderBy => dispatch(setOrderBy(orderBy)),
  setText: text => dispatch(setText(text)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
