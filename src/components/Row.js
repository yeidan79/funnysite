import React from 'react';
import ReactTooltip from 'react-tooltip';
import './css/Row.css';

const Row = (props) => {
  return(
    <tr>
      <td className="tc pa3 bg-white"
          data-tip=""
          onMouseOver={props.updatenumber}
          onMouseOut={props.updatestatenumber}
      >
          {props.id}
          <ReactTooltip place="left" type="dark" effect="float">
            <p>
              {props.messagenumber}
            </p>
          </ReactTooltip>
      </td>

      <td className="pa3 bg-white highlight">{props.value}</td>
    </tr>
  );
}

export default Row;
