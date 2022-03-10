import {atom} from "recoil";
import {loadToDos} from "./localStorage";

export interface IToDo {
    id: number
    text: string
}

export interface IToDoState {
    [key: string]: IToDo[]
}

const defaultToDos: IToDoState = {
    "To Do 😏": [],
    "Doing 🤔": [],
    "Done 😆": []
}

export const toDoState = atom<IToDoState>({
    key: "toDo",
    default: loadToDos() || defaultToDos
})
