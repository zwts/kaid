import React from 'react';
import ReactDOM from 'react-dom';
import BaseComponent from '../base-component';
import SoftKey from '../softkey';
import SimpleNavigationHelper from '../simple-navigation-helper';
import './index.scss';

export default class OptionMenu extends BaseComponent {
  name = 'OptionMenu';

  FOCUS_SELECTOR = '.menu-item';

  constructor(props) {
    super(props);
    this.state = {
      header: '',
      options: [],
      onCancel: () => {}
    };
  }

  componentDidMount() {
    this.element = ReactDOM.findDOMNode(this);
    this.navigator = new SimpleNavigationHelper(this.FOCUS_SELECTOR, this.element);
    this.updateSoftKeys();
  }

  componentWillUnmount() {
    this.navigator.destroy();
    this.unregisterSoftKeys();
    this.element = null;
  }

  componentDidUpdate() {
    if (this.isActive() && document.activeElement === document.body) {
      this.focus();
    }
  }

  componentWillUpdate() {
    const needFocusEl = this.element.querySelector('[data-index="0"]');
    if (needFocusEl) {
      this.navigator.setFocus(needFocusEl);
    }
  }

  unregisterSoftKeys() {
    SoftKey.unregister(this.element);
  }

  updateSoftKeys() {
    SoftKey.register({
      left: this.state.hasCancel ? 'cancel' : '',
      center: 'select',
      right: ''
    }, this.element);
  }

  clear() {
    this.setState({
      header: '',
      options: [],
      onCancel: () => {}
    });
  }

  show(options) {
    this.clear();
    this.setState(options, () => {
      this.updateSoftKeys();
    });
    super.show();
  }

  onKeyDown(evt) {
    const { target } = evt;
    const { key } = evt;
    const option = this.state.options[+target.dataset.index];
    let next = null;

    switch (key) {
      case 'Enter':
        evt.stopPropagation();
        evt.preventDefault();
        if (option && option.callback) {
          option.callback();
        }
        this.hide();
        break;
      case 'ArrowUp':
        evt.stopPropagation();
        evt.preventDefault();
        next = this.findPrev();
        break;
      case 'ArrowDown':
        evt.stopPropagation();
        evt.preventDefault();
        next = this.findNext();
        break;
      case 'SoftLeft':
      case 'BrowserBack':
      case 'Backspace':
        if (key === 'SoftLeft' && !this.state.hasCancel) {
          break;
        }

        evt.stopPropagation();
        evt.preventDefault();
        if (this.state.onCancel) {
          this.state.onCancel();
        }
        this.hide();
        break;

      default:
        break;
    }
    if (next) {
      next.scrollIntoView(false);
      next.focus();
    }
  }

  render() {
    const options = [];
    // index use in key will cause eslint error, but hack here.
    this.state.options.forEach((option, index) => {
      let img = '';
      if (option.icon) {
        img = <img src={option.icon} alt="" className="icon" />;
      }
      const classInfo = `content ${option.checked ? 'checked' : ''}`;
      options.push(
        <div
          key={`option-${index}`}
          tabIndex="-1"
          data-index={index}
          className="menu-item p-pri"
        >
          {img}
          <div
            className={classInfo}
            data-l10n-id={option.id || ''}
            data-l10n-args={option.l10nArgs || null}
            data-icon={option.dataicon || ''}
          >
            {option.label || ''}
          </div>
        </div>
      );
    });

    let _className = 'option-menu-container';
    if (this.state.customClass) {
      _className += ` ${_className}--${this.state.customClass}`;
    }

    return (
      <div
        tabIndex="-1"
        className={_className}
        onKeyDown={(e) => { this.onKeyDown(e); }}
        role="menu"
      >
        <div className="option-menu">
          <div
            className="header h1"
            key="translated-header"
            data-l10n-id={this.state.header || 'options'}
          >
            {this.state.header}
          </div>
          <div className="content p-ul">
            {this.props.children || options}
          </div>
        </div>
      </div>
    );
  }
}
