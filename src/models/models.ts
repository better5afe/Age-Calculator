export interface AgeContextProps {
	children: React.ReactNode;
}

export interface DateOfBirth {
	day: string;
	month: string;
	year: string;
}

interface Age {
	years: number | null;
	months: number | null;
	days: number | null;
}

interface Error {
	isError: boolean;
	message: string;
}

export interface FormState {
	age: Age;
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
