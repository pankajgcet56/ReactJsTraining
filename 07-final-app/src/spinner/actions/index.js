let spinnerActionCreators = {
	increment(value){
		return { type : 'INCREMENT', payload : value };
	},
	decrement(value){
		return { type : 'DECREMENT', payload : value}
	}
};
export default spinnerActionCreators;