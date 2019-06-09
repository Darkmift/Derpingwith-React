const {
  REACT_APP_GITHUB_CLIENT_ID: clientID,
  REACT_APP_GITHUB_CLIENT_SECRET: clientSecret
} = process.env;

class Url {
  link = "https://api.github.com/";
  users="users"
  search='search/users'
  credentials = `client_id=${clientID}&client_secret=${clientSecret}`;
  amount_defined = 100;
  amount_defined_string = `&per_page=${this.amount_defined}`;
}

export default Url;
