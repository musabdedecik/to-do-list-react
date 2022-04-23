import { getQuery, postQuery, deleteQuery } from '../../config/http-common';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { switchLogin } from '../store/user';
import { setToken } from '../../config/auth';


export const userRegister = createAsyncThunk(
    'user/register',
    async (values, { dispatch, getState }) => {
        const data = await postQuery("users/", values);
        dispatch(switchLogin())
        return data;
    }
);

export const getUsers = createAsyncThunk(
    'users/getUsers',
    async () => {
        const users = await getQuery("users/");
        return users;
    }
);


export const findUser = async (email, password) => {
    try {
        const users = await getQuery("users/");
        const user = users.find((user) => user?.email.toLowerCase().trim() === email.toLowerCase().trim() && user?.password.toLowerCase().trim() === password.toLowerCase().trim()) 
        if(user){
            return setToken(user.id)
        }else{
            return false
        }
    } catch (error) {
        console.error(error)
        return false;
    }
}

export const removeUser = createAsyncThunk(
    'users/removeUser',
    async (userId, {dispatch, getState}) => {
        const users = await deleteQuery(`users/${userId}`);
        return users;
    }
);

