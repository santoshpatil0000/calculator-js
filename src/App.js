import "./App.css";
import React, {useState, useRef, useEffect} from 'react'

function App() {
  const [result, setResult] = useState('')
  const inputRef = useRef(null)
  useEffect(() => {
    inputRef.current.focus()
    
  })
  const clickHandler = (e) => {
    setResult(result.concat(e.target.name) /* result + e.target.name */)
  }
  const clearHandler = () => {
    setResult('')
  }
  const backspaceHandler = () => {
    setResult(result.slice(0, result.length - 1) /* result.slice(0, result.length - 1) */)
  }

  const calculate = () => {
    try {
    setResult(eval(result).toString())
    }
    catch {
      setResult('Error: Please enter correct value')
    }
  }

  // const changeHandler = (e) => {
  //   setResult(e.target.value)
  // }
  return (
    <div className="container">
      <div className="calculator">
        <div className="result">
          <div className="history">
            {/* <p className="history-value">9*9</p> */}
          </div>
          <input className="output" type='text' value={result} ref={inputRef} /*onClick={changeHandler}*/>
            {/* <p className="output-value" >80</p> */}
          </input>
        </div>
        <div className="keyboard">
          <button className="operator" id="clear" onClick={clearHandler}>
            C
          </button>
          <button className="operator" id="backspace" onClick={backspaceHandler}>
            CE
          </button>
          <button className="operator" name="%" onClick={clickHandler}>
            %
          </button>
          <button className="operator" name="/" onClick={clickHandler}>
            {" "}
            &#247;
          </button>
          <button className="number" name="7" onClick={clickHandler}>
            7
          </button>
          <button className="number" name="8" onClick={clickHandler}>
            8
          </button>
          <button className="number" name="9" onClick={clickHandler}>
            9
          </button>
          <button className="operator" name="*" onClick={clickHandler}>
            &#xd7;
          </button>
          <button className="number" name="4" onClick={clickHandler}>
            4
          </button>
          <button className="number" name="5" onClick={clickHandler}>
            5
          </button>
          <button className="number" name="6" onClick={clickHandler}>
            6
          </button>
          <button className="operator" name="-" onClick={clickHandler}>
            -
          </button>
          <button className="number" name="1" onClick={clickHandler}>
            1
          </button>
          <button className="number" name="2" onClick={clickHandler}>
            2
          </button>
          <button className="number" name="3" onClick={clickHandler}>
            3
          </button>
          <button className="operator" name="+" onClick={clickHandler}>
            +
          </button>
          <button className="empty" id="empty"></button>
          <button className="number" name="0" onClick={clickHandler}>
            0
          </button>
          <button className="number" name="." onClick={clickHandler}>.</button>
          <button className="operator" id="=" onClick={calculate}>
            =
          </button>
        </div>
      </div>
      Hello
    </div>
  );
}

export default App;
