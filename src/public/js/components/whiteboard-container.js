import React from 'react';
import { connect } from 'react-redux';
import { addPostIt, showDialog, hideDialog, showEditDialog, hideEditDialog, removePostIt, updatePostIt } from '../actions';
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
          onShowEditDialog={props.onShowEditDialog}
        />
        <Column
          title="stories"
          postIts={props.storiesPostIts}
          onRemove={props.onRemove}
        />
        <Column
          title="currsprint"
          postIts={props.currSprintPostIts}
          onRemove={props.onRemove}
        />
        <Column
          title="wip"
          postIts={props.wipPostIts}
          onRemove={props.onRemove}
        />
        <Column
          title="test"
          postIts={props.testPostIts}
          onRemove={props.onRemove}
        />
        <Column
          title="done"
          postIts={props.donePostIts}
          onRemove={props.onRemove}
        />
      </ul>
    </div>
  </div>
);
WhiteboardContainer.propTypes = () => ({
  onShowDialog: React.PropTypes.func,
  isVisible: React.PropTypes.bool,
  onAdd: React.PropTypes.func,
  onHideDialog: React.PropTypes.func,
  showEdit: React.PropTypes.func,
  onUpdate: React.PropTypes.func,
  onHideEditDialog: React.PropTypes.func,
  postIts: React.PropTypes.element,
  onRemove: React.PropTypes.func,
  onShowEditDialog: React.PropTypes.func
});

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
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(WhiteboardContainer);
