import styled from 'styled-components';

export const ModalContainer = styled.div`
    padding: 20px 0px;
    display: flex;
    align-items: center;
    text-align: center;
    justify-content: center;
    width: 100%;
    color: black;
    background-color: var( --btn-Background);
  
    position: fixed;
    bottom: 0;
    width: 100%;
    transition: all 0.5s ease-out;
    transform: translateY(200%);
    -webkit-transform: translateY(200%);
    -moz-transform: translateY(200%);
    -ms-transform: translateY(200%);
    -o-transform: translateY(200%);
    z-index: 1;
    box-sizing: border-box;

    .addModal {
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
        width: 100%;
    }

    &.activeModal {
        transform: translateY(0);
        transition: all 0.5s ease-in;
        text-align: center;
        width: 100%;
    }
`;

export const ModalContent = styled.div`
    font-weight: 700;
    font-size: 1rem;
`;


