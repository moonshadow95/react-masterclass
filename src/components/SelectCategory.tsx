import React from 'react';
import {useRecoilState, useRecoilValue} from "recoil";
import {Categories, categoriesState, Category, categoryState, ToDo, toDoSelector, toDoState} from "../atom";
import {saveCategories, saveToDos} from "../localStorage";

const SelectCategory = () => {
    const [category, setCategory] = useRecoilState(categoryState)
    const [categories, setCategories] = useRecoilState(categoriesState)
    const [toDos, setToDos] = useRecoilState(toDoState)
    const selectedToDos = useRecoilValue(toDoSelector)
    const onInput = (event: React.FormEvent<HTMLSelectElement>) => {
        setCategory(event.currentTarget.value as Categories)
    }
    const onClick = () => {
        // 클릭하면 현재 카테고리와 항목 모두 삭제
        const newCategories = [...categories].filter((item: Category) => item + '' !== category)
        const newToDos: ToDo[] = []
        toDos.map((item: any) => {
            const toDosCategory = item["category"]
            if (toDosCategory === category) return
            newToDos.push(item)
        })
        setToDos(newToDos)
        saveToDos(newToDos)
        setCategories(newCategories)
        saveCategories(newCategories)
        setCategory(Categories.TO_DO)
    }
    return (
        <>
            <select value={category} onInput={onInput}>
                {
                    categories.map(
                        (category: string, index: number) =>
                            <option key={index} value={category}>{category}</option>
                    )
                }
            </select>
            {(category !== Categories.TO_DO) && (category !== Categories.DOING) && (category !== Categories.DONE) &&
            <button onClick={onClick}>Delete Category</button>
            }
        </>
    )
};

export default SelectCategory;
