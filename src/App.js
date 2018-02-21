import React, { Component } from 'react';
import axios from 'axios';

import Search from './Components/Search';
import UserBadge from './Components/UserBadge';
import UserRepos from './Components/UserRepos';

class App extends Component {
  constructor(props){
    super(props)

    this.state = {
      search: '',
      loading: false,
      user: '',
      repos: ''
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.onLoading = this.onLoading.bind(this);
    this.getGithubData = this.getGithubData.bind(this);
  }

  handleChange(e) {
    this.setState({[e.target.name]: e.target.value});
  }

  handleSubmit(e){
    e.preventDefault();
    this.setState({ loading: true });
    this.getGithubData();
  }

  async getGithubData() {
    try {
      const getUser = axios(`https://api.github.com/users/${this.state.search}`);
      const getRepo = axios(`https://api.github.com/users/${this.state.search}/repos`);

      const [user, repos] = await Promise.all([getUser, getRepo]);
      this.setState({ user: user.data, repos: repos.data });
      this.setState({ loading: false});
    } catch (e) {
      console.error(e);
      alert('User could not be found');
      this.setState({ loading: false});
    }
  }

  onLoading(){
    if(this.state.loading) {
      return <p>Loading</p>
    }
    else {
      return (
        <div className="container-fluid">
          <Search
            search={this.state.search}
            onChange={this.handleChange}
            onSubmit={this.handleSubmit}
            />
          <div className="row">
            <div className="col-4">
              <UserBadge user={this.state.user} />
            </div>
            <div className="col-8">
              <UserRepos repos={this.state.repos} />
            </div>
          </div>
        </div>
      );
    }
  }
  render() {
    return (
      <div>
        {this.onLoading()}
      </div>
    );
  }
}

export default App;
