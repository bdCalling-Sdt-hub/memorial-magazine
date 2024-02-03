import Contact from "@/components/common/Contact";

const TermsAndConditionPage = () => {
  return (
    <div className="container my-16">
      <h2 className="text-lg font-bold">Terms & Conditions</h2>
      <p>
        Welcome to Memorial Moments Magazine. These Terms & Conditions govern
        your access to and use of our magazine, website, and services. By
        accessing or using our platform, you agree to comply with these terms.
      </p>
      <div className="my-10">
        <h2 className="text-lg font-bold mb-5">Use of Content</h2>
        <ul className="list-disc space-y-3">
          <li>
            <span className="font-bold">Copyright:</span> All content provided
            by Memorial Moments Magazine, including articles, images, and design
            elements, is protected by copyright and intellectual property laws.
            You may not reproduce, distribute, or use our content without
            permission.
          </li>
          <li>
            <span className="font-bold">Non-Commercial Use:</span> Content from
            Memorial Moments Magazine is intended for personal, non-commercial
            use only. Any commercial use or distribution requires explicit
            written consent from us.
          </li>
        </ul>
      </div>
      <div className="my-10">
        <h2 className="text-lg font-bold mb-5">User Conduct</h2>
        <ul className="list-disc space-y-3">
          <li>
            <span className="font-bold">Accuracy of Information:</span> Users
            are responsible for the accuracy of the information they provide to
            Memorial Moments Magazine, ensuring that it&#39;s true, current, and
            does not infringe upon the rights of others.
          </li>
          <li>
            <span className="font-bold">Prohibited Activities:</span> Users must
            not engage in activities that disrupt or interfere with the
            functioning of our platform, violate the law, infringe on
            intellectual property rights, or compromise the security of our
            website.
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
        <h2 className="text-lg font-bold mb-5">User Accounts</h2>
        <ul className="list-disc space-y-3">
          <li>
            <span className="font-bold"> Account Creation:</span> Creating an
            account with Memorial Moments Magazine may require providing
            accurate and complete information. You are responsible for
          </li>
          <li>
            <span className="font-bold">Account Termination:</span> We reserve
            the right to suspend or terminate user accounts that violate these
            Terms & Conditions or engage in inappropriate conduct on our
            platform.
          </li>
        </ul>
      </div>
      <div className="my-10">
        <h2 className="text-lg font-bold mb-5">Links to Third-Party Sites</h2>
        <p>
          Memorial Moments Magazine may contain links to third-party websites or
          resources. We are not responsible for the content, policies, or
          practices of these external sites and encourage users to review their
          respective terms and privacy policies.
        </p>
      </div>
      <div className="my-10">
        <h2 className="text-lg font-bold mb-5">Limitation of Liability</h2>
        <p>
          Memorial Moments Magazine strives to provide accurate and reliable
          content. However, we do not guarantee the accuracy, completeness, or
          reliability of the information provided. We shall not be liable for
          any direct, indirect, or incidental damages resulting from the use or
          inability to use our platform.
        </p>
      </div>
      <div className="my-10">
        <h2 className="text-lg font-bold mb-5">
          Changes to Terms & Conditions
        </h2>
        <p>
          We reserve the right to update or modify these Terms & Conditions at
          any time. Any significant changes will be communicated to users via
          email or by posting a notice on our website.
        </p>
      </div>
      <div className="my-10">
        <h2 className="text-lg font-bold mb-5">Governing Law</h2>
        <p>
          These Terms & Conditions are governed by and construed in accordance
          with the laws of [Your Jurisdiction], without regard to its conflict
          of law provisions.
        </p>
      </div>

      <Contact />
    </div>
  );
};

export default TermsAndConditionPage;
