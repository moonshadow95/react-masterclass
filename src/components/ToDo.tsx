import React from 'react';
import {IToDo} from "../atoms";

const ToDo = ({id, text, category}: IToDo) => {
    const onClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        const {currentTarget: {name}} = event
    }
    return (
        <li>
            <span>{text}</span>
            {category !== "TO_DO" && <button name="TO_DO" onClick={onClick}>ToDo</button>}
            {category !== "DOING" && <button name="DOING" onClick={onClick}>Doing</button>}
            {category !== "DONE" && <button name="DONE" onClick={onClick}>DONE</button>}
        </li>

    );
}

export default ToDo;