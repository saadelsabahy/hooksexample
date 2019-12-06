import React, { useContext } from 'react';
import { appContext } from './App';

function ComponentB() {
	const appData = useContext(appContext);

	const {
		counter: { counter },
		dispatch,
	} = appData;
	return (
		<div>
			Component-B
			<button onClick={() => dispatch('INCREMENT')}>increment</button>
			<button onClick={() => dispatch('DECREMENT')}>decrement</button>
			<button onClick={() => dispatch('RESET')}>reset</button>
			<button onClick={() => dispatch('INCREMENT_BY_FIVE')}>
				increment 5
			</button>
		</div>
	);
}

export default ComponentB;
