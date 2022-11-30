import tab1 from '../assets/illustration-features-tab-1.svg';
import tab2 from '../assets/illustration-features-tab-2.svg';
import tab3 from '../assets/illustration-features-tab-3.svg';
export const FeaturesSection = () => {
	return (
		<>
			<section id='features'>
				{/* Features Heading */}
				<div className='container mx-auto mt-16 px-6'>
					<h2 className='mb-6 text-4xl font-semibold text-center'>Features</h2>
					<p className='max-w-md mx-auto text-center text-grayishBlue'>
						Our aim is to make it quick and easy for you to access your favorite websites. Your bookmarks sync between
						your devices so you can access them on the go.
					</p>
				</div>
			</section>
			{/* Features Tabs */}
			<section id='tabs'>
				{/* Tabs container */}
				<div className='container relative mx-auto my-6 mb-32 mt-12 px-6'>
					<div className='bg-tabs'></div>
					{/* Flex container tabs */}
					<div className='flex flex-col justify-center max-w-xl mx-auto mb-6 border-b md:space-x-10 md:flex-row'>
						{/* Tab1 */}
						<div className='flex justify-center text-center text-gray-600 border-b md:border-b-0 hover:text-softRed md:w-1/3 tab'>
							<div className='py-5 border-b-4 border-softRed'>Simple Bookmarking</div>
						</div>
						{/* Tab2 */}
						<div className='flex justify-center text-center text-gray-600 border-b md:border-b-0 hover:text-softRed md:w-1/3 tab'>
							<div className='py-5'>Speedy Searching</div>
						</div>
						{/* Tab3 */}
						<div className='flex justify-center text-center text-gray-600 border-b md:border-b-0 hover:text-softRed md:w-1/3 tab'>
							<div className='py-5'>Easy Sharing</div>
						</div>
					</div>
					{/* Tab Panels */}
					<section id='panels' className='container mx-auto'>
						{/* Panel1  */}
						<div className='flex flex-col py-5 md:flex-row md:space-x-7 panel panel-1'>
							{/* Panel Img */}
							<div className='flex justify-center md:w-1/2'>
								<img src={tab1} alt='tab1' className='relative z-10' />
							</div>
							{/* Panel content */}
							<div className='flex flex-col space-y-8 md:w-1/2'>
								<h3 className='mt-32 text-3xl font-semibold text-center md:mt-0 md:text-left'>Bookmark in one click</h3>
								<p className='max-w-md text-center text-grayishBlue md:text-left'>
									Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete
									control over how you manage your favourite sites.
								</p>
								<div className='mx-auto md:mx-0'>
									<a
										href='#'
										className='px-6 py-3 mt-4 font-semibold text-white border-2 border-white rounded-lg md:inline-flex bg-softBlue hover:bg-white hover:text-softBlue hover:border-softBlue hover:border-2'
									>
										More Info
									</a>
								</div>
							</div>
						</div>
						{/* Panel2  */}
						<div className='flex flex-col hidden py-5 md:flex-row md:space-x-7 panel panel-1'>
							{/* Panel Img */}
							<div className='flex justify-center md:w-1/2'>
								<img src={tab2} alt='tab2' className='relative z-10' />
							</div>
							{/* Panel content */}
							<div className='flex flex-col space-y-8 md:w-1/2'>
								<h3 className='mt-14 text-3xl font-semibold text-center md:mt-0 md:text-left'>Intelligent search</h3>
								<p className='max-w-md text-center text-grayishBlue md:text-left'>
									Our powerful search feature will help you find saved sites in no time at all. No need to trawl through
									all of your bookmarks.
								</p>
								<div className='mx-auto md:mx-0'>
									<a
										href='#'
										className='px-6 py-3 mt-4 font-semibold text-white border-2 border-white rounded-lg md:inline-flex bg-softBlue hover:bg-white hover:text-softBlue hover:border-softBlue hover:border-2'
									>
										More Info
									</a>
								</div>
							</div>
						</div>
						{/* Panel3  */}
						<div className='flex flex-col hidden py-5 md:flex-row md:space-x-7 panel panel-1'>
							{/* Panel Img */}
							<div className='flex justify-center md:w-1/2'>
								<img src={tab3} alt='tab3' className='relative z-10' />
							</div>
							{/* Panel content */}
							<div className='flex flex-col space-y-8 md:w-1/2'>
								<h3 className='mt-14 text-3xl font-semibold text-center md:mt-0 md:text-left'>Share your bookmarks</h3>
								<p className='max-w-md text-center text-grayishBlue md:text-left'>
									Easily share your bookmarks and collections with others. Create a shareable a link that you can send at the click of a button.
								</p>
								<div className='mx-auto md:mx-0'>
									<a
										href='#'
										className='px-6 py-3 mt-4 font-semibold text-white border-2 border-white rounded-lg md:inline-flex bg-softBlue hover:bg-white hover:text-softBlue hover:border-softBlue hover:border-2'
									>
										More Info
									</a>
								</div>
							</div>
						</div>
					</section>
				</div>
			</section>
		</>
	);
};
