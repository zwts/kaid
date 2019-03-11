import React from 'react';
import ReactDOM from 'react-dom';
import './static/common.scss';

import OneLineLi from './template/one-line-li';
import Header from '../src/header';
import OptionMenu from '../src/option-menu';
import Dialog from '../src/dialog'


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
          ref={(node) => { this.menu = node; }}
        >
        </OptionMenu>
      </div>

      <span>Alert Dialog</span>
      <div className="fake-device-container">
        <Dialog
          header="Dialog Header"
          type="alert"
          content="Some dialog content show here"
        />
      </div>

      <span>Input Dialog</span>
      <div className="fake-device-container">
        <Dialog
          header="Input fruit number"
          type="prompt"
          content="You need to input the number you want"
          initialValue="1"
          inputOptions={
            {
              type: 'text',
              placeholder: 'fruit number you want',
              defaultValue: 1,
              'x-inputmode': 'digit',
              maxLength: 3
            }
          }
        />
      </div>

      <span>Progress Dialog</span>
      <div className="fake-device-container">
        <Dialog
          header="Download file progress"
          type="progress"
          content="Please wait file download"
          progressOptions={
            {
              value: 3,
              max: 10
            }
          }
        />
      </div>

      </>
    );
  }
}

ReactDOM.render(<Site />, document.body);
