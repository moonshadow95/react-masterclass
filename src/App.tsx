import React from 'react';
import {DragDropContext, Droppable, DropResult} from "react-beautiful-dnd";
import styled from "styled-components";
import {useRecoilState, useRecoilValue} from "recoil";
import {toDoState} from "./atoms";
import DraggableCard from "./Components/DragabbleCard";

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
                                    {toDos.map((toDo, index) =>
                                        <DraggableCard key={toDo} toDo={toDo} index={index}/>
                                    )}
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
