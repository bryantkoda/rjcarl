import React, { useContext } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import Question from "../components/common/Question";
import QuizContext from "../context";

const QuizPage = () => {
  const navigate = useNavigate();
  const { questions, currentIndex, setCurrentIndex } = useContext(QuizContext);

  /**
   * If questions are not loaded (which means the user accessed
   * the /quiz page directly), redirects the user to homepage.
   */
  if (!questions.length) {
    return <Navigate to="/" />;
  }

  const handleAnswer = (answer) => {
    console.log(answer);

    if (currentIndex < questions.length - 1) {
      setCurrentIndex(currentIndex + 1);
      return;
    }

    /**
     * Navigate to results if all the 10 questions
     * are answered.
     */
    navigate("/results");
  };

  /**
   * Questions don't have any ID on them so I'm using
   * the traditional method of fetching items: indexes.
   */
  return (
    <div id="quiz">
      <Question question={questions[currentIndex]} onAnswer={handleAnswer} />
    </div>
  );
};

export default QuizPage;
