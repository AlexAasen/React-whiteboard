import React from 'react';

const PostIt = (props) => {
  function removePostIt() {
    const id = props.id;
    props.onRemove(id);
  }
  return (
    <li
      className="post-it-container"
    >
      <div className={`post-it ${props.color}`}>
        <h3 className="title">{props.title}</h3>
        <p className="description">{props.description}</p>
        <img src="img/edit24.png" id="edit" alt="edit post-it" />
        <button className="close" onClick={removePostIt}>&#10005;</button>
      </div>
    </li>
  );
};
PostIt.propTypes = () => ({
  id: React.PropTypes.number.isRequired,
  title: React.PropTypes.string,
  color: React.PropTypes.string,
  description: React.PropTypes.string,
  onRemove: React.PropTypes.func
});

const Wip = (props) => {
  return (
    <li className="wb-section" id="wip">
      <div className="wb-section">
        <div className="wb-section-title">
          <h2 id="wip">WIP</h2>
        </div>
        <div className="wb-section-content">
        <ul className="ul-colstyle">{
          props.postIts.map(postIt =>
          (<PostIt
            key={postIt.id}
            id={postIt.id}
            title={postIt.title}
            color={postIt.color}
            description={postIt.description}
            onRemove={props.onRemove}
          />
        )).reverse()
        }</ul>
        </div>
      </div>
    </li>);
};

Wip.propTypes = () => ({
  postIt: React.PropTypes.element
});

export default Wip;