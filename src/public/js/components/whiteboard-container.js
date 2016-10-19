import React from 'react';
import { connect } from 'react-redux';
import { addPostIt, showDialog, hideDialog, showEditDialog, hideEditDialog, removePostIt, updatePostIt } from '../actions';
import AddButton from './add-button';
import PostItDialog from './post-it-dialog';
import Backlog from './backlog';
import Stories from './stories';
import Wip from './wip';
import CurrSprint from './curr-sprint';
import Test from './test';
import Done from './done';
import SideBar from './side-bar';
import EditDialog from './edit-dialog';

const WhiteboardContainer = props => (
  <div className="main-container">
    <SideBar>
      <AddButton
        onShowDialog={props.onShowDialog}
      />
    </ SideBar>
    <PostItDialog
      isVisible={props.isVisible}
      onAdd={props.onAdd}
      onHideDialog={props.onHideDialog}
    />
    <EditDialog
      showEdit={props.showEdit}
      onUpdate={props.onUpdate}
      onHideEditDialog={props.onHideEditDialog}
    />
    <div className="nav wb-sections">
      <ul className="ul-rowstyle">
        <Backlog
          postIts={props.backlogPostIts}
          onRemove={props.onRemove}
          onShowEditDialog={props.onShowEditDialog}
        />
        <Stories
          postIts={props.backlogPostIts}
          onRemove={props.onRemove}
        />
        <CurrSprint
          postIts={props.backlogPostIts}
          onRemove={props.onRemove}
        />
        <Wip
          postIts={props.backlogPostIts}
          onRemove={props.onRemove}
        />
        <Test
          postIts={props.backlogPostIts}
          onRemove={props.onRemove}
        />
        <Done
          postIts={props.backlogPostIts}
          onRemove={props.onRemove}
        />
      </ul>
    </div>
  </div>
);

const mapStateToProps = state => ({
  isVisible: state.add.displayDialog,
  showEdit: state.edit,
  backlogPostIts: state.backlog,
  testPostIts: state.test,
  wipPostIts: state.wip,
  donePostIts: state.done,
  storiesPostIts: state.stories,
  currSprintPostIts: state.currsprint
});

const mapDispatchToProps = dispatch => ({
  onAdd: (postIt) => {
    dispatch(addPostIt(postIt));
  },
  onUpdate: (postIt) => {
    dispatch(updatePostIt(postIt));
  },
  onRemove: (id) => {
    dispatch(removePostIt(id));
  },
  onShowDialog: () => {
    dispatch(showDialog());
  },
  onHideDialog: () => {
    dispatch(hideDialog());
  },
  onShowEditDialog: (postIt) => {
    dispatch(showEditDialog(postIt));
  },
  onHideEditDialog: () => {
    dispatch(hideEditDialog());
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(WhiteboardContainer);
