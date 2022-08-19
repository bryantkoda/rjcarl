import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { IntlProvider } from "react-intl";

import HomePage from "./pages/home";
import QuizPage from "./pages/quiz";
import ResultsPage from "./pages/results";

import QuizContext from "./context";
import locales from "./locales/en-US";
import "./styles/main.scss";

function App() {
  const [questions, setQuestions] = useState([]);
  const [answers, setAnswers] = useState({});
  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <BrowserRouter>
      <IntlProvider messages={locales}>
        <QuizContext.Provider
          value={{
            questions,
            answers,
            currentIndex,
            setQuestions,
            setAnswers,
            setCurrentIndex,
          }}
        >
          <div className="App">
            <Routes>
              <Route element={<HomePage />} path="/" />
              <Route element={<QuizPage />} path="/quiz" />
              <Route element={<ResultsPage />} path="/results" />
            </Routes>
          </div>
        </QuizContext.Provider>
      </IntlProvider>
    </BrowserRouter>
  );
}

export default App;
