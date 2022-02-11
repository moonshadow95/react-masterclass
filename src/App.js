import styled from 'styled-components'

const Father = styled.div`
  display: flex
`
const Box = styled.div`
background-color: ${props=>props.bgColor};
  width: 100px;
  height: 100px;
`

function App() {
    return (
        <div className="App">
            <Father>
                <Box bgColor="teal"/>
                <Box bgColor="tomato"/>
            </Father>
        </div>
    );
}

export default App;
