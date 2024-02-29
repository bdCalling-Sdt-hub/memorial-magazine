"use client";
import { usePostContactMutation } from "@/redux/features/contact/contactApi";
import Button from "@/util/Button";
import HeadingDescription from "@/util/HeadingDescription";
import Input from "@/util/Input";
import { ChangeEvent, FormEvent, useEffect, useState } from "react";

interface IContact {
  fullName: string;
  email: string;
  phone: string;
  address: string;
}

const Contact = () => {
  const [contactData, setContactData] = useState<IContact>({
    fullName: "",
    email: "",
    phone: "",
    address: "",
  });
  const [message, setMessage] = useState<string>("");
  const [postContact, { isLoading, isError, isSuccess }] =
    usePostContactMutation();

  //get the input value
  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    const name = e.target.name as keyof IContact;
    const value = e.target.value;

    const newData: IContact = { ...contactData };
    newData[name] = value;
    setContactData(newData);
  };

  //form submit
  const handleOnSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (contactData && message) {
      const value = { ...contactData, message: message };

      postContact(value);
    } else {
      alert("Fill the contact information");
    }
  };

  useEffect(() => {
    if (isSuccess) {
      setContactData({ fullName: "", email: "", phone: "", address: "" });
      setMessage("");
      alert("Contact send successfully");
    }
  }, [isSuccess]);

  return (
    <div className="container my-24">
      <HeadingDescription
        className="text-center mb-14"
        headingText="Contact Us"
        descriptionText="We offer a wide range of funeral services and arrangements to  help you honor and celebrate the life of your loved one."
      />
      <form className="grid grid-cols-12 gap-4 mt-10" onSubmit={handleOnSubmit}>
        <Input
          onChange={handleOnChange}
          className="col-span-12 lg:col-span-6"
          placeholder="Full Name"
          name="fullName"
          value={contactData.fullName}
        />
        <Input
          onChange={handleOnChange}
          className="col-span-12 lg:col-span-6"
          placeholder="Phone Number"
          name="phone"
          value={contactData.phone}
        />
        <Input
          onChange={handleOnChange}
          className="col-span-12 lg:col-span-6"
          placeholder="Email"
          name="email"
          value={contactData.email}
        />
        <Input
          onChange={handleOnChange}
          className="col-span-12 lg:col-span-6"
          placeholder="Address"
          name="address"
          value={contactData.address}
        />
        <textarea
          className="col-span-12 border rounded-md border-primary bg-transparent px-3 py-3 h-32"
          placeholder="Message"
          name="message"
          onChange={(e) => setMessage(e.target.value)}
          value={message}
        ></textarea>
        <Button
          type="submit"
          className={`${
            isLoading ? "bg-blue-300" : "bg-primary"
          } text-white uppercase px-4 mx-auto col-span-12`}
        >
          {isLoading ? "Sending..." : "Send Message"}
        </Button>
      </form>
    </div>
  );
};

export default Contact;
