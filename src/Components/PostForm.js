import React from 'react';
import { Form, } from 'semantic-ui-react';

class PostForm extends React.Component {
  state = { title: "", body: "", };

  // this functions is checking to see if the form has an id and if it does then it will set the state inside the form to the values.
  componentDidMount() {
    const { title, body, id } = this.props;
    if (id)
      this.setState({ title, body, });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    // this if statement is checking to see if there is an id and if it exist, to grab the id and post the other values into the form, toggle the edit form to display those values in the corresponding keys or input fields.
    if (this.props.id) {
      this.props.edit({ id: this.props.id, ...this.state, })
      this.props.toggleEdit();
    } else {
      // this.props.add allows access to the <PostForm add="" /> then sends this.state to the addPost(postData) function in the Blog.js
      this.props.add(this.state);
    }
    // this resets the state to be empty after the post has been submitted
    this.setState({ title: "", body: "", });
  };

  handleChange = (e) => {
    // this will only work if the (target.name, example: name="title") is the same as the (this.state name, example: (title: ""))
    // the brackets on [e.target.name] allows react to use it as a key and then set the value with e.target.value which comes from the Form.Input keys.
    this.setState({ [e.target.name]: e.target.value, });
  };

  render() {
    return(
      <Form onSubmit={this.handleSubmit}>
        <Form.Group widths="equal">
          <Form.Input 
          placeholder="Title"
          label="Title"
          name="title"
          onChange={this.handleChange}
          value={this.state.title}
          />
          <Form.Input 
          placeholder="Body"
          label="Body"
          name="body"
          onChange={this.handleChange}
          value={this.state.body}
          />
          <Form.Button inverted color="green">Submit</Form.Button>
        </Form.Group>
      </Form>
    );
  };
};

export default PostForm;