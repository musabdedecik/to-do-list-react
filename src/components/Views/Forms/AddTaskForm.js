import { useEffect, useRef } from "react";
import { Formik } from "formik";
import Form from "./Form";
import StandartTextField from "../TextFields/StandartTextField";
import DefaultButton from "../Buttons/DefaultButton";
import { Box, FormControl, Typography } from "@mui/material";
import { useDispatch } from "react-redux"
import { addTask } from "../../../redux/actions/taskActions";

const AddTaskForm = () => {
  const dispatch = useDispatch();
  const titleRef = useRef(null);
  
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


  const handleSubmit = async (values,{resetForm}) => {
     dispatch(addTask(values))
     resetForm();
  }

  return (
    <Formik
      initialValues={{ title: "", description: "" }}
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
          <Typography variant="h6" className="title" style={{display:"flex", alignItems:'center'}}>
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
          <Box className="login-buttons-container">
            <DefaultButton disabled={(errors.title && touched.title && errors.title) ? true : false} type="submit" variant="contained">
              Görevi ekle
            </DefaultButton>
          </Box>
          </Box>
        </Form>
      )}
    </Formik>
  )
};

export default AddTaskForm;