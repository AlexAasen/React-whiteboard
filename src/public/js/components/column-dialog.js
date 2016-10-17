import React from 'react';

const ColumnDialog = (props) => {
  let columnTitle;

  function handleSave() {
    props.onAdd(columnTitle.value);
  }

  if (props.isVisible) {
    return (
      <div className="main-dialog-container">
        <div className="dialog-container">
          <button className="close" onClick={props.onHandleClose}>&#10005;</button>
          <div className="text-area">
            <input
              type="text"
              name="title-field"
              placeholder="Title"
              ref={(c) => { columnTitle = c; }}
            />
          </div>
          <button className="save-button" onClick={handleSave}>Save</button>
        </div>
      </div>
  );
  }
  return null;
};
ColumnDialog.propTypes = () => ({
  columnTitle: React.PropTypes.string,
  isVisible: React.PropTypes.bool
});

export default ColumnDialog;
