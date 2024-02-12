import React, { useState } from 'react'
import styled from 'styled-components'

const Container = styled.div`
    background-color: yellow;
    padding: 10px 20px;
`
const Datetext = styled.p`
    font-size: 30px;
    font-weight: 600;
    margin: 0;
`
const Dates = ({ count, currentDate }) => {
  const futureDate = new Date(currentDate)
  futureDate.setDate(futureDate.getDate()+count)
  // console.log(futureDate)
  return (
    <Container>
      <Datetext>
        {`${count === 0 ? `Today` : `${count} days from today`} is ${futureDate.toDateString()}`}
      </Datetext>
    </Container>
  )
}

export default Dates

