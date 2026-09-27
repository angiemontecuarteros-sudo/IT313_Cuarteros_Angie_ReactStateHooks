# IT313_Cuarteros_Angie_ReactStateHooks

## Laboratory 5 - React State & Hooks

### Problem

The Lab Timer & Practice Tracker is a small React Native application that helps students track the number of practice problems they have solved and how long they have been working.

### Features

- Solve +1 button
- Reset button
- Stopwatch
- Start button
- Stop button
- Running and Paused status
- Great job! message after solving 5 problems

### React Concepts Used

### useState

useState is used to store the solved problem count and the running state of the stopwatch.

### useEffect

useEffect is used inside the custom useStopwatch hook to run the stopwatch interval.

### Cleanup Function

The cleanup function uses clearInterval to stop the interval when the stopwatch stops or the component is unmounted.

### Conditional Rendering

Conditional rendering displays Great job! when the solved count reaches 5 and displays Running... or Paused depending on the stopwatch state.

### Event Handling

Event handler functions are used for Solve +1, Reset, Start, and Stop.

### Lifting State Up

LabScreen owns the shared state and passes the state and callback functions to PracticeTracker and Stopwatch.

### Custom Hook

useStopwatch is a custom hook that manages the stopwatch timer.

## How to Run

Install dependencies:

```bash
npm install