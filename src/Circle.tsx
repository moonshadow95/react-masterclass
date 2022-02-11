import React from 'react';
import styled from 'styled-components';

interface ContainerProps {
    bgColor: string
    borderColor: string
}

interface CircleProps {
    bgColor: string
    borderColor?: string
    text?: string
}

const Container = styled.div<ContainerProps>`
  display: inline-block;
  width: 200px;
  height: 200px;
  border-radius: 50%;
  background-color: ${props => props.bgColor};
  border: 4px solid ${props => props.borderColor};
`

const Circle = ({bgColor, borderColor, text = 'default text'}: CircleProps) => (
    <Container bgColor={bgColor} borderColor={borderColor ?? bgColor}>
        {text}
    </Container>
);

export default Circle;