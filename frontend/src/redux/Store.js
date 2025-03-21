import { configureStore } from '@reduxjs/toolkit';
import taskReducer from './taskSlice'; // Import your task slice

// Create the Redux store
const store = configureStore({
  reducer: {
    tasks: taskReducer, // Add your reducers here
  },
});

export default store; // Export the store