import React from 'react';
import { StyledComponentContainer } from './StyledComponentStyles';

const CustomComponent = ({ padding, backgroundColor, children }) => {
    return (
        <StyledComponentContainer padding={padding} backgroundColor={backgroundColor} className="activeModal">
            {children}
        </StyledComponentContainer>
    );
};

export default CustomComponent;
