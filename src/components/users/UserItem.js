import React, { Component } from "react";

export class UserItem extends Component {
  // constructor() {
  //   super();
  //   this.state = {
  //     login: "mojombo",
  //     id: 1,
  //     node_id: "MDQ6VXNlcjE=",
  //     avatar_url: "https://avatars0.githubusercontent.com/u/1?v=4",
  //     gravatar_id: "",
  //     url: "https://api.github.com/users/mojombo",
  //     html_url: "https://github.com/mojombo",
  //     followers_url: "https://api.github.com/users/mojombo/followers",
  //     following_url:
  //       "https://api.github.com/users/mojombo/following{/other_user}",
  //     gists_url: "https://api.github.com/users/mojombo/gists{/gist_id}",
  //     starred_url:
  //       "https://api.github.com/users/mojombo/starred{/owner}{/repo}",
  //     subscriptions_url: "https://api.github.com/users/mojombo/subscriptions",
  //     organizations_url: "https://api.github.com/users/mojombo/orgs",
  //     repos_url: "https://api.github.com/users/mojombo/repos",
  //     events_url: "https://api.github.com/users/mojombo/events{/privacy}",
  //     received_events_url:
  //       "https://api.github.com/users/mojombo/received_events",
  //     type: "User",
  //     site_admin: false
  //   };
  // }

  /*
   *the above equals to:
   */

  state = {
    login: "mojombo",
    id: 1,
    node_id: "MDQ6VXNlcjE=",
    avatar_url: "https://avatars0.githubusercontent.com/u/1?v=4",
    gravatar_id: "",
    url: "https://api.github.com/users/mojombo",
    html_url: "https://github.com/mojombo",
    followers_url: "https://api.github.com/users/mojombo/followers",
    following_url:
      "https://api.github.com/users/mojombo/following{/other_user}",
    gists_url: "https://api.github.com/users/mojombo/gists{/gist_id}",
    starred_url: "https://api.github.com/users/mojombo/starred{/owner}{/repo}",
    subscriptions_url: "https://api.github.com/users/mojombo/subscriptions",
    organizations_url: "https://api.github.com/users/mojombo/orgs",
    repos_url: "https://api.github.com/users/mojombo/repos",
    events_url: "https://api.github.com/users/mojombo/events{/privacy}",
    received_events_url: "https://api.github.com/users/mojombo/received_events",
    type: "User",
    site_admin: false
  };

  render() {
    const { avatar_url, login, html_url } = this.state;
    return (
      <div className="card text-center">
        <img
          src={avatar_url}
          alt={login + " avatar_url"}
          className='round-img'
          style={{
            /**must use string */
            width: "60px",
          }}
        />
        <h3>{login}</h3>
        <div>
          <a href={html_url} className="btn btn-dark btn-sm my-1">
            More
          </a>
        </div>
      </div>
    );
  }
}

export default UserItem;
