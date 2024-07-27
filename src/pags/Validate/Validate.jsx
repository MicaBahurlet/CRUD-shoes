
import React, { useEffect } from 'react';
import { Formik } from 'formik';
import { useNavigate } from 'react-router-dom';

import LoginInput from '../../components/UI/LoginInput/LoginInput';
import Submit from '../../components/UI/Submit/Submit';

import { Form, ValidateContainerStyled } from './validateStyles';
import { useDispatch, useSelector } from 'react-redux';
import { verifyUser } from '../../axios/axios-user';
import { validateInitialValues } from '../../formik/initialValues';
import { validateValidationSchema } from '../../formik/validationSchema';
import { setVerified } from '../../redux/user/userSlice';

// import Navbar from '../../components/navbar/NavBar';
import Footer from '../../components/footer/Footer';
const Validate = () => {

  // esta parte antes del return tengo un problema, si lo comento se carga la pag correctamente, pero no me valida al usuario
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const currentUser = useSelector(state => state.user.currentUser);

  // //   //si pongo /validate dentro de la ruta navigate si me carga la página, pero no me valida al usuario
  useEffect(() => {
    if (!currentUser) {
      navigate('/login');
    } else if (currentUser.verified) {
      navigate('/');
    }
  }, [currentUser, navigate]);

  return (
    <>
      {/* <Navbar /> */}
      <ValidateContainerStyled>
        <h1>Validar cuenta</h1>
        <Formik
          initialValues={validateInitialValues}
          validationSchema={validateValidationSchema}
          onSubmit={async values => {
            await verifyUser(currentUser.email, values.code);
            dispatch(setVerified());
            navigate('/');
          }}
          
        >
          <Form>
            <LoginInput name='code' type='code' placeholder='código' />
            <Submit>Validar</Submit>
          </Form>
        </Formik>
      </ValidateContainerStyled>
      <Footer />
    </>
  );
};

export default Validate;
