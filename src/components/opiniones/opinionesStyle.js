import styled from "styled-components";

export const OpininonesWrapper = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 1300px;
  margin: 0 15px;
  font-family: var(--font-family);
  margin-bottom: 5rem;

  h2 {
    color: #1E1E1E;
  }

  @media (max-width: 768px) {
    padding-top: 30px;
    text-align: center;
    max-width: 400px;
  }
`;

export const OpinionesContainer = styled.div`
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
    max-width: 400px;
  }
`;

export const CardOpiniones = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 360px;
  padding: 10px;

  background-color: whitesmoke;
  border-radius: 20px;
  font-family: var(--font-family);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border: 1px solid rgba(0, 0, 0, 0.1);

  flex-direction: row;
  text-align: left;
  font-family: var(--font-family);

  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); 
  transition: box-shadow 0.3s ease; 
  border-bottom: 2px solid greenyellow;
  border-top: 2px solid greenyellow ;


  img {
    max-width: 90px;
    border-radius: 10px;
    margin-right: 1.5rem;
    filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.3));

  }

  h3 {
    font-size: 19px;
    font-weight: bold;
    color: #1E1E1E;
  }

  p {
    color: #666;
    font-weight: 300;
  }

  &:hover {
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2); 
  }
  @media (max-width: 768px) {
    margin-top: 2rem;
    max-width: 320px;
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


