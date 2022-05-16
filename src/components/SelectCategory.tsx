import React from 'react';
import {useRecoilState, useRecoilValue} from "recoil";
import {Categories, categoriesState, categoryState} from "../atom";

const SelectCategory = () => {
    const [category, setCategory] = useRecoilState(categoryState)
    const categories = useRecoilValue(categoriesState)
    const onInput = (event: React.FormEvent<HTMLSelectElement>) => {
        setCategory(event.currentTarget.value as Categories)
    }
    return (
        <select value={category} onInput={onInput}>
            {
                categories.map(
                    (category: string, index: number) =>
                        <option key={index} value={category}>{category}</option>
                )
            }
        </select>
    )
};

export default SelectCategory;
