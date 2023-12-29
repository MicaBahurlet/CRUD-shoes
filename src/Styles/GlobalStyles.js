import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle` //siempre la svastik. Y adentro vamos a poner todos los estilos globales. Ver si luego necesito un reset de de box sizing, margin y padding. 

    :root{
        --background-body: #FDFDFD;
        --background-card: #F1EDED;
        --background-nav: #F9F2F2;
        --btn-principal: linear-gradient(82deg,#ffa100,#fb103d);
        --btn-principal-hover: linear-gradient(82deg,#fb103d,#ffa100);
        --btn-secondary: linear-gradient(140deg,#3b3022,#3b2329);
        --btn-secondary-hover: linear-gradient(140deg,#3b2329,#3b3022);
        --font-family: 'Montserrat', sans-serif;



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