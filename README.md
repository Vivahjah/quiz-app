# Quiz Game App

A simple and interactive quiz game built with Next.js, TypeScript, and Tailwind CSS. Test your knowledge and learn with detailed explanations for each answer!

## Features

- 🎯 **Interactive Quiz Interface**: Clean and responsive design
- 💡 **Answer Explanations**: Learn why an answer is correct or incorrect
- 📊 **Progress Tracking**: Visual progress bar and score counter
- 🎨 **Visual Feedback**: Color-coded answers (green for correct, red for incorrect)
- 📱 **Mobile Friendly**: Fully responsive design
- 🔄 **Play Again**: Restart the quiz to improve your score
- ⚡ **Fast & Modern**: Built with Next.js 14 and TypeScript

## How to Play

1. **Start the Quiz**: The game begins immediately when you open the app
2. **Read the Question**: Each question has multiple choice answers
3. **Select an Answer**: Click on your chosen answer
4. **Learn from Explanations**: After selecting, you'll see:
   - Whether you were correct or not
   - A detailed explanation of the answer
5. **Continue**: Click "Next Question" to proceed
6. **View Results**: See your final score at the end
7. **Play Again**: Restart the quiz to try for a better score!

## Game Rules

- Answer each question to the best of your ability
- You can only select one answer per question
- Once selected, you cannot change your answer
- Read the explanations to learn more about each topic
- Your score is based on correct answers
- There's no time limit - take your time!

## Getting Started

### Prerequisites

- Node.js 18+ installed on your machine
- npm, yarn, pnpm, or bun package manager

### Installation

1. Clone or download the project
2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

### Building for Production

```bash
npm run build
npm start
```

## Technology Stack

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript for type safety
- **Styling**: Tailwind CSS for responsive design
- **State Management**: React useState hooks
- **Icons**: Emoji-based icons for cross-platform compatibility

## Project Structure

```
quiz-app/
├── app/
│   ├── layout.tsx          # Root layout
│   └── page.tsx            # Home page
├── components/
│   └── Quiz.tsx            # Main quiz component
├── data/
│   └── quizData.ts         # Quiz questions and answers
├── types/
│   └── quiz.ts             # TypeScript interfaces
└── package.json
```

## Customization

### Adding More Questions

Edit `data/quizData.ts` to add new questions:

```typescript
{
  id: 4,
  question: "Your question here?",
  options: ["Option 1", "Option 2", "Option 3", "Option 4"],
  correctAnswer: 0, // Index of correct option (0-3)
  explanation: "Detailed explanation of the answer..."
}
```

