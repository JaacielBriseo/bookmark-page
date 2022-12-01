import { useState } from 'react';
import { bookmark, bookmarkLight } from '../assets';
import { HamburgerButton, MobileMenu } from './';

export const Navbar = () => {
	const [isOpen, setIsOpen] = useState(false);

	const toggleMobileMenu = () => {
		setIsOpen(!isOpen);
	};
	return (
		<nav className='container relative mx-auto p-6'>
			<div className='flex items-center justify-between space-x-20 my-6'>
				<div className='z-30'>
					<img src={isOpen ? bookmarkLight : bookmark} alt='bookmark' />
				</div>
				<div className='hidden items-center space-x-10 uppercase text-grayishBlue md:flex'>
					<a href='#features' className='tracking-widest hover:text-softRed'>
						Features
					</a>
					<a href='#download' className='tracking-widest hover:text-softRed'>
						Download
					</a>
					<a href='#faq' className='tracking-widest hover:text-softRed'>
						FAQ
					</a>
					<a
						href='#'
						className='px-8 py-2 text-white bg-softRed border-2 border-softRed rounded-lg shadow md:hover:text-softRed hover:bg-white'
					>
						LOGIN
					</a>
				</div>
				<HamburgerButton isOpen={isOpen} toggleMobileMenu={toggleMobileMenu} />
			</div>
			<MobileMenu isOpen={isOpen} />
		</nav>
	);
};
