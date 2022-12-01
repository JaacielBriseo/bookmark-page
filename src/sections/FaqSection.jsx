import { FaqTabs } from '../components';
export const FaqSection = () => {
	return (
		<>
			<section id='faq'>
				<div className='container mx-auto'>
					<h2 className='mb-6 text-3xl font-semibold text-center md:text-4xl'>Frequently Asked Questions</h2>
					<p className='max-w-lg px-6 mx-auto text-center text-graishBlue'>
						Here are some of our FAQs. If you have any other questions you'd like answered please feel free to email us.
					</p>
				</div>
				<div className='container mx-auto px-6 mb-32'>
					<div className='max-w-2xl m-8 mx-auto overflow-hidden'>
						<FaqTabs question={'What is Bookmark?'} />
						<FaqTabs question={'How can I request a new browser?'} />
						<FaqTabs question={'Is there a mobile app?'} />
						<FaqTabs question={'What about other Chromium browsers?'} />
					</div>
				</div>
			</section>
		</>
	);
};
