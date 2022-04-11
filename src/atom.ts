import {atom, selector} from "recoil";
import {loadToDos, saveToDos} from "./localStorage";

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

export const categoryState = atom<Categories>({
    key: 'category',
    default: Categories.TO_DO
})

export const toDoState = atom<ToDo[]>({
    key: 'toDo',
    default: loadToDos() || []
})

export const toDoSelector = selector({
    key: 'toDoSelector',
    get: ({get}) => {
        const toDos = get(toDoState)
        const category = get(categoryState)
        return toDos.filter(toDo => toDo.category === category)
    }
})