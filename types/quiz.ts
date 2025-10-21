export interface Question {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
}

export interface QuizState {
  currentQuestionIndex: number;
  score: number;
  showExplanation: boolean;
  selectedAnswer: number | null;
  isQuizCompleted: boolean;
}