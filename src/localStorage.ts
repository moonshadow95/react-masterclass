import {Category, ToDo} from "./atom";

export function loadToDos() {
    const localToDos = localStorage.getItem('toDos')
    if (localToDos) {
        return JSON.parse(localToDos)
    }
    return null
}

export function saveToDos(toDos: ToDo[]) {
    localStorage.setItem('toDos', JSON.stringify(toDos))
}

export function loadCategories() {
    const localCategories = localStorage.getItem('categories')
    if (localCategories) {
        return JSON.parse(localCategories)
    }
    return null
}

export function saveCategories(categories: Category[]) {
    localStorage.setItem('categories', JSON.stringify(categories))
}