import React from 'react';
import {DragDropContext, DropResult} from "react-beautiful-dnd";
import styled from "styled-components";
import {useRecoilState, useRecoilValue} from "recoil";
import {toDoState} from "./atoms";
import Board from "./Components/Board";

const Wrapper = styled.div`
  display: flex;
  max-width: 700px;
  width: 100%;
  margin: 0 auto;
  justify-content: center;
  align-items: center;
  height: 100vh;
`

const Boards = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
  width: 100%;
`

function App() {
    const [toDos, setToDos] = useRecoilState(toDoState)
    // destination 목적지, source 움직인 아이템
    // source를 삭제하고 destination 위치에 넣는다.
    const onDragEnd = ({draggableId, destination, source}: DropResult) => {
        if (!destination) return
        // setToDos(oldToDos => {
        //         const toDosCopy = [...oldToDos]
        //         // 1) Delete item on source.index
        //         toDosCopy.splice(source.index, 1)
        //         // 2) Put it back on the destination.index
        //         toDosCopy.splice(destination?.index, 0, draggableId)
        //         return toDosCopy
        //     }
        // )
    }
    return (
        <>
            <DragDropContext onDragEnd={onDragEnd}>
                <Wrapper>
                    <Boards>
                        {Object.keys(toDos).map(boardId => <Board key={boardId} toDos={toDos[boardId]}
                                                                  boardId={boardId}/>)}
                    </Boards>
                </Wrapper>
            </DragDropContext>
        </>
    )
        ;
}

export default App;
