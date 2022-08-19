import React from "react";
import PropTypes from "prop-types";
import sanitizeHtml from "sanitize-html";
import AnswerType from "./components/AnswerType";
import QuestionContext from "./context";
import Logo from "../Logo";

const Question = ({ question, onAnswer }) => {
  return (
    <QuestionContext.Provider value={{ question, onAnswer }}>
      <div className="page text-center">
        <div className="page-header">
          <div className="page-header-logo">
            <Logo width="40" />
          </div>
          <div className="page-header-title">
            <h3>{`Category: ${question.category}`}</h3>
          </div>
          <div className="page-header-toolbar"></div>
        </div>
        <div className="page-body">
          <h4 className="page-heading">{`${sanitizeHtml(
            question.question
          )}`}</h4>
        </div>
        <div className="page-control">
          <AnswerType />
        </div>
      </div>
    </QuestionContext.Provider>
  );
};

Question.propTypes = {
  question: PropTypes.shape({}),
};

export default Question;
