import React from 'react';
import PostItList from './column-postits';

//får in alla columner
const Columns = (props) => {
  return (
    <div className={props.className}>
      <ul className="ul-rowstyle"> {
        props.columns.map(column =>
          (<Column
            key={column.id}
            id={column.id}
            columnTitle={column.title}
            onRemove={props.onRemove}
            />
          )).reverse()
        }
      </ul>
    </div>);
};

Columns.propTypes = () => ({
  columns: React.PropTypes.arrayOf(
    React.PropTypes.shape({
      id:React.PropTypes.string,
      title: React.PropTypes.string.isRequired
    })
  ),
  onRemove: React.PropTypes.func
});


export default Columns;
