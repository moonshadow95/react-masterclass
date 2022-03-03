import React, {useState} from 'react'
import {useForm} from 'react-hook-form'

interface IForm {
    toDo: string
}

const ToDoList = () => {
    const {register, handleSubmit, formState: {errors}, setValue} = useForm<IForm>()
    const handleValid = (data: IForm) => setValue('toDo', "")
    return (
        <div>
            <form onSubmit={handleSubmit(handleValid)}>
                <input {...register('toDo', {
                    required: "Write a to do!"
                })} type="text" placeholder='Write a To Do'/>
                <span>{errors?.toDo?.message}</span>
                <button>Add</button>
            </form>
        </div>
    )
};

export default ToDoList;