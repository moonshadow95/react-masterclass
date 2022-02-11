import React from 'react';
import Circle from "./Circle";


function App() {
    return (
        <div className="App">
            <Circle bgColor='cornflowerblue'/>
            <Circle bgColor='teal' borderColor='red' text='Hello?'/>
        </div>
    );
}

export default App;
