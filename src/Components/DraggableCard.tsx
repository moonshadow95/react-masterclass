import React from 'react';
import {Draggable} from "react-beautiful-dnd";
import styled from "styled-components";

interface IDraggableCardProps {
    toDoId: number
    toDoText:string
    index: number
}


const Card = styled.div<{ isDragging: boolean }>`
  background-color: ${props => props.isDragging ? '#ededed' : props.theme.cardColor};
  box-shadow: ${props => props.isDragging ? "0px 2px 5px rgba(0,0,0,0.5)" : 'none'};
  padding: 10px;
  border-radius: 5px;
  margin-bottom: 5px;
  text-align: center;
`


const DraggableCard = ({toDoId, toDoText, index}: IDraggableCardProps) => {
    return (
        <Draggable key={toDoId} draggableId={toDoId+""} index={index}>
            {(provided, snapShot) =>
                <Card isDragging={snapShot.isDragging} {...provided.dragHandleProps} {...provided.draggableProps}
                      ref={provided.innerRef}>{toDoText}</Card>}
        </Draggable>
    );
}
export default React.memo(DraggableCard);