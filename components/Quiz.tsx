'use client';

import { useState } from 'react';
import { Question, QuizState } from '@/types/quiz';
import { quizData } from '@/data/quizData';
import QuizResult from './QuizResult';
import QuizQuestion from './QuizQuestions';


const Quiz = () => {
  const [quizState, setQuizState] = useState<QuizState>({
    currentQuestionIndex: 0,
    score: 0,
    showResult: false,
    selectedAnswer: null,
  });

  const currentQuestion: Question = quizData[quizState.currentQuestionIndex];

  const handleAnswerSelect = (optionIndex: number) => {
    setQuizState(prev => ({
      ...prev,
      selectedAnswer: optionIndex,
    }));
  };

  const handleNext = () => {
    if (quizState.selectedAnswer === currentQuestion.correctAnswer) {
      setQuizState(prev => ({
        ...prev,
        score: prev.score + 1,
      }));
    }

    if (quizState.currentQuestionIndex < quizData.length - 1) {
      setQuizState(prev => ({
        ...prev,
        currentQuestionIndex: prev.currentQuestionIndex + 1,
        selectedAnswer: null,
      }));
    } else {
      setQuizState(prev => ({
        ...prev,
        showResult: true,
      }));
    }
  };

  const handleRestart = () => {
    setQuizState({
      currentQuestionIndex: 0,
      score: 0,
      showResult: false,
      selectedAnswer: null,
    });
  };

  if (quizState.showResult) {
    return (
      <QuizResult 
        score={quizState.score} 
        totalQuestions={quizData.length}
        onRestart={handleRestart}
      />
    );
  }

  return (
    <QuizQuestion
      question={currentQuestion}
      selectedAnswer={quizState.selectedAnswer}
      questionNumber={quizState.currentQuestionIndex + 1}
      totalQuestions={quizData.length}
      onAnswerSelect={handleAnswerSelect}
      onNext={handleNext}
    />
  );
};

export default Quiz;