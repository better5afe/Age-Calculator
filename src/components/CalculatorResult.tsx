import { useContext } from 'react';
import { AgeContext } from '../context/age-context';
import AnimatedNumbers from 'react-animated-numbers';

import './CalculatorResult.scss';

const CalculatorResult = () => {
	const ageCtx = useContext(AgeContext);

	return (
		<section className='calculator__result'>
			<div className='calculator__result-output'>
				<div className='calculator__result-output--digit'>
					{ageCtx.age ? (
						<AnimatedNumbers
							animateToNumber={ageCtx.age.years}
							configs={[
								{ mass: 1, tension: 220, friction: 100 },
								{ mass: 1, tension: 180, friction: 130 },
								{ mass: 1, tension: 280, friction: 90 },
								{ mass: 1, tension: 180, friction: 135 },
								{ mass: 1, tension: 260, friction: 100 },
								{ mass: 1, tension: 210, friction: 180 },
							]}
						/>
					) : (
						'--'
					)}
				</div>
				<p className='calculator__result-output'>years</p>
			</div>
			<div className='calculator__result-output calculator__result-output--months'>
				<div className='calculator__result-output--digit'>
					{ageCtx.age ? (
						<AnimatedNumbers
							animateToNumber={ageCtx.age.months}
							configs={[
								{ mass: 1, tension: 220, friction: 100 },
								{ mass: 1, tension: 180, friction: 130 },
								{ mass: 1, tension: 280, friction: 90 },
								{ mass: 1, tension: 180, friction: 135 },
								{ mass: 1, tension: 260, friction: 100 },
								{ mass: 1, tension: 210, friction: 180 },
							]}
						/>
					) : (
						'--'
					)}
				</div>
				<p className='calculator__result-output'>
					months
				</p>
			</div>
			<p className='calculator__result-output calculator__result-output--days'>
				<div className='calculator__result-output--digit'>
					{ageCtx.age ? (
						<AnimatedNumbers
							animateToNumber={ageCtx.age.days}
							configs={[
								{ mass: 1, tension: 220, friction: 100 },
								{ mass: 1, tension: 180, friction: 130 },
								{ mass: 1, tension: 280, friction: 90 },
								{ mass: 1, tension: 180, friction: 135 },
								{ mass: 1, tension: 260, friction: 100 },
								{ mass: 1, tension: 210, friction: 180 },
							]}
						/>
					) : (
						'--'
					)}
				</div>
				<p className='calculator__result-output'>
					days
				</p>
			</p>
		</section>
	);
};

export default CalculatorResult;
