import { Footer, Navbar } from './components';
import { DownloadSection, FaqSection, FeaturesSection, HeroSection, NewsletterSection } from './sections';

export const BookmarkPage = () => {
	return (
		<>
			<Navbar />
			<HeroSection />
			<FeaturesSection />
			<DownloadSection />
			<FaqSection />
			<NewsletterSection />
			<Footer />
		</>
	);
};
