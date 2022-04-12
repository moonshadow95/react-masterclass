import React from 'react'
import {useForm} from "react-hook-form"
import {Categories, categoryState, toDoState} from "../atom"
import {useRecoilValue, useSetRecoilState} from "recoil"
import {loadToDos, saveToDos} from "../localStorage";

interface Form {
    toDo: string
}

const CreateToDo = () => {
    const setToDos = useSetRecoilState(toDoState)
    const category = useRecoilValue(categoryState)
    const {register, handleSubmit, setValue} = useForm<Form>()
    const handleValid = ({toDo}: Form) => {
        setToDos((prevToDos) => {
            saveToDos([{id: Date.now(), text: toDo, category: category}, ...prevToDos])
            return [
                {id: Date.now(), text: toDo, category}, ...prevToDos
            ]
        })
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