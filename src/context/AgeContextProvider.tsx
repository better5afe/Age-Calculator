import { useReducer } from 'react';
import { AgeContext } from './age-context';
import {
	AgeContextProps,
	DateOfBirth,
	FormState,
	ActionObject,
} from '../models/models';

const initialState: FormState = {
	formInput: {
		day: '',
		month: '',
		year: '',
	},
	isError: false,
};

let currentYear = new Date().getFullYear();

const checkDateValidity = (day: string, month: string, year: string) => {
	const date = new Date(`${year}-${month}-${day}`);

	const formattedDay = String(date.getDate()).padStart(2, '0');
	const formattedMonth = String(date.getMonth() + 1).padStart(2, '0');
	const formattedYear = String(date.getFullYear());

	return (
		day === formattedDay && month === formattedMonth && year === formattedYear
	);
};

const ageReducer = (state: FormState, action: ActionObject) => {
	switch (action.type) {
		case 'SUBMIT':
			if (
				action.payload.day === '' ||
				action.payload.month === '' ||
				action.payload.year === ''
			) {
				console.log('empty input');
				return {
					...state,
					isError: true,
				};
			}

			if (
				+action.payload.day < 1 ||
				+action.payload.day > 31 ||
				+action.payload.month < 1 ||
				+action.payload.month > 12
			) {
				console.log('incorrect value');
				return {
					...state,
					isError: true,
				};
			}

			if (action.payload.year > currentYear) {
				console.log('year is in the future');
				return {
					...state,
					isError: true,
				};
			}

			const isDateValid = checkDateValidity(
				action.payload.day,
				action.payload.month,
				action.payload.year
			);

			if (!isDateValid) {
				console.log('invalid date');
				return {
					...state,
					isError: true,
				};
			}

			console.log(isDateValid);
			return state;
		default:
			return state;
	}
};

const AgeContextProvider: React.FC<AgeContextProps> = ({ children }) => {
	const [state, dispatch] = useReducer(ageReducer, initialState);

	const submitFormHandler = (value: DateOfBirth) => {
		dispatch({ type: 'SUBMIT', payload: value });
	};

	let age = 'test';

	return (
		<AgeContext.Provider
			value={{
				age: age,
				submitForm: submitFormHandler,
				isError: state.isError,
			}}
		>
			{children}
		</AgeContext.Provider>
	);
};

export default AgeContextProvider;
