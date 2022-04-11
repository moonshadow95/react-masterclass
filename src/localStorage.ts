import {ToDo} from "./atom";

export const loadToDos = () => {
    const localToDos = localStorage.getItem('toDos')
    if (localToDos) {
        return JSON.parse(localToDos)
    }
    return null
}

export const saveToDos = (toDos: ToDo[]) => {
    localStorage.setItem('toDos', JSON.stringify(toDos))
}
