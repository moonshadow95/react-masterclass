import styled from 'styled-components'

const Input = styled.input.attrs({required: true, minLength: 10})`
background-color: teal;
`

function App() {
    return (
        <div className="App">
            <Input />
            <Input />
            <Input />
            <Input />
            <Input />
        </div>
    );
}

export default App;
