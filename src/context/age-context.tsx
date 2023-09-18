import React from 'react';
import { ContextInterface } from '../utils/models';

export const AgeContext = React.createContext<ContextInterface>({
	age: null,
	submitForm: () => {},
	error: {
		isError: false,
		message: '',
	},
});
