import Contact from "@/components/common/Contact";

const PrivacyPolicyPage = () => {
  return (
    <div className="container my-16">
      <h2 className="text-lg font-bold">Privacy Policy</h2>
      <p>
        At Memorial Moments Magazine, we prioritize the protection and privacy
        of our readers&#39; personal information. This Privacy Policy outlines
        the types of information collected, how it&#39;s used, and the measures
        taken to safeguard your data.
      </p>
      <div className="my-10">
        <h2 className="text-lg font-bold mb-5">Information We Collect</h2>
        <ul className="list-disc space-y-3">
          <li>
            <span className="font-bold">Personal Information:</span> When you
            subscribe to our magazine or interact with our website, we may
            collect personal information such as your name, email address,
            mailing address, and payment details.
          </li>
          <li>
            <span className="font-bold">Usage Data:</span> We may gather
            information about how you interact with our content, including pages
            visited, links clicked, and duration of visit, using cookies and
            similar tracking technologies.
          </li>
        </ul>
      </div>
      <div className="my-10">
        <h2 className="text-lg font-bold mb-5">How We Use Your Information</h2>
        <ul className="list-disc space-y-3">
          <li>
            <span className="font-bold">Service Provision:</span> We use your
            personal information to provide you with our magazine subscription
            service, process payments, and deliver content to your preferred
            address or digital platform.
          </li>
          <li>
            <span className="font-bold">Communication:</span> We may use your
            contact information to send newsletters, updates, promotional
            offers, or notifications related to our magazine. You can opt-out of
            these communications at any time.
          </li>
          <li>
            <span className="font-bold">Improving User Experience:</span> Usage
            data helps us understand reader preferences and behavior, enabling
            us to enhance our content, website functionality, and user
            experience.
          </li>
        </ul>
      </div>
      <div className="my-10">
        <h2 className="text-lg font-bold mb-5">Your Choices and Rights</h2>
        <ul className="list-disc space-y-3">
          <li>
            <span className="font-bold"> Access and Modification:</span> You may
            access, update, or correct your personal information by contacting
            us. You also have the right to request deletion of your data,
            subject to legal obligations.
          </li>
          <li>
            <span className="font-bold">Cookies and Tracking:</span>
            You can manage or disable cookies through your browser settings.
            Please note that this might affect certain functionalities of our
            website.
          </li>
        </ul>
      </div>
      <div className="my-10">
        <h2 className="text-lg font-bold mb-5">Children&#39;s Privacy</h2>
        <p>
          Our services are not directed at individuals under the age of 13. We
          do not knowingly collect or maintain information from anyone under 13
          years of age. If we become aware of such information being collected,
          we will promptly delete it.
        </p>
      </div>
      <div className="my-10">
        <h2 className="text-lg font-bold mb-5">
          Updates to the Privacy Policy
        </h2>
        <p>
          We reserve the right to update this Privacy Policy to reflect changes
          in our practices or legal requirements. We will notify you of
          significant changes via email or by posting a notice on our website.
        </p>
      </div>

      <Contact />
    </div>
  );
};

export default PrivacyPolicyPage;
