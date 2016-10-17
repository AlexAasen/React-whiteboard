import React from 'react';
import AddButton from './add-button';
//import AddColButton from './add-col-button';
import PostItDialog from './post-it-dialog';
//import ColumnDialog from './column-dialog';
import Backlog from './column';
import PostIt from './column-postits';
import SideBar from './side-bar';
import * as actions from '../actions';
import { connect } from 'react-redux';

class WhiteboardContainer extends React.Component {
  render() {
    return (
      <div className="main-container">
        <SideBar>
          <AddButton
            showDialog={this.props.handleDialogPostIt}
          />
        </ SideBar>
        <PostItDialog
          isVisiblePostIt={this.props.displayDialog}
          onAddPostIt={this.props.onAddPostIt}
          onHandleClose={this.props.onHandleClose}
        />
        <div className="nav wb-sections">
          <ul className="ul-rowstyle">
            <Backlog>
              <PostIt
                backlogPostIts={this.props.backlogPostIts}
                onRemove={this.props.handleRemove}
              />
            </Backlog>
          </ul>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  displayColDialog: state.displayDialog,
  backlogPostIts: state.backlogPostIts
});

const mapDispatchToProps = dispatch => ({
  onAddPostIt: (postItTitle, postItDescription, postItColor) => {
    const postIt = {
          id: +(new Date()),
          title: postTitle,
          description: postItDescription,
          columId: "backlog",
          color: postItColor,
    };
    dispatch(addPostIt(postIt));
  },
  handleRemove: (id) => {
    dispatch(removePostIt(id));
  },
  onHandleClose: () => {
   dispatch(setVisFilterPostIt(false));
  },
  handleDialogPostIt: () =>  {
    dispatch(setVisFilterPostIt(true));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(WhiteboardContainer);
