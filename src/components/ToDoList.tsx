import React, {useState} from 'react'
import CreateToDo from "./CreateToDo";
import {useRecoilValue} from "recoil";
import {toDoState} from "../atoms";
import ToDo from "./ToDo";

const ToDoList = () => {
    const toDos = useRecoilValue(toDoState)
    return (
        <div>
            <h1>To Dos</h1>
            <hr/>
            <CreateToDo/>
            <ul>
{/*toDos 배열의 원소 하나 하나가 ToDo 컴포넌트에 필요한 props와 같은 인터페이스를 가지기 때문에 이렇게 쓸 수 있다.*/}
                {toDos.map(toDo => <ToDo key={toDo.id} {...toDo}/>)}
            </ul>
        </div>
    )
};

export default ToDoList;