import React from 'react';

const AddButton = (props) => {
  function handleClick() {
    props.showDialog();
  }
  return (
    <div className="img-holder nav-menu add-post-it">
      <button className="add-button" onClick={handleClick} />
    </div>
  );
};

AddButton.propTypes = () => ({
  showDialog: React.PropTypes.func
});

export default AddButton;
