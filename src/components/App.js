import React, { useReducer } from 'react';
import HooksUseReducer from './HooksUseReducer';
import ComponentA from './ComponentA';
import ComponentB from './ComponentB';
/* import HooksUsestate from './HooksUsestate';
import UseEffectHook from './UseEffectHook';
import MouseContainer from './MouseContainer';
import HooksTimeCounter from './HooksTimeCounter'; */

export const appContext = React.createContext();
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
function App() {
	const [counter, dispatch] = useReducer(reducer, INITIAL_STATE);
	return (
		<appContext.Provider value={{ counter, dispatch }}>
			<div>
				{/* <MouseContainer /> */}
				{/* <HooksTimeCounter /> */}
				{/* <HooksUseReducer /> */}
				<ComponentA />
				<ComponentB />
			</div>
		</appContext.Provider>
	);
}

export default App;
