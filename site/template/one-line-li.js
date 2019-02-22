import React from 'react';
import { ListItem }  from '../../src/index';

export default function OneLineLi() {
  let lineText1 =  'A apple is here';
  let lineText2 =  'An orange is here';
  return (
    <>
    <ListItem lines={[lineText1]} focusable='true' outerClass='fake-focus'/>
    <ListItem lines={[lineText2]} focusable='true'/>
    </>
  );
}
