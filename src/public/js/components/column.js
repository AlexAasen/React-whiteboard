import React from 'react';

const PostIt = (props) => {
  function removePostIt() {
    const userPick = confirm('Are you sure you want to delete?');
    if (userPick === true) {
      props.onRemove(props.id, props.columnId);
    }
  }
  function editPost() {
    props.onShowEditDialog({
      id: props.id,
      title: props.title,
      description: props.description,
      color: props.color,
      columnId: props.columnId,
      requirements: props.requirements,
      displayEditDialog: true
    });
  }
  return (
    <li
      className="post-it-container"
    >
      <div className={`post-it ${props.color}`}>
        <h3 className="title">{props.title}</h3>
        <p className="description">{props.description}</p>
        <button className="edit" onClick={editPost} />
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
  columnId: React.PropTypes.string,
  requirements: React.PropTypes.arrayOf(
    React.PropTypes.shape({
      id: React.PropTypes.number,
      requirement: React.PropTypes.string
    })
  ),
  onRemove: React.PropTypes.func,
  onShowEditDialog: React.PropTypes.func
});

const Column = (props) => {
  return (
    <li className="wb-section" id={props.title}>
      <div className="wb-section">
        <div className="wb-section-title" id={props.title}>
          <h2 id={props.title}>{props.title}</h2>
        </div>
        <div className="wb-section-content">
          <ul className="ul-colstyle">{
                props.postIts.map(postIt =>
                (<PostIt
                  key={postIt.id}
                  id={postIt.id}
                  title={postIt.title}
                  color={postIt.color}
                  columnId={postIt.columnId}
                  description={postIt.description}
                  requirements={postIt.requirements}
                  onRemove={props.onRemove}
                  onShowEditDialog={props.onShowEditDialog}
                />
              )).reverse()
              }</ul>
        </div>
      </div>
    </li>);
};
Column.propTypes = () => ({
  postIts: React.PropTypes.arrayOf(
    React.PropTypes.shape({
      id: React.PropTypes.number,
      title: React.PropTypes.string,
      color: React.PropTypes.string,
      columnId: React.PropTypes.string,
      description: React.PropTypes.string,
      requirements: React.PropTypes.arrayOf(
        React.PropTypes.shape({
          id: React.PropTypes.number,
          requirement: React.PropTypes.string
        })
      )
    })
  ),
  onRemove: React.PropTypes.func,
  onShowEditDialog: React.PropTypes.func
});

export default Column;
