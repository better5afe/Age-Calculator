import { FormState, ActionObject } from './models';

let currentYear = new Date().getFullYear();

export const initialState: FormState = {
	formInput: {
		day: '',
		month: '',
		year: '',
	},
	error: {
		isError: false,
		invalidInput: '',
		message: '',
	},
};

const checkDateValidity = (day: string, month: string, year: string) => {
	const date = new Date(`${year}-${month}-${day}`);

	const formattedDay = String(date.getDate()).padStart(2, '0');
	const formattedMonth = String(date.getMonth() + 1).padStart(2, '0');
	const formattedYear = String(date.getFullYear());

	console.log(day === formattedDay);
	console.log(month === formattedMonth);
	console.log(year === formattedYear);

	return (
		day === formattedDay && month === formattedMonth && year === formattedYear
	);
};

export const ageReducer = (state: FormState, action: ActionObject) => {
	switch (action.type) {
		case 'SUBMIT':
			if (
				action.payload.day.trim().length === 0 &&
				action.payload.month.trim().length === 0 &&
				action.payload.year.trim().length === 0
			) {
				return {
					...state,
					error: {
						isError: true,
						invalidInput: 'all',
						message: 'No value'
					}
				};
			} else if (action.payload.day.trim().length === 0) {
				return {
					...state,
					error: {
						isError: true,
						invalidInput: 'day',
						message: 'No value provided'
					}
				};
			} else if (action.payload.month.trim().length === 0) {
				return {
					...state,
					error: {
						isError: true,
						invalidInput: 'month',
						message: 'No value provided'
					}
				};
			} else if (action.payload.year.trim().length === 0) {
				return {
					...state,
					error: {
						isError: true,
						invalidInput: 'year',
						message: 'No value provided'
					}
				};
			}

			console.log('everything works');
			return state;
		

		// if (
		// 	+action.payload.day < 1 ||
		// 	+action.payload.day > 31 ||
		// 	+action.payload.month < 1 ||
		// 	+action.payload.month > 12
		// ) {
		// 	console.log('incorrect value');
		// 	return {
		// 		...state,
		// 		isError: true,
		// 	};
		// }

		// if (action.payload.year > currentYear) {
		// 	console.log('year is in the future');
		// 	return {
		// 		...state,
		// 		isError: true,
		// 	};
		// }

		// const isDateValid = checkDateValidity(
		// 	action.payload.day,
		// 	action.payload.month,
		// 	action.payload.year
		// );

		// if (!isDateValid) {
		// 	console.log('invalid date');
		// 	return {
		// 		...state,
		// 		isError: true,
		// 	};
		// }

		// console.log(isDateValid);
		// return state;
		default:
			return state;
	}
};
