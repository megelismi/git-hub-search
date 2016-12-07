import React from 'react';

function SearchBox(props) {
	let inputBox; 
	
	function grabInput (event) {	
		event.preventDefault();
		props.onSubmit(inputBox.value)
	} 

	return (
		<form onSubmit={grabInput}>
			<input type="text" placeholder="search..." ref={element => inputBox = element} />
			<input type="submit" value="Submit" />
		</form>
	)
}

export default SearchBox