import React from 'react';
import './index.scss';

const Marquee = ({ text }) => {
  return (
    <div className="marquee">
      <p>{text}</p>
    </div>
  );
};

export default Marquee;
