import React from 'react';

const Menu = (props) => {
  return(
    <div className="flex justify-center">
      {props.children}
    </div>
  );
}

export default Menu;
