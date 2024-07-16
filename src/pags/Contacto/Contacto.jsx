
import React from 'react';
import {
  ContactoContainer,
  Formulario,
  Etiqueta,
  Input,
  Textarea,
  BotonEnviar,
  GrupoEtiquetaInput,
  Errormessage,
} from './Contacto';
import imgForm from '../../data/imgProducts/Iconic2.png';
import Footer from '../../components/footer/Footer.jsx';
import { Fade } from "react-awesome-reveal"
import NavBar from '../../components/navbar/NavBar.jsx';

import { useFormik } from 'formik'; // tengo que traer el  hook formik
import * as Yup from 'yup';

const validationSchema = Yup.object ({
  nombre: Yup.string().trim() 
    .required("Por favor, ingresa tu nombre y apellido."),
  email: Yup.string() 
    .email("El formato de email no es válido. Asegurate de escribir tu correo correctamente.")
    .required("Por favor, ingresa tu email."),
  mensaje: Yup.string() 
    .required("Por favor, ingresa tu mensaje."),
});

export default function Contacto() {
  const { touched, errors, handleSubmit, getFieldProps } = useFormik({
    initialValues: {
      nombre: '',
      email: '',
      mensaje: '',
    },
    validationSchema,
    onSubmit: (values, { resetForm }) => {
      alert("Valores enviados:", values);
      resetForm();
    },
  });

  return (
    <div>
      <NavBar />
      <ContactoContainer>

        <Formulario action="/ruta-de-envio" method="post" onSubmit={handleSubmit}>
          <h2>Contactate con nosotros:</h2>

          <GrupoEtiquetaInput>
            <Etiqueta htmlFor="nombre">Nombre y apellido:</Etiqueta>
            <Input
              type="text"
              id="nombre"
              name="nombre"
              {...getFieldProps('nombre')}
            />
            {touched.nombre && errors.nombre && <Errormessage>{errors.nombre}</Errormessage>}
          </GrupoEtiquetaInput>

          <GrupoEtiquetaInput>
            <Etiqueta htmlFor="email">Email:</Etiqueta>
            <Input
              type="email"
              id="email"
              name="email"
              {...getFieldProps('email')}
            />
            {touched.email && errors.email && <Errormessage>{errors.email}</Errormessage>}
          </GrupoEtiquetaInput>

          <GrupoEtiquetaInput>
            <Etiqueta htmlFor="mensaje">Asunto:</Etiqueta>
            <Textarea
              id="mensaje"
              name="mensaje"
              rows="10" 
              {...getFieldProps('mensaje')}
            />
            {touched.mensaje && errors.mensaje && <Errormessage>{errors.mensaje}</Errormessage>}
          </GrupoEtiquetaInput>

          <BotonEnviar type="submit" 
            onClick={() => alert("Su mensaje ha sido enviado con exito. Gracias por contactarnos.")}
          >Enviar</BotonEnviar>
        </Formulario>


        <Fade direction="right" duration={2000}>
          <img src={imgForm} alt="Img Formulario"  />
        </Fade>
      </ContactoContainer>
      <Footer />
    </div>
  );
}


