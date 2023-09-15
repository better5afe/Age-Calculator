import CalculatorForm from './components/CalculatorForm';
import CalculatorResult from './components/CalculatorResult';
import AgeContextProvider from './context/AgeContextProvider';

import './App.scss';

const App = () => {
	return (
		<main className='main'>
			<div className='calculator'>
				<AgeContextProvider>
					<CalculatorForm />
					<CalculatorResult />
				</AgeContextProvider>
			</div>
		</main>
	);
};

export default App;
