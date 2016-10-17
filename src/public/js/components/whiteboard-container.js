import React from 'react';
import AddButton from './add-button';
//import AddColButton from './add-col-button';
import PostItDialog from './post-it-dialog';
//import ColumnDialog from './column-dialog';
import Backlog from './column';
import PostIt from './column-postits';
import SideBar from './side-bar';
import { addPostIt, setVisFilterPostIt, removePostIt } from '../actions';
import { connect } from 'react-redux';

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
          isVisiblePostIt={this.props.isVisiblePostIt}
          onAddPostIt={this.props.onAddPostIt}
          showDialog={this.props.showDialog}
        />
        <div className="nav wb-sections">
          <ul className="ul-rowstyle">
            <Backlog
              backlogPostIts={this.props.backlogPostIts}
              onRemove={this.props.onRemove}
            />
          </ul>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  isVisiblePostIt: state.visfilter.filter,
  backlogPostIts: state.backlogPostIts
});

const mapDispatchToProps = dispatch => ({
  onAddPostIt: (postItTitle, postItDescription, postItColor) => {
    const postIt = {
          id: +(new Date()),
          title: postItTitle,
          description: postItDescription,
          columId: "backlog",
          color: postItColor,
    };
    dispatch(addPostIt(postIt));
  },
  onRemove: (postIt) => {
    dispatch(removePostIt(id));
  },
  showDialog: (visfilter) =>  {
    dispatch(setVisFilterPostIt(visfilter));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(WhiteboardContainer);
