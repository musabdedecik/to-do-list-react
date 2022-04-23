import { createAsyncThunk } from "@reduxjs/toolkit";
import { getToken } from "../../config/auth";
import { deleteQuery, getQuery, postQuery, putQuery } from "../../config/http-common";
import { removeTodo } from "../store/task";

export const addTask = createAsyncThunk(
    'task/add',
    async (values, { dispatch, getState }) => {
        values.userId = getToken();
        const data = await postQuery("tasks/", values);
        return data;
    }
);


export const getTasks = createAsyncThunk(
    'task/getTasks',
    async (values, { dispatch, getState }) => {
        const data = await getQuery("tasks/", values);
        const filtered = data.filter((task) => task.userId === getToken())
        return filtered;
    }
);


export const updateTask = createAsyncThunk(
    'task/updadeTask',
    async (values, { dispatch, getState }) => {
        const data = await putQuery("tasks/", values.id, values);
        return data;
    }
);


export const removeTask = createAsyncThunk(
    'task/removeTask',
    async (id, { dispatch, getState }) => {
        const data = await deleteQuery("tasks/", id);
        dispatch(removeTodo(id))
        return data;
    }
);