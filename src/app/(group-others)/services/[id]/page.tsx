"use client";

import { useParams, usePathname, useRouter } from "next/navigation";

const ServiceDetailsPage = ({ params }: { params: string }) => {
  const id = useParams();
  const path = usePathname();
  const search = useRouter();

  console.log(id, path, search);
  return (
    <div>
      <h2>Service Detail page</h2>
    </div>
  );
};

export default ServiceDetailsPage;
