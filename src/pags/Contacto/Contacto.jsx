import React from 'react';
import {
  ContactoContainer,
  Formulario,
  Etiqueta,
  Input,
  Textarea,
  Boton,
  GrupoEtiquetaInput,
} from './Contacto';
import imgForm from '../../data/imgProducts/Contacto.jpg';
import Footer from '../../components/footer/Footer.jsx';
import { Fade } from "react-awesome-reveal"
import NavBar from '../../components/navbar/NavBar.jsx';

import { useFormik } from 'formik'; // tengo que traer el  hook formik


export default function Contacto() {

  // El initialValues va a tener tantas propiedades como items tenga el formulario
  const formik = useFormik({
    // valores iniciales
    initialValues: {
      nombre: '',
      email: '',
      asunto: '',
      mensaje: '',
    },
    onSubmit: (values) => {
      // alert(JSON.stringify(values, null, 2));
      console.log ("Valores enviados, values");
    },
  })

  return (
    <div>
      <NavBar/>
      <ContactoContainer>

        <Fade direction="left"  duration={3000} >
         <img src={imgForm} alt="Img Formulario" />
        </Fade>  
        
        <Formulario action="/ruta-de-envio" method="post" onSubmit={formik.handleSubmit}> 
          <h2>Contactate con nosotros:</h2>
          <GrupoEtiquetaInput>
            <Etiqueta htmlFor="nombre">Nombre y apellido:</Etiqueta>
            <Input type="text" id="nombre" name="nombre" required 
              onChange={formik.handleChange} 
              onBlur={formik.handleBlur}
              value={formik.values.nombre} 
            />
          </GrupoEtiquetaInput>

          {/* <GrupoEtiquetaInput>
            <Etiqueta htmlFor="apellido">Apellido:</Etiqueta>
            <Input type="text" id="apellido" name="apellido" required />
          </GrupoEtiquetaInput> */}

          <GrupoEtiquetaInput>
            <Etiqueta htmlFor="email">Email:</Etiqueta>
            <Input type="email" id="email" name="email" required 
              {...formik.getFieldProps('email')}  // aquí me arma con el spred el OnChange, onBlur y value para el email
            
            />
          </GrupoEtiquetaInput>

          <GrupoEtiquetaInput>
            <Etiqueta htmlFor="asunto">Asunto:</Etiqueta>
            <Textarea id="asunto" name="asunto" rows="4" required></Textarea>
          </GrupoEtiquetaInput>

          <Boton type="submit">Enviar Mensaje</Boton>
        </Formulario>
      </ContactoContainer>

      <Footer></Footer>
    </div>  
    
  );
}