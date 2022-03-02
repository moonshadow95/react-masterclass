import React, {useState} from 'react'
import {useForm} from 'react-hook-form'

interface IForm {
    email: string
    firstName: string
    lastName: string
    username: string
    password: string
    password1: string
}

const ToDoList = () => {
    // const [todo, setTodo] = useState("")
    // const onChange = (event: React.FormEvent<HTMLInputElement>) => {
    //     const {
    //         currentTarget: {value}
    //     } = event
    //     setTodo(value)
    // }
    // const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    //     event.preventDefault()
    // }
    // return (
    //     <div>
    //         <form action="" onSubmit={onSubmit}>
    //             <input type="text" placeholder='Write a to do' onChange={onChange}/>
    //             <button>Add</button>
    //         </form>
    //     </div>
    // )
    const {register, watch, handleSubmit, formState: {errors}} = useForm<IForm>({
        defaultValues: {
            email: "@naver.com"
        }
    })
    const onValid = (data: any) => {
        console.log(data)
    }
    return (
        <div>
            <form
                style={{display: "flex", flexDirection: "column", width: '200px', gap: '4px'}}
                onSubmit={handleSubmit(onValid)}
            >
                <input
                    {...register("email", {
                        required: "Email is required",
                        pattern: {
                            value: /^[A-Za-z0-9._%+-]+@naver.com$/,
                            message: "Only naver.com emails allowed",
                        },
                    })}
                    placeholder="Email"
                />
                <span>{errors?.email?.message}</span>
                <input
                    {...register("firstName", {required: "write here"})}
                    placeholder="First Name"
                />
                <span>{errors?.firstName?.message}</span>
                <input
                    {...register("lastName", {required: "write here"})}
                    placeholder="Last Name"
                />
                <span>{errors?.lastName?.message}</span>
                <input
                    {...register("username", {required: "write here", minLength: 10})}
                    placeholder="Username"
                />
                <span>{errors?.username?.message}</span>
                <input
                    {...register("password", {required: "write here", minLength: 5})}
                    placeholder="Password"
                />
                <span>{errors?.password?.message}</span>
                <input
                    {...register("password1", {
                        required: "Password is required",
                    })}
                    placeholder="Password1"
                />
                <span>{errors?.password1?.message}</span>
                <button>Add</button>
            </form>
        </div>
    )
};

export default ToDoList;