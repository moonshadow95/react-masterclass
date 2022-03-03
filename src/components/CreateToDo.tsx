import React from 'react';
import {useRecoilState} from "recoil";
import {useForm} from "react-hook-form";
import {toDoState} from "../atoms";

interface IForm {
    toDo: string
}

const CreateToDo = () => {
    // atom으로부터 값 불러오기
    // const value = useRecoilValue(toDoState)
    // 불러온 값 변경하기
    // const modFn = useSetRecoilState(toDoState)
    // 한줄로 사용하기, setState와 닮았다.
    const [toDos, setToDos] = useRecoilState(toDoState)
    const {register, handleSubmit, formState: {errors}, setValue} = useForm<IForm>()
    const handleValid = ({toDo}: IForm) => {
        setToDos((oldToDos) => [{id: Date.now(), text: toDo, category: "TO_DO"}, ...oldToDos])
        setValue('toDo', "")
    }
    return (
        <form onSubmit={handleSubmit(handleValid)}>
            <input {...register('toDo', {
                required: "Write a to do!"
            })} type="text" placeholder='Write a To Do'/>
            <span>{errors?.toDo?.message}</span>
            <button>Add</button>
        </form>
    );
}

export default CreateToDo;