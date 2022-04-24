import { useEffect,  useRef } from "react";
import { Formik } from "formik";
import Form from "./Form";
import StandartTextField from "../TextFields/StandartTextField";
import DefaultButton from "../Buttons/DefaultButton";
import {  Alert, Box, FormControl, FormHelperText, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { switchLogin } from "../../../redux/store/user";
import * as Yup from 'yup';
import { userRegister } from "../../../redux/actions/userActions";

const RegisterForm = () => {
    const dispatch = useDispatch()
    const errMessage = useSelector((state) => state.user.error.message)
    const nameRef = useRef(null);

    useEffect(() => {
        nameRef.current?.focus();
    }, []);

    const SignupSchema = Yup.object().shape({
        name: Yup.string()
            .min(2, 'Adınız en az 2 karakterden oluşabilir!')
            .required('Ad bilgisi zorunludur.'),
        surname: Yup.string()
            .min(2, 'Soyadınız en az 2 karakterden oluşabilir!')
            .required('Soyad bilgisi zorunludur.'),
        email: Yup.string().email('Geçersiz E-Posta adresi girdiniz!').required('E-Posta bilgisi zorunludur.'),
        password: Yup.string()
            .min(2, 'Parola en az 2 karakterden oluşabilir!')
            .max(10, 'Parola en fazla 10 karakterden oluşabilir!')
            .required('Parola bilgisi zorunludur.'),
    });

    const handleSubmit = async (values) => {
        dispatch(userRegister(values));
    }

    return (
        <Formik
            initialValues={{ name: "", surname: "", email: "", password: "" }}
            onSubmit={handleSubmit}
            validationSchema={SignupSchema}
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
                        React To-Do List Kayıt Ol
                    </Typography>
                    <FormControl sx={{ mt: 3, width: '100%' }} error>
                        <StandartTextField
                            type="text"
                            name="name"
                            label="Ad"
                            inputRef={nameRef}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.name}
                            aria-describedby="component-error-text"
                        />
                        <FormHelperText id="component-error-text">
                            {errors.name && touched.name && errors.name}
                        </FormHelperText>
                    </FormControl>
                    <FormControl sx={{ mt: 3, width: '100%' }} error>
                        <StandartTextField
                            type="text"
                            name="surname"
                            label="Soyad"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.surname}
                            aria-describedby="component-error-text"
                        />
                        <FormHelperText id="component-error-text">
                            {errors.surname && touched.surname && errors.surname}
                        </FormHelperText>
                    </FormControl>
                    <FormControl sx={{ mt: 3, width: '100%' }} error>
                        <StandartTextField
                            type="email"
                            name="email"
                            label="E-Posta"
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
                    {errMessage && <Alert style={{ marginTop: 24 }} severity="error">{errMessage}</Alert>}
                    <Box className="login-buttons-container">
                        <DefaultButton type="submit" variant="contained">
                            Kayıt Ol
                        </DefaultButton>
                    </Box>
                    <Typography style={{ marginTop: 24, alignSelf: 'flex-start' }} variant="caption">Zaten bir üyeliğin varsa
                        <DefaultButton onClick={() => {
                            dispatch(switchLogin())
                        }} variant="text">
                            Giriş Yap
                        </DefaultButton></Typography>
                </Form>
            )}
        </Formik>
    )
};

export default RegisterForm;