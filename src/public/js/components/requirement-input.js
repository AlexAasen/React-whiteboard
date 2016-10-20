import React from 'react';

const RequirementInput = (props) => {
  let requirementInput;

  function addRequirement() {
    props.onAdd(requirementInput.value);
    requirementInput.value = '';
    requirementInput.focus();
  }

  function handleKeyDown(event) {
    if (event.key === 'Enter') {
      addRequirement();
    }
  }

  function handleClick() {
    addRequirement();
  }

  return (
    <div className="dialog-container">
      <input
        type="text"
        ref={(c) => {
          requirementInput = c;
        }}
        onKeyDown={handleKeyDown}
      />
      <button
        type="button"
        className="btn btn-primary"
        onClick={handleClick}
      >
        Add item
      </button>
    </div>
  );
};

export default RequirementInput;
