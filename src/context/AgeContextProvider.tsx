import { useReducer } from 'react';
import { AgeContext } from './age-context';
import { AgeContextProps, DateOfBirth } from '../models/models';

import { initialState, ageReducer } from '../models/reducer';

const AgeContextProvider: React.FC<AgeContextProps> = ({ children }) => {
	const [state, dispatch] = useReducer(ageReducer, initialState);

	const submitFormHandler = (value: DateOfBirth) => {
		dispatch({ type: 'SUBMIT', payload: value });
	};

	return (
		<AgeContext.Provider
			value={{
				age: state.age,
				submitForm: submitFormHandler,
				error: state.error,
			}}
		>
			{children}
		</AgeContext.Provider>
	);
};

export default AgeContextProvider;
