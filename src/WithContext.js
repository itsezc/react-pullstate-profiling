import * as React from 'react';
import { DisplayWithContext } from './DisplayWithContext';

export const AuthContext = React.createContext({ 
	authToken: null,
	setAuthToken: () => {}
});

export const WithContext = () => {
	const [authToken, setAuthToken] = React.useState(null);

	return(
		<AuthContext.Provider value={{ authToken, setAuthToken }}>
			<DisplayWithContext />
		</AuthContext.Provider>
	);
}