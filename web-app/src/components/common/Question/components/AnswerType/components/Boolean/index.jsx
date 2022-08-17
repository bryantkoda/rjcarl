import React, { useContext } from "react";
import QuestionContext from "../../../../context";

const Boolean = () => {
  const { onAnswer } = useContext(QuestionContext);

  return (
    <div>
      <button onClick={(e) => onAnswer("True")}>True</button>
      <button onClick={(e) => onAnswer("False")}>False</button>
    </div>
  );
};

export default Boolean;
