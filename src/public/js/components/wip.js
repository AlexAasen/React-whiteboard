import React from 'react';

const Wip = (props) => {
  return (
    <li className="wb-section" id="wip">
      <div className="wb-section">
        <div className="wb-section-title">
          <h2 id="wip">WIP</h2>
        </div>
        <div className="wb-section-content">
          {props.children}
        </div>
      </div>
    </li>);
};

Wip.propTypes = () => ({
  postIt: React.PropTypes.element
});

export default Wip;
