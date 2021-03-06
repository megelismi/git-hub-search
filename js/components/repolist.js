import React from 'react';

function RepoList(props) {
	let {data} = props;

	if (data.length === 0) {
		return <div></div>
	} 

	data = data.map((data) => {
		let date = new Date (data.created_at);
		return (
			<tr key={data.id}>
				<td>{data.name}</td>
				<td>{date.toLocaleDateString()}</td>
				<td>{data.description}</td>
				<td>{data.forks}</td>
				<td>{data.open_issues_count}</td>
				<td>{data.watchers}</td>
			   <td>{data.stargazers_count}</td>
		  </tr>
	  	)
	});

	console.log(data);

  return (
	<table className="repo-table">
		<thead>
		  <tr>
		    <th>Repo Name</th>
		    <th>Date Created</th>
		    <th>Description</th>
		    <th>Forks</th>
		    <th>Issues</th>
		    <th>Followers</th>
		    <th>Stargazers</th>
		  </tr>
		 </thead>
		 <tbody>
		 	{data}
		 </tbody>
	</table>
  );
}

export default RepoList
