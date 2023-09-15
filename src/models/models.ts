export interface AgeContextProps {
	children: React.ReactNode;
}

export interface DateOfBirth {
	day: string;
	month: string;
	year: string;
}

export interface ContextInterface {
	age: string;
	submitForm: (value: DateOfBirth) => void;
	isError: boolean;
}

export interface FormState {
	formInput: DateOfBirth;
	isError: boolean;
}

export interface ActionObject {
	type: string;
	payload?: any;
}


