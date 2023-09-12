import './CalculatorResult.scss';
import AnimatedNumbers from 'react-animated-numbers';

const CalculatorResult = () => {
	return (
		<section className='calculator__result'>
			<p className='calculator__result-output'>
				<span className='calculator__result-output--colored'>
					<AnimatedNumbers
						animateToNumber={38}
						configs={[
							{ mass: 1, tension: 140, friction: 126 },
							{ mass: 1, tension: 130, friction: 114 },
							{ mass: 1, tension: 150, friction: 112 },
							{ mass: 1, tension: 130, friction: 120 },
						]}
					/>
				</span>{' '}
				years
			</p>
			<p className='calculator__result-output'>
				<span className='calculator__result-output--colored'>
					<AnimatedNumbers
						animateToNumber={3}
						configs={[
							{ mass: 1, tension: 140, friction: 126 },
							{ mass: 1, tension: 130, friction: 114 },
							{ mass: 1, tension: 150, friction: 112 },
							{ mass: 1, tension: 130, friction: 120 },
						]}
					/>
				</span>{' '}
				months
			</p>
			<p className='calculator__result-output'>
				<span className='calculator__result-output--colored'>
					<AnimatedNumbers
						animateToNumber={26}
						configs={[
							{ mass: 1, tension: 140, friction: 126 },
							{ mass: 1, tension: 130, friction: 114 },
							{ mass: 1, tension: 150, friction: 112 },
							{ mass: 1, tension: 130, friction: 120 },
                        ]}
					/>
				</span>{' '}
				days
			</p>
		</section>
	);
};

export default CalculatorResult;
