import React from 'react';
import {useForm} from "react-hook-form";
import {useRecoilState} from "recoil";
import {categoriesState} from "../atom";
import {saveCategories} from "../localStorage";

interface Category {
    category: string
}

const CreateCategory = () => {
    const {register, handleSubmit, setValue} = useForm<Category>()
    const [categories, setCategories] = useRecoilState(categoriesState)
    const handleValid = ({category}: Category) => {
        setCategories((prevCategories: any) => {
            saveCategories([category, ...prevCategories])
            return [category, ...prevCategories]
        })
        setValue('category', '')
    }
    console.log(categories)

    return (
        <>
            <h2>Create your own category!</h2>
            <form onSubmit={handleSubmit(handleValid)}>
                <input
                    type="text"
                    {...register('category', {required: true})}
                    placeholder='Write category name.'
                />
                <button>Add</button>
            </form>
        </>
    )
};

export default CreateCategory;