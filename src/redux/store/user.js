import { createSlice } from '@reduxjs/toolkit'
import { getUsers, removeUser, userRegister } from '../actions/userActions';

const initialState = { isLogin: true, users: [], currentUser: {}, loading: false }
const user = createSlice({
  name: 'user',
  initialState,
  reducers: {
    switchLogin(state) {
      state.isLogin = !state.isLogin;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(removeUser.pending, (state, action) => {
      state.loading = true;
    })
    builder.addCase(removeUser.fulfilled, (state, action) => {
      console.log(action.payload)
      state.loading = false;
    })
    builder.addCase(removeUser.rejected, (state, action) => {
      state.loading = false;
    })
    builder.addCase(getUsers.pending, (state, action) => {
      state.loading = true;
    })
    builder.addCase(getUsers.fulfilled, (state, action) => {
      state.loading = false;
      state.users = action.payload;
    })
    builder.addCase(getUsers.rejected, (state, action) => {
      state.loading = false;
    })
    builder.addCase(userRegister.pending, (state, action) => {
      state.loading = true;
    })
    builder.addCase(userRegister.fulfilled, (state, action) => {
      state.users = state.users.push(action.payload);
      state.loading = false;
    })
    builder.addCase(userRegister.rejected, (state, action) => {
      state.loading = false;
    })
  }
})
export const { switchLogin } = user.actions
export default user.reducer 