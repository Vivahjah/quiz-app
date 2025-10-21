import { Question } from '@/types/quiz';

export const quizData: Question[] = [
  {
    id: 1,
    question: "What is the capital of France?",
    options: ["London", "Berlin", "Paris", "Madrid"],
    correctAnswer: 2,
    explanation: "Paris is the capital and most populous city of France. It's known as the 'City of Light' and is famous for its cultural landmarks like the Eiffel Tower and Louvre Museum."
  },
  {
    id: 2,
    question: "Which programming language is known as the 'language of the web'?",
    options: ["Python", "Java", "JavaScript", "C++"],
    correctAnswer: 2,
    explanation: "JavaScript is the primary language for web development, running in browsers to create interactive web pages. It's essential for front-end development alongside HTML and CSS."
  },
  {
    id: 3,
    question: "What does CSS stand for?",
    options: [
      "Computer Style Sheets",
      "Creative Style System",
      "Cascading Style Sheets",
      "Colorful Style Sheets"
    ],
    correctAnswer: 2,
    explanation: "CSS stands for Cascading Style Sheets. It's used to control the presentation and layout of web pages, including colors, fonts, spacing, and responsive design."
  },
    {
    id: 3,
    question: "Which planet is known as the Red Planet?",
    options: ["Earth", "Mars", "Jupiter", "Venus"],
    correctAnswer: 1,
    explanation: "Mars is referred to as the Red Planet because iron oxide (rust) on its surface gives it a reddish appearance."
  },
  {
    id: 4,
    question: "What is the result of 3 + 2 * 4?",
    options: ["20", "11", "14", "10"],
    correctAnswer: 1,
    explanation: "Operator precedence applies: multiplication first, so 3 + (2 * 4) = 11."
  },
  {
    id: 5,
    question: "Which HTML tag is used to define an unordered list?",
    options: ["<ol>", "<ul>", "<li>", "<list>"],
    correctAnswer: 1,
    explanation: "The <ul> tag defines an unordered (bulleted) list; list items are placed inside <li> elements."
  },
  {
    id: 6,
    question: "What is the boiling point of water at sea level in Celsius?",
    options: ["90°C", "100°C", "212°C", "0°C"],
    correctAnswer: 1,
    explanation: "At standard atmospheric pressure (sea level), water boils at 100°C (212°F)."
  }

];