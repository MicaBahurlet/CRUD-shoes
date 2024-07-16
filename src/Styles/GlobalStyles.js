import { createGlobalStyle } from "styled-components";


export const GlobalStyles = createGlobalStyle` 
    
    

    :root{
       
        --background-body: #FDFDFD;
        --background-card: #F1EDED;

        --background-nav: #1E1E1E;
        --btn-LinkActive:#abdb25;

       
        --font-family: 'Lato', sans-serif;
        --btn-Background: #abdb25;

        --bubble-cart: #abdb25;

        --borderSeparation: linear-gradient(120deg, #d4fc79 0%, #96e6a1 100%);


    }

    @import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap');

    html{
        scroll-behavior: smooth;
    }

    body{
        margin: 0;
        padding: 0;
        /* background-color: --background-body; */
        font-family: 'Montserrat';
        overflow-x: hidden;
    }

    a{
        text-decoration: none;

    }


    li{
        list-style: none;

    }
    // esto es genial, para que no se pueda movilizar ninguna img
    /* img:hover{
        pointer-events: none;
        user-select: none;
    } */

    


`;