import { configureStore, combineReducers } from '@reduxjs/toolkit'
import task from "./task"
import user from "./user"

const reducer = combineReducers({
  task,
  user
});

export const store = configureStore({
  reducer,
}
)

