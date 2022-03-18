import React from 'react';
import DraggableCard from "./DraggableCard";
import {Draggable, Droppable} from "react-beautiful-dnd";
import styled from "styled-components";
import {useForm} from "react-hook-form";
import {IToDo, toDoState} from "../Util/atoms";
import {useSetRecoilState} from "recoil";
import {saveToDos} from "../Util/localStorage";

const Title = styled.h1`
  padding: 14px 0 10px;
  text-align: center;
  font-size: 32px;
  font-weight: 600;
  color: white;
`

const Wrapper = styled.div`
  border-radius: 5px;
  background-color: ${props => props.theme.boardColor};
  display: flex;
  flex-direction: column;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.5);
`

const Area = styled.div<IAreaProps>`
  background-color: ${props => props.isDraggingOver ? "#f5cd79" : props.isDraggingFromThis ? "#dadada" : '#b0b9e7'};
  flex-grow: 1;
  transition: background-color 150ms ease-in-out;
  padding: 20px;
  min-height: 400px;
`

const Form = styled.form`
  position: relative;

  input {
    font-size: 18px;
    width: 100%;
    padding: 10px 10px;
    border: none;

    &:focus {
      outline: 3px solid #f5cd79
    }
  }
`

const ErrorMessage = styled.span`
  position: absolute;
  top: -100px;
  left: 50%;
  transform: translateX(-50%);
  color: #e66767;
  font-weight: 600;
  font-size: 1.2em;
`

interface IBoardProps {
    toDos: IToDo[]
    boardId: string
    index: number
}

interface IAreaProps {
    isDraggingOver: boolean
    isDraggingFromThis: boolean
}

interface IForm {
    toDo: string
}

const Board = ({toDos, boardId, index}: IBoardProps) => {
    const setToDos = useSetRecoilState(toDoState)
    const {register, setValue, handleSubmit, formState: {errors}} = useForm<IForm>()
    const onValid = ({toDo}: IForm) => {
        const newToDo = {
            id: Date.now(),
            text: toDo
        }
        setToDos(allBoards => {
            saveToDos({...allBoards, [boardId]: [newToDo, ...allBoards[boardId]]})
            return {...allBoards, [boardId]: [newToDo, ...allBoards[boardId]]}
        })
        setValue("toDo", "")

    }

    return (
        // <Draggable draggableId={boardId+""} index={index}>
        //     {(provided,snapShot) =>
        <Wrapper
            // ref={provided.innerRef}  {...provided.draggableProps}
        >
            <Title>{boardId}</Title>
            <Form onSubmit={handleSubmit(onValid)}>
                <input {...register('toDo', {
                    required: true,
                    maxLength: {value: 25, message: "It's too long."}
                })}
                       type="text" placeholder={`Add task on ${boardId}`}/>
                <ErrorMessage>{errors?.toDo?.message}</ErrorMessage>
            </Form>
            <Droppable droppableId={boardId}>
                {(provided, snapShot) =>
                    <Area isDraggingOver={snapShot.isDraggingOver}
                          isDraggingFromThis={Boolean(snapShot.draggingFromThisWith)} {...provided.droppableProps}
                          ref={provided.innerRef}>
                        {toDos.map((toDo, index) =>
                            <DraggableCard
                                key={toDo.id}
                                toDoId={toDo.id}
                                toDoText={toDo.text}
                                index={index}/>
                        )}
                        {provided.placeholder}
                    </Area>
                }
            </Droppable>
        </Wrapper>
// }
// </Draggable>
    )
}

export default Board;