import axios from 'axios'
let bugActionCreators = {
	addNew(bugName){
		return function(dispatch){
			let newBugData = {
				id : 0,
				name : bugName,
				isClosed : false
			};
			axios
				.post('http://localhost:3010/bugs', newBugData)
				.then(response => dispatch({type : 'ADD_NEW', payload : response.data}));
		}
	},
	load(){
		return function(dispatch){
			axios
				.get('http://localhost:3010/bugs')
				.then(response => dispatch({type : 'LOAD', payload : response.data}));
		};
	},
	toggle(bugToToggle){
		return function(dispatch){
			let toggledBug = {...bugToToggle , isClosed : !bugToToggle.isClosed};
			axios.put('http://localhost:3010/bugs/' + toggledBug.id, toggledBug)
				.then(response => dispatch({ type : 'TOGGLE', payload : toggledBug}));
		};
		
	},
	removeClosed(){
		return function(dispatch, getState){
			let closedBugs = getState().bugs.filter(bug => bug.isClosed);
			for(let closedBug of closedBugs){
				axios.delete('http://localhost:3010/bugs/' + closedBug.id)
					.then(response => dispatch({type : 'REMOVE', payload : closedBug}));
			}
		}
	}
};
export default bugActionCreators;