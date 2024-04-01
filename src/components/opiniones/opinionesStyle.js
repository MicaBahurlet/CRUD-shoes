import styled from "styled-components";

export const RecomendadosWrapper = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 1300px;
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
    max-width: 130px;
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
  padding: 10px;
  /* background-color: var(--background-card); */
  background-image: linear-gradient(to top, #c1dfc4 0%, #deecdd 100%);
  border-radius: 20px;
  font-family: var(--font-family);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border: 1px solid rgba(0, 0, 0, 0.1);

  flex-direction: row;
  text-align: left;
  font-family: var(--font-family);

  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); 
  transition: box-shadow 0.3s ease; 


  img {
    max-width: 90px;
    border-radius: 10px;
    margin-right: 1.5rem;
    filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.3));

  }

  h3 {
    font-size: 19px;
    font-weight: bold;
    color: black;
  }

  p {
    color: #666;
    font-weight: 300;
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
    max-width: 60px;
    border-radius: 10px;
    margin-right: 1.5rem;
    filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.3));

  }
`;


