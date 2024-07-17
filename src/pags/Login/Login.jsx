

import { Formik } from "formik";
import { Link } from "react-router-dom";
import { loginInitialValues } from "../../formik/initialValues";
import { loginValidationSchema } from "../../formik/validationSchema";
import useRedirect from "../../hooks/useRedirect";

import LoginInput from "../../components/UI/LoginInput/LoginInput";
import Submit from "../../components/UI/Submit/Submit";

import { useDispatch } from "react-redux";
import { loginUser } from "../../axios/axios-user";
import { setCurrentUser } from "../../redux/user/userSlice";
import { Form, LoginContainerStyled, LoginEmailStyled, MainContainer,ImgInicioSesion } from "./LoginStyles";

import Navbar from "../../components/navbar/NavBar";
import Footer from "../../components/footer/Footer";
import imgInicio from "../../data/imgProducts/Iconic1.png";
import { Fade } from "react-awesome-reveal";

const Login = () => {
  const dispatch = useDispatch();
  useRedirect("/");

  return (
    <>
      <Navbar />

      
      <MainContainer>

        <ImgInicioSesion>
          <Fade direction="left"  duration={2000} >
            <img src={imgInicio} alt="Login" />
          </Fade>
        </ImgInicioSesion>
    
        <LoginContainerStyled>
          <h1>Iniciar sesión</h1>
          <Formik
            initialValues={loginInitialValues}
            validationSchema={loginValidationSchema}
            onSubmit={async (values) => {
              const user = await loginUser(values.email, values.password);
              if (user) {
                dispatch(
                  setCurrentUser({
                    ...user.usuario,
                    token: user.token,
                  })
                );
              }
            }}
          >
            <Form>
              <LoginInput name="email" type="text" placeholder="Email" />
              <LoginInput name="password" type="password" placeholder="Contraseña" />
              <Link to="/register">
                <LoginEmailStyled>¿No tenes cuenta? Crea una</LoginEmailStyled>
              </Link>
              <Submit>Ingresar</Submit>
            </Form>
          </Formik>
        </LoginContainerStyled>
      </MainContainer>
      <Footer />
    </>
  );
};

export default Login;
