import { IServiceCard } from "@/types";
import Button from "@/util/Button";
import { IconArrowRight } from "@tabler/icons-react";
import Link from "next/link";
import { imgUrl } from "../../../config";

const ServiceCard: React.FC<{ data: IServiceCard }> = ({ data }) => {
  const { image, title, description, id } = data;
  return (
    <div className="bg-white rounded-xl">
      <img src={`${imgUrl}/${image}`} className="rounded-t-md w-full" alt="" />
      <div className="p-4 space-y-4">
        <h2 className="text-xl font-semibold">{title}</h2>
        <p>{description}</p>
        <Link href={`/services/${id}`}>
          <Button
            className="border w-full text-black mt-10"
            icon={<IconArrowRight size={18} />}
          >
            More Details
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default ServiceCard;
