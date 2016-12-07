import React from 'react';

function SearchBox(props) {
	let inputBox;

	function grabInput (event) {
		event.preventDefault();
		props.onSubmit(inputBox.value)

	}

	return (
		<form onSubmit={grabInput}>
      <label>
        Search Github User:
  			<input type="text" placeholder="search..." ref={element => inputBox = element} />
      </label>
			<input type="submit" value="Submit" />
		</form>
	)
}

export default SearchBox
