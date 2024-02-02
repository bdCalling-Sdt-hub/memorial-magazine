import Contact from "@/components/common/Contact";
import ContactInfo from "@/components/ui/Contact/ContactInfo";
import Map from "@/components/ui/Contact/Map";

const ContactPage = () => {
  return (
    <div className="my-16">
      <ContactInfo />
      <Contact />
      <Map />
    </div>
  );
};

export default ContactPage;
