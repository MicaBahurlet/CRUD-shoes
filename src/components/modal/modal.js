import styled from 'styled-components';

export const StyledComponentContainer = styled.div`
    padding: ${(props) => props.padding || '15px 0px'};
    background-color: ${(props) => props.backgroundColor || '#00A97F'};
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    position: fixed;
    bottom: 0;
    width: 100%;
    transition: all 0.5s ease-out;
    transform: translateY(200%);
    -webkit-transform: translateY(200%);
    -moz-transform: translateY(200%);
    -ms-transform: translateY(200%);
    -o-transform: translateY(200%);

    &.activeModal {
        transform: translateY(0);
        transition: all 0.5s ease-in;
    }
`;
