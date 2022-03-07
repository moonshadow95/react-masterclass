import React from 'react';
import DraggableCard from "./DraggableCard";
import {Droppable} from "react-beautiful-dnd";
import styled from "styled-components";

const Title = styled.h1`
  text-align: center;
  font-size: 1.1rem;
  font-weight: 600;
  padding: 15px;
`

const Wrapper = styled.div`
  padding: 0px 20px 10px;
  border-radius: 5px;
  background-color: ${props => props.theme.boardColor};
`

interface IBoardProps {
    toDos: string[]
    boardId: string
}

const Board = ({toDos, boardId}: IBoardProps) => {
    return (
        <Wrapper>
            <Title>{boardId}</Title>
            <Droppable droppableId={boardId}>
                {(provided) =>
                    <div {...provided.droppableProps} ref={provided.innerRef}>
                        {toDos.map((toDo, index) =>
                            <DraggableCard key={toDo} toDo={toDo} index={index}/>
                        )}
                        {provided.placeholder}
                    </div>
                }
            </Droppable>
        </Wrapper>
    )
}

export default Board;