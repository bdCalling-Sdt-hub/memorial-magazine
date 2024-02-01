import Contact from "@/components/common/Contact";
import Pricing from "@/components/common/Pricing";
import QuestionAndAnswer from "@/components/ui/Pricing/QuestionAndAnswer";

const PricingPage = () => {
  return (
    <div className="container my-16">
      <Pricing />
      <QuestionAndAnswer />
      <Contact />
    </div>
  );
};

export default PricingPage;
