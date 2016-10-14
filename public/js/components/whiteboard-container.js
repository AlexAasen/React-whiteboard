import React from 'react';
import AddButton from './add-button';
import PostIt from './post-it';
import PostItDialog from './post-it-dialog';
import ColumnContent from './column-content';
import SideBar from './side-bar';

class WhiteboardContainer extends React.Component {
  constructor() {
    super();
    this.state = {
      postIts: [],
      displayDialog: false
    };
    this.handleAdd = this.handleAdd.bind(this);
    this.handleRemove = this.handleRemove.bind(this);
    this.handleDialog = this.handleDialog.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }

  handleDialog() {
    this.setState({
      displayDialog: true
    });
  }

  handleAdd(postItTitle, postItDescription, postItColor) {
    const postTitle = postItTitle.trim();

    if (postTitle.length > 0) {
      this.setState({
        postIts: this.state.postIts.concat([{
          id: +(new Date()),
          title: postTitle,
          description: postItDescription,
          color: postItColor
        }]),
        displayDialog: false
      });
    }
  }

  handleRemove(id) {
    this.setState({
      postIts: this.state.postIts.filter(item => item.id !== id)
    });
  }

  handleClose() {
    this.setState({
      displayDialog: false
    });
  }

  render() {
    return (
      <div className="main-container">
        <SideBar>
          <AddButton
            showDialog={this.handleDialog}
          />
        </ SideBar>
        <PostItDialog
          isVisible={this.state.displayDialog}
          onAdd={this.handleAdd}
          onHandleClose={this.handleClose}
        />

        <ColumnContent>
          <PostIt
            postIts={this.state.postIts}
            onRemove={this.handleRemove}
          />
        </ColumnContent>
      </div>
    );
  }

}

export default WhiteboardContainer;
