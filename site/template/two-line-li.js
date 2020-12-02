import React from 'react';
import { ListItem } from '../../src/index';
import appleImg from '../resources/apple.png';
import orangeImg from '../resources/orange.png';

export default function TwoLinesLi() {
  const lineText1 = 'A apple is here';
  const lineText1_2 = 'Red';
  const lineText2 = 'An orange is here';
  const lineText2_2 = 'Yellow';
  const dataSets = {
    'data-name': 'orange',
    'data-place': 'desktop'
  };
  return (
    <>
      <ListItem icon={appleImg} primary={lineText1} secondary={lineText1_2}
                focusable='true' outerClass='orange'/>
      <ListItem icon={orangeImg} primary={lineText2} secondary={lineText2_2}
                focusable='true' data={dataSets}/>
    </>
  );
}
