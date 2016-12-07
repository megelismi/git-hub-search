import React from 'react';

const BasicInfo = (props) => {
	if (props.data.length === 0) {
		return <div>Nothing yet...</div>
	}
	const userName = props.data[0].owner.login

	return (
		<div className="basic-info">
			<p className="username">{userName}</p>
			<a className="user-page" href={props.userPage}>User Page</a>
			<img className="avatar" src={props.avatar} />
		</div>
	)
}

export default BasicInfo