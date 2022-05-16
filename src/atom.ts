import {atom, selector} from "recoil";
import {loadCategories, loadToDos} from "./localStorage";

export enum Categories {
    "TO_DO" = "TO_DO",
    "DOING" = "DOING",
    "DONE" = "DONE"
}


export interface ToDo {
    id: number
    text: string
    category: Categories
}

export interface Category {
    text: string
}

export const categoriesState = atom({
    key: 'categories',
    default: loadCategories() || [Categories.TO_DO, Categories.DOING, Categories.DONE]
})

// Selected category
export const categoryState = atom<Categories>({
    key: 'category',
    default: Categories.TO_DO
})

export const toDoState = atom<ToDo[]>({
    key: 'toDo',
    default: loadToDos() || []
})

// Get current category's toDos
export const toDoSelector = selector({
    key: 'toDoSelector',
    get: ({get}) => {
        const toDos = get(toDoState)
        const category = get(categoryState)
        return toDos.filter(toDo => toDo.category === category)
    }
})
