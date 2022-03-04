import React from 'react';
import {Categories, IToDo, toDoState} from "../atoms";
import {useSetRecoilState} from "recoil";

const ToDo = ({id, text, category}: IToDo) => {
    const setToDos = useSetRecoilState(toDoState)
    const onClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        const {currentTarget: {name}} = event
        setToDos(prevDoTos => {
            const targetIndex = prevDoTos.findIndex(todo => todo.id === id)
            const newToDo = {id, text, category: name as any}
            const newToDos = [...prevDoTos]
            newToDos.splice(targetIndex, 1, newToDo)
            return newToDos
        })
    }
    return (
        <li>
            <span>{text}</span>
            {category !== Categories.TO_DO && <button name={Categories.TO_DO + ''} onClick={onClick}>ToDo</button>}
            {category !== Categories.DOING && <button name={Categories.DOING + ''} onClick={onClick}>Doing</button>}
            {category !== Categories.DONE && <button name={Categories.DONE + ''} onClick={onClick}>DONE</button>}
        </li>

    );
}

export default ToDo;