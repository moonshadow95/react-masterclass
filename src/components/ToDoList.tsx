import React, {useState} from 'react'
import {useForm} from 'react-hook-form'
import {atom, useRecoilState, useRecoilValue, useSetRecoilState} from "recoil";

interface IForm {
    toDo: string
}

interface IToDo {
    id: number
    text: string
    category: "DONE" | "DOING" | "TO_DO"
}

const toDoState = atom<IToDo[]>({
    key: 'toDo',
    default: []
})

const ToDoList = () => {
    // atom으로부터 값 불러오기
    // const value = useRecoilValue(toDoState)
    // 불러온 값 변경하기
    // const modFn = useSetRecoilState(toDoState)

    // 한줄로 사용하기 setState와 닮았다.
    const [toDos, setToDos] = useRecoilState(toDoState)
    const {register, handleSubmit, formState: {errors}, setValue} = useForm<IForm>()
    const handleValid = ({toDo}: IForm) => {
        setToDos((oldToDos) => [{id: Date.now(), text: toDo, category: "TO_DO"}, ...oldToDos])
        setValue('toDo', "")
    }
    return (
        <div>
            <h1>To Dos</h1>
            <hr/>
            <form onSubmit={handleSubmit(handleValid)}>
                <input {...register('toDo', {
                    required: "Write a to do!"
                })} type="text" placeholder='Write a To Do'/>
                <span>{errors?.toDo?.message}</span>
                <button>Add</button>
            </form>
            <ul>
                {toDos.map(toDo => <li key={toDo.id}>{toDo.text}</li>)}
            </ul>
        </div>
    )
};

export default ToDoList;