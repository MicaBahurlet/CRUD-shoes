
import React from 'react';
import { Formik } from 'formik';
import { useNavigate, useLocation } from 'react-router-dom';
import { registerInitialValues } from '../../formik/initialValues';
import { registerValidationSchema } from '../../formik/validationSchema';

import LoginInput from '../../components/UI/LoginInput/LoginInput';
import Submit from '../../components/UI/Submit/Submit';

import { Form, LoginContainerStyled, LoginEmailStyled } from './RegisterStyles';
import { createUser } from '../../axios/axios-user';
import { useDispatch } from 'react-redux';
import { setCurrentUser } from '../../redux/user/userSlice';

import Navbar from '../../components/navbar/NavBar';
import Footer from '../../components/footer/Footer';

const Register = () => {
  const { state } = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  
  return (
    <>
      <Navbar />
      <LoginContainerStyled>
        <h1>Crea tu cuenta</h1>
        <Formik
          initialValues={registerInitialValues}
          validationSchema={registerValidationSchema}
          onSubmit={async (values, actions) => {
            const user = await createUser(values.name, values.email, values.password);
            actions.resetForm();
            if (user) {
              console.log('User created:', user);
              dispatch(
                setCurrentUser({
                  ...user.usuario,
                  token: user.token,
                  verified: false,  // chequeo que verified esté en false
                })
              );
              navigate('/validate');  // navegar a /validate después de establecer el usuario
            } else {
              console.log('User creation failed');
            }
          }}
        >
          <Form>
            <LoginInput name='name' type='text' placeholder='Nombre' />
            <LoginInput name='email' type='email' placeholder='Email' />
            <LoginInput name='password' type='password' placeholder='Contraseña' />
            <LoginEmailStyled to='/login'>
              <p>¿Ya tienes cuenta? Inicia sesión</p>
            </LoginEmailStyled>
            <Submit>Registrate</Submit>
          </Form>
        </Formik>
      </LoginContainerStyled>
      <Footer />
    </>
  );
};

export default Register;
