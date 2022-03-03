import React from 'react';
import {IToDo} from "../atoms";

const ToDo = ({text}: IToDo) => {
    return (
        <li>
            <span>{text}</span>
            <button>ToDo</button>
            <button>Doing</button>
            <button>DONE</button>
        </li>

    );
}

export default ToDo;