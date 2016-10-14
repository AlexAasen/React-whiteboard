import React from 'React';

const AddColumn = props => (
  let addedColumn;
  function handleClick() {
    props.onAddColumn(addedColumn.value);
  }

  return (
    <img
      src="img/add.png"
      alt="add col"
      onClick={handleClick}/>
  );

);
