import React from "react";
import PropTypes from "prop-types";
import AnswerType from "./components/AnswerType";
import QuestionContext from "./context";
import logo from "../../../images/logo.png";

const Question = ({ question, onAnswer }) => {
  return (
    <QuestionContext.Provider value={{ question, onAnswer }}>
      <div className="question">
        <div className="question-header">
          <div className="logo">
            <img src={logo} alt="Koda" />
          </div>
        </div>
        <div className="question-body">
          <h4 className="question-text">{`"${question.question}"`}</h4>
        </div>
        <div className="question-footer">
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
