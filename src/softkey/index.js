import React from 'react';
import BaseComponent from '../base-component';
import SoftKeyStore from '../softkey-store';
import './index.scss';

const prefixCls = 'kai-softkey';

function Button(props) {
  const content = props.content
    ? {
      'data-icon': props.content.icon,
      'data-l10n-id': props.content.text || props.content
    }
    : null;

  return <button ref={props.btnRef} className={`${prefixCls}-btn`} {...content} />;
}

export default class SoftKey extends BaseComponent {
  constructor(props) {
    super(props);
    this.state = {
      left: props.left || '',
      center: props.center || '',
      right: props.right || ''
    };
    this.refCbs = {};
    this.btns = {};
    ['left', 'center', 'right'].forEach((btn) => {
      this.refCbs[btn] = this.getBtnRefs(btn);
    });
  }

  componentDidMount() {
    SoftKeyStore.on('change', () => {
      const keys = SoftKeyStore.currentKeys;
      this.setState(keys);
    });
  }

  componentWillUpdate(nextProps, nextState) {
    for (const key in nextState) {
      if (!nextState[key]) {
        this.btns[key].textContent = '';
      }
    }
  }

  getBtnRefs = btn => (el) => {
    this.btns[btn] = el;
  };

  render() {
    return (
      <form className={`${prefixCls} visible`} data-type="action">
        <Button pos="left" btnRef={this.refCbs.left} content={this.state.left} />
        <Button pos="center" btnRef={this.refCbs.center} content={this.state.center} />
        <Button pos="right" btnRef={this.refCbs.right} content={this.state.right} />
      </form>
    );
  }
}
