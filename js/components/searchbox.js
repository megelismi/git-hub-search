import React from 'react';

function SearchBox(props) {
	let inputBox;

	function grabInput (event) {
		event.preventDefault();
		props.onSubmit(inputBox.value)

	}

	return (
		<form className="user-form" onSubmit={grabInput}>
  			<input className="user-input-box" type="text" placeholder="search..." ref={element => inputBox = element} />
			<input className="submit-button" type="submit" value="Submit" />
		</form>
	)
}

export default SearchBox
