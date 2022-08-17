import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import api from "../utils/api";
import QuizContext from "../context";

export default function HomePage() {
  const { setQuestions } = useContext(QuizContext);

  /**
   * This will load the questions. I believe this is the
   * best place to load the questions as the quiz restarts every
   * redirect to homepage.
   */
  useEffect(() => {
    api
      .get("questions")
      .then(({ data }) => setQuestions(data))
      .catch((err) => {
        console.log(err);
      });
  }, [setQuestions]);

  return (
    <div className="page page-home">
      <div className="page-title">
        <h1>Welcome to the Trivia Challenge!</h1>
      </div>
      <div className="page-body">
        <p>You will be presented with 10 True or False questions.</p>
        <p>Can you sore 100%?</p>
      </div>
      <div className="page-control">
        <button>
          <Link to="quiz">BEGIN</Link>
        </button>
      </div>
    </div>
  );
}
