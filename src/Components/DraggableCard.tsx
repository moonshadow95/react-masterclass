import React from 'react';
import {Draggable, Droppable} from "react-beautiful-dnd";
import styled from "styled-components";
import {useRecoilState} from "recoil";
import {toDoState} from "../atoms";


const Board = styled.div`
  padding: 20px 10px;
  border-radius: 5px;
  background-color: ${props => props.theme.boardColor};
`

const Card = styled.div`
  background-color: ${props => props.theme.cardColor};
  padding: 5px;
  border-radius: 5px;
  margin-bottom: 5px;
`

const DragabbleCard = () => {
    const [toDos, setToDos] = useRecoilState(toDoState)

    return (
        <Droppable droppableId='1'>
            {(provided) =>
                <Board {...provided.droppableProps} ref={provided.innerRef}>
                    {toDos.map((toDo, index) => <Draggable key={toDo} draggableId={toDo} index={index}>
                        {(provided) =>
                            <Card {...provided.dragHandleProps} {...provided.draggableProps}
                                  ref={provided.innerRef}>{toDo}</Card>}
                    </Draggable>)}
                    {provided.placeholder}
                </Board>
            }
        </Droppable>
    )
}

export default DragabbleCard;