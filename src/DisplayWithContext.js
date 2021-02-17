import * as React from 'react';
import { AuthContext } from './WithContext';
import { unstable_trace as trace } from 'scheduler/tracing';

export const DisplayWithContext = () => {
	const { authToken, setAuthToken } = React.useContext(AuthContext);

	return(
		<React.Profiler id='WithContext'>
			<div>
				Auth Token: {authToken || 'null'}
				&nbsp;
				<button
					onClick={() => { 
						trace('Update Context - Auth', performance.now(), () => {
							setAuthToken('abcdefg');
						})
					}}
				>
					Update Auth Token
				</button>
			</div>
		</React.Profiler>
	);
}