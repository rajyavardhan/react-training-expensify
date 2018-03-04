import {createStore} from 'redux';


const countReducer =  (state = {count: 0}, action)=> {
	switch(action.type) {
		case 'INCREMENT': 
			return {
				count: state.count + action.incrementBy
			}

		case 'DECREMENT':
		const decrementBy = typeof action.decrementBy == 'number'? action.decrementBy : 1;
			return {
				count: state.count - action.decrementBy
			}
		case 'SET':
			return {
				count: action.setValue
			}
		case 'RESET':
			return {
				count: 0
			}
		default: 
			return state;
	}
}

const store = createStore(countReducer);
const incrementCounter = ({incrementBy = 1} = {}) => ({
	type: 'INCREMENT',
	incrementBy
});
const decrementCounter = ({decrementBy = 1} = {}) => ({
	type: 'DECREMENT',
	decrementBy 
});

const setCounter = ({setValue = store.getState().count} = {}) => ({
	type: 'SET',
	setValue
});

const resetCount = () => ({
	type: 'RESET'
});

// We are sending something to a store.

//increment


const unsubscribe = store.subscribe(()=>{
	console.log("inside subscribe",store.getState());
});
// store.dispatch({
// 	type: 'INCREMENT',
// 	incrementBy: 100
// });
// store.dispatch({
// 	type: 'INCREMENT',
// 	incrementBy: 'h'
// });
// store.dispatch({
// 	type: 'INCREMENT'
// });
store.dispatch(incrementCounter());
store.dispatch(incrementCounter({incrementBy: 100}));
//store.dispatch(incrementCounter({incrementBy: 'h'}));

store.dispatch(decrementCounter({decrementBy : 50}));
store.dispatch(decrementCounter());

store.dispatch(setCounter({setValue:25}));
store.dispatch(setCounter({setValue:22}));
//store.dispatch(setCounter({setValue: 'h'}));


store.dispatch(resetCount());
// store.dispatch({
// 	type: 'DECREMENT',
// 	decrementBy: 50
// });
// store.dispatch({
// 	type: 'DECREMENT',
// 	decrementBy: 'h'
// });
// store.dispatch({
// 	type: 'DECREMENT'
// });
// store.dispatch({
// 	type: 'SET',
// 	setValue: 99
// });
// store.dispatch({
// 	type: 'RESET'
// });
