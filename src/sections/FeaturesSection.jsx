import { useState } from 'react';
import { tab1, tab2, tab3 } from '../assets';
import { ButtonToActivePanel, FeaturesPanel } from '../components';
export const FeaturesSection = () => {
	const [isActive, setIsActive] = useState('bookmark');

	const activeTab = ({ target }) => {
		setIsActive(target.name);
	};

	return (
		<section id='features'>
			<div className='container mx-auto mt-16 px-6'>
				<h2 className='mb-6 text-4xl font-semibold text-center'>Features</h2>
				<p className='max-w-md mx-auto text-center text-grayishBlue'>
					Our aim is to make it quick and easy for you to access your favorite websites. Your bookmarks sync between
					your devices so you can access them on the go.
				</p>
			</div>
			<div>
				<div className='container relative mx-auto my-6 mb-32 mt-12 px-6'>
					<div className='bg-tabs'></div>
					<div className='flex flex-col justify-center max-w-xl mx-auto mb-6 border-b md:space-x-10 md:flex-row'>
						<ButtonToActivePanel isActive={isActive} activeTab={activeTab} name='bookmark' text='Simple Bookmarking' />
						<ButtonToActivePanel isActive={isActive} activeTab={activeTab} name='searching' text='Speedy Searching' />
						<ButtonToActivePanel isActive={isActive} activeTab={activeTab} name='sharing' text='Easy Sharing' />
					</div>
					<section id='panels' className='container mx-auto'>
						{isActive === 'bookmark' && (
							<FeaturesPanel
								img={tab1}
								title='Bookmark in one click'
								text='Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favourite sites.'
							/>
						)}
						{isActive === 'searching' && (
							<FeaturesPanel
								img={tab2}
								title='Intelligent search'
								text='Our powerful search feature will help you find saved sites in no time at all. No need to trawl through all of your bookmarks.'
							/>
						)}
						{isActive === 'sharing' && (
							<FeaturesPanel
								img={tab3}
								title='Share your bookmarks'
								text='Easily share your bookmarks and collections with others. Create a shareable a link that you can send at the click of a button.'
							/>
						)}
					</section>
				</div>
			</div>
		</section>
	);
};
