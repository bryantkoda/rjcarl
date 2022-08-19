import React, { useContext } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import classNames from "classnames";
import sanitizeHtml from "sanitize-html";
import Logo from "../components/common/Logo";
import QuizContext from "../context";

const TRUE = "True";
const FALSE = "False";

const ResultsPage = () => {
  const navigate = useNavigate();
  const { questions, answers } = useContext(QuizContext);
  const totalScore = questions.reduce((score, question) => {
    return question.correct_answer === answers[question.id] &&
      !question.incorrect_answers.includes(answers[question.id])
      ? score + 1
      : score;
  }, 0);

  /**
   * Redirects to the home screen if the user didn't
   * answer the questions yet.
   */
  if (Object.entries(answers).length !== questions.length) {
    return <Navigate to="/" />;
  }

  return (
    <div id="results" className="page">
      <div className="page-header">
        <div className="page-header-logo">
          <Logo width="40" />
        </div>
        <div className="page-header-title">
          <h3>Final Results</h3>
        </div>
        <div className="page-header-toolbar" />
      </div>
      <div className="page-body">
        <div className="text-center">
          <p className="alert alert-secondary f-size-4">{`You scored ${totalScore}/${questions.length}`}</p>
        </div>
        <ol className="results">
          {questions.map((question) => {
            const isCorrectAnswer =
              answers[question.id] === question.correct_answer &&
              !question.incorrect_answers.includes(answers[question.id]);

            return (
              <li key={question.id}>
                <div className="results-item">
                  <div className="results-item-question">
                    <p>{sanitizeHtml(question.question)}</p>
                    <small>
                      The correct answer is{" "}
                      <span
                        className={classNames({
                          "text-success": question.correct_answer === TRUE,
                          "text-danger": question.correct_answer === FALSE,
                        })}
                      >
                        {question.correct_answer}
                      </span>
                      . You answered{" "}
                      <span
                        className={classNames({
                          "text-success": answers[question.id] === TRUE,
                          "text-danger": answers[question.id] === FALSE,
                        })}
                      >
                        {answers[question.id]}
                      </span>
                    </small>
                  </div>
                  <div className="results-item-mark">
                    <span
                      className={classNames({
                        "text-success": isCorrectAnswer,
                        "text-danger": !isCorrectAnswer,
                      })}
                    >
                      {isCorrectAnswer ? <>&#10004;</> : <>&#10008;</>}
                    </span>
                  </div>
                </div>
              </li>
            );
          })}
        </ol>
      </div>
      <div className="page-control text-center">
        <button onClick={() => navigate("/")} className="btn btn-link btn-lg">
          Play Again
        </button>
      </div>
    </div>
  );
};

export default ResultsPage;
