import React, { useContext } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import Question from "../components/common/Question";
import QuizContext from "../context";

const QuizPage = () => {
  const navigate = useNavigate();
  const { questions, answers, setAnswers, currentIndex, setCurrentIndex } =
    useContext(QuizContext);

  /**
   * If questions are not loaded (which means the user accessed
   * the /quiz page directly), redirects the user to homepage.
   */
  if (!questions.length) {
    return <Navigate to="/" />;
  }

  const handleAnswer = (answer, question) => {
    setAnswers({ ...answers, [question.id]: answer });

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
   * Increments the current index to proceed to
   * the next question.
   */
  return (
    <Question question={questions[currentIndex]} onAnswer={handleAnswer} />
  );
};

export default QuizPage;
