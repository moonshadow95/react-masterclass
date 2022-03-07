import React from 'react';
import {Draggable} from "react-beautiful-dnd";
import styled from "styled-components";

interface IDraggableCardProps {
    toDo: string
    index: number
}


const Card = styled.div<{ isDragging: boolean }>`
  background-color: ${props => props.isDragging ? '#c8d6e5' : props.theme.cardColor};
  box-shadow: ${props => props.isDragging ? "0px 2px 5px rgba(0,0,0,0.5)" : 'none'};
  padding: 5px;
  border-radius: 5px;
  margin-bottom: 5px;
`


const DraggableCard = ({toDo, index}: IDraggableCardProps) => {
    return (
        <Draggable key={toDo} draggableId={toDo} index={index}>
            {(provided, snapShot) =>
                <Card isDragging={snapShot.isDragging} {...provided.dragHandleProps} {...provided.draggableProps}
                      ref={provided.innerRef}>{toDo}</Card>}
        </Draggable>
    );
}
export default React.memo(DraggableCard);