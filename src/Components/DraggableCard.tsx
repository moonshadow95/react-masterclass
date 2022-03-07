import React from 'react';
import {Draggable} from "react-beautiful-dnd";
import styled from "styled-components";

interface IDraggableCardProps {
    toDo: string
    index: number
}


const Card = styled.div`
  background-color: ${props => props.theme.cardColor};
  padding: 5px;
  border-radius: 5px;
  margin-bottom: 5px;
`


const DraggableCard = ({toDo, index}: IDraggableCardProps) => {
    return (
        <Draggable key={toDo} draggableId={toDo} index={index}>
            {(provided) =>
                <Card {...provided.dragHandleProps} {...provided.draggableProps}
                      ref={provided.innerRef}>{toDo}</Card>}
        </Draggable>
    );
}
export default React.memo(DraggableCard);