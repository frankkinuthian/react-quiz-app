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

## Deployment

### Deploying to Netlify

1. Create a GitHub repository and push your code:

```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin your-repo-url
git push -u origin main
```

2. Sign up/Login to [Netlify](https://www.netlify.com/)

3. Deploy using one of these methods:

#### Method 1: Netlify UI

1. Click "New site from Git"
2. Choose your GitHub repository
3. Configure build settings:
   - Build command: `pnpm run build`
   - Publish directory: `build`
4. Click "Deploy site"

#### Method 2: Netlify CLI

1. Install Netlify CLI:

```bash
npm install -g netlify-cli
```

2. Login to Netlify:

```bash
netlify login
```

3. Initialize and deploy:

```bash
netlify init
netlify deploy --prod
```

### Important Notes for Deployment

1. The JSON server won't work on Netlify (it's for development only). For production:

   - Consider using a hosted API service
   - Or migrate to a serverless function using Netlify Functions
   - Or use a static JSON file for simple implementations

2. Environment variables:
   - Set them in Netlify's UI: Site settings → Build & deploy → Environment
   - Or use `.env` files locally (don't commit sensitive data)

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
