import './CalculatorResult.scss';

const CalculatorResult = () => {
	return (
		<section className='calculator__result'>
			<p className='calculator__result-output'>
				<span className='calculator__result-output--colored'>38</span> years
			</p>
			<p className='calculator__result-output'>
				<span className='calculator__result-output--colored'>3</span> months
			</p>
			<p className='calculator__result-output'>
				<span className='calculator__result-output--colored'>26</span> days
			</p>
		</section>
	);
};

export default CalculatorResult;
