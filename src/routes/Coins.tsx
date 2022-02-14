import React, {useEffect, useState} from 'react';
import styled from "styled-components";
import {Link} from "react-router-dom";

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

const CoinList = styled.ul``

const Coin = styled.li`
  background-color: white;
  color: ${props => props.theme.bgColor};
  border-radius: 15px;
  margin-bottom: 10px;
  font-size: 24px;

  a {
    transition: color 150ms ease-in;
    display: block;
    padding: 20px;

    &:hover {
      color: ${props => props.theme.accentColor}
    }
  }
`

const Title = styled.div`
  font-size: 48px;
  color: ${props => props.theme.accentColor};
`

interface CoinInterface {
    "id": string,
    "name": string,
    "symbol": string,
    "rank": number,
    "is_new": boolean,
    "is_active": boolean,
    "type": string
}

const Coins = () => {
    const [coins, setCoins] = useState<CoinInterface[]>([])
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        (async () => {
            const response = await fetch("https://api.coinpaprika.com/v1/coins")
            const json = await response.json();
            setCoins(json.slice(0, 99))
            setLoading(false)
        })()
    }, []);
    console.log(coins)

    return (
        <Container>
            <Header>
                <Title>Coin</Title>
            </Header>
            {loading ? "Loading..." :
                (<CoinList>
                    {coins.map(coin =>
                        <Coin key={coin.id}>
                            <Link to={`/${coin.id}`}>{coin.name} &rarr;</Link>
                        </Coin>)
                    }
                </CoinList>)}
        </Container>
    );
}

export default Coins;