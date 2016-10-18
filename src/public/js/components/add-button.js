import React from 'react';

const AddButton = (props) => {
  function handleClick() {
    const visfilter = { filter: true };
    props.showDialog(visfilter);
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
