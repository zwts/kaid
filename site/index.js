import React from 'react';
import ReactDOM from 'react-dom';
import './static/common.scss';

import OneLineLi from './template/one-line-li';
import Header from '../src/header';
import OptionMenu from '../src/option-menu';


class Site extends React.Component {
  constructor(props) {
    super(props);
    this.panels = {};
    this.state = { panel: 'list' };
  }

  componentDidMount() {
    this.menu.show({header: 'fruits', options: [
      {id: 'apple', label:'apple', callback :() => {}},
      {id: 'bananer', label:'bananer', callback: () => {}}
    ]});
  }

  componentDidUpdate() {
  }

  render() {
    return (
      <>
      <span>Header</span>
      <div className="fake-device-container">
        <Header text="header">Header</Header>
      </div>

      <span>One Line List</span>
      <div className="fake-device-container">
        <OneLineLi></OneLineLi>
      </div>

      <span>Option Menu</span>
      <div className="fake-device-container">
        <OptionMenu
          ref={(node) => { this.menu = node; }}>
        </OptionMenu>
      </div>
      </>
    );
  }
}

ReactDOM.render(<Site />, document.body);
