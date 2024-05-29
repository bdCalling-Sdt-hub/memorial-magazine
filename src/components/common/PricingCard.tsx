import { IconCheck, IconChessQueenFilled } from "@tabler/icons-react";

const PricingCard = ({ data }: { data: any }) => {
  const { package_name, duration, image_limit, amount, feature } = data;
  return (
    <div className="bg-white rounded-md p-7 h-auto flex flex-col justify-between">
      <h2 className="text-2xl font-semibold  flex items-center justify-center gap-3">
        <IconChessQueenFilled className="text-yellow-400" />
        {package_name}
      </h2>
      <h2 className="text-3xl font-semibold text-center text-primary my-3">
        ${amount}/ <span className="text-2xl">{duration} Month</span>
      </h2>
      <h2 className="text-xl font-semibold text-center text-primary">
        {image_limit} Photos Stories
      </h2>
      <div className="my-10">
        {feature?.map((item: any, index: number) => (
          <div key={index} className="flex items-center gap-2 mb-2">
            <div className="w-5 h-5 bg-primary text-white flex justify-center items-center rounded-full">
              <IconCheck size={15} />
            </div>
            <p>{item.feature}</p>
          </div>
        ))}
      </div>

      {/* <Button
        className="border w-full bg-primary text-white mt-auto block"
        icon={<IconArrowRight size={18} />}
      >
        Order Now
      </Button> */}
    </div>
  );
};

export default PricingCard;
