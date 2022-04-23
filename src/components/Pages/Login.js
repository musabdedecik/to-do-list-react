import Box from "@mui/material/Box";
import LoginForm from "../Views/Forms/LoginForm";
import RegisterForm from "../Views/Forms/RegisterForm";
import logo from "../../assets/images/logo.webp";
import { useSelector } from 'react-redux'

function Login() {
  const isLogin = useSelector((state) => state.user.isLogin);
  return (
    <Box className="overlay-login">
      {isLogin ? (
        <LoginForm />
      ) : (
        <RegisterForm />
      )}
    </Box>
  );
}

export default Login;