import React from 'react';
import styled from 'styled-components';

interface CircleProps {
    bgColor: string
}

const Container = styled.div<CircleProps>`
  display: inline-block;
  width: 200px;
  height: 200px;
  border-radius: 50%;
  background-color: ${props => props.bgColor}
`

const Circle = ({bgColor}: CircleProps) => (
    <Container bgColor={bgColor}/>
);

export default Circle;