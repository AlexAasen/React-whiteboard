import React from 'react';
import AddButton from './add-button';
import PostIt from './post-it';
import PostItDialog from './post-it-dialog';

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

  handleAdd(postItTitle, postItDescription) {
    const postTitle = postItTitle.trim();

    if (postTitle.length > 0) {
      this.setState({
        postIts: this.state.postIts.concat([{
          id: +(new Date()),
          title: postTitle,
          description: postItDescription
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
      <div className="whiteboard-container">
        <AddButton
          showDialog={this.handleDialog}
        />
        <PostItDialog
          isVisible={this.state.displayDialog}
          onAdd={this.handleAdd}
          onHandleClose={this.handleClose}
        />
        <PostIt
          postIts={this.state.postIts}
          onRemove={this.handleRemove}
        />
      </div>
    );
  }

}

export default WhiteboardContainer;
