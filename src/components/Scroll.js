import React from 'react';

const Scroll = (props) => {
  return (
    <div className = "f6 w-100 mw8 center" style={{overflow: 'scroll',   border: '2px solid black',  height: '400px'}}>
      {props.children}
    </div>
  );
};

export default Scroll;
