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

export default function Contacto() {
  return (
    <ContactoContainer>
      
      <Formulario action="/ruta-de-envio" method="post">
        <h2>Contactate con nosotros:</h2>
        <GrupoEtiquetaInput>
          <Etiqueta htmlFor="nombre">Nombre:</Etiqueta>
          <Input type="text" id="nombre" name="nombre" required />
        </GrupoEtiquetaInput>

        <GrupoEtiquetaInput>
          <Etiqueta htmlFor="apellido">Apellido:</Etiqueta>
          <Input type="text" id="apellido" name="apellido" required />
        </GrupoEtiquetaInput>

        <GrupoEtiquetaInput>
          <Etiqueta htmlFor="email">Email:</Etiqueta>
          <Input type="email" id="email" name="email" required />
        </GrupoEtiquetaInput>

        <GrupoEtiquetaInput>
          <Etiqueta htmlFor="asunto">Asunto:</Etiqueta>
          <Textarea id="asunto" name="asunto" rows="4" required></Textarea>
        </GrupoEtiquetaInput>

        <Boton type="submit">Enviar Mensaje</Boton>
      </Formulario>
    </ContactoContainer>
  );
}