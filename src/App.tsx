import React from 'react';
import {DragDropContext, Draggable, Droppable, DropResult} from "react-beautiful-dnd";
import styled from "styled-components";
import {useRecoilState, useRecoilValue} from "recoil";
import {toDoState} from "./atoms";

const Wrapper = styled.div`
  display: flex;
  max-width: 480px;
  width: 100%;
  margin: 0 auto;
  justify-content: center;
  align-items: center;
  height: 100vh;
`

const Boards = styled.div`
  display: grid;
  width: 100%;
`

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

function App() {
    const [toDos, setToDos] = useRecoilState(toDoState)
    // destination 목적지, source 움직인 아이템
    // source를 삭제하고 destination 위치에 넣는다.
    const onDragEnd = ({draggableId, destination, source}: DropResult) => {
        if (!destination) return
        setToDos(oldToDos => {
                const toDosCopy = [...oldToDos]
                // 1) Delete item on source.index
                toDosCopy.splice(source.index, 1)
                // 2) Put it back on the destination.index
                toDosCopy.splice(destination?.index, 0, draggableId)
                return toDosCopy
            }
        )
    }
    return (
        <>
            <DragDropContext onDragEnd={onDragEnd}>
                <Wrapper>
                    <Boards>
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
                    </Boards>
                </Wrapper>
            </DragDropContext>
        </>
    )
        ;
}

export default App;
