import React from 'react';
import styled from "styled-components";

const Title = styled.div`
  color: ${props => props.theme.accentColor};
`

const Coins = () => (
    <Title>Coins</Title>
);

export default Coins;