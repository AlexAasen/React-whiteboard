import React from 'react';

const Requirement = (props) => {
  function remove() {
    props.onRemove(props.id);
  }
  return (<li className="requirement-container">
    <div className="dialog-container">
      <div className="requirement">{props.requirement}</div>
      <button className="badge" onClick={remove}>X</button>
    </div>
  </li>);
};

Requirement.propTypes = () => ({
  id: React.PropTypes.number,
  requirement: React.PropTypes.string,
  onRemove: React.PropTypes.func
});

const RequirementList = props => {
    return (
      <ul className="ul-colstyle requirements">
        {props.requirements.map(requirement => (
          <Requirement
            key={requirement.id}
            id={requirement.id}
            requirement={requirement.requirement}
            onRemove={props.onRemove}
          />
        )).reverse()
      }</ul>
    );
};

RequirementList.propTypes = () => ({
  requirements: React.PropTypes.arrayOf(
    React.PropTypes.shape({
      id: React.PropTypes.number,
      requirement: React.PropTypes.string
    })
  ),
  requirement: React.PropTypes.string,
  onRemove: React.PropTypes.func
});

export default RequirementList;
