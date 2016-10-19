import React from 'react';
import { connect } from 'react-redux';
import { addRequirement, removeRequirement, getPostItsRequirements } from '../actions';
import RequirementInput from './requirement-input';
import RequirementList from './requirement-list';

const EditDialog = (props) => {
  let postItTitle = props.showEdit.title;
  let postItDescription = props.showEdit.description;
  let colorSelect = props.showEdit.color;
  const postItRequirements = props.requirements;

  function handleSave() {
    props.onUpdate({
      id: props.showEdit.id,
      title: postItTitle.value,
      description: postItDescription.value,
      columnId: props.showEdit.columnId,
      requirements: props.requirements,
      color: colorSelect
    });
    props.onHideEditDialog();
  }
  function handleSelect(event) {
    colorSelect = event.currentTarget.id;
  }
  function handleClose() {
    props.onHideEditDialog();
  }

  if (props.showEdit.displayEditDialog) {
    return (
      <div className="main-dialog-container">
        <div className="dialog-container-col">
          <div className="dialog-container">
            <button className="close" onClick={handleClose}>&#10005;</button>
            <div className="text-area">
              <input
                type="text"
                name="title-field"
                placeholder={props.showEdit.title}
                ref={(c) => { postItTitle = c; }}
              />
              <textarea
                id="description"
                type="text"
                name="list-field"
                placeholder={props.showEdit.description}
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
                  >
                  Green
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
              onAdd={props.handleAdd}
            />
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
EditDialog.propTypes = () => ({
  onHideEditDialog: React.PropTypes.func,
  requirements: React.PropTypes.arrayOf(
    React.PropTypes.shape({
      id: React.PropTypes.number,
      requirement: React.PropTypes.string
    })
  ),
  handleAdd: React.PropTypes.func.isRequired,
  handleRemove: React.PropTypes.func.isRequired,
  onUpdate: React.PropTypes.func
});

const mapStateToProps = state => ({
  requirements: state.postitrequirements
});

const mapDispatchToProps = dispatch => ({
  handleAdd: (text) => {
    const requirement = { id: +(new Date()),
    requirement: text
    };
    dispatch(addRequirement(requirement));
  },
  handleRemove: (id) => {
    dispatch(removeRequirement(id));
  },
  getPostItsRequirements: (postItRequirements) => {
    dispatch(getPostItsRequirements(postItRequirements));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(EditDialog);
