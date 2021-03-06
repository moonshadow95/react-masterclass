import {IToDoState} from "./atoms";

export const loadToDos = () => {
    const localToDos = localStorage.getItem('toDos')
    if (localToDos) {
        return JSON.parse(localToDos)
    }
    return null
}

export const saveToDos = (toDos: IToDoState) => {
    localStorage.setItem('toDos', JSON.stringify(toDos))
}