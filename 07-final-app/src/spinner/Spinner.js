import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';

import spinnerActionCreators from './actions';
import React from 'react';

let Spinner = ({currentValue, increment, decrement}) => (
	<div>
		<input type="button" value="DECREMENT" onClick={() => decrement(2)}/>
		<span> {currentValue} </span>
		<input type="button" value="INCREMENT" onClick={() => increment(1)}/>
	</div>
);
export default connect(
	function mapStateToProps(state){
		//extract the required state for the spinner and return
		return {
			currentValue : state.spinner
		};
	},
	function mapDispatchToProps(dispatch){
		//create action dispatchers for the spinner and return
		return bindActionCreators(spinnerActionCreators, dispatch);
	}
)(Spinner);