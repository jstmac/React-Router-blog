import React from 'react';
import PostForm from './PostForm';
import { Header, Segment, Button, Icon, } from 'semantic-ui-react';

class Post extends React.Component {
  state = { editing: false, };

  toggleEdit = () => {
    this.setState({ editing: !this.state.editing, });
  };

  render() {
    return (
      <Segment style={styles.segment}>
        { 
          // this ternary is checking to see if the state.editing is true or false, if its true then it will render the PostForm and if false it will just render the Post.
          this.state.editing ? 
            // this is rendering the PostForm with the existing data from the post
            <PostForm 
            // this object is spreading the existing data to the form
            {...this.props} 
            // this is grabbing the edit={this.editPost} prop from inside the (Blog.js renderPosts()) and placing it into the edit={}, this.props.edit = this.editPost
            edit={this.props.edit} 
            // this is allowing the toggleEdit to be used on the form
            toggleEdit={this.toggleEdit} 
            /> 
          :
            // this is just rendering the Post
            <div>
              <Header as="h3">{this.props.title}</Header>
              <p>{this.props.body}</p>
            </div>
        }
        <div>
          <Button icon color="blue" onClick={this.toggleEdit}>
            <Icon name="pencil" />
          </Button>
          <Button icon color="red">
            <Icon name="trash" />
          </Button>
        </div>
      </Segment>
    );
  };
};

const styles = {
  segment: {
    display: "flex", 
    alignItems: "center", 
    justifyContent: "space-between",
  },
};

export default Post;