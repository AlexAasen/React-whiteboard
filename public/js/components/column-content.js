import React from 'react';

const ColumnContent = (props) => {
  return (
    <div className="nav wb-sections">
      <ul className="ul-rowstyle">
        <li className="wb-section locked" id="backlog">
          <div className="wb-section">
            <div className="wb-section-title" id="backlog">
              <h2 id="backlog">Backlog</h2>
            </div>
            <div className="wb-section-content">
              {props.children}
            </div>
          </div>
        </li>

        <div className="nav wb-sections">
          <ul className="ul-rowstyle">
            <li className="wb-section" id="stories">
              <div className="wb-section">
                <div className="wb-section-title">
                  <h2 id="stories">Stories</h2>
                </div>
                <div className="wb-section-content">
                  <p>Content here</p>
                </div>
              </div>
            </li>
            <li className="wb-section" id="curr-sprint">
              <div className="wb-section">
                <div className="wb-section-title">
                  <h2 id="curr-sprint">Current sprint</h2>
                </div>
                <div className="wb-section-content">
                  <p>Content here</p>
                </div>
              </div>
            </li>
            <li className="wb-section" id="wip">
              <div className="wb-section">
                <div className="wb-section-title">
                  <h2 id="wip">WIP</h2>
                </div>
                <div className="wb-section-content">
                  <p>Content here</p>
                </div>
              </div>
            </li>
            <li className="wb-section" id="test">
              <div className="wb-section">
                <div className="wb-section-title">
                  <h2 id="test">Testing</h2>
                </div>
                <div className="wb-section-content">
                  <p>Content here</p>
                </div>
              </div>
            </li>
          </ul>
        </div>


        <li className="wb-section locked" id="done">
          <div className="wb-section">
            <div className="wb-section-title">
              <h2 id="done">Done</h2>
            </div>
            <div className="wb-section-content">
              <p>Content here</p>
            </div>
          </div>
        </li>

      </ul>
    </div>
);
};
ColumnContent.propTypes = () => ({
  postIt: React.PropTypes.element
});

export default ColumnContent;
