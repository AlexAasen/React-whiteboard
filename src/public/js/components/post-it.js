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

const PostItList = props => (<ul className="ul-colstyle">{
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
}</ul>);

PostItList.propTypes = () => ({
  postIts: React.PropTypes.arrayOf(
    React.PropTypes.shape({
      id: React.PropTypes.number,
      title: React.PropTypes.string,
      color: React.PropTypes.string,
      description: React.PropTypes.string
    })
  ),
  onRemove: React.PropTypes.func
});

export default PostItList;
