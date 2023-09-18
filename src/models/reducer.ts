import { FormState, ActionObject } from './models';

let currentYear = new Date().getFullYear();

export const initialState: FormState = {
	age: {
		years: null,
		months: null,
		days: null
	},
	error: {
		isError: false,
		message: '',
	},
};

const checkDateValidity = (day: string, month: string, year: string) => {
	const date = new Date(`${year}-${month}-${day}`);

	const formattedDay = String(date.getDate()).padStart(2, '0');
	const formattedMonth = String(date.getMonth() + 1).padStart(2, '0');
	const formattedYear = String(date.getFullYear());

	return (
		day === formattedDay && month === formattedMonth && year === formattedYear
	);
};

const calculateAge = (day: string, month: string, year: string) => {
	const birthDate = new Date(`${year}-${month}-${day}`);
	const today = new Date();

	const ageInMs = Math.abs(today.getTime() - birthDate.getTime());

	const years = Math.floor(ageInMs / (365.25 * 24 * 60 * 60 * 1000));

	const months = Math.floor(
		(ageInMs % (365.25 * 24 * 60 * 60 * 1000)) / (30.44 * 24 * 60 * 60 * 1000)
	);

	const days = Math.floor(
		(ageInMs % (30.44 * 24 * 60 * 60 * 1000)) / (24 * 60 * 60 * 1000)
	);

	const age = {
		years,
		months,
		days,
	};

	return age;
};

export const ageReducer = (state: FormState, action: ActionObject) => {
	switch (action.type) {
		case 'SUBMIT':
			if (
				action.payload.day.trim().length === 0 ||
				action.payload.month.trim().length === 0 ||
				action.payload.year.trim().length === 0
			) {
				return {
					...state,
					error: {
						isError: true,
						message: 'Submitted one of more empty inputs',
					},
				};
			}

			const isDateValid = checkDateValidity(
				action.payload.day,
				action.payload.month,
				action.payload.year
			);

			if (
				+action.payload.day < 1 ||
				+action.payload.day > 31 ||
				+action.payload.month < 1 ||
				+action.payload.month > 12 ||
				+action.payload.year < 0 ||
				!isDateValid
			) {
				return {
					...state,
					error: {
						isError: true,
						message: 'Incorrect date format provided',
					},
				};
			}

			if (action.payload.year > currentYear) {
				return {
					...state,
					error: {
						isError: true,
						message: 'Birth year cannot be in the future',
					},
				};
			}

			const age = calculateAge(
				action.payload.day,
				action.payload.month,
				action.payload.year
			);

			return {
				age,
				error: {
					isError: false,
					message: '',
				},
			};

		default:
			return state;
	}
};
