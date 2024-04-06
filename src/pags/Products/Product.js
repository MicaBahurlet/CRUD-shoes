import styled from "styled-components";

export const ProductosWrapper = styled.div`

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-self: center;
    max-width: 1000px;
    margin: 0 auto; 
    font-family: var(--font-family);
    margin-top: 6rem;
    
  


    @media (max-width:768px){
        padding-top: 30px;
        text-align: center;
    };
    

`;

export const TextProductos = styled.div`

        display: flex;
        flex-direction: column;
        text-align: start;
       
       
      

        
    @media (max-width:768px){
        padding-top: 30px;
        text-align: start;
        max-width: 300px;
        margin: 0 auto;
    };

`;



export const ProductosContainer = styled.div`

    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    max-width: 1000px;
    gap: 40px;
    user-select:none;
    margin-bottom: 3rem;
    margin-top: 6rem;

    @media (max-width:768px){
        flex-direction: column;
        padding-top: 30px;
        text-align: center;
    };
    
`;


export const CardProducto = styled.div` 
    display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 210px;
  height: 270px;
  padding: 2px; 

  background-color: whitesmoke;
  border-radius: 20px;
  
  font-family: var(--font-family);

  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); 
  border: 1px solid rgba(0, 0, 0, 0.1);

  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); 
  transition: box-shadow 0.3s ease; 
  margin-bottom: 5rem;
  border-bottom: 1px solid green;
  border-top: 1px solid green;

    &:hover {
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3); 
    }
    h3{
        font-size: 1.2rem;
        font-family: var(--font-family);
        font-weight: 800;
    }
    h4{
        font-size: 1.1rem;
        color: green;
        font-weight: 800;
    }
    

    img {
        max-width: 100px;
        border-radius: 15px;
        filter: drop-shadow(3px 3px 5px rgba(0, 0, 0, 0.3));
        transition: transform 0.7s ease;
    }

    p {
        text-align: center;
    }


    img:hover {
        transform: scale(1.2); 
    }

    @media (max-width:768px){
        flex-direction: column;
        
        text-align: center;
        max-width: 200px;
        height: 285px;
    };
    
    

`;

export const AgregarCart = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 5px;
    padding: 10px 20px;
    font-size: 15px;
    background-image: linear-gradient(120deg, #d4fc79 0%, #96e6a1 100%);
    border: none;
    border-radius: 10px;
    cursor: pointer;
    color: black;
    filter: drop-shadow(3px 3px 5px rgba(0, 0, 0, 0.2));
    font-size: 1.2rem;
    font-weight: 200;
   
`;

// export const BorderDecorationProducto = styled.div`
//     margin-top: 0.5rem;
//     height: 7px;
//     width: 30%;
//     background-image: linear-gradient(120deg, #d4fc79 0%, #96e6a1 100%);
//     border-radius: 15px;
//     filter: drop-shadow(3px 3px 5px rgba(0, 0, 0, 0.2));
// `;

export const BorderSeparacion = styled.div`

    height: 7px;
    width: 70%;
    margin:  6rem auto;
    margin-bottom: 2rem;
    background-image: linear-gradient(120deg, #d4fc79 0%, #96e6a1 100%);
    border-radius: 15px;
    filter: drop-shadow(3px 3px 5px rgba(0, 0, 0, 0.2));
`;


export const BotonsWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content:center ;
    gap: 2rem;
    margin: 3rem auto;
`;

export const Boton = styled.div`
     display: flex;
    justify-content: flex-start;
    align-items: center;
    font-size: 15px;
    /* background-image: linear-gradient(120deg, #d4fc79 0%, #96e6a1 100%); */

    background-image: linear-gradient(to top, #0fd850 0%, #f9f047 100%);
    color: #ffffff;
    border: 1px solid black;
    border-radius: 10px;
    cursor: pointer;
    color: black;
    filter: drop-shadow(3px 3px 5px rgba(0, 0, 0, 0.2));
    font-family: var(--font-family) ;
    font-weight: 500;
    padding: 10px 10px;
    max-width: 7rem;
`;

export const BotonVerMenos = styled.div`
   display: flex;
    justify-content: flex-start;
    align-items: center;
    font-size: 15px;
    /* background-image: linear-gradient(120deg, #d4fc79 0%, #96e6a1 100%); */

    background-color: #ffffff;
    color: #ffffff;
    border: 1px solid black;
    border-radius: 10px;
    cursor: pointer;
    color: black;
    filter: drop-shadow(3px 3px 5px rgba(0, 0, 0, 0.2));
    font-family: var(--font-family) ;
    font-weight: 500;
    padding: 10px 10px;
    max-width: 7rem;
`;


export const ImputContainerStyles = styled.div`

    display: flex;
    justify-content: center;
    align-items: flex-start;
    margin-top: 1rem;
    
    gap: 2rem;

    @media (max-width: 968px) {
        flex-direction: column;
        
    }
`;

export const InputStyles = styled.input`

    padding: 10px;
    font-size: 1.2rem;
    border: 1px solid black;
    border-radius: 10px;
    outline: none;
    font-family:  var(--font-family) ;
    font-style: italic;
`;

export const BotonInput = styled.div`

    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px 20px;
    font-size: 1rem;
    border: 1px solid #ccc;
    border-radius: 10px;
    cursor: pointer;
    background-image: linear-gradient(120deg, #d4fc79 0%, #96e6a1 100%);
    color: black;
    font-weight: bold;
    border: none;
    font-family:  var(--font-family) ;
    margin-top: 3rem;

    /* &:hover {
        background-image: linear-gradient(120deg, #84fab0 0%, #8fd3f4 100%);
    } */

`;



export const BotonBuy = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    font-size: 15px;
    /* background-image: linear-gradient(120deg, #d4fc79 0%, #96e6a1 100%); */

    background-image: linear-gradient(to top, #0fd850 0%, #f9f047 100%);
    color: #ffffff;
    border: 1px solid black;
    border-radius: 10px;
    cursor: pointer;
    color: black;
    filter: drop-shadow(3px 3px 5px rgba(0, 0, 0, 0.2));
    font-weight: 500;
    padding: 10px 10px;
    max-width: 7rem;
`;



// export const ModalContainer = styled.div`
//     padding: 15px 0px;
//     display: flex;
//     align-items: center;
//     justify-content: center;
//     color: white;
//     background-color: #00A97F;
//     position: fixed;
//     bottom: 0;
//     width: 100%;
//     transition: all 0.5s ease-out;
//     transform: translateY(200%);
//     -webkit-transform: translateY(200%);
//     -moz-transform: translateY(200%);
//     -ms-transform: translateY(200%);
//     -o-transform: translateY(200%);

//     &.activeModal {
//         transform: translateY(0);
//         transition: all 0.5s ease-in;
//     }
// `;
