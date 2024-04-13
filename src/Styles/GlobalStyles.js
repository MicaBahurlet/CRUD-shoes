import { createGlobalStyle } from "styled-components";


export const GlobalStyles = createGlobalStyle` 
    @import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap');
    

    :root{
       
        --background-body: #FDFDFD;
        --background-card: #F1EDED;

        --background-nav: #1E1E1E;
        --btn-LinkActive:#abdb25;

       
        --font-family: 'Montserrat', sans-serif;
        --btn-Background: #abdb25;

        --bubble-cart: #e0bc00;

        --borderSeparation: linear-gradient(120deg, #d4fc79 0%, #96e6a1 100%);


    }

    html{
        scroll-behavior: smooth;
    }

    body{
        margin: 0;
        padding: 0;
        background-color: --background-body;
        font-family: var(--font-family);
        overflow-x: hidden;
    }

    a{
        text-decoration: none;

    }


    li{
        list-style: none;

    }

    


`;