import React from 'react';
import { WithPullState } from './WithPullState';
import { WithContext } from './WithContext';

function App() {
	// switch between WithContext and WithPullState
	return (
		<WithPullState />
	);
}

export default App;
