import { createSlice } from '@reduxjs/toolkit'
import { addTask, getTasks, removeTask, updateTask } from '../actions/taskActions';

const initialState = { tasks: [], currentTask: {}, loading: false }
const task = createSlice({
  name: 'task',
  initialState,
  reducers: {
    removeTodo : (state,action) => {
     state.tasks = state.tasks.filter((task) => task.id !== action.payload);
    }
  },
  extraReducers: (builder) => {
    builder.addCase(getTasks.pending, (state, action) => {
      state.loading = true;
    })
    builder.addCase(getTasks.fulfilled, (state, action) => {
      state.tasks = action.payload;
      state.loading = false;
    })
    builder.addCase(getTasks.rejected, (state, action) => {
      state.loading = false;
    })
    builder.addCase(updateTask.pending, (state, action) => {
      state.loading = true;
    })
    builder.addCase(updateTask.fulfilled, (state, action) => {
      state.tasks.find((task) => task.id == action.payload.id).completed = action.payload.completed;
      state.loading = false;
    })
    builder.addCase(updateTask.rejected, (state, action) => {
      state.loading = false;
    })
    builder.addCase(removeTask.pending, (state, action) => {
      state.loading = true;
    })
    builder.addCase(removeTask.fulfilled, (state, action) => {
      
      state.loading = false;
    })
    builder.addCase(removeTask.rejected, (state, action) => {
      state.loading = false;
    })
    builder.addCase(addTask.pending, (state, action) => {
      state.loading = true;
    })
    builder.addCase(addTask.fulfilled, (state, action) => {
      state.loading = false;
      state.tasks.push(action.payload);
    })
    builder.addCase(addTask.rejected, (state, action) => {
      state.loading = false;
    })
  }
})
export const { removeTodo } = task.actions
export default task.reducer 