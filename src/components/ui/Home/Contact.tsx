import Button from "@/util/Button";
import HeadingText from "@/util/HeadingText";
import Input from "@/util/Input";

const Contact = () => {
  return (
    <div className="container my-24">
      <div className="text-center">
        <HeadingText>Contact Us</HeadingText>
        <p>
          We offer a wide range of funeral services and arrangements to <br />{" "}
          help you honor and celebrate the life of your loved one.
        </p>
      </div>
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
          className="bg-primary uppercase px-4 mx-auto col-span-12"
        >
          Send Message
        </Button>
      </form>
    </div>
  );
};

export default Contact;
