import React from 'react';

const SideBar = (props) => {
  return (
    <div className="nav side-menu">
      <ul className="ul-colstyle">
          {props.children}
      </ul>
    </div>
  );
};
SideBar.propTypes = () => ({
  addButton: React.PropTypes.element
});
export default SideBar;
