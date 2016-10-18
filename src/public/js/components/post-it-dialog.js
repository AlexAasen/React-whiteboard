import React from 'react';

const PostItDialog = (props) => {
  let postItTitle;
  let postItDescription;
  let colorSelect = '';

  function handleSave() {
    if (colorSelect.trim().length > 0) {
      props.onAdd(postItTitle.value, postItDescription.value, colorSelect);
    } else {
      colorSelect = 'yellow';
      props.onAdd(postItTitle.value, postItDescription.value, colorSelect);
    }
  }
  function handleSelect(event) {
    colorSelect = event.currentTarget.id;
  }
  function handleClose() {
    const visfilter = { filter: false };
    props.showDialog(visfilter);
  }

  if (props.isVisible) {
    return (
      <div className="main-dialog-container">
        <div className="dialog-container">
          <button className="close" onClick={handleClose}>&#10005;</button>
          <div className="text-area">
            <input
              type="text"
              name="title-field"
              placeholder="Title"
              ref={(c) => { postItTitle = c; }}
            />
            <textarea
              id="description"
              type="text"
              name="list-field"
              placeholder="Description"
              ref={(c) => { postItDescription = c; }}
            />
          </div>
          <nav className="post-it-container">
            <div className="dropdown">
              <button className="pick-color-button">Color</button>
              <div className="dropdown-content">
                <button
                  className="button-color yellow"
                  id="yellow"
                  onClick={handleSelect}
                >
                  Yellow
                </button>
                <button
                  className="button-color pink"
                  id="pink"
                  onClick={handleSelect}
                >
                    Pink
                </button>
                <button
                  className="button-color green"
                  id="green"
                  onClick={handleSelect}
                >Green
                </button>
                <button
                  className="button-color blue"
                  id="blue"
                  onClick={handleSelect}
                >
                Blue
                </button>
              </div>
            </div>
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
