import styled, {keyframes} from 'styled-components'

const Wrapper = styled.div`
  display: flex;
`

const rolling = keyframes`
  0% {
    transform: rotate(0deg)
  }
  50% {
    transform: rotate(180deg);
    border-radius: 50%;
  }
  100% {
    transform: rotate(360deg);
    border-radius: 0;
  }
`

const Emoji = styled.span`
  font-size:100px;
`

const Box = styled.div`
  width: 200px;
  height: 200px;
  background-color: teal;
  animation: ${rolling} 1s linear infinite;
  display: flex;
  align-items: center;
  justify-content: center;

  ${Emoji} {
    font-size: 100px;

    &:hover {
      font-size: 50px;
    }
  }
`

function App() {
    return (
        <div className="App">
            <Wrapper>
                <Box>
                    <Emoji>😍</Emoji>
                </Box>
                <Emoji>😍</Emoji>
            </Wrapper>
        </div>
    );
}

export default App;
