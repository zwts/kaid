import React, { forwardRef, useEffect, useRef, useState } from "react";

import './index.scss';

const PinCode = forwardRef(({
  code,
  codeCount = 6,
}, ref) => {
  const elementRef = useRef(null);
  const [value, setValue] = useState(code || '');

  const handleKeyDown = (event) => {
    const { key } = event;

    switch (key) {
      case 'Backspace':
        setValue(prev => {
          return prev.slice(0, prev.length - 1);
        });
        if (value.length) {
          event.preventDefault();
          event.stopPropagation();
        }
        break;
      case '0':
      case '1':
      case '2':
      case '3':
      case '4':
      case '5':
      case '6':
      case '7':
      case '8':
      case '9':
        setValue(prev => {
          return prev.length < codeCount ? `${prev}${key}` : prev;
        });
        break; 
      default:
        break;

    }
  }

  const updateDigits = () => {
    const el = elementRef.current;
    const children = el.childNodes;
    const highlightIndex = (value.length > children.length - 1) ?
      children.length - 1 : value.length;

    children.forEach((digit, index) => {
      digit.textContent = value[index] || '';
      digit.classList.toggle('highlight', index === highlightIndex);
    });
  }

  useEffect(() => {
    updateDigits();
  }, [value]);

  const digitItems = [];
  for (let i = 0; i < codeCount; i++) {
    digitItems.push(<span className="digital" />);
  }

  return (
      <div
        className="pin-code"
        ref={elementRef}
        tabIndex={-1}
        onKeyDown={handleKeyDown}
      >
        {digitItems}
      </div>
  );
});

export default PinCode;
