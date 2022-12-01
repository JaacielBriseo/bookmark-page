import { useState } from 'react';

export const NewsletterForm = () => {
	const [emailInput, setEmailInput] = useState('');
	const [errorMsg, setErrorMsg] = useState(false);

	const isEmailValid = (event) => {
		event.preventDefault();
		emailInput.includes('@') ? setErrorMsg(false) : setErrorMsg(true);
	};
	const onInputChange = ({ target }) => {
		setEmailInput(target.value);
	};
	return (
		<form
			onSubmit={isEmailValid}
			className='flex flex-col items-start justify-center max-w-2xl mx-auto space-y-6 text-base px-6 md:flex-row md:space-y-0 md:space-x-4 md:px-0'
		>
			<div className='flex flex-col justify-between items-center mx-auto md:flex-row md:mx-0'>
				<div>
					<input
						onChange={onInputChange}
						value={emailInput}
						name='email'
						type='text'
						className={`flex-1 px-6 pt-3 pb-2 mb-4 rounded-lg border-2 ${
							errorMsg ? 'border-softRed' : 'border-white'
						} focus:outline-none md:mr-3 md:mb-0`}
						placeholder='Enter your email address'
					/>
					{errorMsg && <p className='text-softRed -mt-3 mb-2 md:mt-0 md:-mb-6'>Whoops, make sure it's an email</p>}
				</div>
				<button
					type='submit'
					className='inline-flex px-6 py-3 font-semibold text-center text-white duration-200 transform rounded-lg cursor-pointer focus:outline-none bg-softRed hover:opacity-90'
				>
					Contact Us
				</button>
			</div>
		</form>
	);
};
