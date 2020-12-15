import React from 'react';
import { ListItem }  from '../../src/index';
import appleImg from '../resources/apple.png';
import orangeImg from '../resources/orange.png';

export default function OneLineLiIcon() {
  let lineText1 =  'A apple is here';
  let lineText2 =  'An orange is here';
  let dataSets = {'data-name': 'orange', 'data-place': 'desktop'};
  return (
    <>
    <ListItem icon={appleImg} primary={lineText1} focusable='true' outerClass='orange'/>
    <ListItem icon={orangeImg} primary={lineText2} focusable='true' data={dataSets}/>
    </>
  );
}
