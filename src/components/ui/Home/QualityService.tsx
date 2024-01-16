import Button from "@/util/Button";
import HeadingText from "@/util/HeadingText";
import { IconArrowRight } from "@tabler/icons-react";

const QualityService = () => {
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
        <div className="grid grid-cols-3 gap-8">
          {[...Array(3)].map((item) => (
            <div key={item} className="bg-white rounded-md">
              <img
                src="https://i.ibb.co/CKb4hSH/h8-post-1.jpg"
                className="rounded-t-md"
                alt=""
              />
              <div className="p-4 space-y-4">
                <h2 className="text-xl font-semibold">
                  All People Memorial Moments
                </h2>
                <p>
                  Memorial Moments Magazine People Stories section serves as a
                  platform to celebrate the diverse, touching, and impactful
                  narratives of individuals, fostering connection and empathy
                  among readers through shared human experiences.
                </p>
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
