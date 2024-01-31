"use client";

import Contact from "@/components/common/Contact";
import Media from "@/components/ui/ServiceDetail/Media";

const ServiceDetailsPage = ({ params }: { params: string }) => {
  // const id = useParams();
  // const path = usePathname();
  // const search = useRouter();

  return (
    <div className="container my-10">
      <Media />
      <div className="my-20">
        <Contact />
      </div>
    </div>
  );
};

export default ServiceDetailsPage;
