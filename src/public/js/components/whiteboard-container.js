import React from 'react';
import AddButton from './add-button';
import AddColButton from './add-col-button';
import PostIt from './post-it';
import PostItDialog from './post-it-dialog';
import ColumnDialog from './column-dialog';
import Columns from './columns';
import Column from './column';
import PostItList from './column-postits';
import SideBar from './side-bar';
import * as actions from '../actions';
import { connect } from 'react-redux';

const WhiteboardContainer = props => (
  <div className="main-container">
    <SideBar>
      <AddColButton
      showDialog={props.handleDialogColumn}
      />
      <AddButton
        showDialog={props.handleDialogPostIt}
      />
    </ SideBar>
    <PostItDialog
      isVisiblePostIt={props.displayDialog}
      onAddPostIt={props.onAddPostIt}
      onHandleClose={props.handleClose}
    />
    <ColumnDialog
      isVisible={props.displayColDialog}
      onAddCol={props.handleAddCol}
      onHandleClose={props.handleClose}
    />
    <div className="nav wb-sections">
      <ul className="ul-rowstyle">
        <Column
          className="wb-section locked"
          title="backlog">
          <PostIt
            postIts={props.backlog}
            onRemove={props.handleRemove}
          />
        </Column>
        <Columns
          className="nav wb-section"
          columns={props.columns}
          onRemove={props.handleRemove}
        />
        <Column
          className="wb-section locked"
          title="done">
          <PostIt
            postIts={props.done}
            onRemove={props.handleRemove}
          />
        </Column>
      </ul>
    </div>
  </div>
);

const mapStateToProps = state => ({
  postIts: state.columns.column.postIts,
  columns: state.columns,
  postIt: state.columns.column.postIts.postIt,
  isVisiblePostIt: state.postitDialog,
  isVisibleCol: state.columnDialog

});

const mapDispatchToProps = dispatch => ({
  onAddPostIt: (postItTitle, postItDescription, postItColor) => {
    const postIt = {
          id: +(new Date()),
          title: postTitle,
          description: postItDescription,
          color: postItColor,
    };
    dispatch(addPostIt(postIt));
  },
  onAddCol: (colTitle) => {
    const column = {
          id: colTitle,
          title: colTitle
    };
    dispatch(addColumn(column));
  },
  handleClose: () => {
   dispatch(setVisFilterCol(false));
   dispatch(setVisFilterPostIt(false));
  },
  handleDialogPostIt: () =>  {
    dispatch(setVisFilterPostIt(true));
  },
  handleDialogColumn: () =>  {
    dispatch(setVisFilterCol(true));
  }
});

export default WhiteboardContainer;
