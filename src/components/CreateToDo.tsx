import React from 'react'
import {useForm} from "react-hook-form"
import {Categories, toDoState} from "../atom"
import {useSetRecoilState} from "recoil"
import {loadToDos, saveToDos} from "../localStorage";

interface Form {
    toDo: string
}

const CreateToDo = () => {
    const setToDos = useSetRecoilState(toDoState)
    const {register, handleSubmit, setValue} = useForm<Form>()
    const handleValid = ({toDo}: Form) => {
        setToDos((prevToDos) => [
            {id: Date.now(), text: toDo, category: Categories.TO_DO}, ...prevToDos
        ])
        saveToDos([{id: Date.now(), text: toDo, category: Categories.TO_DO}, ...loadToDos()])
        setValue("toDo", "")
    }
    return (
        <form onSubmit={handleSubmit(handleValid)}>
            <input
                type="text"
                {...register("toDo", {required: true})}
                placeholder={'Write a to do'}
            />
            <button>Add</button>
        </form>
    )
};

export default CreateToDo;