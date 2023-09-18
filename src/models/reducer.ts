import { FormState, ActionObject } from './models';

let currentYear = new Date().getFullYear();

export const initialState: FormState = {
	age: null,
	error: {
		isError: false,
		message: '',
	},
};

const checkDateValidity = (day: string, month: string, year: string) => {
	const date = new Date(`${year}-${month}-${day}`);
	const currentDate = new Date();

	if (date > currentDate) {
		return false;
	}

	if (isNaN(date.getTime())) {
		return false;
	}

	return (
		Number(day) === date.getDate() &&
		Number(month) === date.getMonth() + 1 &&
		Number(year) === date.getFullYear()
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
				action.payload.day < 1 ||
				action.payload.day > 31 ||
				action.payload.month < 1 ||
				action.payload.month > 12 ||
				action.payload.year < 1900 ||
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
