import React from 'react';

const AddButton = (props) => {
  function handleClick() {
    props.onShowDialog();
  }
  return (
    <div className="img-holder nav-menu add-post-it">
      <button className="add-button" onClick={handleClick} />
    </div>
  );
};
AddButton.propTypes = () => ({
  onShowDialog: React.PropTypes.func
});

export default AddButton;
