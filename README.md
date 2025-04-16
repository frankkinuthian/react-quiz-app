# React Quiz Application

A dynamic quiz application built with React that demonstrates advanced state management using `useReducer`. The app features a timer, progress tracking, and score management.

## Features

- 🎯 Interactive quiz interface
- ⏱️ Timer with 30 seconds per question
- 📊 Progress tracking
- 🏆 Highscore system
- 🔄 Restart functionality
- 📱 Responsive design

## Technical Implementation

### State Management with useReducer

The application leverages React's `useReducer` hook for complex state management, handling various actions such as:

- Quiz state transitions (loading → ready → active → finished)
- Answer validation
- Score calculation
- Timer management
- Progress tracking

This approach provides a more maintainable and scalable solution compared to multiple `useState` hooks, especially for complex state transitions and related state updates.

## Getting Started

### Prerequisites

- Node.js
- pnpm (Package Manager)

### Installation

1. Clone the repository
2. Install dependencies:

```bash
pnpm install
```

### Running the Application

You'll need to run both the development server and the JSON server in separate terminals:

1. Start the React development server:

```bash
pnpm start
```

Access the application at [http://localhost:3000](http://localhost:3000)

2. Start the JSON server (for quiz questions):

```bash
pnpm run server
```

The quiz data will be available at [http://localhost:8000/questions](http://localhost:8000/questions)

## Project Structure

Key components:

- `App.js` - Main component with reducer logic
- `Question.js` - Displays individual questions
- `Timer.js` - Handles countdown functionality
- `Progress.js` - Shows quiz progress
- `FinishScreen.js` - Displays final score and highscore
- `Options.js` - Renders answer options

## State Management Details

The application uses a reducer with the following main actions:

- `dataReceived` - Handles initial quiz data loading
- `start` - Initiates the quiz
- `newAnswer` - Processes user answers
- `nextQuestion` - Moves to next question
- `finish` - Completes the quiz
- `restart` - Resets the quiz
- `tick` - Updates the timer

## Available Scripts

- `pnpm start` - Runs the React application
- `pnpm run server` - Starts the JSON server for quiz data
- `pnpm run build` - Creates a production build
- `pnpm test` - Runs the test suite

## Contributing

Feel free to submit issues and enhancement requests!

## License

This project is licensed under the MIT License - see the LICENSE file for details.
