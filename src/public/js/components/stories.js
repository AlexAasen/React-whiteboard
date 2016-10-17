import React from 'react';

const Stories = (props) => {
  return (
    <li className="wb-section" id="stories">
      <div className="wb-section">
        <div className="wb-section-title">
          <h2 id="stories">Stories</h2>
        </div>
        <div className="wb-section-content">
          {props.children}
        </div>
      </div>
    </li>);
};

Stories.propTypes = () => ({
  postIt: React.PropTypes.element
});

export default Stories;
