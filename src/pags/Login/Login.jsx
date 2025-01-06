import React, { useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { Formik } from "formik";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { loginInitialValues } from "../../formik/initialValues";
import { loginValidationSchema } from "../../formik/validationSchema";
import useRedirect from "../../hooks/useRedirect";
import LoginInput from "../../components/UI/LoginInput/LoginInput";
import Submit from "../../components/UI/Submit/Submit";
import { loginUser } from "../../axios/axios-user";
import { setCurrentUser } from "../../redux/user/userSlice";
import { Form, LoginContainerStyled, LoginEmailStyled, MainContainer, ImgInicioSesion, PasswordWrapper, PasswordIcon } from "./LoginStyles";
import Navbar from "../../components/navbar/NavBar";
import Footer from "../../components/footer/Footer";
import imgInicio from "../../data/imgProducts/Iconic1.png";
import { Fade } from "react-awesome-reveal";
import Loader from "../../components/UI/Loader/Loader";

const Login = () => {
  const dispatch = useDispatch();
  useRedirect("/");
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  return (
    <>
      <Navbar />
      <MainContainer>
        <ImgInicioSesion>
          <Fade direction="left" duration={2000}>
            <img src={imgInicio} alt="Login" />
          </Fade>
        </ImgInicioSesion>
        <LoginContainerStyled>
          <h1>Iniciar sesión</h1>
          <Formik
            initialValues={loginInitialValues}
            validationSchema={loginValidationSchema}
            onSubmit={async (values) => {
              setLoading(true);
              const user = await loginUser(values.email, values.password);
              if (user) {
                dispatch(
                  setCurrentUser({
                    ...user.usuario,
                    token: user.token,
                  })
                );
              }
              setLoading(false);
            }}
          >
            <Form>
              <LoginInput name="email" type="text" placeholder="Email" />
              <PasswordWrapper>
                <LoginInput
                  name="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Contraseña"
                />
                <PasswordIcon onClick={togglePasswordVisibility}>
                  {showPassword ? <AiOutlineEyeInvisible size={20} /> : <AiOutlineEye size={20} />}
                </PasswordIcon>
              </PasswordWrapper>
              <Link to="/register">
                <LoginEmailStyled onClick={() => window.location.href = "/register"}>
                  ¿No tenes cuenta? Crea una
                </LoginEmailStyled>
              </Link>
              <Submit type="submit" disabled={loading}>
                {loading ? <Loader /> : 'Iniciar Sesión'}
              </Submit>
            </Form>
          </Formik>
        </LoginContainerStyled>
      </MainContainer>
      <Footer />
    </>
  );
};

export default Login;





// import React, { useState } from "react";
// import { Formik } from "formik";
// import { Link } from "react-router-dom";
// import { useDispatch } from "react-redux";
// import { loginInitialValues } from "../../formik/initialValues";
// import { loginValidationSchema } from "../../formik/validationSchema";
// import useRedirect from "../../hooks/useRedirect";
// import LoginInput from "../../components/UI/LoginInput/LoginInput";
// import Submit from "../../components/UI/Submit/Submit";
// import { loginUser } from "../../axios/axios-user";
// import { setCurrentUser } from "../../redux/user/userSlice";
// import { Form, LoginContainerStyled, LoginEmailStyled, MainContainer, ImgInicioSesion } from "./LoginStyles";
// import Navbar from "../../components/navbar/NavBar";
// import Footer from "../../components/footer/Footer";
// import imgInicio from "../../data/imgProducts/Iconic1.png";
// import { Fade } from "react-awesome-reveal";
// import Loader from "../../components/UI/Loader/Loader";

// const Login = () => {
//   const dispatch = useDispatch();
//   useRedirect("/");
//   const [loading, setLoading] = useState(false);

//   return (
//     <>
//       <Navbar />
//       <MainContainer>
//         <ImgInicioSesion>
//           <Fade direction="left" duration={2000}>
//             <img src={imgInicio} alt="Login" />
//           </Fade>
//         </ImgInicioSesion>
//         <LoginContainerStyled>
//           <h1>Iniciar sesión</h1>
//           <Formik
//             initialValues={loginInitialValues}
//             validationSchema={loginValidationSchema}
//             onSubmit={async (values) => {
//               setLoading(true);
//               const user = await loginUser(values.email, values.password);
//               if (user) {
//                 dispatch(
//                   setCurrentUser({
//                     ...user.usuario,
//                     token: user.token,
//                   })
//                 );
//               }
//               setLoading(false);
//             }}
//           >
//             <Form>
//               <LoginInput name="email" type="text" placeholder="Email" />
//               <LoginInput name="password" type="password" placeholder="Contraseña" />
//               <Link to="/register">
//                 <LoginEmailStyled onClick={() => window.location.href = "/register"}>
//                   ¿No tenes cuenta? Crea una
//                 </LoginEmailStyled>
//               </Link>
//               <Submit type="submit" disabled={loading}>
//                 {loading ? <Loader /> : 'Iniciar Sesión'}
//               </Submit>
//             </Form>
//           </Formik>
//         </LoginContainerStyled>
//       </MainContainer>
//       <Footer />
//     </>
//   );
// };

// export default Login;




// import React, { useState } from "react";
// import { Formik } from "formik";
// import { Link } from "react-router-dom";
// import { useDispatch } from "react-redux";
// import { loginInitialValues } from "../../formik/initialValues";
// import { loginValidationSchema } from "../../formik/validationSchema";
// import useRedirect from "../../hooks/useRedirect";
// import LoginInput from "../../components/UI/LoginInput/LoginInput";
// import Submit from "../../components/UI/Submit/Submit";
// import { loginUser } from "../../axios/axios-user";
// import { setCurrentUser } from "../../redux/user/userSlice";
// import { Form, LoginContainerStyled, LoginEmailStyled, MainContainer, ImgInicioSesion, PasswordWrapper, PasswordIcon } from "./LoginStyles"; // Asegúrate de importar los nuevos estilos
// import Navbar from "../../components/navbar/NavBar";
// import Footer from "../../components/footer/Footer";
// import imgInicio from "../../data/imgProducts/Iconic1.png";
// import { Fade } from "react-awesome-reveal";
// import Loader from "../../components/UI/Loader/Loader";
// import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';

// const Login = () => {
//   const dispatch = useDispatch();
//   useRedirect("/");
//   const [loading, setLoading] = useState(false);
//   const [showPassword, setShowPassword] = useState(false); // State para la visibilidad de la contraseña

//   const togglePasswordVisibility = () => {
//     setShowPassword(!showPassword);
//   };

//   const renderIcon = () => {
//     return showPassword ? <AiOutlineEyeInvisible size={20} /> : <AiOutlineEye size={20} />;
//   };

//   return (
//     <>
//       <Navbar />
//       <MainContainer>
//         <ImgInicioSesion>
//           <Fade direction="left" duration={2000}>
//             <img src={imgInicio} alt="Login" />
//           </Fade>
//         </ImgInicioSesion>
//         <LoginContainerStyled>
//           <h1>Iniciar sesión</h1>
//           <Formik
//             initialValues={loginInitialValues}
//             validationSchema={loginValidationSchema}
//             onSubmit={async (values) => {
//               setLoading(true);
//               const user = await loginUser(values.email, values.password);
//               if (user) {
//                 dispatch(
//                   setCurrentUser({
//                     ...user.usuario,
//                     token: user.token,
//                   })
//                 );
//               }
//               setLoading(false);
//             }}
//           >
//             <Form>
//               <LoginInput name="email" type="text" placeholder="Email" />
              
//               <PasswordWrapper>
//                 <LoginInput
//                   name="password"
//                   type={showPassword ? "text" : "password"} 
//                   placeholder="Contraseña"
//                   autoComplete="new-password" //para evitar el autocompletado
//                 />
//                 <PasswordIcon onClick={togglePasswordVisibility}>
//                   {renderIcon()}
//                 </PasswordIcon>
//               </PasswordWrapper>

//               <Link to="/register">
//                 <LoginEmailStyled onClick={() => window.location.href = "/register"}>
//                   ¿No tenes cuenta? Crea una
//                 </LoginEmailStyled>
//               </Link>
//               <Submit type="submit" disabled={loading}>
//                 {loading ? <Loader /> : 'Iniciar Sesión'}
//               </Submit>
//             </Form>
//           </Formik>
//         </LoginContainerStyled>
//       </MainContainer>
//       <Footer />
//     </>
//   );
// };

// export default Login;
