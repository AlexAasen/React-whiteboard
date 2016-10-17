import React from 'react';

const Done = (props) => {
  return (
    <li className="wb-section" id="done">
      <div className="wb-section">
        <div className="wb-section-title">
          <h2 id="done">Done</h2>
        </div>
        <div className="wb-section-content">
          {props.children}
        </div>
      </div>
    </li>);
};

Done.propTypes = () => ({
  postIt: React.PropTypes.element
});

export default Done;
