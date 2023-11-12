import React from 'react'
import '../styles/App.css';
const App = () => {
  const [arr,setArr] = React.useState([]);
  function addDivWithShape(event){
    let shapeValue = event.target.parentNode.children[0].value;
    setArr((oldArr)=>{
      const copyArr = [...oldArr,<div className={shapeValue.toLowerCase()}>{shapeValue}</div>]
      return copyArr;
    })
  }
  return (
    <div id="main">
      <div id="shape-creator">
        <select>
          <option>Square</option>
          <option>Circle</option>
        </select>
        <button onClick={addDivWithShape}>Add Shape</button>
      </div>
      <div id="shapes-holder">
        {arr}
      </div>
    </div>
  )
}


export default App;