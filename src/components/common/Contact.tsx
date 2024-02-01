import Button from "@/util/Button";
import HeadingDescription from "@/util/HeadingDescription";
import Input from "@/util/Input";

const Contact = () => {
  return (
    <div className="container my-24">
      <HeadingDescription
        className="text-center mb-14"
        headingText="Contact Us"
        descriptionText="We offer a wide range of funeral services and arrangements to  help you honor and celebrate the life of your loved one."
      />
      <form className="grid grid-cols-12 gap-4 mt-10">
        <Input className="col-span-6" placeholder="Full Name" />
        <Input className="col-span-6" placeholder="Phone Number" />
        <Input className="col-span-6" placeholder="Email" />
        <Input className="col-span-6" placeholder="Address" />
        <textarea
          className="col-span-12 border rounded-md border-primary bg-transparent px-3 py-3 h-32"
          placeholder="Message"
        ></textarea>
        <Button
          type="submit"
          className="bg-primary text-white uppercase px-4 mx-auto col-span-12"
        >
          Send Message
        </Button>
      </form>
    </div>
  );
};

export default Contact;
