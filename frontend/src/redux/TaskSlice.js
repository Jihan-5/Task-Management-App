import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Fetch tasks from the backend
export const fetchTasks = createAsyncThunk('tasks/fetchTasks', async () => {
  const response = await axios.get('/api/tasks');
  return response.data;
});

// Create a new task
export const createTask = createAsyncThunk('tasks/createTask', async (taskData) => {
  const response = await axios.post('/api/tasks', taskData);
  return response.data;
});

const taskSlice = createSlice({
  name: 'tasks',
  initialState: [],
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTasks.fulfilled, (state, action) => {
        return action.payload;
      })
      .addCase(createTask.fulfilled, (state, action) => {
        state.push(action.payload);
      });
  },
});

export default taskSlice.reducer;