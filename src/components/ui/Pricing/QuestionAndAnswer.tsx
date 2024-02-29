"use client";
import HeadingDescription from "@/util/HeadingDescription";
import { useState } from "react";

const QuestionAndAnswer = () => {
  const [collapse, setCollapse] = useState(false);
  const [indexNumber, setIndexNumber] = useState(0);

  const questions = [
    {
      question: "What is a memorial moment?",
      answer:
        "We offer a wide range of funeral services and arrangements to help you honor and celebrate the life of your loved one",
    },
    {
      question: "Who typically attends a memorial moment?",
      answer:
        "We offer a wide range of funeral services and arrangements to help you honor and celebrate the life of your loved one",
    },
    {
      question: "What happens during a memorial moment?",
      answer:
        "We offer a wide range of funeral services and arrangements to help you honor and celebrate the life of your loved one",
    },
    {
      question: "How long does a memorial moment typically last?",
      answer:
        "We offer a wide range of funeral services and arrangements to help you honor and celebrate the life of your loved one",
    },
    {
      question: "Can I personalize a memorial moment?",
      answer:
        "We offer a wide range of funeral services and arrangements to help you honor and celebrate the life of your loved one",
    },
    {
      question: "What should I wear to a memorial moment?",
      answer:
        "We offer a wide range of funeral services and arrangements to help you honor and celebrate the life of your loved one",
    },
  ];

  return (
    <section className="my-24">
      <HeadingDescription
        className="text-center mt-10"
        headingText="Have You a Questions?"
        descriptionText="We offer a wide range of funeral services and arrangements to help you honor and celebrate the life of your loved one."
      />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-10">
        {questions.map((ques, index) => (
          <div key={index}>
            <div className="bg-primary p-3 text-white">
              <div className="flex items-center justify-between">
                <h2 className="text-lg">{ques.question}</h2>
                <button
                  onClick={() => {
                    setCollapse(!collapse);
                    setIndexNumber(index + 1);
                  }}
                  className="text-2xl cursor-pointer"
                >
                  +
                </button>
              </div>
              {collapse && indexNumber === index + 1 && (
                <div className="mt-3 duration-100">
                  <p className="text-md text-gray-300">{ques.answer}</p>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default QuestionAndAnswer;
