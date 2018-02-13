import React from 'react';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';

import BugStats from './views/BugStats';
import BugList from './views/BugList';
import BugEdit from './views/BugEdit';

import bugActionCreators from './actions';

class BugTracker extends React.Component{
	componentDidMount(){
		this.props.load();
	}
	render(){
		let {bugs, toggle, addNew, removeClosed } = this.props;
		return (
			<div>
				<BugStats bugs={bugs} />
				<BugEdit addNew={addNew} />
				<section className="sort">
					<label htmlFor="">Order By :</label>
					<select name="" id="">
						<option value=""></option>
						<option value=""></option>
					</select>
					<label htmlFor="">Descending ? :</label>
					<input type="checkbox" name="" id="" />
				</section>
				<BugList {...{bugs, toggle, removeClosed}} />
			</div>
		)
	}
}

export default connect(
	function mapStateToProps(state){
		return {
			bugs : state.bugs.filter((bug, index) => index % 2 === state.spinner % 2)
		};
	},
	function mapDispatchToProps(dispatch){
		return bindActionCreators(bugActionCreators, dispatch);
	}
)(BugTracker);