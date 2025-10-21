'use client';

import { useState } from 'react';
import { Question, QuizState } from '@/types/quiz';
import { quizData } from '@/data/quizData';

export default function Quiz() {
  const [quizState, setQuizState] = useState<QuizState>({
    currentQuestionIndex: 0,
    score: 0,
    showExplanation: false,
    selectedAnswer: null,
    isQuizCompleted: false,
  });

  const currentQuestion: Question = quizData[quizState.currentQuestionIndex];

  const handleAnswerSelect = (optionIndex: number) => {
    if (quizState.showExplanation) return;

    setQuizState(prev => ({
      ...prev,
      selectedAnswer: optionIndex,
      showExplanation: true,
      score: optionIndex === currentQuestion.correctAnswer ? prev.score + 1 : prev.score,
    }));
  };

  const handleNextQuestion = () => {
    if (quizState.currentQuestionIndex < quizData.length - 1) {
      setQuizState(prev => ({
        ...prev,
        currentQuestionIndex: prev.currentQuestionIndex + 1,
        showExplanation: false,
        selectedAnswer: null,
      }));
    } else {
      setQuizState(prev => ({
        ...prev,
        isQuizCompleted: true,
      }));
    }
  };

  const handleRestartQuiz = () => {
    setQuizState({
      currentQuestionIndex: 0,
      score: 0,
      showExplanation: false,
      selectedAnswer: null,
      isQuizCompleted: false,
    });
  };

  if (quizState.isQuizCompleted) {
    return (
      <div className="min-h-screen bg-linear-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
        <div className="bg-white rounded-2xl shadow-xl p-8 max-w-md w-full text-center">
          <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
            <span className="text-2xl font-bold text-white">🎉</span>
          </div>
          <h1 className="text-3xl font-bold text-gray-800 mb-4">Quiz Completed!</h1>
          <div className="text-6xl font-bold text-blue-600 mb-4">
            {quizState.score}/{quizData.length}
          </div>
          <p className="text-gray-600 mb-6">
            You scored {Math.round((quizState.score / quizData.length) * 100)}% on the quiz!
          </p>
          <button
            onClick={handleRestartQuiz}
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition duration-200 transform hover:scale-105"
          >
            Restart Quiz
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-linear-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-xl p-6 max-w-2xl w-full">
        {/* Progress Bar */}
        <div className="mb-6">
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm font-medium text-gray-600">
              Question {quizState.currentQuestionIndex + 1} of {quizData.length}
            </span>
            <span className="text-sm font-medium text-gray-600">
              Score: {quizState.score}
            </span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div
              className="bg-blue-600 h-2 rounded-full transition-all duration-300"
              style={{
                width: `${((quizState.currentQuestionIndex + 1) / quizData.length) * 100}%`,
              }}
            ></div>
          </div>
        </div>

        {/* Question */}
        <h2 className="text-2xl font-bold text-gray-800 mb-6 leading-tight">
          {currentQuestion.question}
        </h2>

        {/* Options */}
        <div className="space-y-3 mb-6">
          {currentQuestion.options.map((option, index) => {
            const isSelected = quizState.selectedAnswer === index;
            const isCorrect = index === currentQuestion.correctAnswer;
            const showCorrect = quizState.showExplanation && isCorrect;
            const showIncorrect = quizState.showExplanation && isSelected && !isCorrect;

            let buttonClass = "w-full text-left p-4 rounded-lg border-2 transition-all duration-200 ";
            
            if (showCorrect) {
              buttonClass += "bg-green-100 border-green-500 text-green-800 shadow-sm";
            } else if (showIncorrect) {
              buttonClass += "bg-red-100 border-red-500 text-red-800 shadow-sm";
            } else if (isSelected) {
              buttonClass += "bg-blue-100 border-blue-500 text-blue-800 shadow-sm";
            } else {
              buttonClass += "bg-gray-50 border-gray-200 text-gray-700 hover:bg-gray-100 hover:border-gray-300";
            }

            return (
              <button
                key={index}
                onClick={() => handleAnswerSelect(index)}
                disabled={quizState.showExplanation}
                className={buttonClass}
              >
                <div className="flex items-center">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center mr-3 font-semibold ${
                    showCorrect ? 'bg-green-500 text-white' :
                    showIncorrect ? 'bg-red-500 text-white' :
                    isSelected ? 'bg-blue-500 text-white' :
                    'bg-gray-200 text-gray-700'
                  }`}>
                    {String.fromCharCode(65 + index)}
                  </div>
                  <span className="font-medium">{option}</span>
                </div>
              </button>
            );
          })}
        </div>

        {/* Explanation */}
        {quizState.showExplanation && (
          <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-r-lg mb-6">
            <div className="flex items-start">
              <div className="shrink-0">
                <span className="text-blue-500 text-lg">💡</span>
              </div>
              <div className="ml-3">
                <h3 className="text-sm font-semibold text-blue-800 mb-1">
                  Explanation
                </h3>
                <p className="text-blue-700 text-sm leading-relaxed">
                  {currentQuestion.explanation}
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Next Button */}
        {quizState.showExplanation && (
          <button
            onClick={handleNextQuestion}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition duration-200 transform hover:scale-105"
          >
            {quizState.currentQuestionIndex < quizData.length - 1 ? 'Next Question' : 'See Results'}
          </button>
        )}
      </div>
    </div>
  );
}