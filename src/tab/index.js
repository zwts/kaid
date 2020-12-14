import React, { useState } from "react";
import './index.scss';

const Tab = (props) => {
  const keys = props.children.map(item => item.key);
  const [activeTab, changeActive] = useState(keys[0]);

  function findNextKey(active, operator) {
    let curIndex = keys.indexOf(active);
    let nextIndex;

    if (operator) {
      if (curIndex === keys.length - 1){
        nextIndex = 0;
      } else {
        nextIndex = curIndex + 1;
      }
    } else {
      if (curIndex === 0 && !operator) {
        nextIndex = keys.length - 1;
      } else {
        nextIndex = curIndex - 1;
      }
    }

    return keys[nextIndex];
  }

  return (
    <div className='kai-tab-box' onKeyDown={evt => {
      switch(evt.key) {
        case 'ArrowLeft':
          changeActive(findNextKey(activeTab, -1));
          break;
        case 'ArrowRight':
          changeActive(findNextKey(activeTab, 1));
          break;
        default:
          break;
      }
    }} tabIndex="-1">
      <div className="kai-tab-header">
        {props.children.map(item => {
          let className = "tab-btn ";
          if (item.key === activeTab) {
            className += " active";
          }
          return (
            <div className={className}
                 onClick={() => {
                   changeActive(item.key);
                 }}
            >
              {item.props.title}
            </div>
          );
        })}
      </div>
      <div className="kai-tab-content">
        {props.children.map(item => {
          let className = "tab-panel ";
          if (item.key === activeTab) {
            className += " active";
          }
          return (
            <div className={className} key={item.key}>
              {item}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export const TabPanel = props => {
  return <>{props.children}</>;
};

export default Tab;
