import styled from "styled-components";

export const RecomendadosWrapper = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 1200px;
  margin: 0 15px;
  font-family: var(--font-family);
  margin-bottom: 5rem;

  h2 {
    color: black;
  }

  @media (max-width: 768px) {
    padding-top: 30px;
    text-align: center;
  }
`;

export const RecomendadosContainer = styled.div`
  display: flex;
  flex-wrap: nowrap;
  justify-content: center;
  align-items: center;
  gap: 15px;
  user-select: none;

  img {
    max-width: 150px;
    border-radius: 15px;
  }


  @media (max-width: 768px) {
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
  }
`;

export const CardRecomendados = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 400px;
  padding: 1rem 1rem;
  background-color: var(--background-card);
  border-radius: 20px;
  cursor: pointer;
  font-family: var(--font-family);

  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border: 1px solid rgba(0, 0, 0, 0.1);

  flex-direction: row;
  text-align: left;
  font-family: var(--font-family);

  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); 
  transition: box-shadow 0.3s ease; 


  img {
    max-width: 100px;
    border-radius: 10px;
    margin-right: 1.5rem;
    filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.3));

  }

  h3 {
    font-size: 1.1rem;
    font-weight: bold;
    color: black;
  }

  p {
    color: #666;
    font-weight: 400;
  }

  &:hover {
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2); 
  }
`;

export const InfoCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: start;
  font-family: var(--font-family);

  img {
    max-width: 70px;
    border-radius: 10px;
    margin-right: 1.5rem;
    filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.3));

  }
`;


