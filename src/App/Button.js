import React from 'react';
import { BtnCheck, Button } from './style/style';

export default props => {

  return (
    <>
      <Button
        onClick={e => props.click && props.click(props.label)} 
        >
          {props.label}
      </Button>
    </>
  )
}