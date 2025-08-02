import Header from "@/components/Header";
import Hero from "@/components/Hero";
import PracticeAreas from "@/components/PracticeAreas";
import WhyChooseUs from "@/components/WhyChooseUs";
import AttorneyTeam from "@/components/AttorneyTeam";
import Testimonials from "@/components/Testimonials";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <PracticeAreas />
      <WhyChooseUs />
      <AttorneyTeam />
      <Testimonials />
      <ContactForm />
      <Footer />
    </div>
  );
};

export default Index;
