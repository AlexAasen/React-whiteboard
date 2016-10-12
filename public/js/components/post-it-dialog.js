import React from 'react';

const PostItDialog = (props) => {
  let postItTitle;

  function handleSave() {
    props.onAdd(postItTitle.value);
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
          <nav className="post-it-container">
            <div className="dropdown">
              <button className="pick-color-button">Color</button>
              <div className="dropdown-content">
                <a href="#yellow" id="yellow">Yellow</a>
                <a href="#pink" id="pink">Pink</a>
                <a href="#blue" id="blue">Blue</a>
                <a href="#green" id="green">Green</a>
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
