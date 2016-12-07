import React from 'react';

const BasicInfo = (props) => {
	if (props.data.length === 0) {
		return <div></div>
	}
	const userName = props.data[0].owner.login

	return (
		<div className="basic-info">
			<h2 className="username">{userName}</h2>
			<a className="user-page" href={props.userPage}><img className="avatar" src={props.avatar} /></a>
		</div>
	)
}

export default BasicInfo