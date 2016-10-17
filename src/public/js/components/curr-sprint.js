import React from 'react';

const CurrSprint = (props) => {
  return (
    <li className="wb-section" id="curr-sprint">
      <div className="wb-section">
        <div className="wb-section-title">
          <h2 id="curr-sprint">Current sprint</h2>
        </div>
        <div className="wb-section-content">
          {props.children}
        </div>
      </div>
    </li>);
};

CurrSprint.propTypes = () => ({
  postIt: React.PropTypes.element
});

export default CurrSprint;
