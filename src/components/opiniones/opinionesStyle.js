import styled from "styled-components";

export const RecomendadosWrapper = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 1200px;
  margin: 0 15px;
  font-family: var(--font-family);
  margin-bottom: 5rem;

  h2 {
    margin-bottom: 3rem;
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

  img:hover {
    transform: scale(1.2);
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

  width: 320px;

  padding: 2rem 0.5rem;

  background-color: var(--background-card);
  border-radius: 20px;
  cursor: pointer;
  font-family: 'Roboto', sans-serif;

  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border: 1px solid rgba(0, 0, 0, 0.1);

  flex-direction: row;
  text-align: left;
  font-family: var(--font-family);

  img {
    max-width: 100px;
    border-radius: 10px;
    margin-right: 2rem;
    filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.1));
    transition: transform 0.3s ease-in-out;
  }

  h3 {
    font-size: 1.2rem;
    font-weight: bold;
    color: black;
  }

  p {
    color: #666;

    font-weight: 700;
  }

  &:hover img {
    transform: scale(1.1);
  }
`;

export const InfoCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-family: var(--font-family);
`;



