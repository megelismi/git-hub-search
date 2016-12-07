import React from 'react';
import SearchBox from './searchbox';
import RepoList from './repolist';

//stateful component
export default class App extends React.Component {
	constructor(props) {
		super(props);

   this.state = {
      data: [],
      avatar: "",
      userPage: ""
    }

	this.onSearchSubmit = this.onSearchSubmit.bind(this);
	}

	onSearchSubmit(textInput) {
	   fetch(`https://api.github.com/users/${textInput}/repos`)
	   .then((response) => {
	   	return response.json();
	   })
	   .then((body) => {
	      let avatar = body[0].owner.avatar_url;
	      let userPage = body[0].owner.html_url;

	    	this.setState({
		      data: body,
		      avatar: avatar,
		      userPage: userPage
	    	});
    	})
	}

	render() {
		return(
      <div>
        <SearchBox onSubmit={this.onSearchSubmit}
          onChange={this.onAddInputChange} />
          <div>{this.state.userPage}</div>
        <RepoList data={this.state.data}/>
      </div>
		)
	}
}
