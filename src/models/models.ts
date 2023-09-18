export interface AgeContextProps {
	children: React.ReactNode;
}

export interface DateOfBirth {
	day: string;
	month: string;
	year: string;
}

interface Error {
	isError: boolean;
	message: string;
}

export interface FormState {
	formInput: DateOfBirth;
	error: Error;
}

export interface ActionObject {
	type: string;
	payload?: any;
}

export interface ContextInterface {
	age: string;
	submitForm: (value: DateOfBirth) => void;
	error: Error;
}
