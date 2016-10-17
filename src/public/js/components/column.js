import React from 'react';
import PostItList from './column-postits';


const Column = (props) => {
  return (
    <li className={props.className} id={props.title}>
      <div className="wb-section">
        <div className="wb-section-title" id={props.title}>
          <h2 className="title">{props.title}</h2>
        </div>
        <div className="wb-section-content">
          <ul className="ul-rowstyle">
            {props.children}
          </ul>
        </div>
      </div>
    </li>);
  };

    Column.propTypes = () => ({
      postIt: React.PropTypes.element
    });

export default Column;
