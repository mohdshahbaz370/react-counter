import { useState, useEffect } from 'react';


function App() {
  const [num, setNum] = useState(0)
  const ADD = function () {
    setNum(num + 1)
  }
  const SUBTRACT = function () {
    setNum(num - 1)
  }
  return (
    <>
      <h1>{num}</h1>
      <button type="button" onClick={ADD}>ADD</button><br />
      <button type="button" onClick={SUBTRACT}>SUBTRACT</button>
    </>
  )
}

export default App;
