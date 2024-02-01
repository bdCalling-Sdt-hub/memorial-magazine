import { IPricingCard } from "@/types";
import Button from "@/util/Button";
import {
  IconArrowRight,
  IconCheck,
  IconChessQueenFilled,
} from "@tabler/icons-react";

const PricingCard = ({
  data: { title, month, photo, facilities, price, id },
}: {
  data: IPricingCard;
}) => {
  return (
    <div className="bg-white rounded-md p-7">
      <h2 className="text-2xl font-semibold  flex items-center justify-center gap-3">
        <IconChessQueenFilled className="text-yellow-400" />
        {title}
      </h2>
      <h2 className="text-3xl font-semibold text-center text-primary my-3">
        ${price}/ <span className="text-lg">{month}</span>
      </h2>
      <h2 className="text-xl font-semibold text-center text-primary">
        {photo} Photos Stories
      </h2>
      <div className="my-10">
        {facilities.map((item) => (
          <div key={item} className="flex items-center gap-2 mb-2">
            <div className="w-5 h-5 bg-primary text-white flex justify-center items-center rounded-full">
              <IconCheck size={15} />
            </div>
            <p>{item}</p>
          </div>
        ))}
      </div>
      <Button
        className="border w-full bg-primary text-white mt-16"
        icon={<IconArrowRight size={18} />}
      >
        Order Now
      </Button>
    </div>
  );
};

export default PricingCard;
