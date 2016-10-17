import React from 'react';

const PostIt = (props) => {
  function removePostIt() {
    props.onRemove(props.postIt);
  }
  return (
    <li
      className="post-it-container"
    >
      <div className={`post-it ${props.postIt.color}`}>
        <h3 className="title">{props.postIt.title}</h3>
        <p className="description">{props.postIt.description}</p>
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

const PostItList = props => (<ul className="ul-colstyle">{
  props.backlogPostIts.map(postIt =>
  (<PostIt
    key={postIt.id}
    postIt={postIt}
    onRemove={props.onRemove}
  />
)).reverse()
}</ul>);

PostItList.propTypes = () => ({
  backlogPostIts: React.PropTypes.arrayOf(
    React.PropTypes.shape({
      postIt: React.PropTypes.Object
    })
  ),
  onRemove: React.PropTypes.func
});

export default PostItList;
