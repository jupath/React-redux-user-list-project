import React from 'react';
import Parser from 'html-react-parser';
import { Link } from 'react-router-dom';

const User = (props) => {
  const {
    lastName, firstName, image, username, cell,
  } = props.userData;

  return (
    <div className="col-sm-4 mb-4">
      <div className="user p-3">
        <div>
          <img src={image} className="mr-2" />
        </div>
        <div className="user__text">
          <h5 className="text-capitalize font-weight-bold">{Parser(lastName)}, {Parser(firstName)}</h5>
          <p>Cell: {cell}</p>
          <div className="user__text__btnwrapper">
            <Link className="btn btn-success" to={`/user/${username}`}>Details</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default User;
