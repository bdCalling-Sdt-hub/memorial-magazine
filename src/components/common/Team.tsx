import HeadingText from "@/util/HeadingText";

const Team = () => {
  const teams = [
    {
      img: "/images/team/1.png",
      name: "Json Holder",
      designation: "CEO",
    },
    {
      img: "/images/team/2.png",
      name: "PHP Tracker",
      designation: "CEO",
    },
    {
      img: "/images/team/3.png",
      name: "JS Horse",
      designation: "CEO",
    },
    {
      img: "/images/team/4.png",
      name: "Python Few",
      designation: "CEO",
    },
  ];
  return (
    <div className="bg-[#eaf3fc] py-20 my-24">
      <div className="container">
        <div className="mb-24">
          <HeadingText className="text-center">Our Team</HeadingText>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 mx-32">
          {teams.map((team, index) => (
            <div key={index}>
              <img src={team.img} className="w-full" alt="" />
              <div className="text-center mt-8">
                <h2 className="text-xl font-semibold">{team.name}</h2>
                <h2>{team.designation}</h2>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Team;
