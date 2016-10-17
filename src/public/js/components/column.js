import React from 'react';
import PostItList from './column-postits';

//får in alla columner
const Backlog = (props) => {
  return (
    <li className="wb-section locked" id="backlog">
      <div className="wb-section">
        <div className="wb-section-title" id="backlog">
          <h2 className="title">"Backlog"</h2>
        </div>
        <div className="wb-section-content">
          <ul className="ul-rowstyle">
            {props.children}
          </ul>
        </div>
      </div>
    </li>);
}

export default Backlog;
