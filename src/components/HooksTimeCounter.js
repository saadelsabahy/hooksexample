import React, { useState, useEffect } from 'react';

function HooksTimeCounter() {
	const [counter, updateCounter] = useState(0);

	const tick = () => {
		updateCounter(prevCounter => prevCounter + 1);
	};

	useEffect(() => {
		console.log('use effect called');

		const interval = setInterval(tick, 1000);

		return () => clearInterval(interval);
	}, []);

	return <div>{counter}</div>;
}

export default HooksTimeCounter;
