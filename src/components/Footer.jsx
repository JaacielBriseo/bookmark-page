import { bookmarkLogo, facebookIcon, twitterIcon } from '../assets';

export const Footer = () => {
	return (
		<footer className='py-16 bg-veryDarkBlue'>
			<div className='container flex flex-col items-center justify-between mx-auto space-y-16 px-6 md:flex-row md:space-y-0'>
				<div className='flex flex-col items-center justify-between space-y-8 text-lg font-light md:flex-row md:space-y-0 md:space-x-14 text-grayishBlue'>
					<img src={bookmarkLogo} alt='' className='mb-1' />

					<a href='#features' className='uppercase hover:text-softRed'>
						Features
					</a>
					<a href='#download' className='uppercase hover:text-softRed'>
						Download
					</a>
					<a href='#faq' className='uppercase hover:text-softRed'>
						FAQ
					</a>
				</div>
				<div className='flex space-x-10'>
					<a href='#'>
						<img src={facebookIcon} alt='Facebook' className='h-6 ficon' />
					</a>
					<a href='#'>
						<img src={twitterIcon} alt='Twitter' className='h-6 ficon' />
					</a>
				</div>
			</div>
		</footer>
	);
};
