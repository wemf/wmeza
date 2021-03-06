/* eslint-disable react/self-closing-comp */
import React from 'react';
import './Spinner.css';

const Spinner = () => {
  return (
    <div className="lds-container">
      <div className="lds-ring">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default Spinner;
