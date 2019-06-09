import React, { Component } from "react";
import Navbar from "./components/layout/Navbar";
import Alert from "./components/layout/Alert";
import Users from "./components/users/Users";
import axios from "axios";
import Link from "./url";
import Search from "./components/users/Search";
import "./CSS/App.css";

class App extends Component {
  state = { users: [], loading: false, alert: null };

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
    this.setState({ users: res.data.items, loading: false });
  };

  clearUsers = () => this.setState({ users: [] });
  // showClear = this.state.users.length ? true : false;

  setAlert = (msg, type) => {
    this.setState({ alert: { msg: msg, type: type } });
    setTimeout(() => {
      this.setState({ alert: null });
    }, 5000);
  };

  render() {
    return (
      <div className="App">
        <Navbar />
        <div className="container">
          <Alert alert={this.state.alert} />
          <Search
            searchUsers={this.searchUsers}
            clearUsers={this.clearUsers}
            showClear={this.state.users.length ? true : false}
            setAlert={this.setAlert}
          />
          <Users loading={this.state.loading} users={this.state.users} />
        </div>
      </div>
    );
  }
}

export default App;
