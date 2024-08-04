// import styled from 'styled-components';

// export const ModalContainer = styled.div`
//     padding: 20px 0px;
//     display: flex;
//     align-items: center;
//     text-align: center;
//     justify-content: center;
//     color: white;
//     background-color: green;
//     position: fixed;
//     bottom: 0;
//     width: 100%;
//     transition: all 0.5s ease-out;
//     transform: translateY(200%);
//     -webkit-transform: translateY(200%);
//     -moz-transform: translateY(200%);
//     -ms-transform: translateY(200%);
//     -o-transform: translateY(200%);
//     z-index: 1;
//     box-sizing: border-box;

//     .addModal {
//         display: flex;
//         justify-content: center;
//         align-items: center;
//         text-align: center;
//         width: 100%;
//     }

//     &.activeModal {
//         transform: translateY(0);
//         transition: all 0.5s ease-in;
//         text-align: center;
//         width: 100%;
//     }
// `;

// export const ModalContent = styled.div`
//     font-weight: 700;
//     font-size: 1rem;
// `;


import styled from 'styled-components';

export const ModalContainer = styled.div`
    padding: 20px 0;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    background-color: green;
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    width: 100%;
    transition: all 0.5s ease-out;
    transform: translateY(200%);
    z-index: 1;
    box-sizing: border-box;

    &.activeModal {
        transform: translateY(0);
        transition: all 0.5s ease-in;
    }
`;

export const ModalContent = styled.div`
    font-weight: 700;
    font-size: 1rem;
    text-align: center;
`;
