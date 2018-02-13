let SM = (function(){

	let _reducer = null,
		_init_action = {type : '@@INIT_STATE'},
		_currentState = undefined,
		_subscribers = [];

	function getState(){
		return _currentState;
	}

	function subscribe(callback){
		if (typeof callback === 'function')
			_subscribers.push(callback);''
	}

	function triggerChange(){
		_subscribers.forEach(callback => callback());
	}

	function dispatch(action){
		let new_state = _reducer(_currentState, action);
		if (_currentState === new_state) return;
		_currentState = new_state;
		triggerChange();
	}

	function createStore(reducer){
		_reducer = reducer;
		_currentState = reducer(_currentState, _init_action);

		return {
			getState : getState,
			subscribe : subscribe,
			dispatch : dispatch
		}
	}

	function bindActionCreators(actionCreators, dispatch){
		let result = {};
		for(let key in actionCreators){
			result[key] = function(...args){
				let action = actionCreators[key](...args);
				dispatch(action);
			}
		}
		return result;
	}

	return {
		createStore : createStore,
		bindActionCreators : bindActionCreators
	}
})();
