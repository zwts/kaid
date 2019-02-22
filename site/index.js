import React from 'react';
import ReactDOM from 'react-dom';
import './static/common.scss';

import OneLineLi from './template/one-line-li';


class Site extends React.Component {
  constructor(props) {
    super(props);
    this.panels = {};
    this.state = { panel: 'list' };
  }

  componentDidMount() {
  }

  componentDidUpdate() {
  }

  render() {
    return (
      <>
      <span>Header</span>
      <div className="fake-device-container">
        <span>Hello webpack dev servicer</span>
      </div>

      <span>One Line List</span>
      <div className="fake-device-container">
        <OneLineLi></OneLineLi>
      </div>
      </>
    );
  }
}

ReactDOM.render(<Site />, document.body);
