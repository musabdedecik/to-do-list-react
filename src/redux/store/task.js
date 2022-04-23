import { createSlice } from '@reduxjs/toolkit'

const initialState = { tasks: [] }

const task = createSlice({
  name: 'task',
  initialState,
  reducers: {
    get_tasks(state) {
     return state.tasks;
    },
    add_task(state,action) {
      state.tasks.push(action.task)
    },
    remove_task(state, action) {
    //   state.tasks = state.tasks.filter()
    },
  },
})

export const { get_tasks, add_task, remove_task } = task.actions
export default task.reducer