import { getQuery, postQuery, deleteQuery, putQuery } from '../../config/http-common';
import { createAsyncThunk, current } from '@reduxjs/toolkit';
import { switchLogin, showError, switchStatus} from '../store/user';
import { getToken } from '../../config/auth';


export const userRegister = createAsyncThunk(
    'user/register',
    async (values, { dispatch, getState }) => {
        // kullanıcı daha önce kayıt olmuş mu kontrol ediyorum.
        const user = await findUser(values.email, values.password, true);
        if(!user){
            const data = await postQuery("users/", values);
            dispatch(switchLogin())
            return data;
        }else{
            dispatch(showError("Bu e-posta zaten kullanılıyor."))
        }
    }
);

export const getUsers = createAsyncThunk(
    'users/getUsers',
    async () => {
        const users = await getQuery("users/");
        return users;
    }
);


export const findUser = async (email, password, onlyEmailCheck = false) => {
    try {
        const users = await getQuery("users/");
        var user;
        if (onlyEmailCheck) {
            user = users.find((user) => user?.email.toLowerCase().trim() === email.toLowerCase().trim());
        } else {
            user = users.find((user) => user?.email.toLowerCase().trim() === email.toLowerCase().trim() && user?.password.toLowerCase().trim() === password.toLowerCase().trim())
        }
        if (user) {
            return user;
        } else {
            return null
        }
    } catch (error) {
        console.error(error)
        return false;
    }
}


export const updateUser = createAsyncThunk(
    'users/updateUser',
    async (active, {dispatch, getState}) => {
        dispatch(switchStatus(active));
        const user = await putQuery("users/",getToken(),getState().user.users.find((u) => u.id == getToken()));
        return user;
    }
);

export const removeUser = createAsyncThunk(
    'users/removeUser',
    async (userId, { dispatch, getState }) => {
        const users = await deleteQuery(`users/${userId}`);
        return users;
    }
);

