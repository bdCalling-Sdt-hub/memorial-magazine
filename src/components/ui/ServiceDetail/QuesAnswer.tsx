import HeadingDescription from "@/util/HeadingDescription";
import questions from "../../../../public/db/questions.json";

const QuesAnswer = () => {
  return (
    <div className="mt-10">
      <HeadingDescription
        headingText="People Stories"
        descriptionText="At All People Stories, we believe every life is a tapestry of unique moments, experiences, and connections. Our Funeral Memorial Moments services are dedicated to honoring these stories and creating heartfelt tributes to cherish the memory of your loved ones."
      />
      {questions.map((ques, index) => (
        <div key={index} className="mt-10">
          <h2 className="text-lg font-bold">{ques.question}</h2>
          <p>{ques.answer}</p>
        </div>
      ))}
    </div>
  );
};

export default QuesAnswer;
