import React from 'react';
import SearchBox from './searchbox';
import RepoList from './repolist';
import BasicInfo from './basicinfo';

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
    	.catch((e) => {
	   	console.log(e);
    	})
	}

	render() {
		return(
      <div>
      	<h1 className="main-header">GitHub Search App</h1>
        <SearchBox onSubmit={this.onSearchSubmit} onChange={this.onAddInputChange} />
        <BasicInfo avatar={this.state.avatar} userPage={this.state.userPage} data={this.state.data} />
        <RepoList data={this.state.data}/>
      </div>
		)
	}
}
