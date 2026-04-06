import Hero from '../components/Hero';
import CommunitySection from '../components/CommunitySection';
import InteractiveFilter from '../components/InteractiveFilter';
import AvailableUnits from '../components/AvailableUnits';
import LeadForm from '../components/LeadForm';
import SustainabilitySection from '../components/SustainabilitySection';
import PropertyFinder from '../components/PropertyFinder';

const Landing = () => {
  return (
    <main>
      <Hero />
      <CommunitySection />
      <InteractiveFilter />
      <AvailableUnits />
      <LeadForm />
      <SustainabilitySection />
      <PropertyFinder />
    </main>
  );
};

export default Landing;
