import React, { useState, useEffect } from 'react';

function UseEffectHook() {
	const [mouse, updateMouse] = useState({ x: null, y: null });

	const { x, y } = mouse;

	const logMousePosition = e => {
		console.log('update position');

		updateMouse({ x: e.clientX, y: e.clientY });
	};
	useEffect(() => {
		console.log('use effect called');

		window.addEventListener('mousemove', logMousePosition);
		return () => {
			window.removeEventListener('mousemove', logMousePosition);
		};
	}, []);
	return (
		<div>
			<h3> {`x: ${x}`} </h3>
			<h3> {`y: ${y}`} </h3>
		</div>
	);
}

export default UseEffectHook;
