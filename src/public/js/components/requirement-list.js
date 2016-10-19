import React from 'react';

const Requirement = (props) => {
  function remove() {
    props.onRemove(props.id);
  }
  return (<li className="post-it-container">
    <div className="text-area">
    <h3>{props.requirement}</h3>
    </div>
    <button className="badge" onClick={remove}>X</button>
  </li>);
};

Requirement.propTypes = () => ({
  id: React.PropTypes.number,
  requirement: React.PropTypes.string,
  onRemove: React.PropTypes.func
});

const RequirementList = props => {
  if(props.requirements){
    return (
      <ul className="ul-colstyle">
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
  }
  return null;
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
