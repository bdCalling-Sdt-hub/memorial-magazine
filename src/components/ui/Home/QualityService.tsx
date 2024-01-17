import Button from "@/util/Button";
import HeadingText from "@/util/HeadingText";
import { IconArrowRight } from "@tabler/icons-react";

const QualityService = () => {
  const qualityService = [
    {
      image: "/images/service1.png",
      title: "All People Memorial Moments",
      description:
        "Memorial Moments Magazine People Stories section serves as a platform to celebrate the diverse, touching, and impactful narratives of individuals, foste",
    },
    {
      image: "/images/service2.png",
      title: "Veterans Memorial Moments",
      description:
        "This specialized section within Memorial Moments Magazine serves as a tribute to the dedicated individuals who serve or have served in uniformed profession",
    },
    {
      image: "/images/service3.png",
      title: "Pet Memorial Moments",
      description:
        "This Pets Stories section within Memorial Moments Magazine aims to celebrate the joy, companionship, and profound connections that people experience",
    },
  ];
  return (
    <div className="bg-[#eaf3fc] py-20 my-24">
      <div className="container">
        <div className="mb-12">
          <HeadingText className="text-center">Quality Services</HeadingText>
          <p className="text-center">
            We offer a wide range of funeral services and arrangements to <br />{" "}
            help you honor and celebrate the life of your loved one.
          </p>
        </div>
        <div className="grid grid-cols-3 gap-4">
          {qualityService.map((item, index) => (
            <div key={index} className="bg-white rounded-xl">
              <img src={item.image} className="rounded-t-md w-full" alt="" />
              <div className="p-4 space-y-4">
                <h2 className="text-xl font-semibold">{item.title}</h2>
                <p>{item.description}</p>
                <Button
                  className="border w-full text-gray-400"
                  icon={<IconArrowRight size={18} />}
                >
                  More Details
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default QualityService;
