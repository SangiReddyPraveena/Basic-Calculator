import React from 'react'
import {useState} from 'react'
import './Calci.css'

function Calci() {
  const [input1,setInput]=useState("");
  const [result,setResult]=useState(0)
  const handler=e=>
  {
    setInput(e.target.value);
  }
  console.log(result)
  return (
    <div className="calc">
      <h2 className="display-3 head">Calculator application</h2>
      <center width="50px">
        <input type="text" value={input1} name="input" onChange={handler} max-width="100px"/>
        <br/>
      </center>
      <button className="btn btn-success" onClick={()=>setResult(eval(input1))}>Get Result</button>
      <h2 className="display-5 text-white">The result of the input is {result}</h2>
      <div>
      <button className="btn btn-warning m-2" onClick={()=>setInput(input1+'+')}>+</button>
    <button className="btn btn-warning m-2" onClick={()=>setInput(input1+'-')}>-</button>
    <button className="btn btn-warning m-2" onClick={()=>setInput(input1+'*')}>*</button>
    <button className="btn btn-warning m-2" onClick={()=>setInput(input1+'/')}>/</button>
    <button className="btn btn-warning m-2" onClick={()=>setInput(input1+'%')}>%</button>
    <button className="btn btn-warning m-2" onClick={()=>setInput('')}>clear</button>
      </div>
   <div>
    <button className="btn btn-warning m-2" onClick={()=>setInput(input1+'1')}>1</button>
    <button className="btn btn-warning m-2" onClick={()=>setInput(input1+'2')}>2</button>
    <button className="btn btn-warning m-2" onClick={()=>setInput(input1+'3')}>3</button>

    </div>
    <div>
    <button className="btn btn-warning m-2" onClick={()=>setInput(input1+'4')}>4</button>
    <button className="btn btn-warning m-2" onClick={()=>setInput(input1+'5')}>5</button>
    <button className="btn btn-warning m-2" onClick={()=>setInput(input1+'6')}>6</button>
    </div>
    <div>
    <button className="btn btn-warning m-2" onClick={()=>setInput(input1+'7')}>7</button>
    <button className="btn btn-warning m-2" onClick={()=>setInput(input1+'8')}>8</button>
    <button className="btn btn-warning m-2" onClick={()=>setInput(input1+'9')}>9</button>
    </div>
    <button className="btn btn-warning m-2" onClick={()=>setInput(input1+'0')}>0</button>
    </div>
  )
}

export default Calci;
