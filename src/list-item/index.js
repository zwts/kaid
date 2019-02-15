import React from 'react';
import BaseComponent from '../base-component';
import './index.scss';

export default class ListItem extends BaseComponent {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    const iconClassName =
      `list-item-icon ${!this.props.icon ? 'hidden' : ''}`;
    const primaryLineClassName =
      `primary-line ${this.props.lines.length === 0 ? 'hidden' : ''}`;
    const secondaryLineClassName =
      `secondary-line ${this.props.lines.length < 2 ? 'hidden' : ''}`;
    const controllerClassName =
      `list-item-controller ${!this.props.controller ? 'hidden' : ''}`;

    return (
      <li className='list-item' tabIndex='0'>
        <div className={iconClassName}>
          <span data-icon={this.props.icon}/>
        </div>
        <div className="list-item-lines">
          <span className={primaryLineClassName}>{this.props.lines[0]}</span>
          <label className={secondaryLineClassName}>{this.props.lines[1]}</label>
        </div>
        <div className={controllerClassName}></div>
      </li>
    );
  }
}
