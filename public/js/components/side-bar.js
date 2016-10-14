import React from 'react';

const SideBar = (props) => {
  return (
    <div className="nav side-menu">
      <ul className="ul-colstyle">
        <li>
          <div className="img-holder nav-menu add-col">
            <img src="img/add.png" alt="add col" />
          </div>
        </li>
        <li>
          {props.children}
        </li>

      </ul>
    </div>
  );
};
SideBar.propTypes = () => ({
  addButton: React.PropTypes.element
});
export default SideBar;
