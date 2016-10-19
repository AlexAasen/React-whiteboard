import React from 'react';
import RequirementInput from './requirement-input';
import RequirementList from './requirement-list';
import { connect } from 'react-redux';
import { addRequirement, removeRequirement } from '../actions';


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
      <div className="dialog-container-col">
        <div className="dialog-container">
          <button className="close" onClick={handleClose}>&#10005;</button>
          <div className="text-area">
            <input
              autoFocus
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
          <nav className="text-area">
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
        <div className="dialog-container-col">
          <RequirementInput
            onAdd={props.handleAdd} />
          <RequirementList
            requirements={props.requirements}
            onRemove={props.handleRemove}
          />
        </div>
        </div>
      </div>
  );
  }
  return null;
};
PostItDialog.propTypes = () => ({
  isVisible: React.PropTypes.bool,
  requirements: React.PropTypes.arrayOf(
    React.PropTypes.shape({
      id: React.PropTypes.number,
      requirement: React.PropTypes.string
    })
  ),
  handleAdd: React.PropTypes.func.isRequired,
  handleRemove: React.PropTypes.func.isRequired
});

const mapStateToProps = state => ({
  requirements: state.postitrequirements
});

const mapDispatchToProps = dispatch => ({
  handleAdd: (text) => {
    const requirement = {id: +(new Date()),
    requirement: text
    };
    dispatch(addRequirement(requirement));
  },
  handleRemove: (id) => {
    dispatch(removeRequirement(id));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(PostItDialog);
