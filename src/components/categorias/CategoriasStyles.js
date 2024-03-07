import styled from "styled-components";

export const CategoriasWrapper = styled.div`

    display: flex;
    flex-direction: column;
    max-width: 1200px;
    margin: 0 15px;
    font-family: var(--font-family);

    h2 {
        margin-bottom: 3rem;
    }
    


    @media (max-width:768px){
        padding-top: 30px;
        text-align: center;
    };

`;

export const CategoriasContainer = styled.div`

    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: center;
    gap: 20px;
    user-select:none;

    img{ 
        max-width: 150px;
        border-radius: 15px;
    }
    img:hover {
        transform: scale(1.2); 
    }
    
`;


export const CardCategoria = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  width: 200px;
  padding: 1.5rem 1rem;
  border-radius: 20px;
  cursor: pointer;
  font-family: var(--font-family);

  background-color: ${({ selected }) =>
    selected ? 'var(--btn-principal)' : 'var(--background-card)'};

  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.15);

  transition: transform 0.3s ease-in-out;
  transform: scale(1);

  &:hover {
    transform: scale(1.05);
  }

  img {
    max-width: 60%;
    height: auto;
    filter: drop-shadow(0px 2px 4px rgba(0, 0, 0, 0.1));

  }

  h2 {
    font-size: 1.2rem;
    margin-top: 1rem;
    text-align: center;
  }
`;



// export const CardCategoria = styled.div` //Acá tenía un motion que supuestamente es de framer-motion//
//     display: flex;
//     flex-direction: column;
//     justify-content: center;
//     align-items: center;
//     gap: 0.5rem;
//     width: 220px;
//     padding: 2rem 0.5rem;
    
//     background-color: ${({selected}) => selected ? 'var(--btn-principal)' : 'var(--background-card)'};
//     border-radius: 100px;
//     cursor: pointer;
//     font-family: var(--font-family);
//     filter: drop-shadow(3px 3px 5px rgba(0, 0, 0, 0.2));
//     z-index: -2;


    
//     h2{
//         font-size: 1rem;
//         font-family: var(--font-family);
//     }
//     img{
//         max-width: 100px;
//         filter: drop-shadow(3px 3px 5px rgba(0, 0, 0, 0.2));
//         transition: transform 0.7s ease;
//     }
//     img:hover {
//         transform: scale(1.2); 
//     }
    

// `;

export const BorderDecoration = styled.div`

    height: 5px;
    width: 30%;
   background-image: linear-gradient(120deg, #84fab0 0%, #8fd3f4 100%);
    border-radius: 15px;
    filter: drop-shadow(3px 3px 5px rgba(0, 0, 0, 0.2));
`;


