import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle` //siempre la svastik. Y adentro vamos a poner todos los estilos globales. Ver si luego necesito un reset de de box sizing, margin y padding. 

    :root{


        --background-body: #FDFDFD;
        --background-card: #F1EDED;

        --background-nav: #1E1E1E;
        --btn-LinkActive:#abdb25;

       
        --font-family: 'Montserrat', sans-serif, 'Roboto';
        --btn-Background: #abdb25;

        --bubble-cart: #e0bc00;


    }

    html{
        scroll-behavior: smooth;
    }

    body{
        margin: 0;
        padding: 0;
        background-color: --background-body;
        font-family: --font-family;
        overflow-x: hidden;
    }

    a{
        text-decoration: none;

    }


    li{
        list-style: none;

    }

    


`;