
import React, { useEffect, useState } from 'react';
import { Formik } from 'formik';
import { useNavigate } from 'react-router-dom';

import LoginInput from '../../components/UI/LoginInput/LoginInput';
import Submit from '../../components/UI/Submit/Submit';

import { Form, ValidateContainerStyled } from './validateStyles';
import { useDispatch, useSelector } from 'react-redux';
import { verifyUser } from '../../axios/axios-user';
import { validateInitialValues } from '../../formik/initialValues';
import { validateValidationSchema } from '../../formik/validationSchema';
import { setCurrentUser, setVerified } from '../../redux/user/userSlice';

import Navbar from '../../components/navbar/NavBar';
import Footer from '../../components/footer/Footer';

const Validate = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const currentUser = useSelector(state => state.user.currentUser);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!currentUser) {
      navigate('/login');
    } else if (currentUser.verified) {
      navigate('/');
    }
  }, [currentUser, navigate]);

  return (
    <>
      <Navbar />
      <ValidateContainerStyled>
        <h1>Valida tu cuenta</h1>
        <p>Te enviamos un código de validación al email: {currentUser.email}</p>
        <Formik
          initialValues={validateInitialValues}
          validationSchema={validateValidationSchema}
          onSubmit={async (values, { setSubmitting }) => {
            try {
              await verifyUser(currentUser.email, values.code);
              dispatch(setVerified());
              navigate('/');
            } catch (error) {
              setError(error.response.data.msg);
              setSubmitting(false);
            }
          }}
        >
          {({ isSubmitting }) => (
            <Form>
              <LoginInput name='code' type='code' placeholder='código' />
              {error && <div style={{ color: 'red' }}>{error}</div>}
              <Submit disabled={isSubmitting}>Validar</Submit>
            </Form>
          )}
        </Formik>
      </ValidateContainerStyled>
      <Footer />
    </>
  );
};

export default Validate;
