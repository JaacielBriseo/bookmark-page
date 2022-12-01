import facebookIcon from '../assets/icon-facebook.svg';
import twitterIcon from '../assets/icon-twitter.svg';
export const MobileMenu = ({ isOpen }) => {
	return (
		<>
			<div
				className={` ${
					isOpen ? 'flex' : 'hidden'
				} fixed inset-0 z-20 flex-col items-center self-end w-full h-full m-h-screen px-6 py-1 pt-24 pb-4 tracking-widest text-white uppercase divide-y divide-gray-500 opacity-90 bg-veryDarkBlue`}
			>
				<div className='w-full py-3 text-center'>
					<a href='#features' className='block hover:text-softRed'>
						Features
					</a>
				</div>
				<div className='w-full py-3 text-center'>
					<a href='#download' className='block hover:text-softRed'>
						Download
					</a>
				</div>
				<div className='w-full py-3 text-center'>
					<a href='#faq' className='block hover:text-softRed'>
						FAQ
					</a>
				</div>
				<div className='w-full py-3 text-center'>
					<a href='#' className='block hover:text-softRed'>
						Login
					</a>
				</div>
				<div className='flex space-x-10 mt-80 py-3'>
					<a href='#'>
						<img src={facebookIcon} alt='Facebook' className='h-6 ficon' />
					</a>
					<a href='#'>
						<img src={twitterIcon} alt='Twitter' className='h-6 ficon' />
					</a>
				</div>
			</div>
		</>
	);
};
