import React, { useState, useRef, useEffect } from 'react';
import './index.scss';

const prefixCls = 'kai-spin';

const Spin = (props) => {
  return(
    <div className={`${prefixCls}`}>
      <div className={`${prefixCls}-indicator spin`}></div>
    </div>
  );
};

export default Spin;
