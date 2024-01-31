import Contact from "@/components/common/Contact";
import QualityService from "@/components/common/QualityService";

const ServicesPage = () => {
  return (
    <div className="container my-16">
      <div className="mb-24">
        <QualityService />
      </div>
      <Contact />
    </div>
  );
};

export default ServicesPage;
