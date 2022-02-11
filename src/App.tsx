import React from 'react';
import styled, {keyframes} from 'styled-components'

const Wrapper = styled.div`
  display: flex;
`

const Title = styled.h1`
  text-align: center;
  color:${props=>props.theme.textColor};
`

const Box = styled.div`
  width: 200px;
  height: 200px;
  display: flex;
  align-items: center;
  background-color:${props=>props.theme.backgroundColor}
`

function App() {
    return (
        <div className="App">
            <Wrapper>
                <Box>
                    <Title>Hello, Styled Component?</Title>
                </Box>
            </Wrapper>
        </div>
    );
}

export default App;
