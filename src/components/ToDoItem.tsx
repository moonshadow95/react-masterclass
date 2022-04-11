import React from 'react'
import {Categories, ToDo, toDoState} from "../atom"
import {useRecoilValue, useSetRecoilState} from "recoil"
import {loadToDos, saveToDos} from "../localStorage";

const ToDoItem = ({id, text, category}: ToDo) => {
    const toDos = useRecoilValue(toDoState)
    const setToDos = useSetRecoilState(toDoState)
    const onClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        const {
            currentTarget: {name}
        } = event
        setToDos((prevToDos) => {
            const targetIndex = prevToDos.findIndex((toDo) => toDo.id === id)
            const newToDo = {id, text, category: name as any}
            return [
                ...prevToDos.slice(0, targetIndex),
                newToDo,
                ...prevToDos.slice(targetIndex + 1)
            ]
        })
    }
    const onDeleteClick = () => {
        setToDos((prevToDos) => {
            const targetIndex = prevToDos.findIndex((toDo) => toDo.id === id)
            saveToDos([...prevToDos.slice(0, targetIndex), ...prevToDos.slice(targetIndex + 1)])
            return [...prevToDos.slice(0, targetIndex), ...prevToDos.slice(targetIndex + 1)]
        })
    }
    return (
        <li>
            <span>{text}</span>
            {
                category !== Categories.TO_DO &&
                <button name={Categories.TO_DO} onClick={onClick}>To Do</button>
            }
            {
                category !== Categories.DOING &&
                <button name={Categories.DOING} onClick={onClick}>Doing</button>
            }
            {
                category !== Categories.DONE &&
                <button name={Categories.DONE} onClick={onClick}>Done</button>
            }
            <button onClick={onDeleteClick}>Delete</button>
        </li>
    )
};

export default ToDoItem;