import { createSlice } from '@reduxjs/toolkit';

const taskSlice = createSlice({
  name: 'tasks',
  initialState: [], // Initial state is an empty array
  reducers: {
    // Add a new task
    addTask: (state, action) => {
      const { title, description, priority, category } = action.payload;
      state.push({
        id: Date.now(), // Unique ID for each task
        title,
        description,
        priority,
        category,
        status: 'Pending', // Default status
      });
    },
    // Edit an existing task
    editTask: (state, action) => {
      const { id, title, description, priority, category } = action.payload;
      const task = state.find((task) => task.id === id);
      if (task) {
        task.title = title;
        task.description = description;
        task.priority = priority;
        task.category = category;
      }
    },
    // Delete a task
    deleteTask: (state, action) => {
      return state.filter((task) => task.id !== action.payload);
    },
    // Toggle task status (Complete/Incomplete)
    toggleTaskStatus: (state, action) => {
      const task = state.find((task) => task.id === action.payload);
      if (task) {
        task.status = task.status === 'Pending' ? 'Completed' : 'Pending';
      }
    },
  },
});

// Export the actions
export const { addTask, editTask, deleteTask, toggleTaskStatus } = taskSlice.actions;

// Export the reducer
export default taskSlice.reducer;