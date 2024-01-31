import Button from "@/util/Button";
import HeadingDescription from "@/util/HeadingDescription";
import { IconArrowRight } from "@tabler/icons-react";

const LatestNews = () => {
  const latestNews = [
    {
      image: "/images/news/lts1.png",
      date: "30 Jan, 2024",
      title:
        "Helping close a Friend in Grief Get Started with a Beautiful Template or Something Special",
    },
    {
      image: "/images/news/lts2.png",
      date: "25 Jan, 2024",
      title: "Join us for a Healing Meditation Class",
    },
    {
      image: "/images/news/lts2.png",
      date: "25 Jan, 2024",
      title: "Join us for a Healing Meditation Class",
    },
  ];
  return (
    <div className="container">
      <HeadingDescription
        className="text-center mb-14"
        headingText="Latest News"
        descriptionText="We offer a wide range of funeral services and arrangements to  help you honor and celebrate the life of your loved one."
      />
      <div className="grid grid-cols-4 gap-5">
        {latestNews.map((item, index) => (
          <div
            key={index}
            className={`${index === 0 && "col-span-2"}  bg-white rounded-md`}
          >
            <img src={item.image} className="w-full" alt="" />
            <div className="p-4 space-y-4">
              <p className="text-sm">{item.date}</p>
              <h2 className="text-lg">{item.title}</h2>
              <Button
                className="border  border-primary text-primary"
                icon={<IconArrowRight size={18} />}
              >
                Read More
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LatestNews;
