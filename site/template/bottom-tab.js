import React from 'react';
import { Tab, TabPanel }  from '../../src/index';

export default function BottomTab() {
  return (
    <>
    <Tab position="bottom">
      <TabPanel key="apple" title="header1">
        <div tabIndex="-1">apple number 1</div>
      </TabPanel>
      <TabPanel key="orange" title="header3">
        <div tabIndex="-1">orange number 2</div>
      </TabPanel>
      <TabPanel key="banana" title="header3">
        <div tabIndex="-1">banana number 3</div>
      </TabPanel>
    </Tab>
    </>
  );
}
