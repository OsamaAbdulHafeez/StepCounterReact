import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    display: flex;
    align-items: center;
    width: 400px;
    justify-content: space-between;
`
const Number = styled.p`
    font-size: 24px;
    color: white;
    text-transform: uppercase;
`
const Button = styled.button`
    height: 50px;
    width: 50px;
    background-color: yellow;
    font-size: 36px;
    border: none;
    border-radius: 5px;
`
const Counter = ({ step, count, setCount }) => {
    const subtract = () => {
        if(count-step<0){
            setCount(0)
        }
        else if (count > 0) {
            setCount(count-step)
        }
    }
    const Add = () => {
        setCount(count+step)
    }
    return (
        <Container>
            <Button onClick={subtract}>-</Button>
            <Number>Count: {count}</Number>
            <Button onClick={Add}>+</Button>
        </Container>
    )
}

export default Counter
