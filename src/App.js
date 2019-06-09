import React, { Component } from "react";
import Navbar from "./components/layout/Navbar";
import Users from "./components/users/Users";
import axios from "axios";
import Link from "./url";
import Search from "./components/users/Search";
import "./CSS/App.css";

class App extends Component {
  state = { users: [], loading: false };

  async componentDidMount() {
    const Url = new Link();
    this.setState({ loading: true });
    const res = await axios.get(
      `${Url.link}${Url.users}?${Url.credentials}${Url.amount_defined_string}`
    );
    this.setState({ users: res.data, loading: false });
  }

  searchUsers = async text => {
    const Url = new Link();
    this.setState({ loading: true });
    const res = await axios.get(
      `${Url.link}${Url.search}?q=${text}&${Url.credentials}`
    );
    console.log(`${Url.link}${Url.search}?q=${text}&${Url.credentials}`);
    this.setState({ users: res.data.items, loading: false });
  };

  render() {
    return (
      <div className="App">
        <Navbar />
        <div className="container">
          <Search searchUsers={this.searchUsers} />
          <Users
            loading={this.state.loading}
            users={this.state.users}
          />
        </div>
      </div>
    );
  }
}

export default App;
