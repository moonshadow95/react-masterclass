import React from 'react'
import {Categories, categoriesState, Category, ToDo, toDoState} from "../atom"
import {useRecoilValue, useSetRecoilState} from "recoil"
import {loadToDos, saveToDos} from "../localStorage";

const ToDoItem = ({id, text, category}: ToDo) => {
    const toDos = useRecoilValue(toDoState)
    const setToDos = useSetRecoilState(toDoState)
    const categories = useRecoilValue(categoriesState).filter((item: string) => item !== category)
    const onClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        const {
            currentTarget: {name}
        } = event
        setToDos((prevToDos) => {
            const targetIndex = prevToDos.findIndex((toDo) => toDo.id === id)
            const newToDo = {id, text, category: name as any}
            saveToDos([
                ...prevToDos.slice(0, targetIndex),
                newToDo,
                ...prevToDos.slice(targetIndex + 1)
            ])
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
    // 카테고리들을 가져와서, 현재 카테고리를 제외한 배열, map 으로 버튼 표시
    return (
        <li>
            <span>{text}</span>
            {categories.map((category: Category, index: number) =>
                <button key={index} name={category + ''} onClick={onClick}>{category}</button>
            )}
            <button name={category} onClick={onDeleteClick}>Delete</button>
        </li>
    )
};

export default ToDoItem;
