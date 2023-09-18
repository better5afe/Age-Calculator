import { useReducer } from 'react';
import { AgeContext } from './age-context';
import { AgeContextProps, DateOfBirth } from '../models/models';

import { initialState, ageReducer } from '../models/reducer';

const AgeContextProvider: React.FC<AgeContextProps> = ({ children }) => {
	let age = 'test';

	const [state, dispatch] = useReducer(ageReducer, initialState);

	const submitFormHandler = (value: DateOfBirth) => {
		dispatch({ type: 'SUBMIT', payload: value });
		console.log(state);
	};

	return (
		<AgeContext.Provider
			value={{
				age: age,
				submitForm: submitFormHandler,
				error: state.error,
			}}
		>
			{children}
		</AgeContext.Provider>
	);
};

export default AgeContextProvider;
