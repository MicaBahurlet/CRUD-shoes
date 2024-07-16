import styled from "styled-components";


export const MainContainer = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 1200px; 
  margin: 0 auto;
  padding: 2rem;
  gap: 6rem;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;

  }
`;


export const Sidebar = styled.div`
  flex: 1;
  max-width: 250px; 
`;


export const ContentWrapper = styled.div`
  flex: 3;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

// Estilos para el contenedor de productos
export const ProductosWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-self: center;
  max-width: 1000px;
  margin: 0 auto;
  font-family: var(--font-family);
  margin-top: 2rem;

  @media (max-width: 768px) {
    padding-top: 30px;
    text-align: center;
  }
`;

export const TextProductos = styled.div`
  display: flex;
  flex-direction: column;
  text-align: start;

  @media (max-width: 768px) {
    padding-top: 30px;
    text-align: start;
    max-width: 300px;
    margin: 0 auto;
  }
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
  user-select: none;
  margin-bottom: 1rem;
  margin-top: 3rem;

  @media (max-width: 768px) {
    flex-direction: column;
    padding-top: 30px;
    text-align: center;
  }
`;

export const CardProducto = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 214px;
  padding: 2px;
  background-color: whitesmoke;
  border-radius: 15px;
  font-family: var(--font-family);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border: 1px solid rgba(0, 0, 0, 0.1);
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: box-shadow 0.3s ease;
  margin-bottom: 0.5rem;
  border-bottom: 1px solid white;
  border-top: 1px solid white;

  &:hover {
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
  }

  h3 {
    font-size: 1rem;
    font-family: var(--font-family);
    font-weight: 800;
  }

  h4 {
    font-size: 1.2rem;
    color: green;
    font-weight: 800;
  }

  img {
    width: 100%;
    height: auto;
    border-radius: 15px;
    filter: drop-shadow(3px 3px 5px rgba(0, 0, 0, 0.3));
    transition: transform 0.7s ease;
  }

  p {
    text-align: center;
    font-size: 0.8rem;
  }

  img:hover {
    transform: scale(1.2);
    user-select: none;
    pointer-events: none;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
    max-width: 200px;
  }
`;

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  padding: 1.5rem 1.5rem;

  h3,
  p,
  h4 {
    margin: 0.2rem 0;
  }
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

export const BorderSeparacion = styled.div`
  height: 7px;
  width: 70%;
  margin: 6rem auto;
  margin-bottom: 2rem;
  background-image: var(--borderSeparation);
  border-radius: 15px;
  filter: drop-shadow(3px 3px 5px rgba(0, 0, 0, 0.2));
`;

export const BotonsWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.5rem;
  margin-top: 3rem;
  margin-bottom: 2rem;
`;

export const Boton = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  font-size: 15px;
  /* background-color: var(--btn-Background);
  color: #ffffff; */
  background-color: black;
  color: white;
  border: 1px solid black;
  border-radius: 10px;
  cursor: pointer;
  filter: drop-shadow(3px 3px 5px rgba(0, 0, 0, 0.2));
  font-family: var(--font-family);
  font-weight: 500;
  padding: 11px 11px;
  max-width: 7rem;
`;

export const BotonVerMenos = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  font-size: 15px;
  background-color: #ffffff;
  color: #ffffff;
  border: 1px solid black;
  border-radius: 10px;
  cursor: pointer;
  color: black;
  filter: drop-shadow(3px 3px 5px rgba(0, 0, 0, 0.2));
  font-family: var(--font-family);
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
  font-family: var(--font-family);
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
  font-family: var(--font-family);
  margin-top: 3rem;
`;

export const BotonBuy = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 15px;
  /* background-color: var(--btn-Background);
  color: #ffffff; */
  background-color: black;
  color: white;
  border: 1px solid black;
  border-radius: 10px;
  cursor: pointer;
  filter: drop-shadow(3px 3px 5px rgba(0, 0, 0, 0.2));
  font-weight: 500;
  padding: 10px 10px;
  margin-top: 1rem;
`;

