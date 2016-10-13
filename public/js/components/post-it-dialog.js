import React from 'react';

const PostItDialog = (props) => {
  let postItTitle;
  let postItDescription;

  function handleSave() {
    props.onAdd(postItTitle.value, postItDescription.value);
  }

  if (props.isVisible) {
    return (
      <div className="main-dialog-container">
        <div className="dialog-container">
          <button className="close" onClick={props.onHandleClose}>&#10005;</button>
          <input
            type="text"
            name="title-field"
            placeholder="Title"
            ref={(c) => { postItTitle = c; }}
          />
          <input
            type="text"
            name="list-field"
            placeholder="Description"
            ref={(c) => { postItDescription = c; }}
          />
          <nav className="post-it-container">
            <div className="dropdown">
              <button className="pick-color-button">Color</button>
              <div className="dropdown-content">
                <button className="button-color3" id="yellow">Yellow</button>
                <button className="button-color2" id="pink">Pink</button>
                <button className="button-color1" id="blue">Blue</button>
                <button className="button-color4" id="green">Green</button>
              </div>
            </div>
            <button className="add-listitem-button">List</button>
            <button className="save-button" onClick={handleSave}>Save</button>
          </nav>
        </div>
      </div>
  );
  }
  return null;
};
PostItDialog.propTypes = () => ({
  isVisible: React.PropTypes.bool
});

export default PostItDialog;
