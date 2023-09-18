import { useRef, useContext } from 'react';
import { AgeContext } from '../context/age-context';

import './CalculatorForm.scss';

const CalculatorForm = () => {
	const ageCtx = useContext(AgeContext);

	const error = ageCtx.error;

	const dayRef = useRef<HTMLInputElement | null>(null);
	const monthRef = useRef<HTMLInputElement | null>(null);
	const yearRef = useRef<HTMLInputElement | null>(null);

	const submitFormHandler = (event: React.FormEvent) => {
		event.preventDefault();

		if (dayRef.current && monthRef.current && yearRef.current) {
			const dateOfBirth = {
				day: dayRef.current.value,
				month: monthRef.current.value,
				year: yearRef.current.value,
			};

			ageCtx.submitForm(dateOfBirth);

			dayRef.current.value = '';
			monthRef.current.value = '';
			yearRef.current.value = '';
		}
	};

	return (
		<form className='form' onSubmit={submitFormHandler}>
			<div className='form__container'>
				<div className='form__group'>
					<label htmlFor='day' className='form__label'>
						Day
					</label>
					<input
						ref={dayRef}
						id='day'
						className={
							error.isError ? 'form__input form__input--error' : 'form__input'
						}
						type='number'
						placeholder='DD'
					/>
				</div>
				<div className='form__group'>
					<label htmlFor='month' className='form__label'>
						Month
					</label>
					<input
						ref={monthRef}
						id='month'
						className={
							error.isError ? 'form__input form__input--error' : 'form__input'
						}
						type='number'
						placeholder='MM'
					/>
				</div>
				<div className='form__group'>
					<label htmlFor='year' className='form__label'>
						Year
					</label>
					<input
						ref={yearRef}
						id='year'
						className={
							error.isError ? 'form__input form__input--error' : 'form__input'
						}
						type='number'
						placeholder='YYYY'
					/>
				</div>
			</div>
			<p
				className={
					error.isError ? 'form__error form__error--visible' : 'form__error'
				}
			>
				{error.isError ? error.message : '\u00A0'}
			</p>
			<button type='submit' className='form__btn'>
				<svg
					xmlns='http://www.w3.org/2000/svg'
					width='40'
					height='40'
					viewBox='0 0 46 44'
				>
					<g fill='none' stroke='#FFF' stroke-width='2'>
						<path d='M1 22.019C8.333 21.686 23 25.616 23 44M23 44V0M45 22.019C37.667 21.686 23 25.616 23 44' />
					</g>
				</svg>
			</button>
		</form>
	);
};

export default CalculatorForm;
