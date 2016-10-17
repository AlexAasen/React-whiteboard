import React from 'react';
import PostItList from './column-postits';

//får in alla columner
const Columns = (props) => {
  return (
    <div className={props.className}>
      <ul className="ul-rowstyle"> {
        {props.children}
      </ul>
    </div>);
};

Columns.propTypes = () => ({
  column: React.PropTypes.element,
  onRemove: React.PropTypes.func
});


export default Columns;
