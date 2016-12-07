import React from 'react';
import SearchBox from './searchbox.js'

//stateful component
export default class App extends React.Component {
	constructor(props) {
		super(props)
		this.state = {searchTerm: ""}
		this.onSearchSubmit = this.onSearchSubmit.bind(this);
		this.onAddInputChange = this.onAddInputChange.bind(this);
	}

	onAddInputChange(event){
		console.log(event.target.value)
	}

	onSearchSubmit(textInput){
		// this.setState({

		// })

		console.log(textInput);
	}




	render(){
		return(
			<SearchBox onSubmit={this.onSearchSubmit} onChange={this.onAddInputChange} />
		)
	}
}