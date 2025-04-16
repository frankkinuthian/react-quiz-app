export const questions = [
  {
    question: "Which of the following is NOT a React hook?",
    options: ["useState", "useEffect", "useHistory", "useLocalStorage"],
    correctOption: 3,
    points: 10,
  },
  {
    question: "What is the correct way to update state in React?",
    options: [
      "this.state.count = 5",
      "setState({ count: 5 })",
      "setCount(5)",
      "count = 5",
    ],
    correctOption: 2,
    points: 10,
  },
  {
    question: "Which hook is used for side effects in React?",
    options: ["useEffect", "useState", "useContext", "useReducer"],
    correctOption: 0,
    points: 10,
  },
  {
    question: "What is the purpose of useReducer?",
    options: [
      "To fetch data from an API",
      "To manage simple state",
      "To handle complex state logic",
      "To create UI components",
    ],
    correctOption: 2,
    points: 10,
  },
  {
    question: "When does useEffect run?",
    options: [
      "Only on mount",
      "On mount and when dependencies change",
      "Only when dependencies change",
      "On every render",
    ],
    correctOption: 1,
    points: 10,
  },
];
