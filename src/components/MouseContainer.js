import React, { useState } from 'react';
import UseEffectHook from './UseEffectHook';

function MouseContainer() {
	const [toggleMouse, updateToggleMouse] = useState(true);
	return (
		<div>
			<button onClick={() => updateToggleMouse(!toggleMouse)}>
				Toggle Mouse Container
			</button>
			{toggleMouse && <UseEffectHook />}
		</div>
	);
}

export default MouseContainer;
