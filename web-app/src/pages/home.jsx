import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { FormattedMessage } from "react-intl";
import { uniqueId } from "lodash";
import Logo from "../components/common/Logo";
import api from "../utils/api";
import QuizContext from "../context";

export default function HomePage() {
  const { currentIndex, setQuestions, setAnswers, setCurrentIndex } =
    useContext(QuizContext);

  /**
   * This will load the questions. I believe this is the
   * best place to load the questions as the quiz restarts every
   * redirect to homepage.
   */
  useEffect(() => {
    api
      .get("questions")
      .then(({ data }) => {
        /**
         * I'm assigning a unique id to each question which the
         * response data didn't provide. This will help to match the answers
         * and questions (Results page).
         */
        setQuestions(
          data.map((question) => ({ ...question, id: uniqueId("q_") }))
        );
      })
      .catch((err) => {
        console.log(err);
      });
  }, [setQuestions]);

  /**
   * Resets currentIndex and answers everytime the user
   * redirected to home screen.
   */
  useEffect(() => {
    setAnswers({});
    setCurrentIndex(0);
  }, [currentIndex, setCurrentIndex, setAnswers]);

  return (
    <div className="page page-home text-center">
      <div className="page-title">
        <Logo width="80" />
        <h1>
          <FormattedMessage id="welcomeToTriviaChallenge" />
        </h1>
      </div>
      <div className="page-body">
        <h3 className="text-weight-bold">
          <FormattedMessage id="youWillbePresented" />
        </h3>
        <p className="alert alert-info f-size-4">
          <FormattedMessage id="canYouScore100" />
        </p>
      </div>
      <div className="page-control">
        <Link to="quiz" className="btn btn-link btn-lg">
          <FormattedMessage id="begin" />
        </Link>
      </div>
    </div>
  );
}
