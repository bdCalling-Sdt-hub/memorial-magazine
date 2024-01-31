import Button from "@/util/Button";
import { IconArrowRight } from "@tabler/icons-react";
import QuesAnswer from "./QuesAnswer";

const Media = () => {
  return (
    <div className="grid grid-cols-12 gap-8">
      <div className="col-span-8">
        <div>
          <img
            src="/images/serviceDetail.png"
            className="w-full h-[450px]"
            alt=""
          />
          <QuesAnswer />
        </div>
      </div>
      <div className="col-span-4 space-y-5">
        <div className="shadow bg-white p-4 py-6 rounded">
          <h2 className="font-semibold text-lg mb-4">
            Memorial Moment Support
          </h2>
          <p>
            If you'd like to speak to us directly, call free 24 hours a day.
          </p>
          <div className="mt-5">
            <p>(303) 274-8750</p>
            <p>memorial_moment@gmail.com</p>
          </div>
        </div>
        <div className="shadow bg-white p-4 py-6 rounded">
          <h2 className="font-semibold text-lg mb-4">
            Memorial Moment Directors
          </h2>
          <p>
            Our friendly team of fully trained staff share our drive to provide
            service.
          </p>
          <div className="mt-5">
            <Button
              className="border border-primary text-primary px-6"
              icon={<IconArrowRight size={18} />}
            >
              Meet The Team
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Media;
