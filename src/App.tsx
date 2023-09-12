import CalculatorForm from './components/CalculatorForm';
import CalculatorResult from './components/CalculatorResult';

import './App.scss';

const App = () => {
	return (
		<main className='main'>
			<div className='calculator'>
				<CalculatorForm />
				<CalculatorResult />
			</div>
		</main>
	);
};

export default App;
