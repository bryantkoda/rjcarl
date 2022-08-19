import React, { useContext } from "react";
import QuestionContext from "../../../../context";

const Boolean = () => {
  const { question, onAnswer } = useContext(QuestionContext);

  return (
    <div>
      <button
        className="btn btn-success btn-md"
        onClick={(e) => onAnswer("True", question)}
      >
        True
      </button>
      <button
        className="btn btn-danger btn-md"
        onClick={(e) => onAnswer("False", question)}
      >
        False
      </button>
    </div>
  );
};

export default Boolean;
