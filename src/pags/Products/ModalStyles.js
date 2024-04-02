import styled from 'styled-components';

export const ModalContainer = styled.div`
    padding: 20px 0px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white; 
     background-color: black;
    /* background-image: linear-gradient(to top, #c1dfc4 0%, #deecdd 100%);
    color: black; */
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

    &.activeModal {
        transform: translateY(0);
        transition: all 0.5s ease-in;
    }
`;

export const ModalContent = styled.div`
    font-weight: 700;
    font-size: 1rem;
`;
