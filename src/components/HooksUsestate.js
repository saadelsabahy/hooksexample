import React, { useState } from 'react';

function HooksUsestate() {
	const INITIAL_STATE = { firstName: '', lastName: '', fullName: [] };
	const [name, updateName] = useState(INITIAL_STATE);

	const { firstName, lastName, fullName } = name;

	let onAddNamePressed = () => {
		updateName({
			...INITIAL_STATE,
			fullName: [...fullName, `${firstName} ${lastName}`],
		});
	};
	return (
		<div>
			<input
				type='text'
				value={firstName}
				onChange={e => updateName({ ...name, firstName: e.target.value })}
			/>
			<input
				type='text'
				value={lastName}
				onChange={e => updateName({ ...name, lastName: e.target.value })}
			/>

			<button onClick={onAddNamePressed}>Add name</button>

			<h4>{`first name is :- ${firstName} `}</h4>
			<h4>{`last name is :- ${lastName} `}</h4>

			<ul>
				{fullName.map((name, index) => (
					<li key={index}>{name}</li>
				))}
			</ul>
		</div>
	);
}

export default HooksUsestate;
