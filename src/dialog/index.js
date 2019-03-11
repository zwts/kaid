import React from 'react';
import BaseComponent from '../base-component';
import SoftKeyStore from '../softkey-store';
import './index.scss';

export default class Dialog extends BaseComponent {
  constructor(props) {
    super(props);

    this.state = {};
  }

  componentDidMount() {
    this.content = this.element.querySelector('.content');
    this.updateSoftKeys();
  }

  componentDidUpdate() {
    if (this.props.type === 'prompt') {
      this.input.value = this.props.initialValue || '';
    }
  }

  scrollContent(direction) {
    if (!this.content) {
      return;
    }
    const maxOffset = this.content.scrollHeight - this.content.clientHeight;
    if (!((this.content.scrollTop === 0 && direction < 0)
      || (this.content.scrollTop === maxOffset && direction > 0))) {
      let scorlloffset;
      const distance = this.content.clientHeight - 41;
      if (direction > 0) {
        scorlloffset = this.content.scrollTop + distance;
      } else if (direction < 0) {
        scorlloffset = this.content.scrollTop - distance;
      }

      if (scorlloffset < 0) {
        scorlloffset = 0;
      } else if (scorlloffset > maxOffset) {
        scorlloffset = maxOffset;
      }
      this.content.scrollTo(0, scorlloffset);
    }
  }

  updateSoftKeys() {
    switch (this.props.type) {
      case 'alert':
        SoftKeyStore.register({
          left: '',
          center: 'ok',
          right: ''
        }, this.element);
        break;
      case 'progress':
        SoftKeyStore.register({
          left: 'cancel',
          center: '',
          right: ''
        }, this.element);
        break;
      case 'prompt':
        SoftKeyStore.register({
          left: this.props.cancel || 'cancel',
          center: '',
          right: this.props.ok || 'ok'
        }, this.element);
        break;
      default:
        break;
    }
  }

  focus() {
    this.focusIfPossible();
    this.updateSoftKeys();
  }

  focusIfPossible() {
    if (this.isHidden()) {
      return;
    }
    if (this.props.type === 'prompt') {
      this.input.focus();
    } else {
      this.element.focus();
    }
  }

  hide() {
    if (this.props.type === 'prompt') {
      this.input.value = this.props.initialValue || '';
    }
    super.hide();
  }

  onKeyDown(evt) {
    const key = { evt };
    switch (key) {
      case 'ArrowDown':
        evt.stopPropagation();
        evt.preventDefault();
        this.scrollContent(1);
        break;
      case 'ArrowUp':
        evt.stopPropagation();
        evt.preventDefault();
        this.scrollContent(-1);
        break;
      case 'Enter':
        evt.stopPropagation();
        evt.preventDefault();
        break;
      case 'SoftLeft':
        evt.stopPropagation();
        evt.preventDefault();
        break;
      case 'SoftRight':
        evt.stopPropagation();
        evt.preventDefault();
        break;
      case 'Backspace':
      case 'EndCall':
        break;
      default:
        break;
    }
  }

  render() {
    return (
      <div
        ref={(node) => { this.element = node; }}
        className="dialog-container"
        tabIndex="-1"
        onKeyDown={(e) => this.onKeyDown(e)}
      >
        <div className="dialog">
          <div className="header h1" data-l10n-id={this.props.header}>
            {this.props.header}
          </div>
          <div className="content p-ul" tabIndex="-1">
            <div data-l10n-id={this.props.content}>
              {this.props.content}
            </div>
            {
              this.props.type === 'prompt'
                ? <input
                  ref={(node) => { this.input = node; }}
                  className="primary"
                  {...this.props.inputOptions}
                />
                : ''
            }
            {
              this.props.type === 'progress'
                ? <div>
                  <p>
                    {`${this.props.progressOptions.value} / ${this.props.progressOptions.max}`}
                  </p>
                  <progress
                    {...this.props.progressOptions}
                  />
                </div>
                : ''
            }
          </div>
        </div>
      </div>
    );
  }
}
