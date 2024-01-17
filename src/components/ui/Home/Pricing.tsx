import Button from "@/util/Button";
import HeadingText from "@/util/HeadingText";
import {
  IconArrowRight,
  IconCheck,
  IconChessQueenFilled,
} from "@tabler/icons-react";
import pricingList from "../../../../public/db/pricing.json";

const Pricing = () => {
  return (
    <div className="bg-[#eaf3fc] py-16 my-24">
      <div className="container">
        <div className="mb-5">
          <HeadingText className="text-center">Pricing</HeadingText>
          <p className="text-center">
            We offer a wide range of funeral services and arrangements to <br />{" "}
            help you honor and celebrate the life of your loved one.
          </p>
        </div>
        <div className="grid grid-cols-3 gap-4 p-10">
          {pricingList.map((item, index) => (
            <div key={index} className="bg-white rounded-md p-7">
              <h2 className="text-2xl font-semibold  flex items-center justify-center gap-3">
                <IconChessQueenFilled className="text-yellow-400" />
                {item.title}
              </h2>
              <h2 className="text-3xl font-semibold text-center text-primary my-3">
                ${item.price}/ <span className="text-lg">{item.month}</span>
              </h2>
              <h2 className="text-xl font-semibold text-center text-primary">
                {item.photo} Photos Stories
              </h2>
              <div className="my-10">
                {item.facilities.map((item) => (
                  <div key={item} className="flex items-center gap-2 mb-2">
                    <div className="w-5 h-5 bg-primary text-white flex justify-center items-center rounded-full">
                      <IconCheck size={15} />
                    </div>
                    <p>{item}</p>
                  </div>
                ))}
              </div>
              <Button
                className="border w-full bg-primary text-gray-400"
                icon={<IconArrowRight size={18} />}
              >
                Order Now
              </Button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Pricing;
