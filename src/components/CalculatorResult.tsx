import './CalculatorResult.scss';
import AnimatedNumbers from 'react-animated-numbers';

const CalculatorResult = () => {
	return (
		<section className='calculator__result'>
			<div className='calculator__result-output'>
				<div className='calculator__result-output--digit'>
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
				</div>
				<p className='calculator__result-output--text'>years</p>
			</div>
			<div className='calculator__result-output'>
				<div className='calculator__result-output--digit'>
					<AnimatedNumbers
						animateToNumber={3}
						configs={[
							{ mass: 1, tension: 220, friction: 100 },
							{ mass: 1, tension: 180, friction: 130 },
							{ mass: 1, tension: 280, friction: 90 },
							{ mass: 1, tension: 180, friction: 135 },
							{ mass: 1, tension: 260, friction: 100 },
							{ mass: 1, tension: 210, friction: 180 },
						]}
					/>
				</div>
				<p className='calculator__result-output--text calculator__result-output--text--months'>
					months
				</p>
			</div>
			<p className='calculator__result-output'>
				<div className='calculator__result-output--digit'>
					<AnimatedNumbers
						animateToNumber={26}
						configs={[
							{ mass: 1, tension: 220, friction: 100 },
							{ mass: 1, tension: 180, friction: 130 },
							{ mass: 1, tension: 280, friction: 90 },
							{ mass: 1, tension: 180, friction: 135 },
							{ mass: 1, tension: 260, friction: 100 },
							{ mass: 1, tension: 210, friction: 180 },
						]}
					/>
				</div>
				<p className='calculator__result-output--text calculator__result-output--text--days'>days</p>
			</p>
		</section>
	);
};

export default CalculatorResult;
