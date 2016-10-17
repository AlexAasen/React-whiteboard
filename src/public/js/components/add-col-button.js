import React from 'react';

const AddColButton = (props) => {
  function handleClick() {
    props.showDialog();
  }
  return (
    <li>
      <div className="img-holder nav-menu add-col">
        <button className="add-button-col" onClick={handleClick} />
      </div>
    </li>
  );
};

AddColButton.propTypes = () => ({
  showDialog: React.PropTypes.func
});

export default AddColButton;
