import styled from 'styled-components';
import { motion } from 'framer-motion';

export const ButtonSubmitStyled = styled(motion.button)`
   padding: 10px 20px;
  font-size: 12px;
  background-color: var( --btn-Background);

  border: 1px solid black;
  border-radius: 10px;
  cursor: pointer;
  color: black;
  filter: drop-shadow(3px 3px 5px rgba(0, 0, 0, 0.2));
  font-size: 1.2rem;
  font-weight: 400;
  margin-top: 1rem;
  margin-bottom: 3rem;

  &:disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }
`;