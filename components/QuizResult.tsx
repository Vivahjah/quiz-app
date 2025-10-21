interface QuizResultProps {
  score: number;
  totalQuestions: number;
  onRestart: () => void;
}

const QuizResult: React.FC<QuizResultProps> = ({ score, totalQuestions, onRestart }) => {
  const percentage = Math.round((score / totalQuestions) * 100);
  
  const getResultMessage = () => {
    if (percentage >= 80) return "Excellent! 🎉";
    if (percentage >= 60) return "Good job! 👍";
    if (percentage >= 40) return "Not bad! 😊";
    return "Keep practicing! 💪";
  };

  const getResultColor = () => {
    if (percentage >= 80) return "text-green-600";
    if (percentage >= 60) return "text-blue-600";
    if (percentage >= 40) return "text-yellow-600";
    return "text-red-600";
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-teal-100 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-xl p-8 max-w-md w-full mx-auto text-center">
        {/* Result Icon */}
        <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center">
          <span className="text-4xl text-white">📊</span>
        </div>

        {/* Result Title */}
        <h1 className="text-3xl font-bold text-gray-800 mb-4">Quiz Completed!</h1>
        
        {/* Score */}
        <div className="mb-6">
          <div className={`text-5xl font-bold ${getResultColor()} mb-2`}>
            {percentage}%
          </div>
          <p className="text-lg text-gray-600">
            {score} out of {totalQuestions} correct
          </p>
        </div>

        {/* Message */}
        <div className="mb-8">
          <p className="text-xl font-semibold text-gray-700">
            {getResultMessage()}
          </p>
        </div>

        {/* Restart Button */}
        <button
          onClick={onRestart}
          className="w-full py-4 px-6 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-semibold text-lg hover:from-blue-700 hover:to-purple-700 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
        >
          Try Again
        </button>

        {/* Additional Stats */}
        <div className="mt-8 p-4 bg-gray-50 rounded-xl">
          <div className="grid grid-cols-2 gap-4 text-sm text-gray-600">
            <div>
              <p className="font-semibold">Correct</p>
              <p className="text-green-600 font-bold">{score}</p>
            </div>
            <div>
              <p className="font-semibold">Incorrect</p>
              <p className="text-red-600 font-bold">{totalQuestions - score}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuizResult;