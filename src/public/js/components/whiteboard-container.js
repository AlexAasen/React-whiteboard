import React from 'react';
import { connect } from 'react-redux';
import { addPostIt, setVisFilterPostIt, removePostIt } from '../actions';
import AddButton from './add-button';
import PostItDialog from './post-it-dialog';
import Backlog from './backlog';
import Stories from './stories';
import Wip from './wip';
import CurrSprint from './curr-sprint';
import Test from './test';
import Done from './done';
import SideBar from './side-bar';

class WhiteboardContainer extends React.Component {
  render() {
    return (
      <div className="main-container">
        <SideBar>
          <AddButton
            showDialog={this.props.showDialog}
          />
        </ SideBar>
        <PostItDialog
          isVisible={this.props.isVisible}
          onAdd={this.props.onAdd}
          showDialog={this.props.showDialog}
        />
        <div className="nav wb-sections">
          <ul className="ul-rowstyle">
        <Backlog
            postIts={this.props.backlogPostIts}
            onRemove={this.props.onRemove}
          />
        <Stories
            postIts={this.props.storiesPostIts}
            onRemove={this.props.onRemove}
          />
        <CurrSprint
            postIts={this.props.currSprintPostIts}
            onRemove={this.props.onRemove}
          />
        <Wip
            postIts={this.props.wipPostIts}
            onRemove={this.props.onRemove}
          />
        <Test
            postIts={this.props.testPostIts}
            onRemove={this.props.onRemove}
          />
        <Done
            postIts={this.props.donePostIts}
            onRemove={this.props.onRemove}
          />
        </ul>
      </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  isVisible: state.visfilter.filter,
  backlogPostIts: state.backlog,
  testPostIts: state.test,
  wipPostIts: state.wip,
  donePostIts: state.done,
  storiesPostIts: state.stories,
  currSprintPostIts: state.currsprint
});

const mapDispatchToProps = dispatch => ({
  onAdd: (postItTitle, postItDescription, postItColor) => {
    const postIt = {
      id: +(new Date()),
      title: postItTitle,
      description: postItDescription,
      color: postItColor
    };
    dispatch(addPostIt(postIt));
    const visfilter = { filter: false };
    dispatch(setVisFilterPostIt(visfilter));
  },
  onRemove: (id) => {
    dispatch(removePostIt(id));
  },
  showDialog: (visfilter) => {
    dispatch(setVisFilterPostIt(visfilter));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(WhiteboardContainer);
