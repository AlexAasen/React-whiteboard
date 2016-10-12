import React from 'react';

const PostIt = (props) => {
  function removePostIt() {
    props.onRemove(props.id);
  }
  return (
    <li
      className="post-it-container"
    >
      <div className="post-it color3">
        <h3 className="title">{props.title}</h3>
        <p>Do something</p>
        <button className="close" onClick={removePostIt}>&#10005;</button>
        <img src="img/edit24.png" alt="edit post-it" />
      </div>
    </li>
  );
};
PostIt.propTypes = () => ({
  id: React.PropTypes.number.isRequired,
  title: React.PropTypes.string,
  onRemove: React.PropTypes.func
});

const PostItList = props => (<ul className="ul-colstyle">{
  props.postIts.map(postIt =>
  (<PostIt
    key={postIt.id}
    id={postIt.id}
    title={postIt.title}
    onRemove={props.onRemove}
  />
)).reverse()
}</ul>);

PostItList.propTypes = () => ({
  postIts: React.PropTypes.arrayOf(
    React.PropTypes.shape({
      id: React.PropTypes.number,
      title: React.PropTypes.string,
      color: React.PropTypes.string
    })
  ),
  onRemove: React.PropTypes.func
});

export default PostItList;
