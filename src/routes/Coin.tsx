import React, {useState} from 'react';
import {Link, useLocation, useParams} from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  padding: 0 20px;
  max-width: 480px;
  margin: 0 auto;
`

const Header = styled.header`
  height: 10vh;
  display: flex;
  justify-content: center;
  align-items: center;
`

const Title = styled.div`
  font-size: 48px;
  color: ${props => props.theme.accentColor};
`

const Loader = styled.span`
  font-size: 32px;
  color: ${props => props.theme.accentColor};
`

interface RouteState {
    state: {
        name: string
    }
}

const Coin = () => {
    const [loading, setLoading] = useState(true)
    const {coinId} = useParams()
    const {state} = useLocation() as RouteState
    return (
        <Container>
            <Header>
                <Title>{state?.name || "Loaing..."}</Title>
            </Header>
            {loading ?
                <Loader>Loading...</Loader> : null
            }
        </Container>
    )
}
export default Coin;
