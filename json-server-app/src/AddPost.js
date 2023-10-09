import React, { Component } from 'react';

class AddPost extends Component {
  state = {
    msg: '', // Initialize the state correctly
  };

  handleChange = (e) => {
    // Update the state in the handleChange function
    this.setState({ msg: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { msg } = this.state;

    // Send a POST request to the JSON server to create a new post
    fetch('http://localhost:3001/posts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ msg }),
    })
      .then((response) => response.json())
      .then((newPost) => {
        // Handle the new post data, e.g., update state or display a success message
        console.log('New post:', newPost);

        // Clear the input field by resetting the state
        this.setState({ msg: '' });

        // Call the callback function passed from the parent component (App)
        this.props.onPostAdded(newPost);
      })
      .catch((error) => {
        console.error('Error creating post:', error);
      });
      window.location.reload();
  };

  render() {
    return (
      <div>
        <h2>Add a New Post</h2>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label>msg:</label>
            <input
              type="text"
              value={this.state.msg}
              onChange={this.handleChange}
            />
          </div>
          <div>
            <button type="submit">Submit</button>
          </div>
        </form>
      </div>
    );
  }
}

export default AddPost;
