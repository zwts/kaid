import React from 'react';
import BaseComponent from '../base-component';
import SimpleNavigationHelper from  '../simple-navigation-helper';

export default class List extends BaseComponent {
  constructor(props) {
    super(props);

    this.state = {};
  }

  componentDidMount() {
    this.navigator = new SimpleNavigationHelper('.focusable', this.container);
  }

  render() {
    return (
    <div ref={(container) => {this.container = container}}
         className='list-container' tabIndex='1'>
      <ul>{this.props.children}</ul>
    </div>
    );
  }
}
