import React from 'react';
class BugEdit extends React.Component{

	render(){
		let {addNew} = this.props;
		return(
			<section className="edit">
				<label htmlFor="">Bug Name :</label>
				<input type="text" ref="txtBugName"/>
				<input type="button" value="Create New" onClick={() => addNew(this.refs.txtBugName.value)}/>
			</section>
		)
	}
};
export default BugEdit;