import React from 'react';
import {IToDo, toDoState} from "../atoms";
import {useSetRecoilState} from "recoil";

const ToDo = ({id, text, category}: IToDo) => {
    const setToDos = useSetRecoilState(toDoState)
    const onClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        const {currentTarget: {name}} = event
        setToDos(prevDoTos => {
            const targetIndex = prevDoTos.findIndex(todo => todo.id === id)
            const newToDo = {id, text, category: name as IToDo['category']}
            const newToDos = [...prevDoTos]
            newToDos.splice(targetIndex, 1, newToDo)
            return newToDos
        })
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