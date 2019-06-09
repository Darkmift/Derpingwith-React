import React, { Component } from "react";
import Navbar from "./components/layout/Navbar";
import Users from "./components/users/Users";
import axios from "axios";
import "./CSS/App.css";

class App extends Component {
  state = { users: [], loading: false };

  async componentDidMount() {
    this.setState({ loading: true });

    const url = "https://api.github.com/users";
    const {
      REACT_APP_GITHUB_CLIENT_ID: clientID,
      REACT_APP_GITHUB_CLIENT_SECRET: clientSecret
    } = process.env;
    const credentials = `client_id=${clientID}&client_secret=${clientSecret}`;

    const amount_defined = 100;
    const amount_defined_string = `&per_page=${amount_defined}`;
    const res = await axios.get(
      `${url}?${credentials}${amount_defined_string}`
    );

    console.log(res.data);

    this.setState({ users: res.data, loading: false });
  }

  render() {
    return (
      <div className="App">
        <Navbar />
        <div className="container">
          <Users loading={this.state.loading} users={this.state.users} />
        </div>
      </div>
    );
  }
}

export default App;
