import React from 'react';
import loader from '../images/spin.svg';

const Loading = () => (
  <div className="loading">
    <img src={loader} />
  </div>
);

export default Loading;