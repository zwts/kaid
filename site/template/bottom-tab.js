import React from 'react';
import { Tab, TabPanel }  from '../../src/index';

export default function BottomTab() {
  return (
    <>
    <Tab type="bottom">
      <TabPanel key="apple" title="header1">
        apple number 1
      </TabPanel>
      <TabPanel key="orange" title="header3">
        orange number 2
      </TabPanel>
      <TabPanel key="banana" title="header3">
        banana number 3
      </TabPanel>
    </Tab>
    </>
  );
}
