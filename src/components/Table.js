import React from 'react';
import Row from './Row';

const Table = (props) => {
  return(
    <table className="f6 w-100 mw8 center">
      <thead>
      <tr>
        <th className="tc fw6 tl pa3 bg-white f4">ID</th>
        <th className="tc fw6 tl pa3 bg-white f4"><p className="grow-large center pa1 ma1">Joke!</p></th>
      </tr>
      </thead>
      <tbody className="lh-copy">
      {
        props.jokes.map((joke, i) => {
          return(
            <Row
              updatenumber ={props.updateNumber}
              messagenumber = {props.messageNumber}
              updatestatenumber = {props.updateStateNumber}
              key={i}
              id={i+1}
              value={props.jokes[i].value}
            />
          );
        })
      }
      </tbody>
    </table>
  );
}

export default Table;
