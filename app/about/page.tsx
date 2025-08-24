import Header from '../../components/Header';
import Footer from '../../components/Footer';
import AboutHero from './AboutHero';
import MissionVision from './MissionVision';
import CoreValues from './CoreValues';
import WhyChooseUs from './WhyChooseUs';
import CallToAction from './CallToAction';

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20">
        <AboutHero />
        <MissionVision />
        <CoreValues />
        <WhyChooseUs />
        <CallToAction />
      </main>
      <Footer />
    </div>
  );
}