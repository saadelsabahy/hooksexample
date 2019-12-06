import React, { useReducer } from 'react';

const INITIAL_STATE = {
	counter: 0,
};
const reducer = (state = INITIAL_STATE, action) => {
	switch (action) {
		case 'INCREMENT':
			return { counter: state.counter + 1 };
		case 'DECREMENT':
			return { counter: state.counter - 1 };
		case 'INCREMENT_BY_FIVE':
			return { counter: state.counter + 5 };
		case 'RESET':
			return { counter: INITIAL_STATE.counter };
		default:
			return state;
	}
};
function HooksUseReducer() {
	const [{ counter }, dispatch] = useReducer(reducer, INITIAL_STATE);
	return (
		<div>
			<h1>{counter}</h1>
			<button onClick={() => dispatch('INCREMENT')}>increment</button>
			<button onClick={() => dispatch('DECREMENT')}>decrement</button>
			<button onClick={() => dispatch('RESET')}>reset</button>
			<button onClick={() => dispatch('INCREMENT_BY_FIVE')}>
				increment 5
			</button>
		</div>
	);
}

export default HooksUseReducer;
