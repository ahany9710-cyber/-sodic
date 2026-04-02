import Hero from '../components/Hero';
import CommunitySection from '../components/CommunitySection';
import InteractiveFilter from '../components/InteractiveFilter';
import AvailableUnits from '../components/AvailableUnits';
import SustainabilitySection from '../components/SustainabilitySection';
import PropertyFinder from '../components/PropertyFinder';
import LeadForm from '../components/LeadForm';

const Landing = () => {
  return (
    <main>
      <Hero />
      <CommunitySection />
      <InteractiveFilter />
      <AvailableUnits />
      <SustainabilitySection />
      <PropertyFinder />
      <LeadForm />
    </main>
  );
};

export default Landing;
