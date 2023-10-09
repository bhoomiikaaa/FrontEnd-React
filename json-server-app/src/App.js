import React, { Component } from 'react';
import AddPost from './AddPost'; // Assuming both files are in the same directory
import PostList from './PostList';

class App extends Component {
  state = {
    posts: [], // Initialize the list of posts
  };

  // Callback function to update the list of posts
  handlePostAdded = (newPost) => {
    this.setState((prevState) => ({
      posts: [...prevState.posts, newPost],
    }));
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>My Blog App</h1>
        </header>
        <main>
          <AddPost />
          <PostList />

        </main>
      </div>
    );
  }
}

export default App;

