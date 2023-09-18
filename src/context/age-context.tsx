import React from 'react';
import { ContextInterface } from '../models/models';

export const AgeContext = React.createContext<ContextInterface>({
	age: '',
	submitForm: () => {},
	error: {
		isError: false,
		message: '',
	},
});
