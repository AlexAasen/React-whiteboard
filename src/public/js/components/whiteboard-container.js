import React from 'react';
import { connect } from 'react-redux';
import { addPostIt, showDialog, hideDialog, showEditDialog, hideEditDialog, removePostIt, updatePostIt } from '../actions';
import AddButton from './add-button';
import PostItDialog from './post-it-dialog';
import Backlog from './backlog';
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
      </ul>
    </div>
  </div>
);
WhiteboardContainer.propTypes = () => ({
  onShowDialog: React.PropTypes.func,
  isVisible: React.PropTypes.bool,
  onAdd: React.PropTypes.func,
  onHideDialog: React.PropTypes.func
});

const mapStateToProps = state => ({
  isVisible: state.add.displayDialog,
  showEdit: state.edit,
  backlogPostIts: state.backlog
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
