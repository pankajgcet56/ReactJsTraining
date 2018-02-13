import React from 'react';

let BugItem = ({data : bug, toggle}) => {
	let bugName = bug.isClosed ? 
		(<span className="bugname closed" onClick={() => toggle(bug)}>{bug.name}</span>)
		:
		(<span className="bugname" onClick={() => toggle(bug)}>{bug.name}</span>)
	return(
		<li>
			{bugName}
			<div>[{bug.isClosed.toString()}]</div>
			<div className="datetime">[Created At]</div>
		</li>
	)
};
export default BugItem;