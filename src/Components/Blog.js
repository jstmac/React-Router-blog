import React from 'react';
import Post from './Post';
import PostForm from './PostForm';
import { Header, } from 'semantic-ui-react';

class Blog extends React.Component {
  state = {
    posts: [
      { id: 1, title: "Cats", body: "I love cats"},
      { id: 2, title: "Utah", body: "This is where I live."},
      { id: 3, title: "React", body: "React is so awesome!"},
    ]
  };

  getId = () => {
    return Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1);
  };

  addPost = (postData) => {
    // OBJECT DESTRUCTURING: 
    // const posts = this.state.posts;
    const { posts } = this.state;

    // ...postData removes the object { title: "", body: "", } and spreads the info into the new object with a created id and keeping it in a variable named "post"
    const post = { id: this.getId(), ...postData};
    
    // posts: is the same as { posts } as well as ...posts which takes the existing "posts: array of objects" and resets state to be a new object with an array of objects and puts the "post" variable into the array and then spreads the old posts objects into the array
    this.setState({ posts: [post, ...posts], });
  };

  // this function is grabbing the posted data, then mapping through the "posts: array of objects" and seeing if the post.id and the postData.id match and if it does then it will post the new data to the original post and then post that data to the "posts: array of objects".
  editPost = (postData) => {
    // this will map through the "posts: array of objects" and store it in a new post object
    const posts = this.state.posts.map( post => {
      // this if statement is checking to see of the post.id and the postData.id match, which they should then returns the new data to the "post".
      if (post.id === postData.id)
        return postData;
      return post;
    });
    // then sends the "post" to the posts: array of objects
    this.setState({ posts, });
  };

  renderPosts = () => {
    // when map is invoked it turns each post into a bunch of keys without an object
    // key={post.id} grabs each by the id and turns it into a new object
    // {...post} creates each post as a prop so you can use just the id, title, or body.
    return this.state.posts.map( post => <Post key={post.id} {...post} edit={this.editPost} />);
  };

  render() {
    return(
      <div>
        <Header as="h1">Blog</Header>
        <PostForm add={this.addPost}/>
        { this.renderPosts() }
      </div>
    );
  };
};

export default Blog;