import React from 'react';
import { connect } from 'react-redux';
import { addPostIt, showDialog, hideDialog, showEditDialog, hideEditDialog, removePostIt, updatePostIt, moveRight, moveLeft } from '../actions';
import AddButton from './add-button';
import PostItDialog from './post-it-dialog';
import Column from './column';
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
        <Column
          title="backlog"
          postIts={props.backlogPostIts}
          onRemove={props.onRemove}
          onMoveRight={props.onMoveRight}
          onMoveLeft={props.onMoveLeft}
          onShowEditDialog={props.onShowEditDialog}
        />
        <Column
          title="stories"
          postIts={props.storiesPostIts}
          onMoveRight={props.onMoveRight}
          onMoveLeft={props.onMoveLeft}
          onRemove={props.onRemove}
          onShowEditDialog={props.onShowEditDialog}
        />
        <Column
          title="currsprint"
          postIts={props.currSprintPostIts}
          onMoveRight={props.onMoveRight}
          onMoveLeft={props.onMoveLeft}
          onRemove={props.onRemove}
          onShowEditDialog={props.onShowEditDialog}
        />
        <Column
          title="wip"
          postIts={props.wipPostIts}
          onMoveRight={props.onMoveRight}
          onMoveLeft={props.onMoveLeft}
          onRemove={props.onRemove}
          onShowEditDialog={props.onShowEditDialog}
        />
        <Column
          title="test"
          postIts={props.testPostIts}
          onMoveRight={props.onMoveRight}
          onMoveLeft={props.onMoveLeft}
          onRemove={props.onRemove}
          onShowEditDialog={props.onShowEditDialog}
        />
        <Column
          title="done"
          postIts={props.donePostIts}
          onMoveRight={props.onMoveRight}
          onMoveLeft={props.onMoveLeft}
          onRemove={props.onRemove}
          onShowEditDialog={props.onShowEditDialog}
        />
      </ul>
    </div>
  </div>
);

const mapStateToProps = state => ({
  isVisible: state.add.displayDialog,
  showEdit: state.edit,
  backlogPostIts: state.column.backlog,
  testPostIts: state.column.test,
  wipPostIts: state.column.wip,
  donePostIts: state.column.done,
  storiesPostIts: state.column.stories,
  currSprintPostIts: state.column.currsprint
});

const mapDispatchToProps = dispatch => ({
  onAdd: (postIt) => {
    dispatch(addPostIt(postIt, postIt.columnId));
  },
  onUpdate: (postIt) => {
    dispatch(updatePostIt(postIt, postIt.columnId));
  },
  onRemove: (id, columnTitle) => {
    dispatch(removePostIt(id, columnTitle));
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
  },
  onMoveRight: (postIt) => {
    dispatch(moveRight(postIt));
  },
  onMoveLeft: (postIt) => {
    dispatch(moveLeft(postIt));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(WhiteboardContainer);
