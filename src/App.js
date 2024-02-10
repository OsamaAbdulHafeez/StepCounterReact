import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
import styled from 'styled-components';
import Stages from './Components/Stages';
import Counter from './Components/Counter';


const Container = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
`
const Wrapper = styled.div`
  background-color: brown;
  width: 60%;
  height: 500px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
function App() {
  const [step,setstep] = useState(1)
  const [count,setCount] = useState(0)
  return (
    <Container>
      <Wrapper>
        <Stages step={step} setstep={setstep}/>
        <Counter step={step} count={count} setCount={setCount}/>
      </Wrapper>
    </Container>
  );
}

export default App;
