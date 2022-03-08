import React from 'react';
import {DragDropContext, DropResult} from "react-beautiful-dnd";
import styled from "styled-components";
import {RecoilLoadable, useRecoilState} from "recoil";
import {toDoState} from "./atoms";
import Board from "./Components/Board";
import {saveToDos} from "./localStorage";

const Wrapper = styled.div`
  display: flex;
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
  justify-content: center;
  align-items: center;
  height: 100vh;
  border-radius: 5px;
  font-size: 24px;
`

const Boards = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
  width: 100%;
`

function App() {
    const [toDos, setToDos] = useRecoilState(toDoState)
    // 싱글 보드
    // destination 목적지, source 움직인 아이템
    // 1) 기존 배열을 복제한다.
    // 2) 복제한 배열에서 source를 삭제하고 destination에 넣는다.

    // 멀티 보드
    // 1) 움직임이 있는 아이템의 보드를 복제한다.
    // 2) 복제한 배열에서 source를 삭제하고 destination에 넣는다.
    // 3) 모든 보드를 복제하고 움직임이 있던 보드를 복제하여 변형한 보드로 변경한다.
    const onDragEnd = (info: DropResult) => {
        const {destination, source} = info
        if (!destination) return
        if (destination?.droppableId === source.droppableId) {
            setToDos((allBoards) => {
                const boardCopy = [...allBoards[source.droppableId]]
                const taskCopy = boardCopy[source.index]
                boardCopy.splice(source.index, 1)
                boardCopy.splice(destination?.index, 0, taskCopy)
                const newToDos = {...allBoards, [source.droppableId]: boardCopy}
                saveToDos(newToDos)
                return newToDos
            })
        }
        if (destination.droppableId !== source.droppableId) {
            setToDos(allBoards => {
                const sourceBoard = [...allBoards[source.droppableId]]
                const taskObj = sourceBoard[source.index]
                const destinationBoard = [...allBoards[destination.droppableId]]
                sourceBoard.splice(source.index, 1)
                destinationBoard.splice(destination?.index, 0, taskObj)
                const newToDos = {
                    ...allBoards,
                    [source.droppableId]: sourceBoard,
                    [destination.droppableId]: destinationBoard
                }
                saveToDos(newToDos)
                return newToDos
            })
        }
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
