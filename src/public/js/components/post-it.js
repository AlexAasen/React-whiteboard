import React from 'react';

const PostIt = (props) => {
  function removePostIt() {
   props.onRemove(props.id);
 }
  return (
    <li className="post-it-container">
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
  id: React.PropTypes.number,
  title: React.PropTypes.string,
  color: React.PropTypes.string,
  description: React.PropTypes.string,
  columnId: React.PropTypes.number,
  onRemove: React.PropTypes.func
});

export default PostIt;
