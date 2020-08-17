import React from 'react';
import './css/Button.css';

const Button = (props) => {
  return(
    <div className="tc pa4">
      <button type="button"
      className="f6 noborder dim ph3 pv2 mb2 dib black b colorverde br3 pointer"
      onClick={props.handleClick}>
        {props.name}
      </button>
    </div>
  );
}

export default Button;
