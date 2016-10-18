import React from 'react';

const Requirement = (props) => {
  function remove() {
    props.onRemove(props.id);
  }
  return (<li className="post-it-container">
    {props.requirement}
    <button className="badge" onClick={remove}>X</button>
  </li>);
};

Requirement.propTypes = () => ({
  id: React.PropTypes.number,
  requirement: React.PropTypes.string,
  onRemove: React.PropTypes.func
});

const RequirementList = (props) => (<ul className="list-group">
  {props.requirements.map(requirement => (
    <Requirement
      key={requirement.id}
      id={requirement.id}
      requirement={requirement.requirement}
      onRemove={props.onRemove}
    />
  )).reverse()
}</ul>);

RequirementList.propTypes = () => ({
  requirements: React.PropTypes.arrayOf(
    React.PropTypes.shape({
      id: React.PropTypes.number,
      requirement: React.PropTypes.string
    })
  ),
  onRemove: React.PropTypes.func
});

export default RequirementList;
