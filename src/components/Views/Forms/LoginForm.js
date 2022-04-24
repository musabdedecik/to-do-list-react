import { useEffect, useRef, useState } from "react";
import { Formik } from "formik";
import Form from "./Form";
import StandartTextField from "../TextFields/StandartTextField";
import DefaultButton from "../Buttons/DefaultButton";
import { Alert, Box, FormControl, FormHelperText, Typography } from "@mui/material";
import { findUser} from "../../../redux/actions/userActions";
import { useDispatch } from "react-redux"
import { switchLogin } from "../../../redux/store/user";
import { setToken } from "../../../config/auth";

const LoginForm = () => {
  const dispatch = useDispatch();
  const emailRef = useRef(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    emailRef.current?.focus();
  }, []);

  const validateInputs = (values) => {
    const errors = {};
    if (!values.email) {
      errors.email = "E-posta zorunludur!";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
    ) {
      errors.email = "Geçersiz e-posta adresi!";
    }
    return errors;
  };

  const handleSubmit = async (values) => {
      const user = await findUser(values.email, values.password);
      await setToken(user.id, user.name)
      if(user){
        window.location.href = "/dashboard"
      }else{
        setError(true)
      }  
  }

  return (
    <Formik
      initialValues={{ email: "", password: "" }}
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
        <Form className="card-form" onSubmit={handleSubmit}>
          <Typography variant="h6" gutterBottom className="loginTitle">
            React To-Do List Giriş Yap
          </Typography>
          <FormControl sx={{ mt: 3, width: '100%' }} error>
            <StandartTextField
              type="email"
              name="email"
              label="E-Posta"
              inputRef={emailRef}
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.email}
              aria-describedby="component-error-text"
            />
            <FormHelperText id="component-error-text">
              {errors.email && touched.email && errors.email}
            </FormHelperText>
          </FormControl>
          <FormControl sx={{ mt: 3, width: '100%' }} error>
            <StandartTextField
              type="password"
              name="password"
              label="Parola"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.password}
              aria-describedby="componensa"
            />
            <FormHelperText id="componensa">
              {errors.password && touched.password && errors.password}
            </FormHelperText>
          </FormControl>
          {error && <Alert style={{ marginTop: 24 }} severity="error">Kullanıcı adı veya şifre hatalı!</Alert>}
          <Box className="login-buttons-container">
            <DefaultButton type="submit" variant="contained">
              Giriş Yap
            </DefaultButton>
            <DefaultButton onClick={() => {
              dispatch(switchLogin())
            }} variant="text">
              Kayıt Ol
            </DefaultButton>
          </Box>
          <Typography style={{ marginTop: 24, alignSelf: 'flex-start' }} variant="caption">Varsayılan Kullanıcı E-Posta: musabdedecik6@gmail.com</Typography>
          <Typography style={{ marginTop: 5, alignSelf: 'flex-start' }} variant="caption">Varsayılan Kullanıcı Parola: 123</Typography>
        </Form>
      )}
    </Formik>
  )
};

export default LoginForm;