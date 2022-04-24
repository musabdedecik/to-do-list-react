import { createSlice } from '@reduxjs/toolkit'
import { getToken } from '../../config/auth';
import { getUsers, removeUser, updateUser, userRegister } from '../actions/userActions';

const initialState = { isLogin: true, users: [], currentUser: {status:false}, loading: false, error:{message: null} }
const user = createSlice({
  name: 'user',
  initialState,
  reducers: {
    switchLogin(state) {
      state.isLogin = !state.isLogin;
    },
    showError: (state,action) => {
        state.error.message =action.payload;
    },
    switchStatus(state, action) {
      state.currentUser.status = action.payload;
      state.users.find((u) => u.id == getToken()).status = action.payload;
    },
    loginUser(state, action){
      state.currentUser = action.payload;
    }
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
    builder.addCase(updateUser.pending, (state, action) => {
      state.loading = true;
    })
    builder.addCase(updateUser.fulfilled, (state, action) => {
      state.loading = false;
      state.currentUser.status = action.payload.status;
      state.users.find((user) => user.id == action.payload.id).status = action.payload.status;
    })
    builder.addCase(updateUser.rejected, (state, action) => {
      state.loading = false;
    })
    builder.addCase(getUsers.pending, (state, action) => {
      state.loading = true;
    })
    builder.addCase(getUsers.fulfilled, (state, action) => {
      state.loading = false;
      state.users = action.payload;
      state.currentUser = action.payload.find((u) => u.id == getToken());
    })
    builder.addCase(getUsers.rejected, (state, action) => {
      state.loading = false;
    })
    builder.addCase(userRegister.pending, (state, action) => {
      state.loading = true;
    })
    builder.addCase(userRegister.fulfilled, (state, action) => {
      state.users.push(action.payload);
      state.loading = false;
    })
    builder.addCase(userRegister.rejected, (state, action) => {
      state.loading = false;
    })
  }
})
export const { switchLogin, showError,switchStatus } = user.actions
export default user.reducer 