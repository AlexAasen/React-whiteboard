import React from 'react';

const Test = (props) => {
  return (
    <li className="wb-section" id="test">
      <div className="wb-section">
        <div className="wb-section-title">
          <h2 id="test">Testing</h2>
        </div>
        <div className="wb-section-content">
          {props.children}
        </div>
      </div>
    </li>);
};

Test.propTypes = () => ({
  postIt: React.PropTypes.element
});

export default Test;
