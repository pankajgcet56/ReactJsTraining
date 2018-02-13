function bugsReducer(currentState = [], action){
	if (action.type === 'LOAD'){
		return action.payload;
	}
	if (action.type === 'ADD_NEW'){
		let newState = [...currentState, action.payload];
		return newState;
	}
	if (action.type === 'TOGGLE'){
		let toggledBug= action.payload;
		return currentState.map(bug => bug.id === toggledBug.id ? toggledBug : bug);
	}
	if (action.type === 'REMOVE'){
		console.log(action);
		return currentState.filter(bug => bug.id !== action.payload.id);
	}
	return currentState;
}
export default bugsReducer;