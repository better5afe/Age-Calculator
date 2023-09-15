import { useContext } from 'react';
import { AgeContext } from '../context/age-context';
import AnimatedNumbers from 'react-animated-numbers';

import './CalculatorResult.scss';

const CalculatorResult = () => {
	const ageCtx = useContext(AgeContext);

	let output: any = '--';

	if (ageCtx.age === 'testcheck') {
		output = (
			<AnimatedNumbers
				animateToNumber={38}
				configs={[
					{ mass: 1, tension: 220, friction: 100 },
					{ mass: 1, tension: 180, friction: 130 },
					{ mass: 1, tension: 280, friction: 90 },
					{ mass: 1, tension: 180, friction: 135 },
					{ mass: 1, tension: 260, friction: 100 },
					{ mass: 1, tension: 210, friction: 180 },
				]}
			/>
		);
	}

	return (
		<section className='calculator__result'>
			<div className='calculator__result-output'>
				<div className='calculator__result-output--digit'>{output}</div>
				<p className='calculator__result-output--text'>years</p>
			</div>
			<div className='calculator__result-output'>
				<div className='calculator__result-output--digit'>{output}</div>
				<p className='calculator__result-output--text calculator__result-output--text--months'>
					months
				</p>
			</div>
			<p className='calculator__result-output'>
				<div className='calculator__result-output--digit'>{output}</div>
				<p className='calculator__result-output--text calculator__result-output--text--days'>
					days
				</p>
			</p>
		</section>
	);
};

export default CalculatorResult;
