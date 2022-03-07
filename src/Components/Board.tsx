import React from 'react';
import DraggableCard from "./DraggableCard";
import {Droppable} from "react-beautiful-dnd";
import styled from "styled-components";

const Title = styled.h1`
  text-align: center;
  font-size: 1.2rem;
  font-weight: 600;
  padding: 10px 0;
  color: white
`

const Wrapper = styled.div`
  border-radius: 5px;
  background-color: ${props => props.theme.boardColor};
  display: flex;
  flex-direction: column;
`

const Area = styled.div<IAreaProps>`
  background-color: ${props => props.isDraggingOver ? "#546de5" : props.isDraggingFromThis ? "#596275" : '#303952'};
  flex-grow: 1;
  transition: background-color 150ms ease-in-out;
  padding: 20px;
`

interface IBoardProps {
    toDos: string[]
    boardId: string
}

interface IAreaProps {
    isDraggingOver: boolean
    isDraggingFromThis: boolean
}

const Board = ({toDos, boardId}: IBoardProps) => {
    return (
        <Wrapper>
            <Title>{boardId}</Title>
            <Droppable droppableId={boardId}>
                {(provided, snapShot) =>
                    <Area isDraggingOver={snapShot.isDraggingOver}
                          isDraggingFromThis={Boolean(snapShot.draggingFromThisWith)} {...provided.droppableProps}
                          ref={provided.innerRef}>
                        {toDos.map((toDo, index) =>
                            <DraggableCard key={toDo} toDo={toDo} index={index}/>
                        )}
                        {provided.placeholder}
                    </Area>
                }
            </Droppable>
        </Wrapper>
    )
}

export default Board;