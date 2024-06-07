"use client";

import { useGetSingleServiceQuery } from "@/redux/features/service/serviceApi";
import { useParams } from "next/navigation";
import { imgUrl } from "../../../../config";

const ServiceDetail = () => {
  const { id } = useParams();
  const { data, isLoading } = useGetSingleServiceQuery(id);

  if (isLoading) {
    return <p>Loading...</p>;
  }
  return (
    <div className="container my-10">
      <div className="bg-white rounded-xl grid grid-cols-1 lg:grid-cols-2 items-center gap-10">
        <img
          src={`${imgUrl}/${data?.data?.image}`}
          className="rounded-t-md w-full"
          alt=""
        />
        <div className="p-4 space-y-4">
          <h2 className="text-xl font-semibold">{data?.data?.title}</h2>
          <p>{data?.data?.description}</p>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetail;
