import HeadingText from "@/util/HeadingText";
import { IconBadges, IconClipboardList } from "@tabler/icons-react";

const Help = () => {
  const plans = [
    {
      title: "Pre-planing",
      des: "The best way to spare your loved ones the emotional and financial strain.",
      icon: <IconClipboardList />,
    },
    {
      title: "Quality services",
      des: "We offer high-quality services for families to create healing moments after loss.",
      icon: <IconBadges />,
    },
  ];
  return (
    <div className="grid grid-cols-2 container my-24 items-center">
      <div className="space-y-5">
        <HeadingText>
          We are here to <br /> help you
        </HeadingText>
        <p>
          The experienced funeral directors at Name Funeral Home will guide you
          through the aspects of the funeral service with compassion, dignity,
          and respect.
        </p>
        {plans.map((item, index) => (
          <div key={index} className="flex gap-2 mb-5">
            <h2 className="text-primary">{item.icon}</h2>
            <div>
              <h2 className="text-2xl font-semibold">{item.title}</h2>
              <p className="mt-2">{item.des}</p>
            </div>
          </div>
        ))}
      </div>
      <div>
        <img src="/images/help.png" className=" ml-auto" alt="" />
      </div>
    </div>
  );
};

export default Help;
