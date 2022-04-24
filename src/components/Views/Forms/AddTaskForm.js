import { useEffect, useRef, useState } from "react";
import { Formik } from "formik";
import Form from "./Form";
import StandartTextField from "../TextFields/StandartTextField";
import DefaultButton from "../Buttons/DefaultButton";
import { Box, FormControl, Typography, MenuItem, Select, NativeSelect, InputLabel, Autocomplete, TextField } from "@mui/material";
import { useDispatch, useSelector } from "react-redux"
import { addTask } from "../../../redux/actions/taskActions";
import { getToken } from "../../../config/auth";

const AddTaskForm = () => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.user.users);

  const titleRef = useRef(null);
  const status = useSelector((state) => state.user.currentUser.status);
  
  useEffect(() => {
    titleRef.current?.focus();
  }, []);

  const validateInputs = (values) => {
    const errors = {};
    if (!values.title) {
      errors.title = "Görev başlığı zorunludur";
    }
    return errors;
  };


  const handleSubmit = async (values, { resetForm }) => {
    dispatch(addTask(values))
    resetForm();
  }

  return (
    <Formik
      initialValues={{ title: "", description: "", assignTo: getToken() }}
      validate={validateInputs}
      onSubmit={handleSubmit}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
      }) => (
        <Form className="task-form" onSubmit={handleSubmit}>
          <Typography variant="h6" className="title" style={{ display: "flex", alignItems: 'center' }}>
            Görev Ekle
          </Typography>

          <Box className="add-task-container">
            <FormControl className="inp-wrapper" error>
              <StandartTextField
                type="text"
                name="title"
                label="Görev Başlığı"
                inputRef={titleRef}
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.title}
                aria-describedby="component-error-text"
                size="small"
              />

            </FormControl>
            <FormControl className="inp-wrapper" >
              <StandartTextField
                type="text"
                name="description"
                label="Görev Açıklaması"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.description}
                aria-describedby="componensa"
                size="small"
              />
            </FormControl>
              <FormControl className="inp-wrapper">
                <InputLabel id="demo-simple-select-label">Kime</InputLabel>
                <Select
                  value={values.assignTo}
                  name="assignTo"
                  label="Kime"
                  size="small"
                  onChange={handleChange}
                >
                  {users.map((user, i) => {
                    return <MenuItem key={i} disabled={!user.status} style={{ textDecoration: !user.status && 'line-through' }} value={user.id}>{user.name + " " + user.surname}</MenuItem>
                  })}
                </Select>
              </FormControl>
            <Box className="login-buttons-container">
              <DefaultButton disabled={(errors.title && touched.title && errors.title) || !status ? true : false} type="submit" variant="contained">
                {status ? "Görevi ekle" : "Hesap Devre Dışı"}
              </DefaultButton>
            </Box>
          </Box>
        </Form>
      )}
    </Formik>
  )
};

export default AddTaskForm; 