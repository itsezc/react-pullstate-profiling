import * as React from 'react';
import { AuthStore } from './Store';
import { unstable_trace as trace } from 'scheduler/tracing';

export const WithPullState = () => {
	const isAuthenticated = AuthStore.useState(s => s.authToken);

	return(
		<React.Profiler id='WithPullState'>
			<div>
				Auth Token: {isAuthenticated || 'null'}
				&nbsp;
				<button
					onClick={() => { 
						trace('Update Pullstate - Auth Store', performance.now(), () => {
							AuthStore.update(s => { s.authToken = 'abcdefg' });
						})
					}}
				>
					Update Auth Token
				</button>
			</div>
		</React.Profiler>
	);
}