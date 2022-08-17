import React, { useContext } from "react";
import Boolean from "./components/Boolean";
import QuestionContext from "../../context";

/**
 * This enum provides all the components that are assigned
 * to specific type values.
 */
const AnswerTypesEnum = {
  boolean: Boolean,
  // can insert other answer types like multiple choice, text, etc.
};

const AnswerType = () => {
  const { question } = useContext(QuestionContext);
  const AnswerTypeComp = AnswerTypesEnum[question.type];

  return <AnswerTypeComp />;
};

export default AnswerType;
