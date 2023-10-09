import React, { Component } from "react";
import Account from "./Account";

class App extends Component {
  state = {
    isLoaded: false,
    users: [],
    error: null,
  };

  fetchUsers() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) =>
        this.setState({
          users: data,
          isLoaded: true,
          error: null, // Set error to null when successful response is received
        })
      )
      .catch((error) => this.setState({ error, isLoaded: true }));
  }

  componentDidMount() {
    this.fetchUsers();
  }

  render() {
    const { isLoaded, users, error } = this.state; // Destructure state
    return (
      <div>
        <h1>Display Active Users Account Details</h1>
        {error ? <p>{error.message}</p> : null}
        {isLoaded ? (
          users.map((user) => (
            <Account key={user.id} user={user} />
          ))
        ) : (
          <p>Fetching Users...</p>
        )}
      </div>
    );
  }
}

export default App;
