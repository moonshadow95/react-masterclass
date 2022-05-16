import React from 'react'
import {useRecoilValue} from "recoil"
import CreateToDo from "./CreateToDo"
import {toDoSelector,} from "../atom"
import ToDoItem from "./ToDoItem";
import SelectCategory from "./SelectCategory";
import CreateCategory from "./CreateCategory";

const ToDoList = () => {
    const toDos = useRecoilValue(toDoSelector)
    console.log(toDos)
    return (
        <div>
            <h1>To Do List</h1>
            <hr/>
            <CreateCategory/>
            <SelectCategory/>
            <CreateToDo/>
            <ul>
                {toDos.map((toDo) =>
                    <ToDoItem key={toDo.id} {...toDo}/>
                )}
            </ul>
        </div>
    )
};

export default ToDoList;
