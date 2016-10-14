import React from 'react';
import { connect } from 'react-redux';

const WhiteboardContainer = props => (
  <div class="main-container">
      <div class="nav side-menu">
        <ul class="ul-colstyle">
          <li>
            <div class="img-holder nav-menu add-col">
            <img
              src="img/add.png"
              alt="add col"
              onClick={handleClick}/>
            </div>
          </li>
          <li>
            <div class="img-holder nav-menu add-post-it">
              <img src="img/post-its.png" alt="add post-it"/>
            </div>
          </li>
        </ul>
      </div>

      <div class="nav wb-sections">
        <ul class="ul-rowstyle">
          <li class="wb-section locked" id="backlog">
            <div class="wb-section">
              <div class="wb-section-title">
                <h2 id="backlog">Backlog</h2>
              </div>
              <div class="wb-section-content">
                <ul class="ul-colstyle">
                  <li class="post-it-container">
                    <div class="post-it color1">
                      <h3 class="title">Do something</h3>
                      <p>Description of something</p>
                    </div>
                  </li>
                  <li class="post-it-container">
                    <div class="post-it color2">
                      <h3 class="title">Do something</h3>
                      <p>Description of something</p>
                    </div>
                  </li>
                  <li class="post-it-container">
                    <div class="post-it color3">
                      <h3 class="title">Do something</h3>
                      <p>Description of something</p>
                    </div>
                  </li>
                  <li class="post-it-container">
                    <div class="post-it color4">
                      <h3 class="title">Do something</h3>
                      <p>Description of something</p>
                    </div>
                  </li>
                  <li class="post-it-container">
                    <div class="post-it color1">
                      <h3 class="title">Do something</h3>
                      <p>Description of something</p>
                    </div>
                  </li>
                  <li class="post-it-container">
                    <div class="post-it color2">
                      <h3 class="title">Do something</h3>
                      <p>Description of something</p>
                    </div>
                  </li>
                  <li class="post-it-container">
                    <div class="post-it color3">
                      <h3 class="title">Do something</h3>
                      <p>Description of something</p>
                    </div>
                  </li>
                  <li class="post-it-container">
                    <div class="post-it color4">
                      <h3 class="title">Do something</h3>
                      <p>Description of something</p>
                    </div>
                  </li>
                  <li class="post-it-container">
                    <div class="post-it color1">
                      <h3 class="title">Do something</h3>
                      <p>Description of something</p>
                    </div>
                  </li>
                  <li class="post-it-container">
                    <div class="post-it color2">
                      <h3 class="title">Do something</h3>
                      <p>Description of something</p>
                    </div>
                  </li>
                  <li class="post-it-container">
                    <div class="post-it color3">
                      <h3 class="title">Do something</h3>
                      <p>Description of something</p>
                    </div>
                  </li>
                  <li class="post-it-container">
                    <div class="post-it color4">
                      <h3 class="title">Do something</h3>
                      <p>Description of something</p>
                    </div>
                  </li>
                </ul>
              </div>
              </div>
          </li>

          <div class="nav wb-sections">
            <ul class="ul-rowstyle">
              <li class="wb-section" id="stories">
                <div class="wb-section">
                  <div class="wb-section-title">
                    <h2 id="stories">Stories</h2>
                  </div>
                  <div class="wb-section-content">
                    <p>Content here</p>
                  </div>
                </div>
              </li>
              <li class="wb-section" id="curr-sprint">
                <div class="wb-section">
                  <div class="wb-section-title">
                    <h2 id="curr-sprint">Current sprint</h2>
                  </div>
                  <div class="wb-section-content">
                    <p>Content here</p>
                  </div>
                </div>
              </li>
              <li class="wb-section" id="wip">
                <div class="wb-section">
                  <div class="wb-section-title">
                    <h2 id="wip">WIP</h2>
                  </div>
                  <div class="wb-section-content">
                    <p>Content here</p>
                  </div>
                </div>
              </li>
              <li class="wb-section" id="test">
                <div class="wb-section">
                  <div class="wb-section-title">
                    <h2 id="test">Testing</h2>
                  </div>
                  <div class="wb-section-content">
                    <p>Content here</p>
                  </div>
                </div>
              </li>
            </ul>
          </div>

          <li class="wb-section locked" id="done">
            <div class="wb-section">
              <div class="wb-section-title">
                <h2 id="done">Done</h2>
              </div>
              <div class="wb-section-content">
                <p>Content here</p>
              </div>
            </div>
          </li>

        </ul>
      </div>
    </div>
);

const mapStateToProps = state => ({

});

const mapDispatchToProps = dispatch => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(WhiteboardContainer);
