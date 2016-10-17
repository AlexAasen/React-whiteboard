import React from 'react';

const Backlog = (props) => {
  return (
        <li className="wb-section" id="backlog">
          <div className="wb-section">
            <div className="wb-section-title" id="backlog">
              <h2 id="backlog">Backlog</h2>
            </div>
            <div className="wb-section-content">
              {props.children}
            </div>
          </div>
        </li>);
};
Backlog.propTypes = () => ({
  postIt: React.PropTypes.element
});

export default Backlog;
