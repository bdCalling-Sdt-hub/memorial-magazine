import HeadingDescription from "@/util/HeadingDescription";

const More = () => {
  const items = [
    {
      title: "Mission",
      description:
        "Dorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod temporincididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam. Quis nos-trud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse. exercitation ullamco labo-ris nisi ut aliquip ex ea commodo consequat.",
    },
    {
      title: "Our History",
      description:
        "Dorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod temporincididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam. Quis nos-trud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse. exercitation ullamco labo-ris nisi ut aliquip ex ea commodo consequat.",
    },
  ];
  return (
    <div>
      <HeadingDescription
        className="text-center"
        headingText="TO KNOW MORE ABOUT US"
        descriptionText="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam. Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse.exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
      />
      <div className="mt-12">
        <img src="/images/about.png" alt="" />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 mt-10">
          {items.map((item, index) => (
            <div key={index} className="space-y-2">
              <h2 className="text-2xl font-bold">
                <span className="text-primary mr-2">{index}.</span>
                {item.title}
              </h2>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default More;
