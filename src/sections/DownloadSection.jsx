import { chromeLogo, firefoxLogo, operaLogo } from '../assets';
import { ExtensionItem } from '../components';
export const DownloadSection = () => {
	return (
		<>
			<section id='download'>
				<div className='container mx-auto px-6'>
					<h2 className='mb-6 text-3xl font-semibold text-center md:text-4xl'>Download the extension</h2>
					<p className='max-w-lg mx-auto text-center text-grayishBlue'>
						We've got more browsers in the pipeline. Please do let use know if you've got a favourite you'd like us to
						prioritize.
					</p>
				</div>
			</section>
			<section className='py-32'>
				<div className='relative flex flex-col items-center max-w-5xl mx-auto space-y-10 px-10 md:px-6 md:space-y-0 md:space-x-7 md:flex-row'>
					<ExtensionItem img={chromeLogo} name='Chrome' version='62' style='md:w-1/3' />
					<div className='w-full md:w-1/3'>
						<ExtensionItem img={firefoxLogo} name='Firefox' version='55' style='md:mt-8' />
					</div>
					<div className='w-full md:w-1/3'>
						<ExtensionItem img={operaLogo} name='Opera' version='46' style='md:mt-16' />
					</div>
				</div>
			</section>
		</>
	);
};
