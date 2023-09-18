export interface AgeContextProps {
	children: React.ReactNode;
}

export interface DateOfBirth {
	day: string;
	month: string;
	year: string;
}

export interface Age {
	years: number 
	months: number;
	days: number;
}

interface Error {
	isError: boolean;
	message: string;
}

export interface FormState {
	age: Age | null;
	error: Error;
}

export interface ActionObject {
	type: string;
	payload?: any;
}

export interface ContextInterface {
	age: Age | null;
	submitForm: (value: DateOfBirth) => void;
	error: Error;
}
