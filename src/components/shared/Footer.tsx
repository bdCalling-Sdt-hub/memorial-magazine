import Link from "next/link";

const Footer = () => {
  return (
    <div className="bg-primary">
      <div className="grid grid-cols-4 gap-16 text-white py-10 container">
        <div>
          <img src="/images/footerLogo.png" alt="" />
          <p className="mt-5">
            We understand every funeral is different because every person
            isunique and each family situation is different.
          </p>
          <div className="flex items-center gap-4 mt-5">
            <img src="/images/Apple.png" className="w-40" alt="Banner" />
            <img src="/images/Google.png" className="w-40" alt="Banner" />
          </div>
        </div>
        <div className="mx-auto">
          <h2 className="text-xl font-bold">Quick Links</h2>
          {[
            "About Us",
            "Services",
            "Contact Us",
            "Blog",
            "Pricing",
            "Team",
          ].map((item) => (
            <li key={item} className="list-none my-3">
              <Link href="#">{item}</Link>
            </li>
          ))}
        </div>
        <div className="mx-auto">
          <h2 className="text-xl font-bold">Services</h2>
          {["Individual Stories", "Veteran Stories", "Pets Stories"].map(
            (item) => (
              <li key={item} className="list-none my-3">
                <Link href="#">{item}</Link>
              </li>
            )
          )}
        </div>
        <div className="mx-auto">
          <h2 className="text-xl font-bold">Contact Info</h2>
          {[
            "About Us",
            "Services",
            "Contact Us",
            "Blog",
            "Pricing",
            "Team",
          ].map((item) => (
            <li key={item} className="list-none my-3">
              <Link href="#">{item}</Link>
            </li>
          ))}
        </div>
      </div>
      <div className="border-t py-7">
        <div className="flex items-center justify-between text-white container">
          <p>
            {["Privacy Policy", "Terms & Conditions"].map((item) => (
              <Link key={item} href="#" className="mr-3">
                {item}
              </Link>
            ))}
          </p>
          <p>memorial_moment © 2024 All Rights Reserved</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
