import React from 'react';
import {Droppable} from "react-beautiful-dnd";
import styled from "styled-components";

const Wrapper = styled.div`
  position: absolute;
  bottom: 100px;
  height: 100px;
  &:hover span {
    transform: rotate(30deg);
    transform-origin: 100%;
    transition: transform 150ms ease-in-out;
  }
`

const Cap = styled.span`
  display: block;
  width: 75px;
  height: 12px;
  background: #767676;
  margin: 0 auto;
  position: relative;
  border-bottom: 3px solid #373737;
`

const Handle = styled.div`
  position: absolute;
  top: -6px;
  left: 50%;
  transform: translateX(-50%);
  width: 10px;
  height: 6px;
  background-color: #767676;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
`

const Body = styled.div`
  border-top: 75px solid #767676;
  border-left: 4px solid transparent;
  border-right: 4px solid transparent;
  height: 0;
  width: 65px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  position: relative;
`

const Stripe = styled.div`
    width: 5px;
    height: 52px;
    background-color: #474747;
    margin-top: -75px;
    border-radius: 10px;
`

const TrashCan = () => {
    return (
        <Droppable droppableId='trashCan'>
            {(provided, snapShot) =>
                <Wrapper
                    ref={provided.innerRef}
                    {...provided.droppableProps}>
                    <Cap>
                        <Handle/>
                    </Cap>
                    <Body>
                        <Stripe/>
                        <Stripe/>
                        <Stripe/>
                    </Body>
                </Wrapper>
            }
        </Droppable>
)}

export default TrashCan;